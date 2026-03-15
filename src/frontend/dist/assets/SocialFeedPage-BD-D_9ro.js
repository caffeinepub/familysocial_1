import { s as createLucideIcon, r as reactExports, j as jsxRuntimeExports, A as Avatar, o as AvatarFallback, T as Textarea, a as Button, am as DropdownMenu, an as DropdownMenuTrigger, k as Briefcase, t as House, a9 as FileText, P as Plane, H as Heart, m as Building2, Y as ShoppingBag, U as Users, J as TreePine, O as ChevronDown, ao as DropdownMenuContent, ap as DropdownMenuItem, B as Badge, p as MessageCircle } from "./index-DVrwA8ch.js";
import { E as EventsTab } from "./EventsTab-Ctgcdlip.js";
import { V as Video } from "./video-BJ2qym_E.js";
import { I as Image } from "./image-Bd5MuFvw.js";
import { E as Ellipsis } from "./ellipsis-I7I6ZVEX.js";
import { S as Share2 } from "./share-2-uix-I0rV.js";
import { B as Bookmark } from "./bookmark-BpxmEcDJ.js";
import "./tabs-BNwE7U1q.js";
import "./plus-BY35EerL.js";
import "./external-link-CaxibzPS.js";
import "./lock-Nk96dSfG.js";
import "./globe-CMOOhR4e.js";
import "./calendar-CCHsOCAR.js";
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
  {
    value: "family",
    label: "Family",
    icon: "👨‍👩‍👧"
  },
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
    author: "Priya Sharma",
    initials: "PS",
    relationship: "Sister",
    content: "Just booked tickets to Manali! So excited for a long overdue family trip. Who else loves the mountains?",
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
    author: "Rohit Verma",
    initials: "RV",
    relationship: "Neighbor",
    content: "IndyaCentral community sports day was a massive success! So proud of our neighborhood!",
    timestamp: "5 hours ago",
    likes: 67,
    comments: 14,
    liked: true,
    tag: "Community",
    module: "Community",
    privacy: "community"
  },
  {
    id: 3,
    author: "Ananya Patel",
    initials: "AP",
    relationship: "Colleague",
    content: "Excited to announce I just got promoted to Senior Software Engineer at TechCorp India! Grateful for the journey.",
    timestamp: "Yesterday",
    likes: 142,
    comments: 38,
    liked: false,
    tag: "Jobs",
    module: "Jobs",
    privacy: "public"
  },
  {
    id: 4,
    author: "Suresh Kumar",
    initials: "SK",
    relationship: "Friend",
    content: "Fresh stock of handmade Kashmiri shawls just arrived at our store! Perfect for gifting this festive season. #Handicrafts",
    timestamp: "2 days ago",
    likes: 31,
    comments: 6,
    liked: false,
    tag: "Products",
    module: "Products",
    privacy: "public"
  },
  {
    id: 5,
    author: "Dr. Meera Nair",
    initials: "MN",
    relationship: "Doctor",
    content: "Monsoon health alert: Rise in dengue cases in South Mumbai. Please use mosquito repellents and avoid stagnant water. Stay safe!",
    timestamp: "3 days ago",
    likes: 89,
    comments: 22,
    liked: true,
    tag: "Healthcare",
    module: "Healthcare",
    privacy: "public"
  },
  {
    id: 6,
    author: "Vikram Rajan",
    initials: "VR",
    relationship: "Travel Buddy",
    content: "Just returned from Andaman! Crystal clear waters, pristine beaches. Will post a detailed itinerary blog shortly. #Travel #AndamanNicobar",
    timestamp: "4 days ago",
    likes: 204,
    comments: 47,
    liked: false,
    tag: "Travel",
    module: "Travel",
    privacy: "public"
  }
];
const TABS = [
  { id: "all", label: "All" },
  { id: "family", label: "Family", module: "Family" },
  { id: "community", label: "Community", module: "Community" },
  { id: "jobs", label: "Jobs", module: "Jobs" },
  { id: "products", label: "Products", module: "Products" },
  { id: "travel", label: "Travel", module: "Travel" },
  { id: "blog", label: "Blog", module: "Blog" }
];
function FeedTabs({
  activeTab,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex overflow-x-auto gap-1 pb-1 mb-4",
      "data-ocid": "feed.tabs.list",
      children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange(tab.id),
          className: `shrink-0 px-3 py-1.5 rounded-lg text-xs font-label font-medium transition-colors ${activeTab === tab.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted/40"}`,
          "data-ocid": `feed.${tab.id}.tab`,
          children: tab.label
        },
        tab.id
      ))
    }
  );
}
function PostCard({ post }) {
  const [liked, setLiked] = reactExports.useState(post.liked);
  const [likeCount, setLikeCount] = reactExports.useState(post.likes);
  const tagColor = MODULE_COLORS[post.tag ?? ""] ?? MODULE_COLORS[post.module ?? ""] ?? "oklch(0.55 0.22 280)";
  const privOpt = PRIVACY_OPTIONS.find((p) => p.value === post.privacy);
  const privColor = post.privacy ? PRIVACY_COLORS[post.privacy] : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl shadow-card p-4 space-y-3",
      "data-ocid": "feed.post.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-9 w-9 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AvatarFallback,
            {
              className: "text-xs font-label font-bold",
              style: { background: `${tagColor}20`, color: tagColor },
              children: post.initials
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold text-foreground", children: post.author }),
              post.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-[10px] px-1.5 py-0 font-label",
                  style: { background: `${tagColor}18`, color: tagColor },
                  children: post.tag
                }
              ),
              privOpt && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label",
                  style: { color: privColor },
                  children: privOpt.icon
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              post.relationship,
              " · ",
              post.timestamp
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-muted-foreground hover:text-foreground transition-colors",
              "data-ocid": "feed.post.dropdown_menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: post.content }),
        post.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-xl overflow-hidden border border-border aspect-video bg-muted/30 flex items-center justify-center",
            "data-ocid": "feed.post.video",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 32, className: "mx-auto text-muted-foreground mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Video" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 pt-1 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setLiked((v) => !v);
                setLikeCount((n) => liked ? n - 1 : n + 1);
              },
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium transition-colors ${liked ? "text-rose-500 bg-rose-500/10" : "text-muted-foreground hover:bg-muted/40"}`,
              "data-ocid": "feed.post.toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, fill: liked ? "currentColor" : "none" }),
                likeCount
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors",
              "data-ocid": "feed.post.comment.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
                post.comments
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors",
              "data-ocid": "feed.post.share.button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors",
              "data-ocid": "feed.post.bookmark.button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}
function SocialFeedPage({ userProfile }) {
  var _a, _b, _c;
  const [postContent, setPostContent] = reactExports.useState("");
  const [videoLink, setVideoLink] = reactExports.useState("");
  const [showVideoInput, setShowVideoInput] = reactExports.useState(false);
  const [selectedModule, setSelectedModule] = reactExports.useState("Family");
  const [selectedPrivacy, setSelectedPrivacy] = reactExports.useState("friends");
  const [localPosts, setLocalPosts] = reactExports.useState([]);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  reactExports.useRef(null);
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
      privacy: selectedPrivacy,
      videoUrl: videoLink || void 0
    };
    setLocalPosts((p) => [newPost, ...p]);
    setPostContent("");
    setVideoLink("");
    setShowVideoInput(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 max-w-2xl mx-auto", "data-ocid": "feed.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Social Feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Share moments across Family, Community & all modules" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-9 w-9 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs font-label font-bold bg-primary/15 text-primary", children: initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: `What's on your mind, ${((_a = userProfile == null ? void 0 : userProfile.name) == null ? void 0 : _a.split(" ")[0]) || "friend"}?`,
            value: postContent,
            onChange: (e) => setPostContent(e.target.value),
            className: "resize-none border-0 focus-visible:ring-0 p-0 text-sm bg-transparent",
            rows: 3,
            "data-ocid": "feed.post.textarea"
          }
        )
      ] }) }),
      showVideoInput && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 14, className: "text-muted-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              placeholder: "Paste YouTube or Vimeo link...",
              value: videoLink,
              onChange: (e) => setVideoLink(e.target.value),
              className: "flex-1 text-xs bg-secondary/40 border border-border rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground",
              "data-ocid": "feed.video.input"
            }
          )
        ] }),
        videoLink && (videoLink.includes("youtube") || videoLink.includes("youtu.be") || videoLink.includes("vimeo")) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-xl border border-border aspect-video bg-muted/30 flex items-center justify-center",
            "data-ocid": "feed.video.preview",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Video,
                {
                  size: 32,
                  className: "mx-auto text-muted-foreground mb-2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
                "Video: ",
                videoLink.slice(0, 40),
                "..."
              ] })
            ] })
          }
        )
      ] }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 gap-1.5 text-xs text-muted-foreground font-label",
            onClick: () => setShowVideoInput((v) => !v),
            "data-ocid": "feed.video.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 14 }),
              " Video"
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
              "data-ocid": "feed.module.select",
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
                      className: "w-4 h-4 rounded flex items-center justify-center",
                      style: { background: `${modColor}20`, color: modColor },
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
              "data-ocid": "feed.privacy.select",
              children: [
                (_b = PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)) == null ? void 0 : _b.icon,
                (_c = PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)) == null ? void 0 : _c.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 11 })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "w-40", children: PRIVACY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    style: { background: PRIVACY_COLORS[opt.value] }
                  }
                )
              ]
            },
            opt.value
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "ml-auto h-8 px-4 font-label",
            disabled: !postContent.trim(),
            onClick: handlePost,
            "data-ocid": "feed.post.submit_button",
            children: "Post"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeedTabs, { activeTab, onChange: setActiveTab }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: getTabPosts().length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", "data-ocid": "feed.posts.empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No posts in this feed yet. Be the first to share something!" }) }) : getTabPosts().map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.04}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post }) }, post.id)) }),
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
