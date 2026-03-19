const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BYT7ZeT6.js","assets/index-cb8DWXWW.css"])))=>i.map(i=>d[i]);
import { h as createLucideIcon, r as reactExports, ad as useInternetIdentity, j as jsxRuntimeExports, A as Avatar, b as AvatarFallback, a as Button, ah as DropdownMenu, ai as DropdownMenuTrigger, v as Briefcase, k as House, ac as FileText, K as Plane, H as Heart, i as Building2, _ as ShoppingBag, n as Users, J as TreePine, Q as ChevronDown, aj as DropdownMenuContent, ak as DropdownMenuItem, B as Badge, M as MessageCircle, al as __vitePreload, D as Dialog, y as DialogContent, z as DialogHeader, E as DialogTitle } from "./index-BYT7ZeT6.js";
import { T as Textarea } from "./textarea-DMZdGyJf.js";
import { E as EventsTab } from "./EventsTab-CAMlVYj-.js";
import { V as Video } from "./video-B8j3S8pg.js";
import { I as Image } from "./image-DX1sslIM.js";
import { E as Ellipsis } from "./ellipsis-OtcVgIQI.js";
import { S as Share2 } from "./share-2-CWF083GM.js";
import { B as Bookmark } from "./bookmark-DM2CNFGz.js";
import "./tabs-8GFJnLkh.js";
import "./lock-DQXuPnl0.js";
import "./globe-_kfDNGkX.js";
import "./calendar-8VWkpvSi.js";
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
  const { identity } = useInternetIdentity();
  const isLoggedIn = !!identity;
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
    !isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-6 p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Sign in to share your thoughts with the community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-label font-semibold text-primary-foreground",
          style: { background: "oklch(0.65 0.25 335)" },
          children: "Login to Post"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-6", children: [
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
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GamesAndComicsSection, {})
  ] });
}
const FEED_GAMES = [
  {
    id: 1,
    title: "Cricket Champions 2026",
    genre: "Sports",
    difficulty: "Medium",
    age: "All Ages"
  },
  {
    id: 2,
    title: "Mystic Jungle Quest",
    genre: "Adventure",
    difficulty: "Hard",
    age: "11-14"
  },
  {
    id: 3,
    title: "Chai Quiz Showdown",
    genre: "Trivia",
    difficulty: "Easy",
    age: "All Ages"
  },
  {
    id: 4,
    title: "Bollywood Beats Rush",
    genre: "Music",
    difficulty: "Easy",
    age: "16+"
  }
];
const FEED_COMICS = [
  {
    id: 1,
    title: "Monday Blues",
    punchline: "When your alarm goes off 5 min after you finally fell asleep 😅",
    mood: "funny"
  },
  {
    id: 2,
    title: "The Chai Diaries",
    punchline: "No meeting is complete without chai. Science. 🍵",
    mood: "wholesome"
  },
  {
    id: 3,
    title: "Tech Troubles",
    punchline: "Boss: This should take 5 min. Me: 3 days later... ⌛",
    mood: "sarcastic"
  },
  {
    id: 4,
    title: "Traffic Woes",
    punchline: "When the GPS says 10 min but Mumbai says otherwise 🚦",
    mood: "funny"
  }
];
const DIFFICULTY_COLORS = {
  Easy: "oklch(0.52 0.14 155)",
  Medium: "oklch(0.72 0.17 85)",
  Hard: "oklch(0.65 0.25 335)"
};
const MOOD_COLORS = {
  funny: "oklch(0.65 0.25 335)",
  sarcastic: "oklch(0.72 0.17 85)",
  wholesome: "oklch(0.52 0.14 155)"
};
const QUIZ_DATA = {
  Sports: [
    {
      q: "Who holds the record for most Test cricket centuries?",
      options: [
        "Ricky Ponting",
        "Sachin Tendulkar",
        "Virat Kohli",
        "Brian Lara"
      ],
      answer: 1
    },
    {
      q: "In which year did India win the Cricket World Cup?",
      options: ["1979", "1983", "1991", "2001"],
      answer: 1
    },
    {
      q: "How many players are there in a hockey team?",
      options: ["9", "10", "11", "12"],
      answer: 2
    },
    {
      q: "Which country invented Kabaddi?",
      options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
      answer: 1
    },
    {
      q: "Sania Mirza is associated with which sport?",
      options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
      answer: 1
    }
  ],
  Bollywood: [
    {
      q: "Which film won the first Filmfare Award for Best Film?",
      options: ["Mother India", "Do Bigha Zamin", "Awaara", "Pyaasa"],
      answer: 1
    },
    {
      q: "Shah Rukh Khan's debut film was?",
      options: ["Dilwale", "Baazigar", "Deewana", "Darr"],
      answer: 2
    },
    {
      q: "The song 'Jai Ho' belongs to which movie?",
      options: [
        "Chennai Express",
        "Slumdog Millionaire",
        "Jab Tak Hai Jaan",
        "Ra.One"
      ],
      answer: 1
    },
    {
      q: "Who directed the film 'Sholay'?",
      options: ["Yash Chopra", "Ramesh Sippy", "Gulzar", "Raj Kapoor"],
      answer: 1
    },
    {
      q: "Which actress played the role of Paro in Devdas (2002)?",
      options: ["Aishwarya Rai", "Madhuri Dixit", "Tabu", "Rani Mukerji"],
      answer: 0
    }
  ],
  Tech: [
    {
      q: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Core Power Unit",
        "Computer Processing Utility",
        "Central Program Utility"
      ],
      answer: 0
    },
    {
      q: "Which company made the first iPhone?",
      options: ["Samsung", "Google", "Apple", "Microsoft"],
      answer: 2
    },
    {
      q: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Transfer Markup Language",
        "Hyper Text Making Language"
      ],
      answer: 0
    },
    {
      q: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: 1
    },
    {
      q: "What is the full form of AI?",
      options: [
        "Automated Intelligence",
        "Artificial Intelligence",
        "Applied Intelligence",
        "Advanced Intelligence"
      ],
      answer: 1
    }
  ],
  History: [
    {
      q: "In which year did India gain independence?",
      options: ["1945", "1946", "1947", "1948"],
      answer: 2
    },
    {
      q: "Who was the first Prime Minister of India?",
      options: [
        "Sardar Patel",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. Ambedkar"
      ],
      answer: 1
    },
    {
      q: "The Mughal Empire was founded by?",
      options: ["Humayun", "Akbar", "Babur", "Aurangzeb"],
      answer: 2
    },
    {
      q: "In which year was the Taj Mahal completed?",
      options: ["1632", "1648", "1653", "1665"],
      answer: 1
    },
    {
      q: "Who launched the Quit India Movement?",
      options: [
        "Subhas Chandra Bose",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Bhagat Singh"
      ],
      answer: 2
    }
  ],
  Science: [
    {
      q: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "HO"],
      answer: 0
    },
    {
      q: "How many bones are in the adult human body?",
      options: ["186", "196", "206", "216"],
      answer: 2
    },
    {
      q: "What planet is known as the Red Planet?",
      options: ["Jupiter", "Saturn", "Mars", "Venus"],
      answer: 2
    },
    {
      q: "What is the speed of light?",
      options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
      answer: 0
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 2
    }
  ],
  Food: [
    {
      q: "Biryani originated from which cuisine?",
      options: ["Mughal/Persian", "South Indian", "Rajasthani", "Bengali"],
      answer: 0
    },
    {
      q: "Which spice is known as 'black gold'?",
      options: ["Turmeric", "Cardamom", "Pepper", "Saffron"],
      answer: 2
    },
    {
      q: "Idli is a dish from which Indian state?",
      options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      answer: 2
    },
    {
      q: "Which vitamin is found in citrus fruits?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: 2
    },
    {
      q: "What is paneer made from?",
      options: [
        "Soy milk",
        "Coconut milk",
        "Cow or buffalo milk",
        "Almond milk"
      ],
      answer: 2
    }
  ]
};
const GENRES = [
  "Sports",
  "Bollywood",
  "Tech",
  "History",
  "Science",
  "Food"
];
function QuizGameDialog({
  open,
  onClose
}) {
  const [step, setStep] = reactExports.useState("genre");
  const [genre, setGenre] = reactExports.useState("Sports");
  const [qIndex, setQIndex] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState([]);
  const questions = QUIZ_DATA[genre];
  const reset = () => {
    setStep("genre");
    setQIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
  };
  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === questions[qIndex].answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };
  const handleNext = () => {
    if (qIndex + 1 >= questions.length) {
      setStep("score");
    } else {
      setQIndex((i) => i + 1);
      setSelected(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      open,
      onOpenChange: (v) => {
        if (!v) {
          reset();
          onClose();
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", "data-ocid": "game.dialog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: step === "genre" ? "🎮 Choose a Genre" : step === "quiz" ? `${genre} Quiz · Q${qIndex + 1}/5` : "🏆 Quiz Complete!" }) }),
        step === "genre" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a topic to start your 5-question quiz:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: GENRES.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: `p-3 rounded-xl border text-sm font-medium transition-all ${genre === g ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`,
              onClick: () => setGenre(g),
              "data-ocid": "game.genre_select",
              children: [
                g === "Sports" ? "⚽" : g === "Bollywood" ? "🎬" : g === "Tech" ? "💻" : g === "History" ? "📜" : g === "Science" ? "🔬" : "🍛",
                " ",
                g
              ]
            },
            g
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full",
              onClick: () => setStep("quiz"),
              "data-ocid": "game.play_button",
              children: "Start Quiz"
            }
          )
        ] }),
        step === "quiz" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-2", children: questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `flex-1 h-1.5 rounded-full transition-colors ${i < qIndex ? answers[i] ? "bg-green-500" : "bg-red-500" : i === qIndex ? "bg-primary" : "bg-border"}`
            },
            q.q.slice(0, 20)
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-snug", children: questions[qIndex].q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: questions[qIndex].options.map((opt, i) => {
            const optKey = `opt-${qIndex}-${i}`;
            let cls = "p-3 rounded-xl border text-sm text-left transition-all cursor-pointer";
            if (selected !== null) {
              if (i === questions[qIndex].answer)
                cls += " border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700";
              else if (i === selected)
                cls += " border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700";
              else cls += " border-border opacity-60";
            } else {
              cls += " border-border hover:border-primary/60";
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: cls,
                onClick: () => handleAnswer(i),
                "data-ocid": "game.answer_button",
                children: opt
              },
              optKey
            );
          }) }),
          selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full",
              onClick: handleNext,
              "data-ocid": "game.next_button",
              children: qIndex + 1 >= questions.length ? "See Score" : "Next Question →"
            }
          )
        ] }),
        step === "score" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-4 py-4 text-center",
            "data-ocid": "game.score_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-5xl font-display font-black",
                  style: {
                    color: score >= 4 ? "oklch(0.52 0.14 155)" : score >= 2 ? "oklch(0.72 0.17 85)" : "oklch(0.65 0.25 335)"
                  },
                  children: [
                    score,
                    "/5"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: score === 5 ? "Perfect score! 🎉 Genius!" : score >= 3 ? "Great job! 🙌 Keep it up!" : "Good try! Practice more 💪" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-1", children: answers.map((correct, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-lg ${correct ? "text-green-500" : "text-red-500"}`,
                  children: correct ? "✓" : "✗"
                },
                `score-result-${i}`
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: reset,
                  className: "mt-2",
                  "data-ocid": "game.play_button",
                  children: "Play Again"
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function GamesAndComicsSection() {
  const [open, setOpen] = reactExports.useState(true);
  const [quizOpen, setQuizOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-6 border border-border rounded-xl overflow-hidden",
      "data-ocid": "feed.games_comics.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-4 py-3 bg-secondary/30 hover:bg-secondary/50 transition-colors",
            onClick: () => setOpen((p) => !p),
            "data-ocid": "feed.games_comics.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold flex items-center gap-2", children: [
                "🎮 Games & Comics from IC Agents",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                    style: {
                      background: "oklch(0.52 0.14 155 / 0.15)",
                      color: "oklch(0.52 0.14 155)"
                    },
                    children: "● Live"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: open ? "▲ Collapse" : "▼ Expand" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "🎮 Today's Games" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: FEED_GAMES.map((game) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-3 space-y-2",
                "data-ocid": `feed.game.card.${game.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: game.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                        style: {
                          background: `${DIFFICULTY_COLORS[game.difficulty] ?? "oklch(0.55 0.22 280)"}18`,
                          color: DIFFICULTY_COLORS[game.difficulty] ?? "oklch(0.55 0.22 280)"
                        },
                        children: game.difficulty
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    game.genre,
                    " · Age ",
                    game.age
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-full rounded-lg py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90",
                      style: { background: "oklch(0.55 0.22 280)" },
                      onClick: () => setQuizOpen(true),
                      "data-ocid": `feed.game.primary_button.${game.id}`,
                      children: "Play Now"
                    }
                  )
                ]
              },
              game.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "😄 Today's Comics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: FEED_COMICS.map((comic) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-3 space-y-2 relative",
                "data-ocid": `feed.comic.card.${comic.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: comic.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] px-1.5 py-0.5 rounded-full",
                        style: {
                          background: `${MOOD_COLORS[comic.mood]}18`,
                          color: MOOD_COLORS[comic.mood]
                        },
                        children: comic.mood
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-secondary/40 rounded-lg px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: comic.punchline }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1.5 left-4 w-3 h-3 bg-secondary/40 rotate-45" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ComicLikeButton, { comicId: comic.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
                        onClick: () => {
                          __vitePreload(async () => {
                            const { toast } = await import("./index-BYT7ZeT6.js").then((n) => n.cH);
                            return { toast };
                          }, true ? __vite__mapDeps([0,1]) : void 0).then(
                            ({ toast }) => toast.success("Link copied to clipboard!")
                          );
                        },
                        "data-ocid": `feed.comic.secondary_button.${comic.id}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 12 }),
                          " Share"
                        ]
                      }
                    )
                  ] })
                ]
              },
              comic.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(QuizGameDialog, { open: quizOpen, onClose: () => setQuizOpen(false) })
      ]
    }
  );
}
function ComicLikeButton({ comicId }) {
  const [liked, setLiked] = reactExports.useState(false);
  const [count, setCount] = reactExports.useState(Math.floor(Math.random() * 50) + 10);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `flex items-center gap-1 text-xs transition-colors ${liked ? "text-pink-500" : "text-muted-foreground hover:text-foreground"}`,
      onClick: () => {
        setLiked((p) => !p);
        setCount((c) => liked ? c - 1 : c + 1);
      },
      "data-ocid": `feed.comic.toggle.${comicId}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 12, fill: liked ? "currentColor" : "none" }),
        " ",
        count
      ]
    }
  );
}
export {
  SocialFeedPage as default
};
