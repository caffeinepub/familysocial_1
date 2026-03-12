import { o as createLucideIcon, r as reactExports, j as jsxRuntimeExports, A as Avatar, m as AvatarFallback, T as Textarea, B as Button, aj as DropdownMenu, ak as DropdownMenuTrigger, i as Briefcase, $ as House, a0 as FileText, P as Plane, H as Heart, l as Building2, z as ShoppingBag, U as Users, p as TreePine, t as ChevronDown, al as DropdownMenuContent, am as DropdownMenuItem, M as MessageCircle } from "./index-Daa_jkDV.js";
import { B as Badge } from "./badge-CgPShR5m.js";
import { E as EventsTab } from "./EventsTab-PQpXp_oa.js";
import { I as Image } from "./image-DAP4oH07.js";
import { E as Ellipsis } from "./ellipsis-Do2tCBIH.js";
import { S as Share2 } from "./share-2-C__mi0H_.js";
import { B as Bookmark } from "./bookmark-BjjkSvdL.js";
import "./tabs-C44-sP5D.js";
import "./plus-B0rBT2fy.js";
import "./external-link-BTlYDj87.js";
import "./lock-DkDyL_fq.js";
import "./calendar-DYxx0An1.js";
import "./map-pin-BlSqDiOZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
];
const Smile = createLucideIcon("smile", __iconNode);
const MODULE_COLORS = {
  Family: "oklch(0.55 0.22 280)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Products: "oklch(0.65 0.25 335)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Healthcare: "oklch(0.58 0.22 25)",
  Travel: "oklch(0.55 0.18 240)",
  Blog: "oklch(0.60 0.22 310)",
  Milestone: "oklch(0.65 0.20 85)",
  Business: "oklch(0.72 0.19 85)"
};
const MODULE_ICONS = {
  Family: TreePine,
  Community: Users,
  Jobs: Briefcase,
  Products: ShoppingBag,
  "Real Estate": Building2,
  Healthcare: Heart,
  Travel: Plane,
  Blog: FileText,
  Milestone: House,
  Business: Briefcase
};
const POSTABLE_MODULES = [
  "Family",
  "Community",
  "Jobs",
  "Products",
  "Real Estate",
  "Healthcare",
  "Travel",
  "Blog"
];
const PRIVACY_OPTIONS = [
  { value: "public", label: "Public", icon: "🌍" },
  { value: "friends", label: "Friends", icon: "👥" },
  { value: "community", label: "Community", icon: "🏘️" },
  { value: "family", label: "Family", icon: "👨‍👩‍👧" },
  { value: "private", label: "Private", icon: "🔒" }
];
const PRIVACY_COLORS = {
  public: "oklch(0.62 0.20 150)",
  friends: "oklch(0.55 0.18 240)",
  community: "oklch(0.60 0.20 190)",
  family: "oklch(0.55 0.22 280)",
  private: "oklch(0.50 0.02 280)"
};
const SAMPLE_POSTS = [
  {
    id: 1,
    author: "Fatima Hassan",
    initials: "FH",
    relationship: "Mother",
    content: "Made grandmother's famous biryani today for the whole family. The recipe has been passed down for four generations. Nothing brings us together like food! 🍛❤️",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    liked: false,
    tag: "Family",
    module: "Family",
    privacy: "family"
  },
  {
    id: 2,
    author: "Omar Hassan",
    initials: "OH",
    relationship: "Brother",
    content: "Just completed my engineering degree! Thank you to everyone in the family who believed in me. Dad, Mom — this is for you. 🎓",
    timestamp: "5 hours ago",
    likes: 61,
    comments: 15,
    liked: true,
    tag: "Milestone",
    module: "Family",
    privacy: "friends"
  },
  {
    id: 3,
    author: "Zara Ali",
    initials: "ZA",
    relationship: "Neighbor",
    content: "The DHA Phase 5 community garden looks beautiful this season! The roses along the main path are in full bloom. Everyone should take a morning walk 🌹",
    timestamp: "Yesterday",
    likes: 18,
    comments: 4,
    liked: false,
    tag: "Community",
    module: "Community",
    privacy: "community"
  },
  {
    id: 4,
    author: "Khalid Hassan",
    initials: "KH",
    relationship: "Father",
    content: "Pleased to announce that Hassan Textiles has expanded to a third location in Lahore. 40 years of hard work, dedication, and family support. We are truly blessed.",
    timestamp: "Yesterday",
    likes: 95,
    comments: 22,
    liked: false,
    tag: "Business",
    module: "Products",
    privacy: "public"
  },
  {
    id: 5,
    author: "Aisha Mirza",
    initials: "AM",
    relationship: "Cousin",
    content: "Baby Yusuf is 6 months old today! He's already trying to walk (with a lot of help 😂). Time truly flies. Every day is a new blessing. 👶",
    timestamp: "2 days ago",
    likes: 87,
    comments: 31,
    liked: true,
    tag: "Family",
    module: "Family",
    privacy: "family"
  },
  {
    id: 6,
    author: "Society Manager",
    initials: "SM",
    relationship: "Community",
    content: "📢 Reminder: Water supply will be suspended tomorrow 8AM–12PM for maintenance work in Sector C. Please store water accordingly. Apologies for the inconvenience.",
    timestamp: "3 days ago",
    likes: 12,
    comments: 5,
    liked: false,
    tag: "Community",
    module: "Community",
    privacy: "community"
  },
  // Jobs
  {
    id: 7,
    author: "TechCorp Pakistan",
    initials: "TC",
    relationship: "Employer",
    content: "🚀 We're hiring! Senior Software Engineer (React + Node.js) — PKR 3.5–5 Lakh/month. Remote friendly. 3+ years experience required. DM to apply or share with someone who fits!",
    timestamp: "4 hours ago",
    likes: 43,
    comments: 12,
    liked: false,
    tag: "Jobs",
    module: "Jobs",
    privacy: "public"
  },
  {
    id: 8,
    author: "Sana Iqbal",
    initials: "SI",
    relationship: "HR Manager",
    content: "Looking for a part-time graphic designer for our Karachi office. Flexible hours, great pay. Portfolio required. Tag someone talented! 🎨 #Jobs #Design #Karachi",
    timestamp: "1 day ago",
    likes: 29,
    comments: 18,
    liked: false,
    tag: "Jobs",
    module: "Jobs",
    privacy: "public"
  },
  // Products
  {
    id: 9,
    author: "Nadia Crafts",
    initials: "NC",
    relationship: "Artisan",
    content: "Just listed: Handwoven Kashmiri shawls — genuine wool, traditional patterns. Starting at PKR 8,500. Perfect for gifting this Eid season. Check my store for all variants! 🧣",
    timestamp: "6 hours ago",
    likes: 56,
    comments: 9,
    liked: false,
    tag: "Products",
    module: "Products",
    privacy: "public"
  },
  // Real Estate
  {
    id: 10,
    author: "Ali Properties",
    initials: "AP",
    relationship: "Agent",
    content: "🏡 New Listing: 3-Bedroom apartment, DHA Phase 6, 10th floor with view. 1,800 sqft. PKR 2.8 Cr. Covered parking + backup generator. Serious inquiries only. 📞",
    timestamp: "3 hours ago",
    likes: 34,
    comments: 7,
    liked: false,
    tag: "Real Estate",
    module: "Real Estate",
    privacy: "public"
  },
  {
    id: 11,
    author: "Gulberg Homes",
    initials: "GH",
    relationship: "Realtor",
    content: "Price drop alert! 5 Marla house in Gulberg III now available for PKR 1.95 Cr (was 2.1 Cr). Renovated kitchen, solar panels included. Don't miss it! 🏠",
    timestamp: "2 days ago",
    likes: 21,
    comments: 4,
    liked: false,
    tag: "Real Estate",
    module: "Real Estate",
    privacy: "public"
  },
  // Healthcare
  {
    id: 12,
    author: "Dr. Ayesha Raza",
    initials: "DR",
    relationship: "Physician",
    content: "🩺 Health tip: With summer approaching, stay hydrated — at least 2.5L of water daily. Add lemon and mint for electrolytes. Your kidneys will thank you! #HealthTips",
    timestamp: "5 hours ago",
    likes: 72,
    comments: 14,
    liked: true,
    tag: "Healthcare",
    module: "Healthcare",
    privacy: "public"
  },
  // Travel
  {
    id: 13,
    author: "Wanderlust Pakistan",
    initials: "WP",
    relationship: "Tour Operator",
    content: "✈️ Limited offer: Maldives 5N/6D Honeymoon Package — PKR 1.85 Lakh/couple. Includes flights, resort, and water villa. Book before 15th March. Only 8 spots left! 🌊",
    timestamp: "7 hours ago",
    likes: 89,
    comments: 26,
    liked: false,
    tag: "Travel",
    module: "Travel",
    privacy: "public"
  },
  {
    id: 14,
    author: "Northern Trails",
    initials: "NT",
    relationship: "Guide",
    content: "🏔️ Group tour to Fairy Meadows & Nanga Parbat base camp — July 12–18. PKR 45,000 per person (all inclusive). Perfect for hiking enthusiasts. Register now!",
    timestamp: "1 day ago",
    likes: 64,
    comments: 19,
    liked: false,
    tag: "Travel",
    module: "Travel",
    privacy: "friends"
  },
  // Blog
  {
    id: 15,
    author: "Imran Qureshi",
    initials: "IQ",
    relationship: "Blogger",
    content: "📝 New blog post: 'How Digital Family Trees Are Preserving South Asian Heritage in the 21st Century' — exploring how technology bridges generations. Link in bio! 🌳",
    timestamp: "8 hours ago",
    likes: 47,
    comments: 11,
    liked: false,
    tag: "Blog",
    module: "Blog",
    privacy: "public"
  }
];
const TABS = [
  { id: "all", label: "All" },
  { id: "family", label: "Family", module: "Family" },
  { id: "community", label: "Community", module: "Community" },
  { id: "jobs", label: "Jobs", module: "Jobs" },
  { id: "products", label: "Products", module: "Products" },
  { id: "real-estate", label: "Real Estate", module: "Real Estate" },
  { id: "healthcare", label: "Healthcare", module: "Healthcare" },
  { id: "travel", label: "Travel", module: "Travel" },
  { id: "blog", label: "Blog", module: "Blog" }
];
function PostCard({ post }) {
  const [liked, setLiked] = reactExports.useState(post.liked);
  const [likeCount, setLikeCount] = reactExports.useState(post.likes);
  const handleLike = () => {
    setLiked((p) => !p);
    setLikeCount((c) => c + (liked ? -1 : 1));
  };
  const tagColor = MODULE_COLORS[post.tag] ?? MODULE_COLORS[post.module] ?? "oklch(0.55 0.22 280)";
  const privOpt = PRIVACY_OPTIONS.find((p) => p.value === post.privacy);
  const privColor = post.privacy ? PRIVACY_COLORS[post.privacy] : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-shadow animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AvatarFallback,
            {
              className: "text-sm font-label font-bold",
              style: {
                background: `${tagColor}22`,
                color: tagColor
              },
              children: post.initials
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground", children: post.author }),
              post.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] px-1.5 py-0 font-label border-0",
                  style: {
                    background: `${tagColor}18`,
                    color: tagColor
                  },
                  children: post.tag
                }
              ),
              privOpt && privColor && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-[10px] font-label px-1.5 py-0 rounded",
                  style: {
                    background: `${privColor}14`,
                    color: privColor
                  },
                  children: [
                    privOpt.icon,
                    " ",
                    privOpt.label
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              post.relationship,
              " · ",
              post.timestamp
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 text-muted-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 15 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: post.content })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-t border-border flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: `h-8 gap-1.5 text-xs font-label ${liked ? "text-accent" : "text-muted-foreground"}`,
          onClick: handleLike,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, className: liked ? "fill-current" : "" }),
            likeCount
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-8 gap-1.5 text-xs font-label text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
            post.comments
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-8 gap-1.5 text-xs font-label text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
            "Share"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 ml-auto text-muted-foreground",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 14 })
        }
      )
    ] })
  ] });
}
function FeedTabs({
  activeTab,
  onChange
}) {
  const scrollRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: scrollRef,
      className: "flex items-center gap-1 overflow-x-auto mb-6 pb-1",
      style: { scrollbarWidth: "none", msOverflowStyle: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .feed-tabs-scroll::-webkit-scrollbar { display: none; }
      ` }),
        TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const color = tab.module ? MODULE_COLORS[tab.module] : "oklch(0.55 0.22 280)";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(tab.id),
              className: "shrink-0 px-3 py-1.5 rounded-full text-xs font-label font-semibold transition-all duration-150 whitespace-nowrap",
              style: isActive ? {
                background: color,
                color: "oklch(0.98 0.005 280)",
                boxShadow: `0 0 12px ${color}44`
              } : {
                background: `${color}12`,
                color
              },
              children: tab.label
            },
            tab.id
          );
        })
      ]
    }
  );
}
function SocialFeedPage({ userProfile }) {
  var _a, _b, _c;
  const [postContent, setPostContent] = reactExports.useState("");
  const [selectedModule, setSelectedModule] = reactExports.useState("Family");
  const [selectedPrivacy, setSelectedPrivacy] = reactExports.useState("friends");
  const [localPosts, setLocalPosts] = reactExports.useState([]);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const initials = (userProfile == null ? void 0 : userProfile.name) ? userProfile.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() : "U";
  const handlePost = () => {
    if (!postContent.trim()) return;
    const newPost = {
      id: Date.now(),
      author: (userProfile == null ? void 0 : userProfile.name) || "You",
      initials,
      relationship: "You",
      content: postContent,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      liked: false,
      tag: selectedModule,
      module: selectedModule,
      privacy: selectedPrivacy
    };
    setLocalPosts((p) => [newPost, ...p]);
    setPostContent("");
  };
  const getTabPosts = () => {
    const allPosts = [...localPosts, ...SAMPLE_POSTS];
    if (activeTab === "all") return allPosts;
    const tabDef = TABS.find((t) => t.id === activeTab);
    if (!(tabDef == null ? void 0 : tabDef.module)) return allPosts;
    return allPosts.filter((p) => p.module === tabDef.module);
  };
  const selectedColor = MODULE_COLORS[selectedModule];
  const SelectedIcon = MODULE_ICONS[selectedModule] ?? TreePine;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Social Feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Share moments across Family, Community & all modules" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-6 animate-fade-up animate-fade-up-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-9 w-9 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs font-label font-bold bg-primary/15 text-primary", children: initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: `What's on your mind, ${((_a = userProfile == null ? void 0 : userProfile.name) == null ? void 0 : _a.split(" ")[0]) || "friend"}?`,
            value: postContent,
            onChange: (e) => setPostContent(e.target.value),
            className: "resize-none border-0 focus-visible:ring-0 p-0 text-sm bg-transparent",
            rows: 3
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-t border-border flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 gap-1.5 text-xs text-muted-foreground font-label",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 14 }),
              " Photo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 gap-1.5 text-xs text-muted-foreground font-label",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { size: 14 }),
              " Feeling"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 gap-1.5 text-xs font-label font-semibold px-2",
              style: {
                background: `${selectedColor}15`,
                color: selectedColor
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectedIcon, { size: 13 }),
                selectedModule,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 11 })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "w-44", children: POSTABLE_MODULES.map((mod) => {
            const ModIcon = MODULE_ICONS[mod] ?? TreePine;
            const modColor = MODULE_COLORS[mod];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onClick: () => setSelectedModule(mod),
                className: "gap-2 text-xs font-label",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-5 h-5 rounded flex items-center justify-center shrink-0",
                      style: {
                        background: `${modColor}20`,
                        color: modColor
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModIcon, { size: 11 })
                    }
                  ),
                  mod,
                  selectedModule === mod && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "ml-auto w-1.5 h-1.5 rounded-full",
                      style: { background: modColor }
                    }
                  )
                ]
              },
              mod
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 gap-1.5 text-xs font-label font-semibold px-2",
              style: {
                background: `${PRIVACY_COLORS[selectedPrivacy]}12`,
                color: PRIVACY_COLORS[selectedPrivacy]
              },
              children: [
                (_b = PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)) == null ? void 0 : _b.icon,
                (_c = PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)) == null ? void 0 : _c.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 11 })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "w-40", children: PRIVACY_OPTIONS.map((opt) => {
            const pColor = PRIVACY_COLORS[opt.value];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onClick: () => setSelectedPrivacy(opt.value),
                className: "gap-2 text-xs font-label",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: opt.icon }),
                  opt.label,
                  selectedPrivacy === opt.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "ml-auto w-1.5 h-1.5 rounded-full",
                      style: { background: pColor }
                    }
                  )
                ]
              },
              opt.value
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "ml-auto h-8 px-4 font-label",
            disabled: !postContent.trim(),
            onClick: handlePost,
            children: "Post"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeedTabs, { activeTab, onChange: setActiveTab }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: getTabPosts().length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No posts in this feed yet. Be the first to share something!" }) }) : getTabPosts().map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.04}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post }) }, post.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EventsTab,
      {
        moduleName: "Social Feed",
        moduleColor: "oklch(0.55 0.22 280)"
      }
    ) })
  ] });
}
export {
  SocialFeedPage as default
};
