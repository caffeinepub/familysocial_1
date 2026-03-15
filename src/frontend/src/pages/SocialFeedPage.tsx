import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import {
  Bookmark,
  Briefcase,
  Building2,
  ChevronDown,
  FileText,
  Heart,
  Home,
  Image,
  MessageCircle,
  MoreHorizontal,
  Plane,
  Share2,
  ShoppingBag,
  Smile,
  TreePine,
  Users,
  Video,
} from "lucide-react";
import { useRef, useState } from "react";
import type { UserProfile } from "../backend.d";
import EventsTab from "../components/EventsTab";

type Module =
  | "Family"
  | "Community"
  | "Jobs"
  | "Products"
  | "Real Estate"
  | "Healthcare"
  | "Travel"
  | "Blog";

const MODULE_COLORS: Record<string, string> = {
  Family: "oklch(0.55 0.22 280)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Products: "oklch(0.65 0.25 335)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Healthcare: "oklch(0.58 0.22 25)",
  Travel: "oklch(0.55 0.18 240)",
  Blog: "oklch(0.60 0.22 310)",
  Milestone: "oklch(0.65 0.20 85)",
  Business: "oklch(0.72 0.19 85)",
};

const MODULE_ICONS: Record<string, React.ElementType> = {
  Family: TreePine,
  Community: Users,
  Jobs: Briefcase,
  Products: ShoppingBag,
  "Real Estate": Building2,
  Healthcare: Heart,
  Travel: Plane,
  Blog: FileText,
  Milestone: Home,
  Business: Briefcase,
};

const POSTABLE_MODULES: Module[] = [
  "Family",
  "Community",
  "Jobs",
  "Products",
  "Real Estate",
  "Healthcare",
  "Travel",
  "Blog",
];

type Privacy = "public" | "friends" | "community" | "family" | "private";

const PRIVACY_OPTIONS: { value: Privacy; label: string; icon: string }[] = [
  { value: "public", label: "Public", icon: "\u{1F30D}" },
  { value: "friends", label: "Friends", icon: "\u{1F465}" },
  { value: "community", label: "Community", icon: "\u{1F3D8}\uFE0F" },
  {
    value: "family",
    label: "Family",
    icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
  },
  { value: "private", label: "Private", icon: "\u{1F512}" },
];

const PRIVACY_COLORS: Record<Privacy, string> = {
  public: "oklch(0.62 0.20 150)",
  friends: "oklch(0.55 0.18 240)",
  community: "oklch(0.60 0.20 190)",
  family: "oklch(0.55 0.22 280)",
  private: "oklch(0.50 0.02 280)",
};

interface Post {
  id: number;
  author: string;
  initials: string;
  relationship: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
  tag?: string;
  module?: string;
  privacy?: Privacy;
  videoUrl?: string;
}

const SAMPLE_POSTS: Post[] = [
  {
    id: 1,
    author: "Priya Sharma",
    initials: "PS",
    relationship: "Sister",
    content:
      "Just booked tickets to Manali! So excited for a long overdue family trip. Who else loves the mountains?",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    liked: false,
    tag: "Family",
    module: "Family",
    privacy: "family",
  },
  {
    id: 2,
    author: "Rohit Verma",
    initials: "RV",
    relationship: "Neighbor",
    content:
      "IndyaCentral community sports day was a massive success! So proud of our neighborhood!",
    timestamp: "5 hours ago",
    likes: 67,
    comments: 14,
    liked: true,
    tag: "Community",
    module: "Community",
    privacy: "community",
  },
  {
    id: 3,
    author: "Ananya Patel",
    initials: "AP",
    relationship: "Colleague",
    content:
      "Excited to announce I just got promoted to Senior Software Engineer at TechCorp India! Grateful for the journey.",
    timestamp: "Yesterday",
    likes: 142,
    comments: 38,
    liked: false,
    tag: "Jobs",
    module: "Jobs",
    privacy: "public",
  },
  {
    id: 4,
    author: "Suresh Kumar",
    initials: "SK",
    relationship: "Friend",
    content:
      "Fresh stock of handmade Kashmiri shawls just arrived at our store! Perfect for gifting this festive season. #Handicrafts",
    timestamp: "2 days ago",
    likes: 31,
    comments: 6,
    liked: false,
    tag: "Products",
    module: "Products",
    privacy: "public",
  },
  {
    id: 5,
    author: "Dr. Meera Nair",
    initials: "MN",
    relationship: "Doctor",
    content:
      "Monsoon health alert: Rise in dengue cases in South Mumbai. Please use mosquito repellents and avoid stagnant water. Stay safe!",
    timestamp: "3 days ago",
    likes: 89,
    comments: 22,
    liked: true,
    tag: "Healthcare",
    module: "Healthcare",
    privacy: "public",
  },
  {
    id: 6,
    author: "Vikram Rajan",
    initials: "VR",
    relationship: "Travel Buddy",
    content:
      "Just returned from Andaman! Crystal clear waters, pristine beaches. Will post a detailed itinerary blog shortly. #Travel #AndamanNicobar",
    timestamp: "4 days ago",
    likes: 204,
    comments: 47,
    liked: false,
    tag: "Travel",
    module: "Travel",
    privacy: "public",
  },
];

type TabId =
  | "all"
  | "family"
  | "community"
  | "jobs"
  | "products"
  | "travel"
  | "blog";

const TABS: { id: TabId; label: string; module?: string }[] = [
  { id: "all", label: "All" },
  { id: "family", label: "Family", module: "Family" },
  { id: "community", label: "Community", module: "Community" },
  { id: "jobs", label: "Jobs", module: "Jobs" },
  { id: "products", label: "Products", module: "Products" },
  { id: "travel", label: "Travel", module: "Travel" },
  { id: "blog", label: "Blog", module: "Blog" },
];

function FeedTabs({
  activeTab,
  onChange,
}: { activeTab: TabId; onChange: (t: TabId) => void }) {
  return (
    <div
      className="flex overflow-x-auto gap-1 pb-1 mb-4"
      data-ocid="feed.tabs.list"
    >
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-label font-medium transition-colors ${
            activeTab === tab.id
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:bg-muted/40"
          }`}
          data-ocid={`feed.${tab.id}.tab`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const tagColor =
    MODULE_COLORS[post.tag ?? ""] ??
    MODULE_COLORS[post.module ?? ""] ??
    "oklch(0.55 0.22 280)";
  const privOpt = PRIVACY_OPTIONS.find((p) => p.value === post.privacy);
  const privColor = post.privacy ? PRIVACY_COLORS[post.privacy] : undefined;

  return (
    <div
      className="bg-card border border-border rounded-xl shadow-card p-4 space-y-3"
      data-ocid="feed.post.card"
    >
      <div className="flex items-start gap-3">
        <Avatar className="h-9 w-9 shrink-0">
          <AvatarFallback
            className="text-xs font-label font-bold"
            style={{ background: `${tagColor}20`, color: tagColor }}
          >
            {post.initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-label font-semibold text-foreground">
              {post.author}
            </span>
            {post.tag && (
              <Badge
                variant="secondary"
                className="text-[10px] px-1.5 py-0 font-label"
                style={{ background: `${tagColor}18`, color: tagColor }}
              >
                {post.tag}
              </Badge>
            )}
            {privOpt && (
              <span
                className="text-[10px] font-label"
                style={{ color: privColor }}
              >
                {privOpt.icon}
              </span>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground">
            {post.relationship} · {post.timestamp}
          </p>
        </div>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-ocid="feed.post.dropdown_menu"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <p className="text-sm text-foreground leading-relaxed">{post.content}</p>

      {post.videoUrl && (
        <div
          className="rounded-xl overflow-hidden border border-border aspect-video bg-muted/30 flex items-center justify-center"
          data-ocid="feed.post.video"
        >
          <div className="text-center">
            <Video size={32} className="mx-auto text-muted-foreground mb-2" />
            <p className="text-xs text-muted-foreground">Video</p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1 pt-1 border-t border-border">
        <button
          type="button"
          onClick={() => {
            setLiked((v) => !v);
            setLikeCount((n) => (liked ? n - 1 : n + 1));
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium transition-colors ${liked ? "text-rose-500 bg-rose-500/10" : "text-muted-foreground hover:bg-muted/40"}`}
          data-ocid="feed.post.toggle"
        >
          <Heart size={14} fill={liked ? "currentColor" : "none"} />
          {likeCount}
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors"
          data-ocid="feed.post.comment.button"
        >
          <MessageCircle size={14} />
          {post.comments}
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors"
          data-ocid="feed.post.share.button"
        >
          <Share2 size={14} />
        </button>
        <button
          type="button"
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label font-medium text-muted-foreground hover:bg-muted/40 transition-colors"
          data-ocid="feed.post.bookmark.button"
        >
          <Bookmark size={14} />
        </button>
      </div>
    </div>
  );
}

interface Props {
  userProfile: UserProfile | null | undefined;
}

export default function SocialFeedPage({ userProfile }: Props) {
  const [postContent, setPostContent] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [showVideoInput, setShowVideoInput] = useState(false);
  const [selectedModule, setSelectedModule] = useState<Module>("Family");
  const [selectedPrivacy, setSelectedPrivacy] = useState<Privacy>("friends");
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const _fileInputRef = useRef<HTMLInputElement>(null);

  const initials = userProfile?.name
    ? userProfile.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  const handlePost = () => {
    if (!postContent.trim()) return;
    const newPost: Post = {
      id: Date.now(),
      author: userProfile?.name || "You",
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
      videoUrl: videoLink || undefined,
    };
    setLocalPosts((p) => [newPost, ...p]);
    setPostContent("");
    setVideoLink("");
    setShowVideoInput(false);
  };

  const getTabPosts = (): Post[] => {
    const allPosts = [...localPosts, ...SAMPLE_POSTS];
    if (activeTab === "all") return allPosts;
    const tabDef = TABS.find((t) => t.id === activeTab);
    if (!tabDef?.module) return allPosts;
    return allPosts.filter((p) => p.module === tabDef.module);
  };

  const selectedColor = MODULE_COLORS[selectedModule];
  const SelectedIcon = MODULE_ICONS[selectedModule] ?? TreePine;

  return (
    <div className="p-6 lg:p-8 max-w-2xl mx-auto" data-ocid="feed.page">
      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Social Feed
        </h1>
        <p className="text-muted-foreground mt-1">
          Share moments across Family, Community &amp; all modules
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-card mb-6">
        <div className="p-4">
          <div className="flex gap-3">
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarFallback className="text-xs font-label font-bold bg-primary/15 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <Textarea
              placeholder={`What's on your mind, ${userProfile?.name?.split(" ")[0] || "friend"}?`}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="resize-none border-0 focus-visible:ring-0 p-0 text-sm bg-transparent"
              rows={3}
              data-ocid="feed.post.textarea"
            />
          </div>
        </div>

        {showVideoInput && (
          <div className="px-4 pb-3 space-y-2">
            <div className="flex items-center gap-2">
              <Video size={14} className="text-muted-foreground shrink-0" />
              <input
                type="url"
                placeholder="Paste YouTube or Vimeo link..."
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="flex-1 text-xs bg-secondary/40 border border-border rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                data-ocid="feed.video.input"
              />
            </div>
            {videoLink &&
              (videoLink.includes("youtube") ||
                videoLink.includes("youtu.be") ||
                videoLink.includes("vimeo")) && (
                <div
                  className="rounded-xl border border-border aspect-video bg-muted/30 flex items-center justify-center"
                  data-ocid="feed.video.preview"
                >
                  <div className="text-center">
                    <Video
                      size={32}
                      className="mx-auto text-muted-foreground mb-2"
                    />
                    <p className="text-xs text-muted-foreground font-label">
                      Video: {videoLink.slice(0, 40)}...
                    </p>
                  </div>
                </div>
              )}
          </div>
        )}

        <div className="px-4 py-3 border-t border-border flex items-center gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 text-xs text-muted-foreground font-label"
          >
            <Image size={14} /> Photo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 text-xs text-muted-foreground font-label"
          >
            <Smile size={14} /> Feeling
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 text-xs text-muted-foreground font-label"
            onClick={() => setShowVideoInput((v) => !v)}
            data-ocid="feed.video.button"
          >
            <Video size={14} /> Video
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-xs font-label font-semibold px-2"
                style={{
                  background: `${selectedColor}15`,
                  color: selectedColor,
                }}
                data-ocid="feed.module.select"
              >
                <SelectedIcon size={13} />
                {selectedModule}
                <ChevronDown size={11} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              {POSTABLE_MODULES.map((mod) => {
                const ModIcon = MODULE_ICONS[mod] ?? TreePine;
                const modColor = MODULE_COLORS[mod];
                return (
                  <DropdownMenuItem
                    key={mod}
                    onClick={() => setSelectedModule(mod)}
                    className="gap-2 text-xs font-label"
                  >
                    <span
                      className="w-4 h-4 rounded flex items-center justify-center"
                      style={{ background: `${modColor}20`, color: modColor }}
                    >
                      <ModIcon size={11} />
                    </span>
                    {mod}
                    {selectedModule === mod && (
                      <span
                        className="ml-auto w-1.5 h-1.5 rounded-full"
                        style={{ background: modColor }}
                      />
                    )}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-xs font-label font-semibold px-2"
                style={{
                  background: `${PRIVACY_COLORS[selectedPrivacy]}12`,
                  color: PRIVACY_COLORS[selectedPrivacy],
                }}
                data-ocid="feed.privacy.select"
              >
                {PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)?.icon}
                {
                  PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)
                    ?.label
                }
                <ChevronDown size={11} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              {PRIVACY_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setSelectedPrivacy(opt.value)}
                  className="gap-2 text-xs font-label"
                >
                  <span className="text-sm">{opt.icon}</span>
                  {opt.label}
                  {selectedPrivacy === opt.value && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ background: PRIVACY_COLORS[opt.value] }}
                    />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            size="sm"
            className="ml-auto h-8 px-4 font-label"
            disabled={!postContent.trim()}
            onClick={handlePost}
            data-ocid="feed.post.submit_button"
          >
            Post
          </Button>
        </div>
      </div>

      <FeedTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="space-y-4">
        {getTabPosts().length === 0 ? (
          <div className="text-center py-12" data-ocid="feed.posts.empty_state">
            <p className="text-muted-foreground text-sm">
              No posts in this feed yet. Be the first to share something!
            </p>
          </div>
        ) : (
          getTabPosts().map((post, i) => (
            <div key={post.id} style={{ animationDelay: `${i * 0.04}s` }}>
              <PostCard post={post} />
            </div>
          ))
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <EventsTab
          moduleName="Social Feed"
          moduleColor="oklch(0.55 0.22 280)"
        />
      </div>
    </div>
  );
}
