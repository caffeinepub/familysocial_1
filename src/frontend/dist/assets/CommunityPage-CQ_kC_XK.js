import { r as reactExports, j as jsxRuntimeExports, D as Dialog, b as DialogTrigger, a as Button, c as DialogContent, d as DialogHeader, e as DialogTitle, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, T as Textarea, k as Briefcase, u as ue, l as Search, U as Users, m as Building2, B as Badge, C as CircleCheck, M as MapPin } from "./index-DVrwA8ch.js";
import { E as EventsTab } from "./EventsTab-Ctgcdlip.js";
import { P as Plus } from "./plus-BY35EerL.js";
import "./tabs-BNwE7U1q.js";
import "./external-link-CaxibzPS.js";
import "./share-2-uix-I0rV.js";
import "./lock-Nk96dSfG.js";
import "./globe-CMOOhR4e.js";
import "./calendar-CCHsOCAR.js";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full h-8 text-xs font-label",
        variant: community.joined ? "outline" : "default",
        onClick: () => !community.joined && onJoin(community.id),
        children: community.joined ? "View Community" : "Join Community"
      }
    )
  ] }) });
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
  const filtered = communities.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.address.toLowerCase().includes(search.toLowerCase()) || c.type.toLowerCase().includes(search.toLowerCase())
  );
  const handleJoin = (id) => {
    setCommunities(
      (prev) => prev.map(
        (c) => c.id === id ? { ...c, joined: true, memberCount: c.memberCount + 1 } : c
      )
    );
    const community = communities.find((c) => c.id === id);
    ue.success(`Joined ${community == null ? void 0 : community.name}!`);
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
      address: form.address || "Pakistan",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "gap-2 font-label", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
          "Create Community"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
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
                  required: true
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
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
                  placeholder: "e.g. Phase 1, Islamabad",
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
                  className: "resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Create Community" })
          ] })
        ] })
      ] })
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
          className: "pl-9"
        }
      )
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 40, className: "mx-auto text-muted-foreground/30 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-label", children: "No communities found" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CommunityCard, { community: c, onJoin: handleJoin }) }, c.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Community", moduleColor: "oklch(0.60 0.20 190)" }) })
  ] });
}
export {
  CommunityPage as default
};
