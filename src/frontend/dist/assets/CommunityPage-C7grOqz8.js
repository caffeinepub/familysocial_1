import { h as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as Button, B as Badge, ag as Shield, n as Users, i as Building2, D as Dialog, x as DialogTrigger, P as Plus, y as DialogContent, z as DialogHeader, E as DialogTitle, L as Label, I as Input, S as Select, c as SelectTrigger, d as SelectValue, e as SelectContent, f as SelectItem, v as Briefcase, u as ue, O as Search, G as MapPin, s as CircleCheck } from "./index-BYT7ZeT6.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-8GFJnLkh.js";
import { T as Textarea } from "./textarea-DMZdGyJf.js";
import { E as EventsTab } from "./EventsTab-CAMlVYj-.js";
import { U as UserCog } from "./user-cog-BOL1wmJ5.js";
import { C as ClipboardList } from "./clipboard-list-DVb44g4w.js";
import "./share-2-CWF083GM.js";
import "./lock-DQXuPnl0.js";
import "./globe-_kfDNGkX.js";
import "./calendar-8VWkpvSi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M11 20H2", key: "nlcfvz" }],
  [
    "path",
    {
      d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
      key: "au4z13"
    }
  ],
  ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }],
  ["path", { d: "M14 12h.01", key: "1jfl7z" }],
  ["path", { d: "M22 20h-3", key: "vhrsz" }]
];
const DoorOpen = createLucideIcon("door-open", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
  ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
];
const Gavel = createLucideIcon("gavel", __iconNode);
const SAMPLE_COMMUNITIES = [
  {
    id: 1,
    name: "DHA Phase 5",
    type: "Society",
    description: "Defense Housing Authority Phase 5 — a premium residential community with parks, schools, and markets.",
    address: "DHA Phase 5, Lahore, Punjab",
    memberCount: 4280,
    joined: true,
    color: "oklch(0.52 0.14 155)"
  },
  {
    id: 2,
    name: "Gulberg Greens",
    type: "Locality",
    description: "Gulberg Greens is a well-established residential locality known for its tree-lined streets and vibrant commercial areas.",
    address: "Gulberg III, Lahore, Punjab",
    memberCount: 2150,
    joined: false,
    color: "oklch(0.65 0.14 50)"
  },
  {
    id: 3,
    name: "Model Town",
    type: "Neighborhood",
    description: "One of Lahore's oldest planned residential areas, offering a rich community life with parks and local markets.",
    address: "Model Town, Lahore, Punjab",
    memberCount: 5670,
    joined: false,
    color: "oklch(0.48 0.12 260)"
  },
  {
    id: 4,
    name: "Bahria Town Phase 7",
    type: "Society",
    description: "A gated community with 24/7 security, parks, community center, and shopping malls.",
    address: "Bahria Town, Rawalpindi",
    memberCount: 8900,
    joined: false,
    color: "oklch(0.72 0.17 85)"
  },
  {
    id: 5,
    name: "Johar Town",
    type: "Locality",
    description: "A bustling residential area with excellent schools, hospitals, and shopping facilities.",
    address: "Johar Town, Lahore, Punjab",
    memberCount: 3200,
    joined: false,
    color: "oklch(0.58 0.16 350)"
  },
  {
    id: 6,
    name: "F-7 Islamabad",
    type: "Neighborhood",
    description: "One of Islamabad's most sought-after sectors with embassies, restaurants, and upscale residences.",
    address: "F-7, Islamabad",
    memberCount: 1800,
    joined: false,
    color: "oklch(0.52 0.14 155)"
  }
];
const TYPE_COLORS = {
  Society: "oklch(0.52 0.14 155)",
  Locality: "oklch(0.65 0.14 50)",
  Neighborhood: "oklch(0.48 0.12 260)"
};
const ROLE_META = {
  owner: { label: "Owner", icon: Building2, color: "oklch(0.65 0.25 335)" },
  resident: { label: "Resident", icon: Users, color: "oklch(0.55 0.22 280)" },
  visitor: { label: "Visitor", icon: DoorOpen, color: "oklch(0.65 0.14 50)" },
  security: { label: "Security", icon: Shield, color: "oklch(0.52 0.14 155)" },
  committee: {
    label: "Committee Member",
    icon: Gavel,
    color: "oklch(0.60 0.18 190)"
  },
  community_admin: {
    label: "Community Admin",
    icon: UserCog,
    color: "oklch(0.72 0.17 85)"
  }
};
function RolePickerDialog({
  onSelect,
  communityName
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState("resident");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full h-8 text-xs font-label",
        "data-ocid": "community.join.open_modal_button",
        children: "Join Community"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", "data-ocid": "community.role.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
        "Join ",
        communityName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Select your role in this community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: Object.entries(ROLE_META).map(([key, meta]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelected(key),
            className: `flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-center ${selected === key ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"}`,
            "data-ocid": `community.role.${key}.toggle`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(meta.icon, { size: 18, style: { color: meta.color } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-medium", children: meta.label })
            ]
          },
          key
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full",
            onClick: () => {
              onSelect(selected);
              setOpen(false);
            },
            "data-ocid": "community.role.confirm_button",
            children: [
              "Join as ",
              ROLE_META[selected].label
            ]
          }
        )
      ] })
    ] })
  ] });
}
function CommunityCard({ community, onJoin }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl flex items-center justify-center",
            style: { background: `${community.color}18` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 18, style: { color: community.color } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-foreground", children: community.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: "text-[10px] px-1.5 py-0 font-label border-0 mt-0.5",
              style: {
                background: `${TYPE_COLORS[community.type] || community.color}18`,
                color: TYPE_COLORS[community.type] || community.color
              },
              children: community.type
            }
          )
        ] })
      ] }),
      community.joined && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-primary font-label", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 }),
        "Joined"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2", children: community.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-label", children: [
          community.memberCount.toLocaleString(),
          " members"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[140px]", children: community.address })
      ] })
    ] }),
    community.joined ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full h-8 text-xs font-label", variant: "outline", children: "View Community" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      RolePickerDialog,
      {
        communityName: community.name,
        onSelect: (role) => onJoin(community.id, role)
      }
    )
  ] }) });
}
function SecurityView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "gate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "gate", "data-ocid": "community.security.gate.tab", children: "Gate Entry/Exit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "maintenance",
          "data-ocid": "community.security.maintenance.tab",
          children: "Maintenance"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "shifts", "data-ocid": "community.security.shifts.tab", children: "Shifts" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "gate", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Gate Entry / Exit Log" }),
      [
        "Delivery — Amazon (IN)",
        "Visitor — Mr. Sharma for Flat 204",
        "Resident — Anil Kumar"
      ].map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 rounded-lg bg-secondary/30",
          "data-ocid": `community.gate.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: entry }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs",
                  "data-ocid": `community.gate.approve.button.${i + 1}`,
                  children: "Approve"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  className: "h-7 text-xs",
                  "data-ocid": `community.gate.delete_button.${i + 1}`,
                  children: "Deny"
                }
              )
            ] })
          ]
        },
        entry
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "maintenance", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Maintenance Complaints" }),
      [
        "Water leakage in Block C stairwell",
        "Street light out at Gate 2",
        "Lift not working in Tower B"
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30 text-sm",
          "data-ocid": `community.maintenance.item.${i + 1}`,
          children: c
        },
        c
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "shifts", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "My Shifts" }),
      [
        "Morning Shift 06:00–14:00",
        "Night Shift 22:00–06:00",
        "Evening Shift 14:00–22:00"
      ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30 text-sm flex items-center gap-2",
          "data-ocid": `community.shift.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { size: 14, className: "text-muted-foreground" }),
            s
          ]
        },
        s
      ))
    ] }) })
  ] });
}
function VisitorView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "jobs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "jobs", "data-ocid": "community.visitor.jobs.tab", children: "Available Jobs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "directory",
          "data-ocid": "community.visitor.directory.tab",
          children: "Apartment Directory"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "jobs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
      "Security Guard — Night Shift",
      "Housekeeping Assistant",
      "Maintenance Technician"
    ].map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-3 rounded-lg bg-secondary/30",
        "data-ocid": `community.job.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: j }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs", children: "Apply" })
        ]
      },
      j
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "directory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Apartment Directory" }),
      [
        { flat: "101", block: "A", name: "Kumar Family" },
        { flat: "102", block: "A", name: "Sharma Residence" },
        { flat: "201", block: "B", name: "Patel Family" },
        { flat: "301", block: "C", name: "Singh Household" }
      ].map((apt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-3 rounded-lg bg-secondary/30",
          "data-ocid": `community.apt.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
              "Block ",
              apt.block,
              ", Flat ",
              apt.flat
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: apt.name })
          ]
        },
        apt.flat
      ))
    ] }) })
  ] });
}
function OwnerView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "property", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "property", "data-ocid": "community.owner.property.tab", children: "My Property" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "complaints",
          "data-ocid": "community.owner.complaints.tab",
          children: "Complaints"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "marketplace",
          "data-ocid": "community.owner.marketplace.tab",
          children: "Marketplace"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "property", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "My Properties & Parkings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "h-7 text-xs gap-1",
            "data-ocid": "community.property.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
              "Add"
            ]
          }
        )
      ] }),
      [
        "Flat 304, Block A — 3BHK (Owner)",
        "Parking Slot P-12 (For Rent: ₹2,500/mo)"
      ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30 text-sm",
          "data-ocid": `community.property.item.${i + 1}`,
          children: p
        },
        p
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "complaints", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-1",
          "data-ocid": "community.complaint.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
            "Raise Complaint"
          ]
        }
      ),
      [
        "Noise from upper floor — Filed 3 days ago",
        "Garbage not collected — Filed 1 week ago"
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30 text-sm",
          "data-ocid": `community.complaint.item.${i + 1}`,
          children: c
        },
        c
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
      "Sofa Set — ₹8,000",
      "Study Table — ₹2,500",
      "Air Conditioner — ₹15,000"
    ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex justify-between items-center p-3 rounded-lg bg-secondary/30",
        "data-ocid": `community.market.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: item }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", children: "Contact" })
        ]
      },
      item
    )) }) })
  ] });
}
function ResidentView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "marketplace", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "marketplace",
          "data-ocid": "community.resident.marketplace.tab",
          children: "Marketplace"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "events", "data-ocid": "community.resident.events.tab", children: "Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "complaints",
          "data-ocid": "community.resident.complaints.tab",
          children: "Complaints"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      "Study Table — ₹2,500",
      "Bicycle — ₹4,000",
      "Washing Machine — ₹7,000",
      "TV — ₹12,000"
    ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex justify-between items-center p-3 rounded-lg bg-secondary/30",
        "data-ocid": `community.market.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: item }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", children: "Buy" })
        ]
      },
      item
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Community", moduleColor: "oklch(0.60 0.20 190)" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "complaints", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-1",
          "data-ocid": "community.complaint.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
            "Raise Complaint"
          ]
        }
      ),
      [
        "Water pressure issue — Pending",
        "Broken streetlight — Resolved"
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30 text-sm",
          "data-ocid": `community.complaint.item.${i + 1}`,
          children: c
        },
        c
      ))
    ] }) })
  ] });
}
function AdminCommunityView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "visitors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "visitors", "data-ocid": "community.admin.visitors.tab", children: "Approve Visitors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "committees",
          "data-ocid": "community.admin.committees.tab",
          children: "Committees"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "work", "data-ocid": "community.admin.work.tab", children: "Assign Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "marketplace",
          "data-ocid": "community.admin.marketplace.tab",
          children: "Marketplace"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "security", "data-ocid": "community.admin.security.tab", children: "Security" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "maintenance",
          "data-ocid": "community.admin.maintenance.tab",
          children: "Maintenance"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "events", "data-ocid": "community.admin.events.tab", children: "Events" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "visitors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Pending Visitor Approvals" }),
      [
        "Mr. Raj Mehta — visiting Flat 302",
        "Delivery — Flipkart for Block B",
        "Ms. Kavita — visiting Flat 104"
      ].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 rounded-lg bg-secondary/30",
          "data-ocid": `community.visitor.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: v }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-xs",
                  "data-ocid": `community.visitor.confirm_button.${i + 1}`,
                  children: "Approve"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  className: "h-7 text-xs",
                  "data-ocid": `community.visitor.delete_button.${i + 1}`,
                  children: "Reject"
                }
              )
            ] })
          ]
        },
        v
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "committees", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Society Committees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "h-7 text-xs gap-1",
            "data-ocid": "community.committee.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
              "New Committee"
            ]
          }
        )
      ] }),
      [
        {
          name: "Maintenance Committee",
          members: 5,
          dues: "₹1,200 pending"
        },
        { name: "Cultural Committee", members: 8, dues: "All paid" },
        { name: "Finance Committee", members: 3, dues: "₹800 pending" }
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30",
          "data-ocid": `community.committee.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                c.members,
                " members"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "Dues: ",
              c.dues
            ] })
          ]
        },
        c.name
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "work", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Work Assignments" }),
      [
        {
          task: "Fix broken gate latch",
          assigned: "Maintenance Team",
          due: "Tomorrow"
        },
        {
          task: "Paint Block C stairwell",
          assigned: "External Vendor",
          due: "Next week"
        },
        {
          task: "Replace parking lights",
          assigned: "Electrician",
          due: "2 days"
        }
      ].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-lg bg-secondary/30",
          "data-ocid": `community.work.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: w.task }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "Due: ",
                w.due
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "Assigned to: ",
              w.assigned
            ] })
          ]
        },
        w.task
      ))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResidentView, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "security", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityView, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "maintenance", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
      "Water leakage — Block C",
      "Lift breakdown — Tower B",
      "Generator fuel low"
    ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex justify-between items-center p-3 rounded-lg bg-secondary/30",
        "data-ocid": `community.maint.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: m }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs",
              "data-ocid": `community.maint.button.${i + 1}`,
              children: "Assign"
            }
          )
        ]
      },
      m
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Community", moduleColor: "oklch(0.60 0.20 190)" }) })
  ] });
}
function CommunityPage() {
  const [search, setSearch] = reactExports.useState("");
  const [communities, setCommunities] = reactExports.useState(SAMPLE_COMMUNITIES);
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    description: "",
    type: "Society",
    address: ""
  });
  const [activeCommunity, setActiveCommunity] = reactExports.useState(
    null
  );
  const [activeRole, setActiveRole] = reactExports.useState(null);
  const filtered = communities.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.address.toLowerCase().includes(search.toLowerCase()) || c.type.toLowerCase().includes(search.toLowerCase())
  );
  const handleJoin = (id, role) => {
    setCommunities(
      (prev) => prev.map(
        (c) => c.id === id ? { ...c, joined: true, memberCount: c.memberCount + 1 } : c
      )
    );
    const community = communities.find((c) => c.id === id);
    if (community) {
      setActiveCommunity(community);
      setActiveRole(role);
      ue.success(
        `Joined ${community.name} as ${role ? ROLE_META[role].label : "Member"}!`
      );
    }
  };
  const handleCreate = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      ue.error("Please enter a community name");
      return;
    }
    const colors = [
      "oklch(0.52 0.14 155)",
      "oklch(0.65 0.14 50)",
      "oklch(0.48 0.12 260)"
    ];
    const newCommunity = {
      id: Date.now(),
      name: form.name,
      type: form.type,
      description: form.description || "A new community",
      address: form.address || "India",
      memberCount: 1,
      joined: true,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setCommunities((p) => [newCommunity, ...p]);
    ue.success(`${form.name} community created!`);
    setOpen(false);
    setForm({ name: "", description: "", type: "Society", address: "" });
  };
  const joinedCount = communities.filter((c) => c.joined).length;
  if (activeCommunity && activeRole) {
    const meta = ROLE_META[activeRole];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              setActiveCommunity(null);
              setActiveRole(null);
            },
            className: "text-xs",
            "data-ocid": "community.back.button",
            children: "← All Communities"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: activeCommunity.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: "text-xs px-2 py-0.5 border-0",
              style: { background: `${meta.color}18`, color: meta.color },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(meta.icon, { size: 11, className: "inline mr-1" }),
                meta.label
              ]
            }
          )
        ] })
      ] }),
      activeRole === "security" && /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityView, {}),
      activeRole === "visitor" && /* @__PURE__ */ jsxRuntimeExports.jsx(VisitorView, {}),
      activeRole === "owner" && /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerView, {}),
      (activeRole === "resident" || activeRole === "committee") && /* @__PURE__ */ jsxRuntimeExports.jsx(ResidentView, {}),
      activeRole === "community_admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminCommunityView, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
          "Member of ",
          joinedCount,
          " ",
          joinedCount === 1 ? "community" : "communities"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "gap-2 font-label",
            "data-ocid": "community.create.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
              "Create Community"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "sm:max-w-md",
            "data-ocid": "community.create.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Create Community" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreate, className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                    "Community Name ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Green Valley Society",
                      value: form.name,
                      onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                      required: true,
                      "data-ocid": "community.create.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: form.type,
                      onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "community.create.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Society", children: "Society" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Locality", children: "Locality" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Neighborhood", children: "Neighborhood" })
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Phase 1, Mumbai",
                      value: form.address,
                      onChange: (e) => setForm((p) => ({ ...p, address: e.target.value }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      placeholder: "Describe your community...",
                      value: form.description,
                      onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                      rows: 3,
                      className: "resize-none",
                      "data-ocid": "community.create.textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "w-full font-label",
                    "data-ocid": "community.create.submit_button",
                    children: "Create Community"
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }),
    communities.filter((c) => c.joined).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 p-4 rounded-xl border bg-primary/5 border-primary/20 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Your Communities — click to enter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: communities.filter((c) => c.joined).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 text-xs gap-1",
          onClick: () => {
            setActiveCommunity(c);
            setActiveRole("resident");
          },
          "data-ocid": "community.joined.link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 11 }),
            c.name
          ]
        },
        c.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3 mb-5 px-4 py-2.5 rounded-xl border animate-fade-up",
        style: {
          background: "oklch(0.52 0.14 155 / 0.06)",
          borderColor: "oklch(0.52 0.14 155 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14, style: { color: "oklch(0.52 0.14 155)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground font-medium", children: "Security & Maintenance Jobs Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: "— apply via the Jobs module" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs font-label shrink-0",
              onClick: () => ue.info("Navigating to Jobs..."),
              "data-ocid": "community.jobs.button",
              children: "View Jobs"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 animate-fade-up animate-fade-up-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 15,
          className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search communities by name, type, or location...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "pl-9",
          "data-ocid": "community.search_input"
        }
      )
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "community.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 40, className: "mx-auto text-muted-foreground/30 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-label", children: "No communities found" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CommunityCard, { community: c, onJoin: handleJoin }) }, c.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Community", moduleColor: "oklch(0.60 0.20 190)" }) })
  ] });
}
export {
  CommunityPage as default
};
