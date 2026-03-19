import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useInternetIdentity } from "../hooks/useInternetIdentity";

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
  const { identity } = useInternetIdentity();
  const isLoggedIn = !!identity;

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

      {!isLoggedIn ? (
        <div className="bg-card border border-border rounded-xl shadow-card mb-6 p-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Sign in to share your thoughts with the community
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-label font-semibold text-primary-foreground"
            style={{ background: "oklch(0.65 0.25 335)" }}
          >
            Login to Post
          </button>
        </div>
      ) : (
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
                  {
                    PRIVACY_OPTIONS.find((p) => p.value === selectedPrivacy)
                      ?.icon
                  }
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
      )}

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

      {/* Games & Comics from IC Agents */}
      <GamesAndComicsSection />
    </div>
  );
}

const FEED_GAMES = [
  {
    id: 1,
    title: "Cricket Champions 2026",
    genre: "Sports",
    difficulty: "Medium",
    age: "All Ages",
  },
  {
    id: 2,
    title: "Mystic Jungle Quest",
    genre: "Adventure",
    difficulty: "Hard",
    age: "11-14",
  },
  {
    id: 3,
    title: "Chai Quiz Showdown",
    genre: "Trivia",
    difficulty: "Easy",
    age: "All Ages",
  },
  {
    id: 4,
    title: "Bollywood Beats Rush",
    genre: "Music",
    difficulty: "Easy",
    age: "16+",
  },
];

const FEED_COMICS = [
  {
    id: 1,
    title: "Monday Blues",
    punchline:
      "When your alarm goes off 5 min after you finally fell asleep 😅",
    mood: "funny",
  },
  {
    id: 2,
    title: "The Chai Diaries",
    punchline: "No meeting is complete without chai. Science. 🍵",
    mood: "wholesome",
  },
  {
    id: 3,
    title: "Tech Troubles",
    punchline: "Boss: This should take 5 min. Me: 3 days later... ⌛",
    mood: "sarcastic",
  },
  {
    id: 4,
    title: "Traffic Woes",
    punchline: "When the GPS says 10 min but Mumbai says otherwise 🚦",
    mood: "funny",
  },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "oklch(0.52 0.14 155)",
  Medium: "oklch(0.72 0.17 85)",
  Hard: "oklch(0.65 0.25 335)",
};
const MOOD_COLORS: Record<string, string> = {
  funny: "oklch(0.65 0.25 335)",
  sarcastic: "oklch(0.72 0.17 85)",
  wholesome: "oklch(0.52 0.14 155)",
};

// ─── Quiz Game Data ──────────────────────────────────────────────────────────
const QUIZ_DATA: Record<
  string,
  { q: string; options: string[]; answer: number }[]
> = {
  Sports: [
    {
      q: "Who holds the record for most Test cricket centuries?",
      options: [
        "Ricky Ponting",
        "Sachin Tendulkar",
        "Virat Kohli",
        "Brian Lara",
      ],
      answer: 1,
    },
    {
      q: "In which year did India win the Cricket World Cup?",
      options: ["1979", "1983", "1991", "2001"],
      answer: 1,
    },
    {
      q: "How many players are there in a hockey team?",
      options: ["9", "10", "11", "12"],
      answer: 2,
    },
    {
      q: "Which country invented Kabaddi?",
      options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
      answer: 1,
    },
    {
      q: "Sania Mirza is associated with which sport?",
      options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
      answer: 1,
    },
  ],
  Bollywood: [
    {
      q: "Which film won the first Filmfare Award for Best Film?",
      options: ["Mother India", "Do Bigha Zamin", "Awaara", "Pyaasa"],
      answer: 1,
    },
    {
      q: "Shah Rukh Khan's debut film was?",
      options: ["Dilwale", "Baazigar", "Deewana", "Darr"],
      answer: 2,
    },
    {
      q: "The song 'Jai Ho' belongs to which movie?",
      options: [
        "Chennai Express",
        "Slumdog Millionaire",
        "Jab Tak Hai Jaan",
        "Ra.One",
      ],
      answer: 1,
    },
    {
      q: "Who directed the film 'Sholay'?",
      options: ["Yash Chopra", "Ramesh Sippy", "Gulzar", "Raj Kapoor"],
      answer: 1,
    },
    {
      q: "Which actress played the role of Paro in Devdas (2002)?",
      options: ["Aishwarya Rai", "Madhuri Dixit", "Tabu", "Rani Mukerji"],
      answer: 0,
    },
  ],
  Tech: [
    {
      q: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Core Power Unit",
        "Computer Processing Utility",
        "Central Program Utility",
      ],
      answer: 0,
    },
    {
      q: "Which company made the first iPhone?",
      options: ["Samsung", "Google", "Apple", "Microsoft"],
      answer: 2,
    },
    {
      q: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Transfer Markup Language",
        "Hyper Text Making Language",
      ],
      answer: 0,
    },
    {
      q: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: 1,
    },
    {
      q: "What is the full form of AI?",
      options: [
        "Automated Intelligence",
        "Artificial Intelligence",
        "Applied Intelligence",
        "Advanced Intelligence",
      ],
      answer: 1,
    },
  ],
  History: [
    {
      q: "In which year did India gain independence?",
      options: ["1945", "1946", "1947", "1948"],
      answer: 2,
    },
    {
      q: "Who was the first Prime Minister of India?",
      options: [
        "Sardar Patel",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. Ambedkar",
      ],
      answer: 1,
    },
    {
      q: "The Mughal Empire was founded by?",
      options: ["Humayun", "Akbar", "Babur", "Aurangzeb"],
      answer: 2,
    },
    {
      q: "In which year was the Taj Mahal completed?",
      options: ["1632", "1648", "1653", "1665"],
      answer: 1,
    },
    {
      q: "Who launched the Quit India Movement?",
      options: [
        "Subhas Chandra Bose",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Bhagat Singh",
      ],
      answer: 2,
    },
  ],
  Science: [
    {
      q: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "HO"],
      answer: 0,
    },
    {
      q: "How many bones are in the adult human body?",
      options: ["186", "196", "206", "216"],
      answer: 2,
    },
    {
      q: "What planet is known as the Red Planet?",
      options: ["Jupiter", "Saturn", "Mars", "Venus"],
      answer: 2,
    },
    {
      q: "What is the speed of light?",
      options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"],
      answer: 0,
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 2,
    },
  ],
  Food: [
    {
      q: "Biryani originated from which cuisine?",
      options: ["Mughal/Persian", "South Indian", "Rajasthani", "Bengali"],
      answer: 0,
    },
    {
      q: "Which spice is known as 'black gold'?",
      options: ["Turmeric", "Cardamom", "Pepper", "Saffron"],
      answer: 2,
    },
    {
      q: "Idli is a dish from which Indian state?",
      options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      answer: 2,
    },
    {
      q: "Which vitamin is found in citrus fruits?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: 2,
    },
    {
      q: "What is paneer made from?",
      options: [
        "Soy milk",
        "Coconut milk",
        "Cow or buffalo milk",
        "Almond milk",
      ],
      answer: 2,
    },
  ],
};

const GENRES = [
  "Sports",
  "Bollywood",
  "Tech",
  "History",
  "Science",
  "Food",
] as const;
type Genre = (typeof GENRES)[number];

function QuizGameDialog({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"genre" | "quiz" | "score">("genre");
  const [genre, setGenre] = useState<Genre>("Sports");
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = QUIZ_DATA[genre];

  const reset = () => {
    setStep("genre");
    setQIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (idx: number) => {
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

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) {
          reset();
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-md" data-ocid="game.dialog">
        <DialogHeader>
          <DialogTitle className="font-display">
            {step === "genre"
              ? "🎮 Choose a Genre"
              : step === "quiz"
                ? `${genre} Quiz · Q${qIndex + 1}/5`
                : "🏆 Quiz Complete!"}
          </DialogTitle>
        </DialogHeader>

        {step === "genre" && (
          <div className="space-y-4 py-2">
            <p className="text-sm text-muted-foreground">
              Select a topic to start your 5-question quiz:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {GENRES.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${genre === g ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}
                  onClick={() => setGenre(g)}
                  data-ocid="game.genre_select"
                >
                  {g === "Sports"
                    ? "⚽"
                    : g === "Bollywood"
                      ? "🎬"
                      : g === "Tech"
                        ? "💻"
                        : g === "History"
                          ? "📜"
                          : g === "Science"
                            ? "🔬"
                            : "🍛"}{" "}
                  {g}
                </button>
              ))}
            </div>
            <Button
              className="w-full"
              onClick={() => setStep("quiz")}
              data-ocid="game.play_button"
            >
              Start Quiz
            </Button>
          </div>
        )}

        {step === "quiz" && (
          <div className="space-y-4 py-2">
            <div className="flex gap-1 mb-2">
              {questions.map((q, i) => (
                <div
                  key={q.q.slice(0, 20)}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${i < qIndex ? (answers[i] ? "bg-green-500" : "bg-red-500") : i === qIndex ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <p className="text-sm font-semibold leading-snug">
              {questions[qIndex].q}
            </p>
            <div className="grid grid-cols-1 gap-2">
              {questions[qIndex].options.map((opt, i) => {
                const optKey = `opt-${qIndex}-${i}`;
                let cls =
                  "p-3 rounded-xl border text-sm text-left transition-all cursor-pointer";
                if (selected !== null) {
                  if (i === questions[qIndex].answer)
                    cls +=
                      " border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700";
                  else if (i === selected)
                    cls +=
                      " border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700";
                  else cls += " border-border opacity-60";
                } else {
                  cls += " border-border hover:border-primary/60";
                }
                return (
                  <button
                    key={optKey}
                    type="button"
                    className={cls}
                    onClick={() => handleAnswer(i)}
                    data-ocid="game.answer_button"
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <Button
                className="w-full"
                onClick={handleNext}
                data-ocid="game.next_button"
              >
                {qIndex + 1 >= questions.length
                  ? "See Score"
                  : "Next Question →"}
              </Button>
            )}
          </div>
        )}

        {step === "score" && (
          <div
            className="flex flex-col items-center gap-4 py-4 text-center"
            data-ocid="game.score_panel"
          >
            <div
              className="text-5xl font-display font-black"
              style={{
                color:
                  score >= 4
                    ? "oklch(0.52 0.14 155)"
                    : score >= 2
                      ? "oklch(0.72 0.17 85)"
                      : "oklch(0.65 0.25 335)",
              }}
            >
              {score}/5
            </div>
            <p className="text-sm text-muted-foreground">
              {score === 5
                ? "Perfect score! 🎉 Genius!"
                : score >= 3
                  ? "Great job! 🙌 Keep it up!"
                  : "Good try! Practice more 💪"}
            </p>
            <div className="flex gap-1 mt-1">
              {answers.map((correct, i) => (
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: score display, fixed length
                  key={`score-result-${i}`}
                  className={`text-lg ${correct ? "text-green-500" : "text-red-500"}`}
                >
                  {correct ? "✓" : "✗"}
                </span>
              ))}
            </div>
            <Button
              onClick={reset}
              className="mt-2"
              data-ocid="game.play_button"
            >
              Play Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function GamesAndComicsSection() {
  const [open, setOpen] = useState(true);
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div
      className="mt-6 border border-border rounded-xl overflow-hidden"
      data-ocid="feed.games_comics.panel"
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-secondary/30 hover:bg-secondary/50 transition-colors"
        onClick={() => setOpen((p) => !p)}
        data-ocid="feed.games_comics.toggle"
      >
        <span className="text-sm font-semibold flex items-center gap-2">
          🎮 Games &amp; Comics from IC Agents
          <span
            className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
            style={{
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)",
            }}
          >
            ● Live
          </span>
        </span>
        <span className="text-xs text-muted-foreground">
          {open ? "▲ Collapse" : "▼ Expand"}
        </span>
      </button>

      {open && (
        <div className="p-4 space-y-5">
          {/* Games */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              🎮 Today&apos;s Games
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEED_GAMES.map((game) => (
                <div
                  key={game.id}
                  className="bg-card border border-border rounded-xl p-3 space-y-2"
                  data-ocid={`feed.game.card.${game.id}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold">{game.title}</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${DIFFICULTY_COLORS[game.difficulty] ?? "oklch(0.55 0.22 280)"}18`,
                        color:
                          DIFFICULTY_COLORS[game.difficulty] ??
                          "oklch(0.55 0.22 280)",
                      }}
                    >
                      {game.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {game.genre} · Age {game.age}
                  </p>
                  <button
                    type="button"
                    className="w-full rounded-lg py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    style={{ background: "oklch(0.55 0.22 280)" }}
                    onClick={() => setQuizOpen(true)}
                    data-ocid={`feed.game.primary_button.${game.id}`}
                  >
                    Play Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Comics */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              😄 Today&apos;s Comics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEED_COMICS.map((comic) => (
                <div
                  key={comic.id}
                  className="bg-card border border-border rounded-xl p-3 space-y-2 relative"
                  data-ocid={`feed.comic.card.${comic.id}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{comic.title}</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{
                        background: `${MOOD_COLORS[comic.mood]}18`,
                        color: MOOD_COLORS[comic.mood],
                      }}
                    >
                      {comic.mood}
                    </span>
                  </div>
                  <div className="relative bg-secondary/40 rounded-lg px-3 py-2">
                    <span className="text-xs text-foreground">
                      {comic.punchline}
                    </span>
                    <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-secondary/40 rotate-45" />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <ComicLikeButton comicId={comic.id} />
                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => {
                        import("sonner").then(({ toast }) =>
                          toast.success("Link copied to clipboard!"),
                        );
                      }}
                      data-ocid={`feed.comic.secondary_button.${comic.id}`}
                    >
                      <Share2 size={12} /> Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <QuizGameDialog open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
}

function ComicLikeButton({ comicId }: { comicId: number }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(Math.floor(Math.random() * 50) + 10);
  return (
    <button
      type="button"
      className={`flex items-center gap-1 text-xs transition-colors ${liked ? "text-pink-500" : "text-muted-foreground hover:text-foreground"}`}
      onClick={() => {
        setLiked((p) => !p);
        setCount((c) => (liked ? c - 1 : c + 1));
      }}
      data-ocid={`feed.comic.toggle.${comicId}`}
    >
      <Heart size={12} fill={liked ? "currentColor" : "none"} /> {count}
    </button>
  );
}
