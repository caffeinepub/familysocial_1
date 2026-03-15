import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Bookmark,
  Briefcase,
  ChefHat,
  Copy,
  Edit,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  Heart,
  ImageIcon,
  Info,
  Italic,
  Link,
  Lock,
  MessageCircle,
  Plane,
  Plus,
  Quote,
  Share2,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Trash2,
  TrendingUp,
  Underline,
  Users,
  Video,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";

// ─── Template definitions ────────────────────────────────────────────────────

interface Template {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  title: string;
  content: string;
  tags: string;
}

const TEMPLATES: Template[] = [
  {
    id: "product",
    label: "Product",
    icon: ShoppingBag,
    color: "oklch(0.52 0.14 155)",
    title: "Honest Review: [Product Name]",
    tags: "review, product, recommendation",
    content:
      "## Overview\n\nShare a brief introduction about the product and why you chose to review it.\n\n## Key Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n\n## What I Liked\n\nDescribe the positives — performance, design, value for money.\n\n## What Could Be Better\n\nHonest critique helps readers make better decisions.\n\n## Final Verdict\n\nWould you recommend it? Rating: ⭐⭐⭐⭐⭐\n\n## Where to Buy\n\nAdd affiliate link below 👇",
  },
  {
    id: "recipe",
    label: "Recipe",
    icon: ChefHat,
    color: "oklch(0.65 0.14 50)",
    title: "Recipe: [Dish Name]",
    tags: "recipe, food, cooking",
    content: `## About This Recipe\n\nA short story about this dish — where it's from, why you love it.\n\n## Ingredients\n\n- 2 cups of ...\n- 1 tbsp of ...\n- Salt to taste\n\n## Preparation Time\n\n⏱ Prep: 15 mins | Cook: 30 mins | Serves: 4\n\n## Instructions\n\n1. Begin by ...\n2. Then ...\n3. Finally ...\n\n## Chef's Tips\n\nShare your secret tricks for the perfect result!\n\n## Nutrition Info\n\nCalories per serving: ~350 kcal`,
  },
  {
    id: "travel",
    label: "Travel",
    icon: Plane,
    color: "oklch(0.55 0.22 280)",
    title: "My Trip to [Destination]",
    tags: "travel, trip, adventure",
    content:
      "## The Journey Begins\n\nSet the scene — when did you go, who with, and why this destination?\n\n## Day 1 — Arrival\n\nDescribe your first impressions. Where did you stay?\n\n## Top Attractions\n\n1. **[Place 1]** — why it was unforgettable\n2. **[Place 2]** — hidden gem alert\n3. **[Place 3]** — must-visit for foodies\n\n## Local Food Highlights\n\nWhat did you eat? Any must-try dishes?\n\n## Travel Tips\n\n- Best time to visit\n- How to get there\n- Budget estimate\n\n## Final Thoughts\n\nWould you go back?",
  },
  {
    id: "services",
    label: "Services",
    icon: Wrench,
    color: "oklch(0.58 0.16 350)",
    title: "Why You Need [Service Name]",
    tags: "services, business, recommendation",
    content: `## The Problem It Solves\n\nDescribe the pain point this service addresses.\n\n## How It Works\n\nStep-by-step breakdown of the service process.\n\n## Who Is It For?\n\n- Business owners who...\n- Homeowners who...\n- Professionals who...\n\n## Pricing & Packages\n\nShare typical pricing ranges and what's included.\n\n## My Experience\n\nPersonal testimonial — before and after.\n\n## How to Book\n\nContact details or affiliate booking link below 👇`,
  },
  {
    id: "educational",
    label: "Educational",
    icon: GraduationCap,
    color: "oklch(0.60 0.20 190)",
    title: "Everything You Need to Know About [Topic]",
    tags: "education, guide, learning",
    content:
      "## Introduction\n\nWhy is this topic important? Who should read this guide?\n\n## Background\n\nContext and history that helps readers understand the subject.\n\n## Core Concepts\n\n### Concept 1\nExplanation here...\n\n### Concept 2\nExplanation here...\n\n### Concept 3\nExplanation here...\n\n## Practical Application\n\nHow to use this knowledge in real life.\n\n## Common Misconceptions\n\nDebunk the myths.\n\n## Further Reading\n\nBooks, courses, and resources to go deeper.",
  },
  {
    id: "inspiration",
    label: "Inspiration",
    icon: Sparkles,
    color: "oklch(0.72 0.19 85)",
    title: "The Story That Changed Everything",
    tags: "inspiration, story, mindset",
    content: `## Where It All Began\n\nSet the scene. What was your life like before this turning point?\n\n## The Moment of Change\n\nDescribe the event, person, or realization that shifted your perspective.\n\n## What I Learned\n\n> "A quote that captures the lesson"\n\nBreak down the key insight in your own words.\n\n## How It Changed Me\n\nConcrete changes in behavior, mindset, or habits.\n\n## For You, Reading This\n\nWhat do you want your readers to take away?\n\n## Take the First Step\n\nEnd with an actionable challenge for your readers.`,
  },
  {
    id: "motivational",
    label: "Motivational",
    icon: Zap,
    color: "oklch(0.65 0.25 335)",
    title: "Stop Waiting. Start Now.",
    tags: "motivation, mindset, action",
    content: `## The Hard Truth\n\nOpen with a bold, honest statement that grabs attention.\n\n## Why Most People Stay Stuck\n\nIdentify the common excuses and limiting beliefs.\n\n## The Shift You Need to Make\n\n> "Discipline is choosing between what you want now and what you want most."\n\nBreak down the mindset shift in practical terms.\n\n## 3 Actions You Can Take Today\n\n1. **Action 1** — why it matters\n2. **Action 2** — the small win\n3. **Action 3** — the habit that compounds\n\n## Your Why\n\nHelp readers reconnect with their deepest motivation.\n\n## Final Word\n\nEnd with fire. Leave them ready to act.`,
  },
];

// ─── Sample published blogs ───────────────────────────────────────────────────

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  template: string;
  coverGradient: string;
  tags: string[];
  module: string;
  privacy: "private" | "friends" | "community" | "public";
  sponsored: boolean;
  views: number;
  affiliateLinks: number;
  likes: number;
  date: string;
  status: "published" | "draft";
}

const SAMPLE_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "Hands-On Review: The New DJI Mini 4 Pro Drone",
    excerpt:
      "After three weeks of testing, here is my complete verdict on DJI's latest compact drone — and why it might be the best purchase I made this year.",
    template: "product",
    coverGradient:
      "linear-gradient(135deg, oklch(0.52 0.14 155), oklch(0.40 0.12 190))",
    tags: ["review", "product", "tech", "drone"],
    module: "Products",
    privacy: "public",
    sponsored: true,
    views: 2847,
    affiliateLinks: 3,
    likes: 142,
    date: "Mar 1, 2026",
    status: "published",
  },
  {
    id: 2,
    title: "Lahori Chargha — My Grandmother's Secret Recipe",
    excerpt:
      "This family recipe has been passed down for three generations. The marinade alone takes 24 hours, but the result is worth every minute.",
    template: "recipe",
    coverGradient:
      "linear-gradient(135deg, oklch(0.65 0.14 50), oklch(0.72 0.17 85))",
    tags: ["recipe", "lahori", "food", "family"],
    module: "Community",
    privacy: "friends",
    sponsored: false,
    views: 1923,
    affiliateLinks: 1,
    likes: 318,
    date: "Feb 26, 2026",
    status: "published",
  },
  {
    id: 3,
    title: "7 Days in Northern Pakistan — Hunza Valley Travel Guide",
    excerpt:
      "Cherry blossom season in Hunza is one of the most breathtaking sights in the world. Here is a complete day-by-day itinerary for first-time visitors.",
    template: "travel",
    coverGradient:
      "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.65 0.25 335))",
    tags: ["travel", "pakistan", "hunza", "adventure"],
    module: "Travel",
    privacy: "public",
    sponsored: false,
    views: 5612,
    affiliateLinks: 5,
    likes: 891,
    date: "Feb 20, 2026",
    status: "published",
  },
  {
    id: 4,
    title: "How I Grew My Freelance Income to PKR 200K/Month",
    excerpt:
      "A complete breakdown of the platforms, skills, and strategies that took my freelance career from zero to six figures in under 18 months.",
    template: "educational",
    coverGradient:
      "linear-gradient(135deg, oklch(0.60 0.20 190), oklch(0.52 0.14 155))",
    tags: ["freelancing", "income", "career", "education"],
    module: "Jobs",
    privacy: "public",
    sponsored: false,
    views: 8341,
    affiliateLinks: 4,
    likes: 1204,
    date: "Feb 14, 2026",
    status: "published",
  },
  {
    id: 5,
    title: "The Phone Call That Rebuilt My Family",
    excerpt:
      "Three years of silence. One phone call. Here is the story of how I reconnected with my father and what I learned about forgiveness.",
    template: "inspiration",
    coverGradient:
      "linear-gradient(135deg, oklch(0.72 0.19 85), oklch(0.65 0.14 50))",
    tags: ["family", "inspiration", "healing", "story"],
    module: "Social Feed",
    privacy: "friends",
    sponsored: false,
    views: 3102,
    affiliateLinks: 0,
    likes: 567,
    date: "Feb 8, 2026",
    status: "published",
  },
  {
    id: 6,
    title: "Home Renovation on a Budget — AC Installation Guide",
    excerpt:
      "I renovated three rooms including full AC installation for under PKR 80,000. Here are the contractors I used, the prices I negotiated, and tips that saved thousands.",
    template: "services",
    coverGradient:
      "linear-gradient(135deg, oklch(0.58 0.16 350), oklch(0.65 0.25 335))",
    tags: ["home", "services", "renovation", "budget"],
    module: "Real Estate",
    privacy: "community",
    sponsored: true,
    views: 1587,
    affiliateLinks: 2,
    likes: 203,
    date: "Feb 2, 2026",
    status: "published",
  },
];

const DRAFT_BLOGS: BlogPost[] = [
  {
    id: 101,
    title: "Why I Left My 9-to-5 and Never Looked Back [DRAFT]",
    excerpt:
      "The real story — including the terrifying moments nobody talks about...",
    template: "motivational",
    coverGradient:
      "linear-gradient(135deg, oklch(0.65 0.25 335), oklch(0.55 0.22 280))",
    tags: ["motivation", "career", "life"],
    module: "Social Feed",
    privacy: "private",
    sponsored: false,
    views: 0,
    affiliateLinks: 0,
    likes: 0,
    date: "Mar 1, 2026",
    status: "draft",
  },
  {
    id: 102,
    title: "Karachi to Islamabad — Road Trip Safety Guide [DRAFT]",
    excerpt:
      "Planning the ultimate road trip across Pakistan with family safety checklist...",
    template: "travel",
    coverGradient:
      "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.60 0.20 190))",
    tags: ["travel", "road trip", "safety"],
    module: "Travel",
    privacy: "private",
    sponsored: false,
    views: 0,
    affiliateLinks: 0,
    likes: 0,
    date: "Feb 28, 2026",
    status: "draft",
  },
];

// ─── Affiliate data ───────────────────────────────────────────────────────────

interface AffiliateLink {
  id: number;
  title: string;
  module: string;
  moduleColor: string;
  commissionPct: number;
  clicks: number;
  earnings: number;
  status: "active" | "pending" | "expired";
  icon: React.ElementType;
}

const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    id: 1,
    title: "DJI Mini 4 Pro — Drone",
    module: "Products",
    moduleColor: "oklch(0.52 0.14 155)",
    commissionPct: 8,
    clicks: 412,
    earnings: 18400,
    status: "active",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Hunza Valley Tour Package — 7 Days",
    module: "Travel",
    moduleColor: "oklch(0.55 0.22 280)",
    commissionPct: 12,
    clicks: 287,
    earnings: 9200,
    status: "active",
    icon: Plane,
  },
  {
    id: 3,
    title: "3BHK Apartment — DHA Phase 6, Lahore",
    module: "Real Estate",
    moduleColor: "oklch(0.58 0.16 350)",
    commissionPct: 2,
    clicks: 184,
    earnings: 4800,
    status: "active",
    icon: Bookmark,
  },
  {
    id: 4,
    title: "Full-Stack Web Dev Course — Batch 12",
    module: "Education",
    moduleColor: "oklch(0.60 0.20 190)",
    commissionPct: 15,
    clicks: 163,
    earnings: 1900,
    status: "active",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Amazon.pk — Electronics (External)",
    module: "External",
    moduleColor: "oklch(0.65 0.14 50)",
    commissionPct: 5,
    clicks: 238,
    earnings: 2100,
    status: "pending",
    icon: ExternalLink,
  },
  {
    id: 6,
    title: "Physiotherapy Session — Dr. Aisha Clinic",
    module: "Healthcare",
    moduleColor: "oklch(0.65 0.25 335)",
    commissionPct: 10,
    clicks: 91,
    earnings: 0,
    status: "expired",
    icon: Heart,
  },
];

// Internal items per module for browsing
const INTERNAL_ITEMS: Record<
  string,
  { id: number; title: string; price: string; category: string }[]
> = {
  Products: [
    {
      id: 1,
      title: "Samsung Galaxy S25 Ultra",
      price: "PKR 285,000",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Bridal Lehenga — Gulabo Collection",
      price: "PKR 45,000",
      category: "Fashion",
    },
    {
      id: 3,
      title: "Honda CB150F Motorcycle",
      price: "PKR 430,000",
      category: "Vehicles",
    },
    {
      id: 4,
      title: "Kenwood Chef Mixer",
      price: "PKR 22,500",
      category: "Kitchen",
    },
    {
      id: 5,
      title: "Nike Air Max 270",
      price: "PKR 18,000",
      category: "Footwear",
    },
  ],
  Services: [
    {
      id: 1,
      title: "Home AC Installation & Maintenance",
      price: "PKR 8,000",
      category: "Home",
    },
    {
      id: 2,
      title: "Wedding Photography Package",
      price: "PKR 75,000",
      category: "Photography",
    },
    {
      id: 3,
      title: "Logo Design & Brand Identity",
      price: "PKR 15,000",
      category: "Design",
    },
    {
      id: 4,
      title: "Math & Physics Tutor (Grade 9-12)",
      price: "PKR 5,000/mo",
      category: "Education",
    },
  ],
  "Real Estate": [
    {
      id: 1,
      title: "3BHK Apartment — DHA Phase 6, Lahore",
      price: "PKR 2.8 Cr",
      category: "Sale",
    },
    {
      id: 2,
      title: "Commercial Shop — MM Alam Road",
      price: "PKR 95,000/mo",
      category: "Rent",
    },
    {
      id: 3,
      title: "1 Kanal House — Bahria Town Karachi",
      price: "PKR 4.2 Cr",
      category: "Sale",
    },
    {
      id: 4,
      title: "Studio Apartment — F-11, Islamabad",
      price: "PKR 55,000/mo",
      category: "Rent",
    },
  ],
  Travel: [
    {
      id: 1,
      title: "Hunza Valley — 7 Day Premium Tour",
      price: "PKR 85,000/person",
      category: "Package",
    },
    {
      id: 2,
      title: "Lahore Heritage Walking Tour",
      price: "PKR 3,500/person",
      category: "Day Tour",
    },
    {
      id: 3,
      title: "Fairy Meadows Trek — 5 Days",
      price: "PKR 65,000/person",
      category: "Adventure",
    },
    {
      id: 4,
      title: "Murree Family Weekend Package",
      price: "PKR 28,000/family",
      category: "Package",
    },
  ],
  Jobs: [
    {
      id: 1,
      title: "Senior React Developer — TechPK",
      price: "PKR 180,000/mo",
      category: "Full-time",
    },
    {
      id: 2,
      title: "Delivery Rider — Foodpanda Zone",
      price: "PKR 600/delivery",
      category: "Part-time",
    },
    {
      id: 3,
      title: "Social Media Manager",
      price: "PKR 75,000/mo",
      category: "Full-time",
    },
    {
      id: 4,
      title: "Freelance Content Writer",
      price: "PKR 3/word",
      category: "Freelance",
    },
  ],
  Healthcare: [
    {
      id: 1,
      title: "Full Body Checkup Package",
      price: "PKR 4,500",
      category: "Diagnostic",
    },
    {
      id: 2,
      title: "Physiotherapy — 10 Sessions",
      price: "PKR 12,000",
      category: "Therapy",
    },
    {
      id: 3,
      title: "Dental Cleaning & Consultation",
      price: "PKR 2,500",
      category: "Dental",
    },
    {
      id: 4,
      title: "Nutritionist — Monthly Plan",
      price: "PKR 8,000/mo",
      category: "Nutrition",
    },
  ],
};

// Performance data
const PERFORMANCE_ROWS = [
  {
    blog: "DJI Mini 4 Pro Review",
    link: "DJI Mini 4 Pro",
    module: "Products",
    clicks: 412,
    conversions: 28,
    earned: 18400,
    status: "active",
  },
  {
    blog: "Hunza Valley Guide",
    link: "7-Day Hunza Tour",
    module: "Travel",
    clicks: 287,
    conversions: 19,
    earned: 9200,
    status: "active",
  },
  {
    blog: "Freelance Income Guide",
    link: "Full-Stack Course",
    module: "Education",
    clicks: 163,
    conversions: 12,
    earned: 1900,
    status: "active",
  },
  {
    blog: "Home Renovation Guide",
    link: "AC Installation Service",
    module: "Services",
    clicks: 201,
    conversions: 8,
    earned: 2400,
    status: "active",
  },
  {
    blog: "Hunza Valley Guide",
    link: "Fairy Meadows Trek",
    module: "Travel",
    clicks: 145,
    conversions: 6,
    earned: 1800,
    status: "active",
  },
  {
    blog: "DJI Mini 4 Pro Review",
    link: "Amazon.pk Electronics",
    module: "External",
    clicks: 238,
    conversions: 11,
    earned: 2100,
    status: "pending",
  },
  {
    blog: "Lahore Property Guide",
    link: "DHA Phase 6 Apartment",
    module: "Real Estate",
    clicks: 184,
    conversions: 3,
    earned: 4800,
    status: "active",
  },
  {
    blog: "Family Healing Story",
    link: "Physiotherapy Sessions",
    module: "Healthcare",
    clicks: 91,
    conversions: 0,
    earned: 0,
    status: "expired",
  },
];

const REFERRAL_ROWS = [
  {
    code: "FS-A2F3-2026",
    user: "Zara Malik",
    date: "Mar 1, 2026",
    action: "Product Purchase",
    commission: "PKR 850",
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Ahmed Raza",
    date: "Feb 27, 2026",
    action: "Tour Booking",
    commission: "PKR 2,400",
    status: "pending",
  },
  {
    code: "FS-A2F3-2026",
    user: "Fatima Khan",
    date: "Feb 24, 2026",
    action: "Course Enrollment",
    commission: "PKR 750",
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Omar Siddiqui",
    date: "Feb 20, 2026",
    action: "Property Inquiry",
    commission: "PKR 1,200",
    status: "pending",
  },
  {
    code: "FS-A2F3-2026",
    user: "Aisha Tariq",
    date: "Feb 15, 2026",
    action: "Service Booking",
    commission: "PKR 400",
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Hassan Ali",
    date: "Feb 10, 2026",
    action: "Job Application",
    commission: "PKR 600",
    status: "pending",
  },
];

// ─── Helper components ────────────────────────────────────────────────────────

const MODULE_COLORS: Record<string, string> = {
  Products: "oklch(0.52 0.14 155)",
  Services: "oklch(0.65 0.14 50)",
  "Real Estate": "oklch(0.58 0.16 350)",
  Travel: "oklch(0.55 0.22 280)",
  Jobs: "oklch(0.48 0.12 260)",
  Healthcare: "oklch(0.65 0.25 335)",
  Education: "oklch(0.60 0.20 190)",
  Community: "oklch(0.72 0.19 85)",
  "Social Feed": "oklch(0.52 0.14 155)",
  External: "oklch(0.65 0.14 50)",
};

const PRIVACY_CONFIG = {
  private: { label: "Private", icon: Lock, color: "oklch(0.55 0.22 25)" },
  friends: {
    label: "Friends Only",
    icon: Users,
    color: "oklch(0.52 0.14 155)",
  },
  community: { label: "Community", icon: Globe, color: "oklch(0.60 0.20 190)" },
  public: { label: "Public", icon: Globe, color: "oklch(0.52 0.14 155)" },
};

function ModuleBadge({ module }: { module: string }) {
  const color = MODULE_COLORS[module] || "oklch(0.52 0.14 155)";
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: `${color}18`, color }}
    >
      {module}
    </span>
  );
}

function StatusBadge({
  status,
}: { status: "active" | "pending" | "expired" | "paid" | string }) {
  const configs: Record<string, { bg: string; color: string; label: string }> =
    {
      active: {
        bg: "oklch(0.52 0.14 155 / 0.12)",
        color: "oklch(0.32 0.10 155)",
        label: "Active",
      },
      pending: {
        bg: "oklch(0.72 0.17 85 / 0.15)",
        color: "oklch(0.48 0.14 65)",
        label: "Pending",
      },
      expired: {
        bg: "oklch(0.55 0.22 25 / 0.12)",
        color: "oklch(0.45 0.18 25)",
        label: "Expired",
      },
      paid: {
        bg: "oklch(0.52 0.14 155 / 0.12)",
        color: "oklch(0.32 0.10 155)",
        label: "Paid",
      },
    };
  const cfg = configs[status] || configs.pending;
  return (
    <span
      className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BlogPage() {
  // Composer state
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [coverUrl, setCoverUrl] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postTags, setPostTags] = useState("");
  const [postPrivacy, setPostPrivacy] = useState("public");
  const [postModule, setPostModule] = useState("Social Feed");
  const [isSponsored, setIsSponsored] = useState(false);

  // My blogs state
  const [blogFilter, setBlogFilter] = useState<"published" | "draft">(
    "published",
  );
  const [publishedBlogs, setPublishedBlogs] =
    useState<BlogPost[]>(SAMPLE_BLOGS);
  const [draftBlogs, setDraftBlogs] = useState<BlogPost[]>(DRAFT_BLOGS);

  // Affiliate state
  const [affiliateLinks, setAffiliateLinks] =
    useState<AffiliateLink[]>(AFFILIATE_LINKS);
  const [activeModule, setActiveModule] = useState("Products");
  const [extUrl, setExtUrl] = useState("");
  const [extTitle, setExtTitle] = useState("");
  const [extDesc, setExtDesc] = useState("");
  const [extCommission, setExtCommission] = useState("5");
  const [extCategory, setExtCategory] = useState("Products");
  const [perfModuleFilter, setPerfModuleFilter] = useState("All");
  const [addingCommission, setAddingCommission] = useState<
    Record<number, string>
  >({});

  const referralCode = "FS-A2F3-2026";

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} copied to clipboard`);
    });
  }

  function applyTemplate(t: Template) {
    setSelectedTemplate(t.id);
    setPostTitle(t.title);
    setPostContent(t.content);
    setPostTags(t.tags);
  }

  function insertFormatting(type: string) {
    const formats: Record<string, string> = {
      h1: "\n# ",
      h2: "\n## ",
      h3: "\n### ",
      bold: "**bold text**",
      italic: "_italic text_",
      underline: "__underlined__",
      bullet: "\n- item\n- item\n- item",
      numbered: "\n1. First\n2. Second\n3. Third",
      quote: "\n> Your quote here",
      hr: "\n\n---\n\n",
    };
    setPostContent((prev) => prev + (formats[type] || ""));
  }

  function handlePublish() {
    if (!postTitle.trim()) {
      toast.error("Please add a title before publishing.");
      return;
    }
    const template = TEMPLATES.find((t) => t.id === selectedTemplate);
    const newPost: BlogPost = {
      id: Date.now(),
      title: postTitle,
      excerpt: postContent
        .replace(/[#*_>\n-]/g, " ")
        .trim()
        .slice(0, 100),
      template: selectedTemplate || "educational",
      coverGradient: template
        ? `linear-gradient(135deg, ${template.color}, oklch(0.55 0.22 280))`
        : "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.65 0.25 335))",
      tags: postTags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      module: postModule,
      privacy: postPrivacy as BlogPost["privacy"],
      sponsored: isSponsored,
      views: 0,
      affiliateLinks: 0,
      likes: 0,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "published",
    };
    setPublishedBlogs((prev) => [newPost, ...prev]);
    // Reset
    setPostTitle("");
    setPostContent("");
    setPostTags("");
    setCoverUrl("");
    setSelectedTemplate(null);
    setIsSponsored(false);
    toast.success("Blog published successfully!");
  }

  function handleSaveDraft() {
    if (!postTitle.trim()) {
      toast.error("Please add a title before saving.");
      return;
    }
    toast.success("Draft saved!");
  }

  function handleDeleteBlog(id: number, isDraft: boolean) {
    if (isDraft) {
      setDraftBlogs((prev) => prev.filter((b) => b.id !== id));
    } else {
      setPublishedBlogs((prev) => prev.filter((b) => b.id !== id));
    }
    toast.success("Blog deleted.");
  }

  function handleAddAffiliate(item: {
    id: number;
    title: string;
    price: string;
    category: string;
  }) {
    const commission = addingCommission[item.id] || "8";
    const newLink: AffiliateLink = {
      id: Date.now(),
      title: item.title,
      module: activeModule,
      moduleColor: MODULE_COLORS[activeModule] || "oklch(0.52 0.14 155)",
      commissionPct: Number.parseFloat(commission),
      clicks: 0,
      earnings: 0,
      status: "pending",
      icon: ShoppingBag,
    };
    setAffiliateLinks((prev) => [newLink, ...prev]);
    toast.success(`"${item.title}" added as affiliate link`);
  }

  function handleAddExternal() {
    if (!extUrl.trim() || !extTitle.trim()) {
      toast.error("Please fill in URL and Title.");
      return;
    }
    const newLink: AffiliateLink = {
      id: Date.now(),
      title: extTitle,
      module: "External",
      moduleColor: "oklch(0.65 0.14 50)",
      commissionPct: Number.parseFloat(extCommission) || 5,
      clicks: 0,
      earnings: 0,
      status: "pending",
      icon: ExternalLink,
    };
    setAffiliateLinks((prev) => [newLink, ...prev]);
    setExtUrl("");
    setExtTitle("");
    setExtDesc("");
    setExtCommission("5");
    toast.success("External affiliate link added!");
  }

  const filteredPerf =
    perfModuleFilter === "All"
      ? PERFORMANCE_ROWS
      : PERFORMANCE_ROWS.filter((r) => r.module === perfModuleFilter);

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Blog & Affiliate
        </h1>
        <p className="text-muted-foreground mt-1">
          Write, publish, and earn through affiliate marketing
        </p>
      </div>

      <QuickAddBar moduleName="Blog" />

      <Tabs defaultValue="write" className="animate-fade-up">
        <TabsList className="mb-6 h-10">
          <TabsTrigger value="write" className="font-label text-sm">
            ✍️ Write
          </TabsTrigger>
          <TabsTrigger value="my-blogs" className="font-label text-sm">
            📖 My Blogs
          </TabsTrigger>
          <TabsTrigger value="travel-blog" className="font-label text-sm">
            ✈️ Travel Blog
          </TabsTrigger>
          <TabsTrigger value="affiliate" className="font-label text-sm">
            🔗 Affiliate
          </TabsTrigger>
        </TabsList>

        {/* ── TAB 1: WRITE ─────────────────────────────────────────── */}
        <TabsContent value="write" className="mt-0">
          {/* Template picker */}
          <div className="mb-5">
            <p className="text-sm font-label font-semibold text-foreground mb-3">
              Start with a template
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {TEMPLATES.map((t) => {
                const Icon = t.icon;
                const isSelected = selectedTemplate === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => applyTemplate(t)}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-150 hover:scale-105"
                    style={{
                      borderColor: isSelected
                        ? t.color
                        : "oklch(var(--border))",
                      background: isSelected
                        ? `${t.color}15`
                        : "oklch(var(--card))",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${t.color}20` }}
                    >
                      <Icon size={16} style={{ color: t.color }} />
                    </div>
                    <span className="text-[10px] font-label font-semibold text-foreground leading-tight text-center">
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Composer */}
          <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
            {/* Cover image */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <ImageIcon size={16} className="text-muted-foreground shrink-0" />
              <Input
                placeholder="Cover image URL (optional)"
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                className="border-0 focus-visible:ring-0 p-0 h-auto text-sm bg-transparent"
              />
            </div>

            {/* Title */}
            <div className="p-4 border-b border-border">
              <Input
                placeholder="Post title..."
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="border-0 focus-visible:ring-0 p-0 h-auto text-xl font-display font-bold bg-transparent placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Toolbar */}
            <div className="px-4 py-2 border-b border-border flex flex-wrap items-center gap-1">
              {[
                { type: "h1", label: "H1" },
                { type: "h2", label: "H2" },
                { type: "h3", label: "H3" },
              ].map(({ type, label }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => insertFormatting(type)}
                  className="px-2 py-1 rounded text-xs font-label font-bold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="w-px h-5 bg-border mx-1" />
              {[
                { type: "bold", icon: Bold },
                { type: "italic", icon: Italic },
                { type: "underline", icon: Underline },
              ].map(({ type, icon: Icon }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => insertFormatting(type)}
                  className="p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <Icon size={14} />
                </button>
              ))}
              <div className="w-px h-5 bg-border mx-1" />
              {[
                { type: "bullet", icon: Info, label: "•" },
                { type: "numbered", icon: Info, label: "1." },
              ].map(({ type, label }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => insertFormatting(type)}
                  className="px-2 py-1 rounded text-xs font-label font-bold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => insertFormatting("quote")}
                className="p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Quote size={14} />
              </button>
              <div className="w-px h-5 bg-border mx-1" />
              <button
                type="button"
                onClick={() => {
                  const url = prompt("Image URL:");
                  if (url) setPostContent((p) => `${p}\n![Image](${url})\n`);
                }}
                className="p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Insert Image"
              >
                <ImageIcon size={14} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const url = prompt("YouTube video URL:");
                  if (url) setPostContent((p) => `${p}\n[VIDEO: ${url}]\n`);
                }}
                className="p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Insert Video"
              >
                <Video size={14} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const url = prompt("Affiliate link URL:");
                  const label = prompt("Link label:");
                  if (url && label)
                    setPostContent((p) => `${p}\n[${label}](${url})\n`);
                }}
                className="p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Insert Link"
              >
                <Link size={14} />
              </button>
              <button
                type="button"
                onClick={() => insertFormatting("hr")}
                className="px-2 py-1 rounded text-xs font-label text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Divider"
              >
                ─
              </button>
            </div>

            {/* Content area */}
            <Textarea
              placeholder="Start writing your post... (Markdown supported)"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="border-0 focus-visible:ring-0 rounded-none min-h-64 text-sm leading-relaxed resize-none bg-transparent"
            />

            {/* Tags */}
            <div className="px-4 py-3 border-t border-border flex items-center gap-2">
              <Tag size={14} className="text-muted-foreground shrink-0" />
              <Input
                placeholder="Tags (comma separated: travel, food, lifestyle)"
                value={postTags}
                onChange={(e) => setPostTags(e.target.value)}
                className="border-0 focus-visible:ring-0 p-0 h-auto text-sm bg-transparent"
              />
            </div>

            {/* Bottom bar */}
            <div className="px-4 py-3 border-t border-border bg-secondary/20 flex flex-wrap items-center gap-3">
              {/* Privacy */}
              <Select value={postPrivacy} onValueChange={setPostPrivacy}>
                <SelectTrigger className="h-8 w-36 text-xs font-label">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">🔒 Private</SelectItem>
                  <SelectItem value="friends">👥 Friends Only</SelectItem>
                  <SelectItem value="community">🏘️ Community</SelectItem>
                  <SelectItem value="public">🌍 Public</SelectItem>
                </SelectContent>
              </Select>

              {/* Module */}
              <Select value={postModule} onValueChange={setPostModule}>
                <SelectTrigger className="h-8 w-40 text-xs font-label">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Social Feed",
                    "Community",
                    "Jobs",
                    "Products",
                    "Real Estate",
                    "Travel",
                    "Healthcare",
                    "Blog",
                  ].map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sponsored toggle */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSponsored}
                  onChange={(e) => setIsSponsored(e.target.checked)}
                  className="w-3.5 h-3.5 accent-primary"
                />
                <span className="text-xs font-label text-muted-foreground">
                  Sponsored
                </span>
              </label>

              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs font-label"
                  onClick={handleSaveDraft}
                >
                  Save Draft
                </Button>
                <Button
                  size="sm"
                  className="h-8 text-xs font-label"
                  style={{
                    background: "oklch(var(--primary))",
                    color: "oklch(var(--primary-foreground))",
                  }}
                  onClick={handlePublish}
                >
                  Publish Post
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ── TAB 2: MY BLOGS ──────────────────────────────────────── */}
        <TabsContent value="my-blogs" className="mt-0">
          {/* Filter toggle */}
          <div className="flex items-center gap-2 mb-5">
            <button
              type="button"
              onClick={() => setBlogFilter("published")}
              className="px-4 py-1.5 rounded-full text-sm font-label font-semibold transition-all"
              style={{
                background:
                  blogFilter === "published"
                    ? "oklch(var(--primary))"
                    : "oklch(var(--secondary))",
                color:
                  blogFilter === "published"
                    ? "oklch(var(--primary-foreground))"
                    : "oklch(var(--secondary-foreground))",
              }}
            >
              Published ({publishedBlogs.length})
            </button>
            <button
              type="button"
              onClick={() => setBlogFilter("draft")}
              className="px-4 py-1.5 rounded-full text-sm font-label font-semibold transition-all"
              style={{
                background:
                  blogFilter === "draft"
                    ? "oklch(var(--primary))"
                    : "oklch(var(--secondary))",
                color:
                  blogFilter === "draft"
                    ? "oklch(var(--primary-foreground))"
                    : "oklch(var(--secondary-foreground))",
              }}
            >
              Drafts ({draftBlogs.length})
            </button>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {(blogFilter === "published" ? publishedBlogs : draftBlogs).map(
              (blog) => {
                const privacyConfig = PRIVACY_CONFIG[blog.privacy];
                const PrivacyIcon = privacyConfig.icon;
                return (
                  <div
                    key={blog.id}
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow"
                  >
                    {/* Cover */}
                    <div
                      className="h-36 relative"
                      style={{ background: blog.coverGradient }}
                    >
                      {blog.sponsored && (
                        <span
                          className="absolute top-2 right-2 text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.72 0.19 85 / 0.9)",
                            color: "oklch(0.15 0.02 85)",
                          }}
                        >
                          SPONSORED
                        </span>
                      )}
                      {blog.status === "draft" && (
                        <span
                          className="absolute top-2 left-2 text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.15 0.02 280 / 0.7)",
                            color: "oklch(0.95 0.01 280)",
                          }}
                        >
                          DRAFT
                        </span>
                      )}
                    </div>

                    <div className="p-4">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        <ModuleBadge module={blog.module} />
                        <span
                          className="inline-flex items-center gap-0.5 text-[10px] font-label font-semibold px-1.5 py-0.5 rounded-full"
                          style={{
                            background: `${privacyConfig.color}15`,
                            color: privacyConfig.color,
                          }}
                        >
                          <PrivacyIcon size={9} />
                          {privacyConfig.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1 line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-label px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      {blog.status === "published" && (
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-label mb-3">
                          <span className="flex items-center gap-1">
                            <Eye size={11} /> {blog.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={11} /> {blog.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Link size={11} /> {blog.affiliateLinks} links
                          </span>
                          <span className="ml-auto text-[10px]">
                            {blog.date}
                          </span>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        {blog.status === "published" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs font-label flex-1"
                            onClick={() =>
                              toast.info("Promotion feature coming soon!")
                            }
                          >
                            <TrendingUp size={11} className="mr-1" /> Boost Post
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          title="Edit"
                        >
                          <Edit size={13} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          title="Delete"
                          onClick={() =>
                            handleDeleteBlog(blog.id, blog.status === "draft")
                          }
                        >
                          <Trash2 size={13} />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </TabsContent>

        {/* ── TAB 3: AFFILIATE ─────────────────────────────────────── */}

        {/* Travel Blog */}
        <TabsContent value="travel-blog" className="mt-0">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-bold">Travel Blogs</h2>
              <span className="text-xs text-muted-foreground">
                Auto-curated from around the world
              </span>
            </div>

            {/* Add Travel Blog Form */}
            <div
              className="rounded-2xl border border-border bg-card p-5 space-y-4"
              data-ocid="travelblog.panel"
            >
              <h3 className="text-sm font-semibold">Write a Travel Blog</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Place Name</p>
                  <input
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                    placeholder="e.g. Coorg, Karnataka"
                    data-ocid="travelblog.input"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <input
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                    placeholder="e.g. South India"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Cover Image URL
                  </p>
                  <input
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Social Media Handles
                  </p>
                  <input
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                    placeholder="@handle (Instagram, Pinterest...)"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Description</p>
                <textarea
                  className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-border bg-background min-h-[100px]"
                  placeholder="Describe the place, your experience, tips..."
                  data-ocid="travelblog.textarea"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-xs rounded-lg border border-border bg-muted hover:bg-muted/80 transition-colors font-label"
                  onClick={() =>
                    alert(
                      "Fetching place info... (simulated). Added: Best time to visit, local cuisine, weather, nearby attractions.",
                    )
                  }
                  data-ocid="travelblog.secondary_button"
                >
                  🌐 Fetch Place Info
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-label"
                  onClick={() => alert("Travel blog published!")}
                  data-ocid="travelblog.primary_button"
                >
                  Publish Blog
                </button>
              </div>
            </div>

            {/* Sample travel blogs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  place: "Coorg, Karnataka",
                  desc: "The Scotland of India — misty hills, coffee estates, and pristine waterfalls await.",
                  img: "https://source.unsplash.com/300x200/?coorg,india",
                  handle: "@travel_india",
                },
                {
                  place: "Spiti Valley, HP",
                  desc: "Cold desert mountains with Buddhist monasteries and breathtaking stargazing at 4400m.",
                  img: "https://source.unsplash.com/300x200/?spiti,himalaya",
                  handle: "@himalayan_trails",
                },
                {
                  place: "Hampi, Karnataka",
                  desc: "Ancient ruins of the Vijayanagara Empire set against surreal boulder landscapes.",
                  img: "https://source.unsplash.com/300x200/?hampi,ruins",
                  handle: "@heritage_india",
                },
              ].map((blog, i) => (
                <div
                  key={blog.place}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                  data-ocid={`travelblog.item.${i + 1}`}
                >
                  <img
                    src={blog.img}
                    alt={blog.place}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <p className="text-sm font-display font-bold">
                      {blog.place}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {blog.desc}
                    </p>
                    <p className="text-[10px] text-primary">{blog.handle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="affiliate" className="mt-0">
          <Tabs defaultValue="my-links">
            <TabsList className="mb-5 h-9">
              <TabsTrigger value="my-links" className="text-xs font-label">
                My Links
              </TabsTrigger>
              <TabsTrigger value="add" className="text-xs font-label">
                Add Affiliate
              </TabsTrigger>
              <TabsTrigger value="performance" className="text-xs font-label">
                Performance
              </TabsTrigger>
            </TabsList>

            {/* MY LINKS */}
            <TabsContent value="my-links" className="mt-0">
              {/* Referral code */}
              <div
                className="flex items-center justify-between p-4 rounded-xl mb-5 border"
                style={{
                  background: "oklch(0.55 0.22 280 / 0.08)",
                  borderColor: "oklch(0.55 0.22 280 / 0.3)",
                }}
              >
                <div>
                  <p className="text-xs font-label text-muted-foreground mb-0.5">
                    Your Referral Code
                  </p>
                  <p className="text-xl font-display font-bold text-foreground tracking-widest">
                    {referralCode}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Share this code to earn commissions on every referral
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={() => copyToClipboard(referralCode, "Referral code")}
                >
                  <Copy size={13} className="mr-1.5" /> Copy Code
                </Button>
              </div>

              {/* Link cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {affiliateLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={link.id}
                      className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${link.moduleColor}15` }}
                      >
                        <Icon size={16} style={{ color: link.moduleColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-sm font-label font-semibold text-foreground leading-snug line-clamp-1">
                            {link.title}
                          </p>
                          <StatusBadge status={link.status} />
                        </div>
                        <ModuleBadge module={link.module} />
                        <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground font-label">
                          <span>{link.commissionPct}% commission</span>
                          <span>{link.clicks} clicks</span>
                          <span
                            className="font-semibold"
                            style={{ color: "oklch(0.52 0.14 155)" }}
                          >
                            PKR {link.earnings.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 shrink-0"
                        title="Share Link"
                        onClick={() =>
                          copyToClipboard(
                            `https://familysocial.pk/affiliate/${link.id}?ref=${referralCode}`,
                            "Affiliate link",
                          )
                        }
                      >
                        <Share2 size={13} />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* ADD AFFILIATE */}
            <TabsContent value="add" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* From FamilySocial */}
                <div>
                  <h3 className="font-label font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Star size={15} style={{ color: "oklch(0.55 0.22 280)" }} />
                    From FamilySocial Modules
                  </h3>
                  {/* Module tabs */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {Object.keys(INTERNAL_ITEMS).map((mod) => (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => setActiveModule(mod)}
                        className="px-2.5 py-1 rounded-full text-[11px] font-label font-semibold transition-all"
                        style={{
                          background:
                            activeModule === mod
                              ? MODULE_COLORS[mod] || "oklch(var(--primary))"
                              : "oklch(var(--secondary))",
                          color:
                            activeModule === mod
                              ? "oklch(0.98 0.005 280)"
                              : "oklch(var(--secondary-foreground))",
                        }}
                      >
                        {mod}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {(INTERNAL_ITEMS[activeModule] || []).map((item) => (
                      <div
                        key={item.id}
                        className="bg-card border border-border rounded-lg p-3 flex items-center gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-label font-medium text-foreground line-clamp-1">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">
                              {item.price}
                            </span>
                            <span className="text-[10px] font-label px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Input
                            type="number"
                            placeholder="Commission %"
                            value={addingCommission[item.id] ?? "8"}
                            onChange={(e) =>
                              setAddingCommission((prev) => ({
                                ...prev,
                                [item.id]: e.target.value,
                              }))
                            }
                            className="w-20 h-7 text-xs"
                          />
                          <Button
                            size="sm"
                            className="h-7 text-xs font-label"
                            onClick={() => handleAddAffiliate(item)}
                          >
                            <Plus size={11} className="mr-1" /> Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External link */}
                <div>
                  <h3 className="font-label font-semibold text-foreground mb-3 flex items-center gap-2">
                    <ExternalLink
                      size={15}
                      style={{ color: "oklch(0.65 0.25 335)" }}
                    />
                    External Affiliate Link
                  </h3>
                  <div className="bg-card border border-border rounded-xl p-4 space-y-3">
                    <div>
                      <label
                        htmlFor="ext-url"
                        className="text-xs font-label font-semibold text-muted-foreground mb-1 block"
                      >
                        URL *
                      </label>
                      <Input
                        id="ext-url"
                        placeholder="https://affiliate.example.com/..."
                        value={extUrl}
                        onChange={(e) => setExtUrl(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="ext-title"
                        className="text-xs font-label font-semibold text-muted-foreground mb-1 block"
                      >
                        Title *
                      </label>
                      <Input
                        id="ext-title"
                        placeholder="Product or service name"
                        value={extTitle}
                        onChange={(e) => setExtTitle(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="ext-desc"
                        className="text-xs font-label font-semibold text-muted-foreground mb-1 block"
                      >
                        Description
                      </label>
                      <Textarea
                        id="ext-desc"
                        placeholder="Brief description..."
                        value={extDesc}
                        onChange={(e) => setExtDesc(e.target.value)}
                        className="text-sm min-h-16 resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="ext-commission"
                          className="text-xs font-label font-semibold text-muted-foreground mb-1 block"
                        >
                          Commission %
                        </label>
                        <Input
                          id="ext-commission"
                          type="number"
                          placeholder="5"
                          value={extCommission}
                          onChange={(e) => setExtCommission(e.target.value)}
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="ext-category"
                          className="text-xs font-label font-semibold text-muted-foreground mb-1 block"
                        >
                          Category
                        </label>
                        <Select
                          value={extCategory}
                          onValueChange={setExtCategory}
                        >
                          <SelectTrigger className="text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Products",
                              "Services",
                              "Education",
                              "Health",
                              "Finance",
                              "Other",
                            ].map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button
                      className="w-full font-label"
                      onClick={handleAddExternal}
                      style={{
                        background: "oklch(var(--primary))",
                        color: "oklch(var(--primary-foreground))",
                      }}
                    >
                      <Plus size={14} className="mr-1.5" /> Add External
                      Affiliate
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* PERFORMANCE */}
            <TabsContent value="performance" className="mt-0">
              {/* Summary cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  {
                    label: "Total Clicks",
                    value: "1,284",
                    color: "oklch(0.55 0.22 280)",
                    icon: Eye,
                  },
                  {
                    label: "Conversions",
                    value: "89",
                    color: "oklch(0.52 0.14 155)",
                    icon: TrendingUp,
                  },
                  {
                    label: "Conversion Rate",
                    value: "6.9%",
                    color: "oklch(0.65 0.14 50)",
                    icon: Star,
                  },
                  {
                    label: "Total Earned",
                    value: "PKR 34,200",
                    color: "oklch(0.65 0.25 335)",
                    icon: Briefcase,
                  },
                ].map(({ label, value, color, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                      style={{ background: `${color}15` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <p className="text-lg font-display font-bold text-foreground">
                      {value}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-label mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-label text-muted-foreground">
                  Filter by module:
                </span>
                <Select
                  value={perfModuleFilter}
                  onValueChange={setPerfModuleFilter}
                >
                  <SelectTrigger className="h-8 w-36 text-xs font-label">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Modules</SelectItem>
                    {[
                      "Products",
                      "Travel",
                      "Education",
                      "Services",
                      "Real Estate",
                      "Healthcare",
                      "External",
                    ].map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Performance table */}
              <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Blog Post
                        </th>
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Affiliate Link
                        </th>
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Module
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Clicks
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Conv.
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Earned (PKR)
                        </th>
                        <th className="text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredPerf.map((row) => (
                        <tr
                          key={`${row.blog}-${row.link}`}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-3 text-xs font-label font-medium text-foreground max-w-[180px] truncate">
                            {row.blog}
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground max-w-[160px] truncate">
                            {row.link}
                          </td>
                          <td className="px-4 py-3">
                            <ModuleBadge module={row.module} />
                          </td>
                          <td className="px-4 py-3 text-xs font-label text-right text-foreground">
                            {row.clicks}
                          </td>
                          <td className="px-4 py-3 text-xs font-label text-right text-foreground">
                            {row.conversions}
                          </td>
                          <td
                            className="px-4 py-3 text-xs font-label font-semibold text-right"
                            style={{ color: "oklch(0.52 0.14 155)" }}
                          >
                            {row.earned.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <StatusBadge status={row.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Referral tracking */}
              <h3 className="font-label font-semibold text-foreground mb-3">
                Referral Tracking
              </h3>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Referral Code
                        </th>
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Referred User
                        </th>
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Date
                        </th>
                        <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Action
                        </th>
                        <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Commission
                        </th>
                        <th className="text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {REFERRAL_ROWS.map((row) => (
                        <tr
                          key={`${row.user}-${row.date}`}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-3 text-xs font-label font-mono text-foreground">
                            {row.code}
                          </td>
                          <td className="px-4 py-3 text-xs font-label font-medium text-foreground">
                            {row.user}
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">
                            {row.date}
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">
                            {row.action}
                          </td>
                          <td
                            className="px-4 py-3 text-xs font-label font-semibold text-right"
                            style={{ color: "oklch(0.52 0.14 155)" }}
                          >
                            {row.commission}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <StatusBadge status={row.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      {/* Events */}
      <div className="mt-6 pt-6 border-t border-border">
        <EventsTab moduleName="Blog" moduleColor="oklch(0.60 0.22 310)" />
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()}.{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Built with ♥ using caffeine.ai
        </a>
      </div>
    </div>
  );
}
