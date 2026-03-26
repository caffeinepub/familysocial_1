import { r as reactExports, j as jsxRuntimeExports, D as Dialog, E as DialogTrigger, a as Button, N as Plus, F as DialogContent, G as DialogHeader, J as DialogTitle, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, _ as Search, X, v as Clock, u as ue, m as House, H as Heart, Z as Zap, a4 as ShoppingBag, q as Users, aj as FileText, V as Plane, a5 as GraduationCap, l as Building2, y as Briefcase, R as TreePine, O as MapPin } from "./index-Rvx7zVvJ.js";
import { T as Textarea } from "./textarea-D9o8NxRc.js";
import { C as Calendar } from "./calendar-CrUBqvSi.js";
import { G as Globe } from "./globe-BMVcG0Ux.js";
import { L as Lock } from "./lock-Bg0L11DZ.js";
import { S as Share2 } from "./share-2-etpsGdIb.js";
import { E as Eye } from "./eye-DtO3K8yA.js";
const MODULE_COLORS = {
  Family: "oklch(0.55 0.22 280)",
  Jobs: "oklch(0.52 0.14 155)",
  Healthcare: "oklch(0.58 0.22 25)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Education: "oklch(0.55 0.18 240)",
  Travel: "oklch(0.48 0.12 200)",
  Blog: "oklch(0.60 0.22 310)",
  Community: "oklch(0.60 0.20 190)",
  Products: "oklch(0.65 0.25 335)",
  Dating: "oklch(0.62 0.24 350)",
  Matrimony: "oklch(0.65 0.25 335)",
  Social: "oklch(0.55 0.20 250)"
};
const MODULE_ICONS = {
  Family: TreePine,
  Jobs: Briefcase,
  Healthcare: Heart,
  "Real Estate": Building2,
  Education: GraduationCap,
  Travel: Plane,
  Blog: FileText,
  Community: Users,
  Products: ShoppingBag,
  Dating: Zap,
  Matrimony: Heart,
  Social: House
};
const PRIVACY_ICONS = {
  Private: Lock,
  Family: TreePine,
  Friends: Users,
  Community: Building2,
  Public: Globe
};
const PRIVACY_COLORS = {
  Private: "oklch(0.55 0.02 0)",
  Family: "oklch(0.55 0.22 280)",
  Friends: "oklch(0.52 0.14 155)",
  Community: "oklch(0.60 0.20 190)",
  Public: "oklch(0.62 0.19 55)"
};
const now = /* @__PURE__ */ new Date("2026-03-02T12:00:00");
const daysAgo = (d) => new Date(now.getTime() - d * 24 * 60 * 60 * 1e3);
const SAMPLE_ENTRIES = [
  {
    id: 1,
    title: "Applied for Senior Frontend Engineer role at TechPK",
    description: "Submitted my application for the senior engineer position. Attached portfolio and updated resume.",
    module: "Jobs",
    location: "Lahore",
    timestamp: "Today, 10:30 AM",
    date: daysAgo(0),
    privacy: "Private",
    tags: ["Job Application", "Frontend"]
  },
  {
    id: 2,
    title: "Added Father — Khalid Hassan — to Family Tree",
    description: "Completed Father's profile with blood type, medical conditions, and occupation details.",
    module: "Family",
    location: "Lahore",
    timestamp: "Yesterday, 3:15 PM",
    date: daysAgo(1),
    privacy: "Family",
    tags: ["Family Tree", "Profile"]
  },
  {
    id: 3,
    title: "Booked appointment with Dr. Ayesha Mirza",
    description: "Cardiology consultation scheduled for next Tuesday at 3:00 PM.",
    module: "Healthcare",
    location: "Shaukat Khanum Hospital, Lahore",
    timestamp: "Yesterday, 11:00 AM",
    date: daysAgo(1),
    privacy: "Private",
    tags: ["Appointment", "Cardiology"]
  },
  {
    id: 4,
    title: "Enrolled in O-Level Chemistry at Green Valley Academy",
    description: "Registration complete. Classes start March 10th. Subject teacher: Prof. Nasir Ahmed.",
    module: "Education",
    location: "Green Valley Academy, DHA Phase 5",
    timestamp: "2 days ago",
    date: daysAgo(2),
    privacy: "Family",
    tags: ["Enrollment", "O-Levels", "Chemistry"]
  },
  {
    id: 5,
    title: "Purchased Handwoven Kashmiri Shawl",
    description: "Order placed for 2 shawls. Estimated delivery in 5-7 business days.",
    module: "Products",
    location: "Online — Sana Boutique",
    timestamp: "2 days ago",
    date: daysAgo(2),
    privacy: "Private",
    tags: ["Purchase", "Fashion"]
  },
  {
    id: 6,
    title: "Listed 5-Marla House in Johar Town for Sale",
    description: "Property listed at PKR 1.8 Crore. 3 bedrooms, 2 bathrooms, covered parking.",
    module: "Real Estate",
    location: "Johar Town, Lahore",
    timestamp: "3 days ago",
    date: daysAgo(3),
    privacy: "Public",
    tags: ["Property Listing", "Sale"]
  },
  {
    id: 7,
    title: "Joined Green Valley Society Community",
    description: "Successfully enrolled as a resident member. Unit: Block C, Flat 204.",
    module: "Community",
    location: "Green Valley Society, Islamabad",
    timestamp: "4 days ago",
    date: daysAgo(4),
    privacy: "Community",
    tags: ["Community Join"]
  },
  {
    id: 8,
    title: "Published Blog: 'Best Eid Recipes from My Mother'",
    description: "Blog post published with affiliate links to 3 cookware products. 245 reads in first hour.",
    module: "Blog",
    location: "Online",
    timestamp: "5 days ago",
    date: daysAgo(5),
    privacy: "Public",
    tags: ["Blog Post", "Recipes", "Affiliate"]
  },
  {
    id: 9,
    title: "Booked Northern Pakistan Tour — July 2026",
    description: "8-day Hunza & Skardu tour with Usman Travels. PKR 45,000 per person. Booking confirmed.",
    module: "Travel",
    location: "Hunza & Skardu, KPK",
    timestamp: "6 days ago",
    date: daysAgo(6),
    privacy: "Friends",
    tags: ["Tour Booking", "Northern Pakistan"]
  },
  {
    id: 10,
    title: "Enabled Matrimony Profile",
    description: "Matrimony profile activated. Preferences set: Sunni, professional, Lahore-based.",
    module: "Matrimony",
    location: "Lahore",
    timestamp: "1 week ago",
    date: daysAgo(7),
    privacy: "Family",
    tags: ["Matrimony", "Profile"]
  },
  {
    id: 11,
    title: "Added Family Circle — The Khan Family",
    description: "Created family circle with 8 initial members. Admin privileges granted to 2 co-admins.",
    module: "Family",
    location: "Lahore",
    timestamp: "1 week ago",
    date: daysAgo(7),
    privacy: "Family",
    tags: ["Family Circle"]
  },
  {
    id: 12,
    title: "Hired as Security Guard — Green Valley Society",
    description: "Job offer accepted for morning shift security position. Start date: March 5th.",
    module: "Jobs",
    location: "Green Valley Society, Islamabad",
    timestamp: "8 days ago",
    date: daysAgo(8),
    privacy: "Family",
    tags: ["Job Hired", "Security"]
  },
  {
    id: 13,
    title: "Checked in at Pearl Continental Hotel",
    description: "Business trip to Karachi. Checked in for 3 nights. Room 512.",
    module: "Travel",
    location: "Pearl Continental, Karachi",
    timestamp: "10 days ago",
    date: daysAgo(10),
    privacy: "Friends",
    tags: ["Hotel", "Business Trip"]
  },
  {
    id: 14,
    title: "Purchased Jubilee Health Insurance Policy",
    description: "Annual health insurance policy activated. Coverage: PKR 20 Lakh family coverage.",
    module: "Healthcare",
    location: "Online",
    timestamp: "12 days ago",
    date: daysAgo(12),
    privacy: "Family",
    tags: ["Insurance", "Healthcare"]
  },
  {
    id: 15,
    title: "Added Business — Khan Electronics to Family Tree",
    description: "Retail electronics business linked to profile. Registered in Lahore.",
    module: "Family",
    location: "Liberty Market, Lahore",
    timestamp: "2 weeks ago",
    date: daysAgo(14),
    privacy: "Public",
    tags: ["Business", "Family Tree"]
  },
  {
    id: 16,
    title: "Attended Career Fair 2026 at Expo Centre",
    description: "Connected with 8 companies. Dropped resume at TechPK, SystemsPK, and NetSol booths.",
    module: "Jobs",
    location: "Expo Centre, Lahore",
    timestamp: "2 weeks ago",
    date: daysAgo(14),
    privacy: "Public",
    tags: ["Career Fair", "Networking"]
  },
  {
    id: 17,
    title: "Transferred to DHA Branch — Green Valley Academy",
    description: "School transfer processed. Records forwarded to new school. New term starts April 1.",
    module: "Education",
    location: "DHA Phase 8, Lahore",
    timestamp: "3 weeks ago",
    date: daysAgo(21),
    privacy: "Family",
    tags: ["School Transfer"]
  },
  {
    id: 18,
    title: "Listed Parking Spot for Rent",
    description: "Parking slot #P-14 listed for community rent at PKR 3,000/month.",
    module: "Community",
    location: "Green Valley Society, Block C",
    timestamp: "3 weeks ago",
    date: daysAgo(21),
    privacy: "Community",
    tags: ["Parking Rental"]
  },
  {
    id: 19,
    title: "Matched with Ayesha Siddiqui — Matrimony",
    description: "85% compatibility match. Sent introduction request. Awaiting response.",
    module: "Matrimony",
    location: "Lahore",
    timestamp: "1 month ago",
    date: daysAgo(30),
    privacy: "Private",
    tags: ["Match", "Matrimony"]
  },
  {
    id: 20,
    title: "Created Tour Package — Murree Weekend Getaway",
    description: "Travel package created for 2-day Murree trip. PKR 8,500 per person. 15 slots available.",
    module: "Travel",
    location: "Murree, Punjab",
    timestamp: "1 month ago",
    date: daysAgo(30),
    privacy: "Public",
    tags: ["Tour Package", "Travel"]
  },
  {
    id: 21,
    title: "Registered as Freelancer Teacher — Mathematics",
    description: "Freelancer profile created. Hourly rate: PKR 2,000. Available for O & A Level students.",
    module: "Education",
    location: "Lahore (Online & Home Visits)",
    timestamp: "6 weeks ago",
    date: daysAgo(42),
    privacy: "Public",
    tags: ["Freelance", "Teaching"]
  },
  {
    id: 22,
    title: "Posted Social Update in Community Feed",
    description: "Shared post about the upcoming Eid Bazaar event with 3 photos.",
    module: "Social",
    location: "Lahore",
    timestamp: "2 months ago",
    date: daysAgo(60),
    privacy: "Community",
    tags: ["Post", "Eid"]
  }
];
function getDateGroup(date) {
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1e3));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return "This Week";
  if (diffDays < 14) return "Last Week";
  if (diffDays < 30) return "This Month";
  if (diffDays < 60) return "Last Month";
  return "Earlier";
}
const DATE_GROUP_ORDER = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Earlier"
];
function TimelinePage() {
  const [entries, setEntries] = reactExports.useState(SAMPLE_ENTRIES);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [moduleFilter, setModuleFilter] = reactExports.useState("All");
  const [dateFilter, setDateFilter] = reactExports.useState("All Time");
  const [checkInOpen, setCheckInOpen] = reactExports.useState(false);
  const [newCheckIn, setNewCheckIn] = reactExports.useState({
    title: "",
    description: "",
    location: "",
    module: "Social",
    privacy: "Friends"
  });
  const modules = [
    "Family",
    "Jobs",
    "Healthcare",
    "Real Estate",
    "Education",
    "Travel",
    "Blog",
    "Community",
    "Products",
    "Dating",
    "Matrimony",
    "Social"
  ];
  const handlePrivacyChange = (id, privacy) => {
    setEntries(
      (prev) => prev.map((e) => e.id === id ? { ...e, privacy } : e)
    );
    ue.success("Privacy updated");
  };
  const handleCrossPost = (entry) => {
    ue.success(
      `Cross-posted to ${entry.privacy === "Public" ? "Social Feed" : `${entry.privacy} Feed`}`
    );
  };
  const handleCheckIn = () => {
    if (!newCheckIn.title) {
      ue.error("Title is required");
      return;
    }
    const entry = {
      id: Date.now(),
      title: newCheckIn.title,
      description: newCheckIn.description,
      module: newCheckIn.module,
      location: newCheckIn.location,
      timestamp: "Just now",
      date: /* @__PURE__ */ new Date(),
      privacy: newCheckIn.privacy,
      tags: ["Check In"]
    };
    setEntries((prev) => [entry, ...prev]);
    setCheckInOpen(false);
    setNewCheckIn({
      title: "",
      description: "",
      location: "",
      module: "Social",
      privacy: "Friends"
    });
    ue.success("Activity added to timeline!");
  };
  const filteredEntries = reactExports.useMemo(() => {
    return entries.filter((e) => {
      if (moduleFilter !== "All" && e.module !== moduleFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!e.title.toLowerCase().includes(q) && !e.description.toLowerCase().includes(q) && !(e.location || "").toLowerCase().includes(q) && !(e.tags || []).some((t) => t.toLowerCase().includes(q)))
          return false;
      }
      if (dateFilter !== "All Time") {
        const group = getDateGroup(e.date);
        if (group !== dateFilter) return false;
      }
      return true;
    });
  }, [entries, searchQuery, moduleFilter, dateFilter]);
  const grouped = reactExports.useMemo(() => {
    const map = {};
    for (const entry of filteredEntries) {
      const group = getDateGroup(entry.date);
      if (!map[group]) map[group] = [];
      map[group].push(entry);
    }
    return map;
  }, [filteredEntries]);
  const EntryCard = ({ entry }) => {
    const color = MODULE_COLORS[entry.module];
    const ModIcon = MODULE_ICONS[entry.module];
    const PrivacyIcon = PRIVACY_ICONS[entry.privacy];
    const privacyColor = PRIVACY_COLORS[entry.privacy];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex gap-4 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform",
            style: { background: `${color}18`, border: `2px solid ${color}40` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModIcon, { size: 14, style: { color } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-px flex-1 mt-1",
            style: { background: `${color}20` }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 pb-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-3.5 hover:border-border/80 hover:shadow-sm transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
                  style: { background: `${color}15`, color },
                  children: entry.module
                }
              ),
              (entry.tags || []).slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label px-1.5 py-0.5 rounded bg-secondary/60 text-muted-foreground",
                  children: tag
                },
                tag
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground leading-snug", children: entry.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: entry.privacy,
              onValueChange: (v) => handlePrivacyChange(entry.id, v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "h-6 w-auto gap-1 border-0 bg-transparent px-1.5 text-[10px] font-label hover:bg-secondary/60 transition-colors shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyIcon, { size: 10, style: { color: privacyColor } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: privacyColor }, children: entry.privacy })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Private",
                  "Family",
                  "Friends",
                  "Community",
                  "Public"
                ].map((p) => {
                  const PIcon = PRIVACY_ICONS[p];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PIcon, { size: 11 }),
                    p
                  ] }) }, p);
                }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2 leading-relaxed", children: entry.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] text-muted-foreground/70 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
            entry.timestamp
          ] }),
          entry.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 9 }),
            entry.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 text-[10px] font-label text-muted-foreground hover:text-foreground px-2 gap-1",
              onClick: () => handleCrossPost(entry),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 10 }),
                "Cross-post to Feed"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 text-[10px] font-label text-muted-foreground hover:text-foreground px-2 gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 10 }),
                "View"
              ]
            }
          )
        ] })
      ] }) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your complete activity history across all modules" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: checkInOpen, onOpenChange: setCheckInOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "h-9 text-xs font-label gap-1.5",
            style: { background: "oklch(0.55 0.22 280)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
              "Check In"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-label", children: "Add to Timeline" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Activity / Title *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: newCheckIn.title,
                  onChange: (e) => setNewCheckIn((p) => ({ ...p, title: e.target.value })),
                  placeholder: "e.g. Visited Lahore Museum"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: newCheckIn.description,
                  onChange: (e) => setNewCheckIn((p) => ({
                    ...p,
                    description: e.target.value
                  })),
                  placeholder: "What happened? How was the experience?",
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: newCheckIn.location,
                  onChange: (e) => setNewCheckIn((p) => ({ ...p, location: e.target.value })),
                  placeholder: "e.g. Lahore Museum, Mall Road"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Module" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newCheckIn.module,
                    onValueChange: (v) => setNewCheckIn((p) => ({ ...p, module: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m, className: "text-xs", children: m }, m)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Privacy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newCheckIn.privacy,
                    onValueChange: (v) => setNewCheckIn((p) => ({ ...p, privacy: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                        "Private",
                        "Family",
                        "Friends",
                        "Community",
                        "Public"
                      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, className: "text-xs", children: p }, p)) })
                    ]
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
                size: "sm",
                onClick: () => setCheckInOpen(false),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                style: { background: "oklch(0.55 0.22 280)", color: "white" },
                onClick: handleCheckIn,
                children: "Add to Timeline"
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-3 mb-5 space-y-3 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 13,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search timeline by keyword, location, activity...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pl-8 h-9 text-xs bg-secondary/60 border-0 focus-visible:ring-1"
          }
        ),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            onClick: () => setSearchQuery(""),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: moduleFilter, onValueChange: setModuleFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-auto text-[11px] font-label border-border bg-secondary/40 gap-1.5 min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Modules" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "All", className: "text-xs", children: "All Modules" }),
            modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m, className: "text-xs", children: m }, m))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: dateFilter, onValueChange: setDateFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-auto text-[11px] font-label border-border bg-secondary/40 gap-1.5 min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Time" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["All Time", ...DATE_GROUP_ORDER].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, className: "text-xs", children: d }, d)) })
        ] }),
        (searchQuery || moduleFilter !== "All" || dateFilter !== "All Time") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-[11px] font-label text-muted-foreground hover:text-foreground px-2",
            onClick: () => {
              setSearchQuery("");
              setModuleFilter("All");
              setDateFilter("All Time");
            },
            children: "Clear filters"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-5", children: [
      {
        label: "Total Activities",
        value: entries.length,
        color: "oklch(0.55 0.22 280)"
      },
      {
        label: "This Month",
        value: entries.filter(
          (e) => getDateGroup(e.date) === "This Month" || getDateGroup(e.date) === "Today" || getDateGroup(e.date) === "Yesterday" || getDateGroup(e.date) === "This Week" || getDateGroup(e.date) === "Last Week"
        ).length,
        color: "oklch(0.52 0.14 155)"
      },
      {
        label: "Public Posts",
        value: entries.filter((e) => e.privacy === "Public").length,
        color: "oklch(0.62 0.19 55)"
      }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-lg p-3 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xl font-display font-bold",
              style: { color: stat.color },
              children: stat.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-label text-muted-foreground", children: stat.label })
        ]
      },
      stat.label
    )) }),
    filteredEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 32, className: "mx-auto mb-3 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "No timeline entries found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Try adjusting your filters or add a new check-in" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: DATE_GROUP_ORDER.filter((g) => {
      var _a;
      return ((_a = grouped[g]) == null ? void 0 : _a.length) > 0;
    }).map(
      (group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12, className: "text-muted-foreground/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-label font-bold text-muted-foreground uppercase tracking-wider", children: group })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-label text-muted-foreground/60", children: [
            grouped[group].length,
            " activities"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-2", children: grouped[group].map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(EntryCard, { entry }, entry.id)) })
      ] }, group)
    ) })
  ] });
}
export {
  TimelinePage as default
};
