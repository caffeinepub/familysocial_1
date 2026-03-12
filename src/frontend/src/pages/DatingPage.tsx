import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Bookmark,
  Check,
  Filter,
  Heart,
  MessageCircle,
  Star,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface DatingProfile {
  id: string;
  displayName: string;
  age: number;
  gender: string;
  pronouns: string;
  occupation: string;
  city: string;
  habits: string[];
  likes: string[];
  dislikes: string[];
  adaptability: string;
  financialNeeds: string;
  emotionalNeeds: string;
  lifestyle: string;
  philosophy: string;
  personalityType: string;
  clothingStyle: string;
  eatingHabits: string;
  drinkingHabits: string;
  relationshipGoal: string;
  about: string;
  compatibilityScore: number;
  active: boolean;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const MOCK_PROFILES: DatingProfile[] = [
  {
    id: "1",
    displayName: "Zara K.",
    age: 25,
    gender: "Female",
    pronouns: "she/her",
    occupation: "UX Designer",
    city: "Lahore",
    habits: [
      "Morning Person",
      "Exercise Daily",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Hiking", "Photography", "Coffee", "Indie Music"],
    dislikes: ["Dishonesty", "Smoking", "Crowds"],
    adaptability: "Very Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "Moderate",
    lifestyle: "Creative & Artistic",
    philosophy: "Balanced Life",
    personalityType: "Ambivert",
    clothingStyle: "Trendy/Fashionable",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Serious Relationship",
    about:
      "Design enthusiast who believes in meaningful connections. Let's grab coffee and talk about everything.",
    compatibilityScore: 88,
    active: true,
  },
  {
    id: "2",
    displayName: "Ali M.",
    age: 28,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Software Engineer",
    city: "Islamabad",
    habits: [
      "Night Owl",
      "Exercise Sometimes",
      "Social Drinking",
      "Non-Vegetarian",
    ],
    likes: ["Gaming", "Travel", "Tech", "Cooking"],
    dislikes: ["Drama", "Close-mindedness"],
    adaptability: "Moderately Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "Low Maintenance",
    lifestyle: "Active & Outdoorsy",
    philosophy: "Work Hard Play Hard",
    personalityType: "Introvert",
    clothingStyle: "Casual",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Social Drinker",
    relationshipGoal: "Marriage",
    about:
      "Tech nerd by day, home chef by night. Looking for someone who enjoys spontaneous adventures.",
    compatibilityScore: 72,
    active: true,
  },
  {
    id: "3",
    displayName: "Nadia R.",
    age: 23,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Journalist",
    city: "Karachi",
    habits: ["Morning Person", "Social Butterfly", "Non-Drinker", "Vegetarian"],
    likes: ["Writing", "Social Causes", "Street Food", "Documentaries"],
    dislikes: ["Arrogance", "Laziness", "Negativity"],
    adaptability: "Very Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "High Emotional Connection",
    lifestyle: "Intellectual",
    philosophy: "Ambitious",
    personalityType: "Extrovert",
    clothingStyle: "Eclectic/Boho",
    eatingHabits: "Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Friendship First",
    about:
      "I ask too many questions and write about everything. Passionate about social change and good stories.",
    compatibilityScore: 65,
    active: true,
  },
  {
    id: "4",
    displayName: "Omar S.",
    age: 30,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Architect",
    city: "Lahore",
    habits: [
      "Morning Person",
      "Exercise Daily",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Architecture", "Travel", "Art", "Music"],
    dislikes: ["Inconsistency", "Materialism"],
    adaptability: "Moderately Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "Moderate",
    lifestyle: "Creative & Artistic",
    philosophy: "Minimalist",
    personalityType: "Introvert",
    clothingStyle: "Formal",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Serious Relationship",
    about:
      "I design spaces for a living and appreciate beauty in simplicity. Looking for depth over small talk.",
    compatibilityScore: 81,
    active: true,
  },
  {
    id: "5",
    displayName: "Ayesha T.",
    age: 26,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Startup Founder",
    city: "Karachi",
    habits: [
      "Night Owl",
      "Social Butterfly",
      "Social Drinking",
      "Non-Vegetarian",
    ],
    likes: ["Entrepreneurship", "Networking", "Music Festivals", "Spicy Food"],
    dislikes: ["Pessimism", "Lack of ambition"],
    adaptability: "Very Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "Low Maintenance",
    lifestyle: "Social & Party",
    philosophy: "YOLO",
    personalityType: "Extrovert",
    clothingStyle: "Trendy/Fashionable",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Social Drinker",
    relationshipGoal: "Casual Dating",
    about:
      "Building my second startup. Life's short, make it exciting. Looking for someone who keeps up.",
    compatibilityScore: 59,
    active: true,
  },
  {
    id: "6",
    displayName: "Hassan A.",
    age: 27,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Doctor",
    city: "Lahore",
    habits: [
      "Morning Person",
      "Exercise Daily",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Reading", "Running", "Chess", "Nature"],
    dislikes: ["Loud environments", "Gossip"],
    adaptability: "Moderately Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "Moderate",
    lifestyle: "Active & Outdoorsy",
    philosophy: "Balanced Life",
    personalityType: "Introvert",
    clothingStyle: "Casual",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Marriage",
    about:
      "Pediatrician who loves long hikes and quiet evenings. Looking for a thoughtful life partner.",
    compatibilityScore: 84,
    active: true,
  },
  {
    id: "7",
    displayName: "Sana B.",
    age: 24,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Yoga Instructor",
    city: "Islamabad",
    habits: ["Morning Person", "Exercise Daily", "Non-Drinker", "Vegan"],
    likes: ["Wellness", "Meditation", "Nature", "Minimalism"],
    dislikes: ["Junk food", "Negativity", "Drama"],
    adaptability: "Very Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "High Emotional Connection",
    lifestyle: "Active & Outdoorsy",
    philosophy: "Spiritual",
    personalityType: "Introvert",
    clothingStyle: "Sporty",
    eatingHabits: "Vegan",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Serious Relationship",
    about:
      "I teach yoga and practice what I preach. Looking for a mindful partner who values growth.",
    compatibilityScore: 77,
    active: true,
  },
  {
    id: "8",
    displayName: "Bilal H.",
    age: 31,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Finance Manager",
    city: "Karachi",
    habits: [
      "Morning Person",
      "Exercise Sometimes",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Investing", "Travel", "Cricket", "Cooking"],
    dislikes: ["Impulsiveness", "Irresponsibility"],
    adaptability: "Prefers Stability",
    financialNeeds: "Independent",
    emotionalNeeds: "Low Maintenance",
    lifestyle: "Homebody",
    philosophy: "Ambitious",
    personalityType: "Ambivert",
    clothingStyle: "Formal",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Marriage",
    about:
      "Finance guy who loves planning for the future. Stable, grounded, and ready to settle.",
    compatibilityScore: 70,
    active: true,
  },
  {
    id: "9",
    displayName: "Mariam F.",
    age: 22,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Graphic Designer",
    city: "Lahore",
    habits: ["Night Owl", "Homebody", "Non-Drinker", "Non-Vegetarian"],
    likes: ["Art", "Anime", "Gaming", "Cats"],
    dislikes: ["Confrontation", "Early mornings"],
    adaptability: "Moderately Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "Moderate",
    lifestyle: "Creative & Artistic",
    philosophy: "YOLO",
    personalityType: "Introvert",
    clothingStyle: "Eclectic/Boho",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Friendship First",
    about:
      "I draw things and have opinions about fonts. Looking for a fellow creative who gets it.",
    compatibilityScore: 73,
    active: true,
  },
  {
    id: "10",
    displayName: "Kamran J.",
    age: 29,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Chef",
    city: "Multan",
    habits: [
      "Morning Person",
      "Social Butterfly",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Cooking", "Food Culture", "Travel", "Music"],
    dislikes: ["Picky eaters", "Negativity"],
    adaptability: "Very Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "Moderate",
    lifestyle: "Social & Party",
    philosophy: "Work Hard Play Hard",
    personalityType: "Extrovert",
    clothingStyle: "Casual",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Serious Relationship",
    about:
      "Professional chef who cooks love into every meal. Let me make you the best biryani of your life.",
    compatibilityScore: 66,
    active: true,
  },
  {
    id: "11",
    displayName: "Iqra N.",
    age: 27,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Clinical Psychologist",
    city: "Islamabad",
    habits: [
      "Morning Person",
      "Exercise Sometimes",
      "Non-Drinker",
      "Non-Vegetarian",
    ],
    likes: ["Psychology", "Reading", "Journaling", "Nature walks"],
    dislikes: ["Gaslighting", "Emotional unavailability"],
    adaptability: "Moderately Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "High Emotional Connection",
    lifestyle: "Intellectual",
    philosophy: "Balanced Life",
    personalityType: "Ambivert",
    clothingStyle: "Casual",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Serious Relationship",
    about:
      "I help people understand their minds for a living. Looking for emotional depth and intellectual conversations.",
    compatibilityScore: 86,
    active: true,
  },
  {
    id: "12",
    displayName: "Raza K.",
    age: 26,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Photographer",
    city: "Lahore",
    habits: [
      "Night Owl",
      "Social Butterfly",
      "Social Drinking",
      "Non-Vegetarian",
    ],
    likes: ["Photography", "Travel", "Music", "Street art"],
    dislikes: ["Routine", "Boredom"],
    adaptability: "Very Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "Low Maintenance",
    lifestyle: "Adventurous",
    philosophy: "YOLO",
    personalityType: "Extrovert",
    clothingStyle: "Eclectic/Boho",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Social Drinker",
    relationshipGoal: "Casual Dating",
    about:
      "I capture moments for a living. Always up for an adventure — let's make some good memories.",
    compatibilityScore: 61,
    active: true,
  },
  {
    id: "13",
    displayName: "Hina Z.",
    age: 25,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Environmental Scientist",
    city: "Karachi",
    habits: ["Morning Person", "Exercise Daily", "Non-Drinker", "Vegetarian"],
    likes: ["Environment", "Hiking", "Books", "Gardening"],
    dislikes: ["Waste", "Indifference"],
    adaptability: "Very Adaptive",
    financialNeeds: "Independent",
    emotionalNeeds: "Moderate",
    lifestyle: "Active & Outdoorsy",
    philosophy: "Spiritual",
    personalityType: "Ambivert",
    clothingStyle: "Casual",
    eatingHabits: "Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Marriage",
    about:
      "Fighting for the planet one study at a time. Looking for someone who shares a love for the environment.",
    compatibilityScore: 79,
    active: true,
  },
  {
    id: "14",
    displayName: "Saad O.",
    age: 32,
    gender: "Male",
    pronouns: "he/him",
    occupation: "Teacher",
    city: "Faisalabad",
    habits: ["Morning Person", "Homebody", "Non-Drinker", "Non-Vegetarian"],
    likes: ["Books", "History", "Chess", "Teaching"],
    dislikes: ["Rudeness", "Superficiality"],
    adaptability: "Prefers Stability",
    financialNeeds: "Shared",
    emotionalNeeds: "Moderate",
    lifestyle: "Intellectual",
    philosophy: "Balanced Life",
    personalityType: "Introvert",
    clothingStyle: "Casual",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Marriage",
    about:
      "High school history teacher who believes knowledge is the greatest adventure. Patient, kind, deep.",
    compatibilityScore: 75,
    active: true,
  },
  {
    id: "15",
    displayName: "Amber S.",
    age: 21,
    gender: "Female",
    pronouns: "she/her",
    occupation: "Student",
    city: "Lahore",
    habits: ["Night Owl", "Social Butterfly", "Non-Drinker", "Non-Vegetarian"],
    likes: ["Fashion", "Social Media", "Coffee", "Concerts"],
    dislikes: ["Boring routines", "Clinginess"],
    adaptability: "Very Adaptive",
    financialNeeds: "Shared",
    emotionalNeeds: "Moderate",
    lifestyle: "Social & Party",
    philosophy: "YOLO",
    personalityType: "Extrovert",
    clothingStyle: "Trendy/Fashionable",
    eatingHabits: "Non-Vegetarian",
    drinkingHabits: "Non-Drinker",
    relationshipGoal: "Friendship First",
    about: "Final year fashion student. Life is a runway — dress accordingly.",
    compatibilityScore: 55,
    active: true,
  },
];

// ─── Gradient presets for cards ─────────────────────────────────────────────────

const CARD_GRADIENTS = [
  "linear-gradient(135deg, oklch(0.35 0.12 280) 0%, oklch(0.25 0.10 310) 100%)",
  "linear-gradient(135deg, oklch(0.30 0.14 330) 0%, oklch(0.25 0.10 280) 100%)",
  "linear-gradient(135deg, oklch(0.28 0.10 190) 0%, oklch(0.25 0.12 230) 100%)",
  "linear-gradient(135deg, oklch(0.35 0.12 50) 0%, oklch(0.28 0.10 330) 100%)",
  "linear-gradient(135deg, oklch(0.30 0.12 150) 0%, oklch(0.25 0.10 200) 100%)",
];

function getCardGradient(id: string): string {
  const idx = Number.parseInt(id, 10) % CARD_GRADIENTS.length;
  return CARD_GRADIENTS[idx];
}

function getCompatColor(score: number) {
  if (score >= 80) return "oklch(0.55 0.2 145)";
  if (score >= 60) return "oklch(0.65 0.22 280)";
  return "oklch(0.72 0.19 85)";
}

function getCompatBg(score: number) {
  if (score >= 80) return "oklch(0.55 0.2 145 / 0.2)";
  if (score >= 60) return "oklch(0.65 0.22 280 / 0.2)";
  return "oklch(0.72 0.19 85 / 0.2)";
}

const COMPAT_CATEGORIES = [
  { key: "habits", label: "Habits & Lifestyle" },
  { key: "lifestyle", label: "Life Activities" },
  { key: "philosophy", label: "Life Philosophy" },
  { key: "personality", label: "Personality Type" },
  { key: "eating", label: "Eating Habits" },
  { key: "drinking", label: "Drinking Habits" },
  { key: "emotional", label: "Emotional Needs" },
  { key: "financial", label: "Financial Style" },
  { key: "goal", label: "Relationship Goal" },
];

const MY_PROFILE_DEFAULTS = {
  habits: ["Morning Person", "Non-Drinker", "Exercise Sometimes"],
  lifestyle: "Active & Outdoorsy",
  philosophy: "Balanced Life",
  personality: "Ambivert",
  eating: "Non-Vegetarian",
  drinking: "Non-Drinker",
  emotional: "Moderate",
  financial: "Independent",
  goal: "Serious Relationship",
};

function computeCompatBreakdown(profile: DatingProfile) {
  return COMPAT_CATEGORIES.map(({ key, label }) => {
    let match = 0;
    switch (key) {
      case "habits": {
        const shared = profile.habits.filter((h) =>
          MY_PROFILE_DEFAULTS.habits.includes(h),
        ).length;
        match = Math.min(
          100,
          (shared / Math.max(MY_PROFILE_DEFAULTS.habits.length, 1)) * 100,
        );
        break;
      }
      case "lifestyle":
        match = profile.lifestyle === MY_PROFILE_DEFAULTS.lifestyle ? 100 : 40;
        break;
      case "philosophy":
        match =
          profile.philosophy === MY_PROFILE_DEFAULTS.philosophy ? 100 : 30;
        break;
      case "personality": {
        const map: Record<string, number> = {
          Ambivert: 90,
          Introvert: 55,
          Extrovert: 45,
        };
        match = map[profile.personalityType] ?? 50;
        break;
      }
      case "eating":
        match = profile.eatingHabits === MY_PROFILE_DEFAULTS.eating ? 100 : 60;
        break;
      case "drinking":
        match =
          profile.drinkingHabits === MY_PROFILE_DEFAULTS.drinking ? 100 : 30;
        break;
      case "emotional":
        match =
          profile.emotionalNeeds === MY_PROFILE_DEFAULTS.emotional ? 100 : 50;
        break;
      case "financial":
        match =
          profile.financialNeeds === MY_PROFILE_DEFAULTS.financial ? 100 : 60;
        break;
      case "goal":
        match =
          profile.relationshipGoal === MY_PROFILE_DEFAULTS.goal ? 100 : 35;
        break;
    }
    return { label, match: Math.round(match) };
  });
}

const HABIT_OPTIONS = [
  "Smoking",
  "Social Drinking",
  "Regular Drinking",
  "Non-Drinker",
  "Vegetarian",
  "Vegan",
  "Non-Vegetarian",
  "Exercise Daily",
  "Exercise Sometimes",
  "Night Owl",
  "Morning Person",
  "Homebody",
  "Social Butterfly",
];

// ─── Sub-components ─────────────────────────────────────────────────────────────

function CompatBadge({ score }: { score: number }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold"
      style={{ color: getCompatColor(score), background: getCompatBg(score) }}
    >
      <Zap size={9} />
      {score}%
    </span>
  );
}

function DiscoverCard({
  profile,
  onLike,
  onPass,
  onSuperLike,
  onSave,
  onView,
  isLiked,
  isSaved,
}: {
  profile: DatingProfile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
  onSuperLike: (id: string) => void;
  onSave: (id: string) => void;
  onView: (profile: DatingProfile) => void;
  isLiked: boolean;
  isSaved: boolean;
}) {
  const initials = profile.displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card
      className="overflow-hidden border-0 shadow-elevated cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-elevated group"
      onClick={() => onView(profile)}
    >
      {/* Gradient header */}
      <div
        className="relative h-32 flex flex-col justify-end p-4"
        style={{ background: getCardGradient(profile.id) }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-24 h-24 rounded-full border-4 border-white/30" />
        </div>
        <Avatar className="h-14 w-14 border-2 border-white/40 mb-2">
          <AvatarFallback
            className="text-lg font-label font-bold"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="absolute top-3 right-3">
          <CompatBadge score={profile.compatibilityScore} />
        </div>
      </div>

      <CardContent className="p-4 space-y-3 bg-card">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-base text-foreground">
              {profile.displayName}
            </span>
            <span className="text-sm text-muted-foreground">{profile.age}</span>
            <span className="text-xs text-muted-foreground ml-auto">
              {profile.city}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-label">
            {profile.occupation} · {profile.pronouns}
          </p>
        </div>

        {/* Top habits */}
        <div className="flex flex-wrap gap-1">
          {profile.habits.slice(0, 3).map((h) => (
            <Badge
              key={h}
              variant="secondary"
              className="text-[10px] px-2 py-0.5 font-label"
            >
              {h}
            </Badge>
          ))}
          {profile.habits.length > 3 && (
            <Badge
              variant="secondary"
              className="text-[10px] px-2 py-0.5 font-label"
            >
              +{profile.habits.length - 3}
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2">
          {profile.about}
        </p>

        {/* Action buttons */}
        <div
          className="flex gap-2 pt-1"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-8 text-xs font-label gap-1 hover:bg-secondary/80"
            onClick={(e) => {
              e.stopPropagation();
              onPass(profile.id);
            }}
            title="Pass"
          >
            <X size={12} className="text-muted-foreground" /> Pass
          </Button>
          <Button
            size="sm"
            className="flex-1 h-8 text-xs font-label gap-1"
            onClick={(e) => {
              e.stopPropagation();
              onLike(profile.id);
            }}
            title="Like"
            style={
              isLiked
                ? { background: "oklch(0.72 0.15 350)", color: "white" }
                : {
                    background: "oklch(0.72 0.15 350 / 0.1)",
                    color: "oklch(0.55 0.18 350)",
                    border: "none",
                  }
            }
          >
            <Heart size={12} fill={isLiked ? "currentColor" : "none"} />
            {isLiked ? "Liked" : "Like"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onSuperLike(profile.id);
            }}
            title="Super Like"
            style={{
              color: "oklch(0.72 0.19 85)",
              background: "oklch(0.72 0.19 85 / 0.1)",
            }}
          >
            <Star size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onSave(profile.id);
            }}
            title="Save"
            style={
              isSaved
                ? {
                    color: "oklch(0.55 0.22 280)",
                    background: "oklch(0.55 0.22 280 / 0.1)",
                  }
                : {}
            }
          >
            <Bookmark size={14} fill={isSaved ? "currentColor" : "none"} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileDetailSheet({
  profile,
  open,
  onClose,
}: {
  profile: DatingProfile | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!profile) return null;
  const breakdown = computeCompatBreakdown(profile);
  const initials = profile.displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sharedHabits = profile.habits.filter((h) =>
    MY_PROFILE_DEFAULTS.habits.includes(h),
  );

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-display text-xl">
            <Zap
              size={16}
              className="inline mr-2"
              style={{ color: "oklch(0.65 0.22 280)" }}
            />
            Profile
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-5">
          {/* Header */}
          <div
            className="rounded-xl p-4 flex items-start gap-4"
            style={{ background: getCardGradient(profile.id) }}
          >
            <Avatar className="h-16 w-16 border-2 border-white/30 shrink-0">
              <AvatarFallback
                className="text-xl font-label font-bold"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  {profile.displayName}
                </h3>
                <span className="text-sm text-white/70">{profile.age}</span>
              </div>
              <p className="text-sm text-white/70">
                {profile.occupation} · {profile.city}
              </p>
              <p className="text-xs text-white/60 mt-0.5">{profile.pronouns}</p>
              <div className="mt-2">
                <CompatBadge score={profile.compatibilityScore} />
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              About
            </h4>
            <p className="text-sm text-foreground leading-relaxed">
              {profile.about}
            </p>
          </div>

          {/* Shared habits */}
          {sharedHabits.length > 0 && (
            <div>
              <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Shared Habits ✨
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {sharedHabits.map((h) => (
                  <Badge
                    key={h}
                    className="text-xs font-label gap-1"
                    style={{
                      background: "oklch(0.55 0.2 145 / 0.15)",
                      color: "oklch(0.40 0.18 145)",
                      border: "none",
                    }}
                  >
                    <Check size={10} /> {h}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Likes & Dislikes */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Likes
              </h4>
              <div className="flex flex-wrap gap-1">
                {profile.likes.map((l) => (
                  <Badge
                    key={l}
                    variant="outline"
                    className="text-xs font-label"
                  >
                    ❤ {l}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Dislikes
              </h4>
              <div className="flex flex-wrap gap-1">
                {profile.dislikes.map((d) => (
                  <Badge
                    key={d}
                    variant="outline"
                    className="text-xs font-label text-muted-foreground"
                  >
                    ✕ {d}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Key details */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Profile Details
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["Lifestyle", profile.lifestyle],
                ["Philosophy", profile.philosophy],
                ["Personality", profile.personalityType],
                ["Clothing Style", profile.clothingStyle],
                ["Eating Habits", profile.eatingHabits],
                ["Drinking Habits", profile.drinkingHabits],
                ["Financial Needs", profile.financialNeeds],
                ["Emotional Needs", profile.emotionalNeeds],
                ["Adaptability", profile.adaptability],
                ["Looking For", profile.relationshipGoal],
              ].map(([label, value]) => (
                <div key={label} className="space-y-0.5">
                  <p className="text-[11px] text-muted-foreground font-label">
                    {label}
                  </p>
                  <p className="font-medium text-foreground text-xs">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All habits */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Habits
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.habits.map((h) => (
                <Badge
                  key={h}
                  variant="secondary"
                  className="text-xs font-label"
                >
                  {h}
                </Badge>
              ))}
            </div>
          </div>

          {/* Compatibility breakdown */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Compatibility Breakdown
            </h4>
            <div className="space-y-2.5">
              {breakdown.map(({ label, match }) => (
                <div key={label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground font-label">
                      {label}
                    </span>
                    <span
                      className="font-label font-semibold"
                      style={{ color: getCompatColor(match) }}
                    >
                      {match}%
                    </span>
                  </div>
                  <Progress value={match} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1 gap-2 font-label"
              style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
              onClick={() => {
                toast.success(`Liked ${profile.displayName}!`);
                onClose();
              }}
            >
              <Heart size={14} /> Like
            </Button>
            <Button
              variant="outline"
              className="flex-1 font-label"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SetupProfileSheet({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (profile: Partial<DatingProfile>) => void;
}) {
  const [form, setForm] = useState({
    displayName: "",
    age: "",
    gender: "",
    pronouns: "",
    occupation: "",
    city: "",
    habits: [] as string[],
    likes: "",
    dislikes: "",
    adaptability: "",
    financialNeeds: "",
    emotionalNeeds: "",
    lifestyle: "",
    philosophy: "",
    personalityType: "",
    clothingStyle: "",
    eatingHabits: "",
    drinkingHabits: "",
    relationshipGoal: "",
    about: "",
    ageRangeMin: 20,
    ageRangeMax: 35,
  });

  const toggleHabit = (h: string) => {
    setForm((prev) => ({
      ...prev,
      habits: prev.habits.includes(h)
        ? prev.habits.filter((x) => x !== h)
        : [...prev.habits, h],
    }));
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-display text-xl">
            <Zap
              size={18}
              className="inline mr-2"
              style={{ color: "oklch(0.65 0.22 280)" }}
            />
            Create Dating Profile
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-5 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Display Name
              </Label>
              <Input
                placeholder="How you'll appear to others"
                value={form.displayName}
                onChange={(e) =>
                  setForm({ ...form, displayName: e.target.value })
                }
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Age
              </Label>
              <Input
                type="number"
                placeholder="25"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Gender
              </Label>
              <Select
                value={form.gender}
                onValueChange={(v) => setForm({ ...form, gender: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Prefer not to say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Pronouns
              </Label>
              <Input
                placeholder="he/him, she/her, they/them"
                value={form.pronouns}
                onChange={(e) => setForm({ ...form, pronouns: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Occupation
              </Label>
              <Input
                placeholder="What do you do?"
                value={form.occupation}
                onChange={(e) =>
                  setForm({ ...form, occupation: e.target.value })
                }
              />
            </div>
            <div className="col-span-2 space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                City
              </Label>
              <Input
                placeholder="Your city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>
          </div>

          {/* Habits */}
          <div className="space-y-2">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Your Habits
            </Label>
            <div className="flex flex-wrap gap-2">
              {HABIT_OPTIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => toggleHabit(h)}
                  className="px-2.5 py-1 rounded-full text-xs font-label border transition-all"
                  style={
                    form.habits.includes(h)
                      ? {
                          background: "oklch(0.65 0.22 280 / 0.15)",
                          borderColor: "oklch(0.65 0.22 280)",
                          color: "oklch(0.45 0.18 280)",
                        }
                      : {
                          borderColor: "oklch(var(--border))",
                          color: "oklch(var(--muted-foreground))",
                        }
                  }
                >
                  {form.habits.includes(h) && (
                    <Check size={9} className="inline mr-1" />
                  )}
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Likes & Dislikes */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Likes
              </Label>
              <Input
                placeholder="Hiking, Coffee, Music..."
                value={form.likes}
                onChange={(e) => setForm({ ...form, likes: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Dislikes
              </Label>
              <Input
                placeholder="Drama, Dishonesty..."
                value={form.dislikes}
                onChange={(e) => setForm({ ...form, dislikes: e.target.value })}
              />
            </div>
          </div>

          {/* Selects */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Adaptability
              </Label>
              <Select
                value={form.adaptability}
                onValueChange={(v) => setForm({ ...form, adaptability: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Very Adaptive",
                    "Moderately Adaptive",
                    "Prefers Stability",
                  ].map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Financial Needs
              </Label>
              <Select
                value={form.financialNeeds}
                onValueChange={(v) => setForm({ ...form, financialNeeds: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Independent", "Shared", "Partner Supports"].map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Emotional Needs
              </Label>
              <Select
                value={form.emotionalNeeds}
                onValueChange={(v) => setForm({ ...form, emotionalNeeds: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Low Maintenance",
                    "Moderate",
                    "High Emotional Connection",
                  ].map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Lifestyle
              </Label>
              <Select
                value={form.lifestyle}
                onValueChange={(v) => setForm({ ...form, lifestyle: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Active & Outdoorsy",
                    "Creative & Artistic",
                    "Intellectual",
                    "Social & Party",
                    "Homebody",
                    "Adventurous",
                  ].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Life Philosophy
              </Label>
              <Select
                value={form.philosophy}
                onValueChange={(v) => setForm({ ...form, philosophy: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "YOLO",
                    "Work Hard Play Hard",
                    "Balanced Life",
                    "Spiritual",
                    "Minimalist",
                    "Ambitious",
                  ].map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Personality Type
              </Label>
              <Select
                value={form.personalityType}
                onValueChange={(v) => setForm({ ...form, personalityType: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Introvert", "Extrovert", "Ambivert"].map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Clothing Style
              </Label>
              <Select
                value={form.clothingStyle}
                onValueChange={(v) => setForm({ ...form, clothingStyle: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Casual",
                    "Formal",
                    "Trendy/Fashionable",
                    "Traditional",
                    "Sporty",
                    "Eclectic/Boho",
                  ].map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Eating Habits
              </Label>
              <Select
                value={form.eatingHabits}
                onValueChange={(v) => setForm({ ...form, eatingHabits: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Vegetarian",
                    "Vegan",
                    "Non-Vegetarian",
                    "Pescatarian",
                    "Keto",
                    "No Preference",
                  ].map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Drinking Habits
              </Label>
              <Select
                value={form.drinkingHabits}
                onValueChange={(v) => setForm({ ...form, drinkingHabits: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Non-Drinker", "Social Drinker", "Regular Drinker"].map(
                    (d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Relationship Goal
              </Label>
              <Select
                value={form.relationshipGoal}
                onValueChange={(v) => setForm({ ...form, relationshipGoal: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Casual Dating",
                    "Serious Relationship",
                    "Marriage",
                    "Friendship First",
                    "Not Sure",
                  ].map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Age range */}
          <div className="space-y-2">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Looking For Ages: {form.ageRangeMin} – {form.ageRangeMax}
            </Label>
            <div className="flex gap-3 items-center">
              <span className="text-xs text-muted-foreground">18</span>
              <Slider
                min={18}
                max={50}
                step={1}
                value={[form.ageRangeMin, form.ageRangeMax]}
                onValueChange={([min, max]) =>
                  setForm({ ...form, ageRangeMin: min, ageRangeMax: max })
                }
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">50</span>
            </div>
          </div>

          {/* About */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                About Me
              </Label>
              <span className="text-[10px] text-muted-foreground">
                {form.about.length}/300
              </span>
            </div>
            <Textarea
              placeholder="What makes you unique? What are you looking for?"
              value={form.about}
              onChange={(e) =>
                setForm({ ...form, about: e.target.value.slice(0, 300) })
              }
              className="resize-none h-24"
              maxLength={300}
            />
          </div>

          <div className="flex gap-3">
            <Button
              className="flex-1 font-label gap-2"
              style={{ background: "oklch(0.65 0.22 280)", color: "white" }}
              onClick={() => {
                onSave({
                  ...form,
                  age: Number(form.age) || 0,
                  likes: form.likes
                    .split(",")
                    .map((l) => l.trim())
                    .filter(Boolean),
                  dislikes: form.dislikes
                    .split(",")
                    .map((d) => d.trim())
                    .filter(Boolean),
                });
                toast.success("Dating profile saved!");
                onClose();
              }}
            >
              <Zap size={14} /> Save Profile
            </Button>
            <Button variant="outline" className="font-label" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function DatingPage() {
  const [setupOpen, setSetupOpen] = useState(false);
  const [myProfile, setMyProfile] = useState<Partial<DatingProfile> | null>(
    null,
  );
  const [selectedProfile, setSelectedProfile] = useState<DatingProfile | null>(
    null,
  );
  const [detailOpen, setDetailOpen] = useState(false);
  const [liked, setLiked] = useState<Set<string>>(new Set(["4", "6", "11"]));
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set(["3", "7"]));
  const [matches] = useState<Set<string>>(new Set(["4", "11"]));
  const [filterHabit, setFilterHabit] = useState<string>("all");
  const [filterLifestyle, setFilterLifestyle] = useState<string>("all");
  const [filterPersonality, setFilterPersonality] = useState<string>("all");
  const [filterGoal, setFilterGoal] = useState<string>("all");
  const [filterAgeMin, setFilterAgeMin] = useState(18);
  const [filterAgeMax, setFilterAgeMax] = useState(40);
  const [showFilters, setShowFilters] = useState(false);

  const handleLike = (id: string) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info("Removed like");
      } else {
        next.add(id);
        if (matches.has(id)) {
          toast.success(`🎉 It's a match with ${profile.displayName}!`, {
            duration: 4000,
          });
        } else {
          toast.success(`Liked ${profile.displayName}!`);
        }
      }
      return next;
    });
  };

  const handlePass = (id: string) => {
    setPassed((prev) => new Set([...prev, id]));
    toast.info("Passed");
  };

  const handleSuperLike = (id: string) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    toast.success(`⭐ Super liked ${profile?.displayName}!`);
    setLiked((prev) => new Set([...prev, id]));
  };

  const handleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info("Removed from saved");
      } else {
        next.add(id);
        toast.success("Saved profile");
      }
      return next;
    });
  };

  const filteredProfiles = MOCK_PROFILES.filter((p) => {
    if (passed.has(p.id)) return false;
    if (filterHabit && filterHabit !== "all" && !p.habits.includes(filterHabit))
      return false;
    if (
      filterLifestyle &&
      filterLifestyle !== "all" &&
      p.lifestyle !== filterLifestyle
    )
      return false;
    if (
      filterPersonality &&
      filterPersonality !== "all" &&
      p.personalityType !== filterPersonality
    )
      return false;
    if (filterGoal && filterGoal !== "all" && p.relationshipGoal !== filterGoal)
      return false;
    if (p.age < filterAgeMin || p.age > filterAgeMax) return false;
    return true;
  });

  const likedProfiles = MOCK_PROFILES.filter((p) => liked.has(p.id));
  const savedProfiles = MOCK_PROFILES.filter((p) => saved.has(p.id));
  const matchedProfiles = MOCK_PROFILES.filter(
    (p) => liked.has(p.id) && matches.has(p.id),
  );

  return (
    <div className="p-4 lg:p-6 space-y-6 min-h-full">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
            <Zap size={22} style={{ color: "oklch(0.65 0.22 280)" }} />
            Dating
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Modern matches based on habits, lifestyle & compatibility
          </p>
        </div>
        <Button
          className="gap-2 font-label shrink-0"
          style={{ background: "oklch(0.65 0.22 280)", color: "white" }}
          onClick={() => setSetupOpen(true)}
        >
          <User size={14} />
          {myProfile ? "Edit Profile" : "Create Profile"}
        </Button>
      </div>

      {/* My Profile Banner */}
      {!myProfile ? (
        <div
          className="rounded-xl p-4 flex items-center justify-between gap-4 border"
          style={{
            background: "oklch(0.65 0.22 280 / 0.08)",
            borderColor: "oklch(0.65 0.22 280 / 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.65 0.22 280 / 0.15)" }}
            >
              <Zap size={18} style={{ color: "oklch(0.65 0.22 280)" }} />
            </div>
            <div>
              <p className="text-sm font-label font-semibold text-foreground">
                Create your dating profile
              </p>
              <p className="text-xs text-muted-foreground">
                Add your habits, lifestyle & preferences to find compatible
                matches
              </p>
            </div>
          </div>
          <Button
            size="sm"
            className="shrink-0 font-label gap-1"
            style={{ background: "oklch(0.65 0.22 280)", color: "white" }}
            onClick={() => setSetupOpen(true)}
          >
            Create Profile
          </Button>
        </div>
      ) : (
        <div
          className="rounded-xl p-4 border flex items-center gap-4"
          style={{
            background: "oklch(0.65 0.22 280 / 0.06)",
            borderColor: "oklch(0.65 0.22 280 / 0.2)",
          }}
        >
          <Avatar
            className="h-12 w-12 shrink-0 border-2"
            style={{ borderColor: "oklch(0.65 0.22 280)" }}
          >
            <AvatarFallback
              style={{
                background: "oklch(0.65 0.22 280 / 0.2)",
                color: "oklch(0.40 0.18 280)",
              }}
            >
              {((myProfile.displayName ?? "U") as string)
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-display font-bold text-foreground truncate">
                {myProfile.displayName as string}
              </p>
              <Badge
                className="text-[10px] font-label shrink-0"
                style={{
                  background: "oklch(0.55 0.2 145 / 0.15)",
                  color: "oklch(0.40 0.18 145)",
                  border: "none",
                }}
              >
                Active
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {myProfile.age} · {myProfile.occupation as string} ·{" "}
              {myProfile.lifestyle as string}
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="shrink-0 font-label"
            onClick={() => setSetupOpen(true)}
          >
            Edit
          </Button>
        </div>
      )}

      <QuickAddBar moduleName="Dating" />

      {/* Main Tabs */}
      <Tabs defaultValue="discover" className="space-y-4">
        <TabsList className="font-label">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="matches">
            Matches
            {matchedProfiles.length > 0 && (
              <span
                className="ml-1.5 text-[10px] font-bold rounded-full px-1.5 py-0.5"
                style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
              >
                {matchedProfiles.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="liked">
            Liked ({likedProfiles.length})
          </TabsTrigger>
          <TabsTrigger value="saved">
            Saved ({savedProfiles.length})
          </TabsTrigger>
        </TabsList>

        {/* Discover Tab */}
        <TabsContent value="discover" className="space-y-4">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2">
            <Select value={filterHabit} onValueChange={setFilterHabit}>
              <SelectTrigger className="h-9 w-40 text-sm font-label">
                <SelectValue placeholder="Filter by Habit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Habits</SelectItem>
                {HABIT_OPTIONS.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterLifestyle} onValueChange={setFilterLifestyle}>
              <SelectTrigger className="h-9 w-40 text-sm font-label">
                <SelectValue placeholder="Lifestyle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Lifestyles</SelectItem>
                {[
                  "Active & Outdoorsy",
                  "Creative & Artistic",
                  "Intellectual",
                  "Social & Party",
                  "Homebody",
                  "Adventurous",
                ].map((l) => (
                  <SelectItem key={l} value={l}>
                    {l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={filterPersonality}
              onValueChange={setFilterPersonality}
            >
              <SelectTrigger className="h-9 w-36 text-sm font-label">
                <SelectValue placeholder="Personality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {["Introvert", "Extrovert", "Ambivert"].map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterGoal} onValueChange={setFilterGoal}>
              <SelectTrigger className="h-9 w-40 text-sm font-label">
                <SelectValue placeholder="Looking For" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Goal</SelectItem>
                {[
                  "Casual Dating",
                  "Serious Relationship",
                  "Marriage",
                  "Friendship First",
                  "Not Sure",
                ].map((g) => (
                  <SelectItem key={g} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-1.5 font-label text-xs"
              onClick={() => setShowFilters((v) => !v)}
            >
              <Filter size={12} /> Age Range
            </Button>
          </div>

          {showFilters && (
            <div className="rounded-xl border border-border/60 p-4 bg-card space-y-3">
              <div className="space-y-2">
                <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                  Age Range: {filterAgeMin} – {filterAgeMax}
                </Label>
                <div className="flex gap-3 items-center">
                  <span className="text-xs text-muted-foreground">18</span>
                  <Slider
                    min={18}
                    max={50}
                    step={1}
                    value={[filterAgeMin, filterAgeMax]}
                    onValueChange={([min, max]) => {
                      setFilterAgeMin(min);
                      setFilterAgeMax(max);
                    }}
                    className="flex-1"
                  />
                  <span className="text-xs text-muted-foreground">50</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground font-label">
            {filteredProfiles.length} profiles in your area
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProfiles.map((profile) => (
              <DiscoverCard
                key={profile.id}
                profile={profile}
                onLike={handleLike}
                onPass={handlePass}
                onSuperLike={handleSuperLike}
                onSave={handleSave}
                onView={(p) => {
                  setSelectedProfile(p);
                  setDetailOpen(true);
                }}
                isLiked={liked.has(profile.id)}
                isSaved={saved.has(profile.id)}
              />
            ))}
            {filteredProfiles.length === 0 && (
              <div className="col-span-3 text-center py-16 text-muted-foreground">
                <Zap size={40} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm font-label">
                  No profiles match your filters
                </p>
                <p className="text-xs mt-1">
                  Try adjusting your filters to see more people
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Matches Tab */}
        <TabsContent value="matches" className="space-y-4">
          {matchedProfiles.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Heart size={40} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm font-label">No mutual matches yet</p>
              <p className="text-xs mt-1">
                Keep liking profiles — when someone likes you back, they'll
                appear here
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {matchedProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="overflow-hidden border-border/60"
                >
                  <div
                    className="h-1.5"
                    style={{ background: "oklch(0.55 0.2 145)" }}
                  />
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        className="h-12 w-12 border-2 shrink-0"
                        style={{ borderColor: "oklch(0.55 0.2 145)" }}
                      >
                        <AvatarFallback
                          className="font-label font-bold text-base"
                          style={{
                            background: "oklch(0.55 0.2 145 / 0.15)",
                            color: "oklch(0.40 0.18 145)",
                          }}
                        >
                          {profile.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-foreground">
                          {profile.displayName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {profile.age} · {profile.occupation} · {profile.city}
                        </p>
                      </div>
                      <Badge
                        className="text-[10px] font-label shrink-0"
                        style={{
                          background: "oklch(0.55 0.2 145 / 0.15)",
                          color: "oklch(0.40 0.18 145)",
                          border: "none",
                        }}
                      >
                        Matched!
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <Button
                      className="w-full h-8 text-xs font-label gap-2"
                      variant="outline"
                      onClick={() => toast.info("Chat feature coming soon!")}
                    >
                      <MessageCircle size={12} /> Start Conversation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Liked Tab */}
        <TabsContent value="liked" className="space-y-4">
          {likedProfiles.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Heart size={40} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm font-label">You haven't liked anyone yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {likedProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="overflow-hidden border-border/60"
                >
                  <div
                    className="h-1"
                    style={{ background: "oklch(0.72 0.15 350)" }}
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 shrink-0">
                        <AvatarFallback
                          style={{
                            background: "oklch(0.72 0.15 350 / 0.15)",
                            color: "oklch(0.50 0.18 350)",
                          }}
                        >
                          {profile.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-label font-semibold text-foreground truncate">
                          {profile.displayName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {profile.age} · {profile.occupation}
                        </p>
                      </div>
                      <Badge
                        className="text-[10px] font-label shrink-0"
                        style={
                          matches.has(profile.id)
                            ? {
                                background: "oklch(0.55 0.2 145 / 0.15)",
                                color: "oklch(0.40 0.18 145)",
                                border: "none",
                              }
                            : {
                                background: "oklch(0.72 0.19 85 / 0.15)",
                                color: "oklch(0.55 0.18 85)",
                                border: "none",
                              }
                        }
                      >
                        {matches.has(profile.id) ? "Matched!" : "Waiting"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Saved Tab */}
        <TabsContent value="saved" className="space-y-4">
          {savedProfiles.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Bookmark size={40} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm font-label">No saved profiles</p>
              <p className="text-xs mt-1">
                Bookmark profiles to revisit them later
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {savedProfiles.map((profile) => (
                <DiscoverCard
                  key={profile.id}
                  profile={profile}
                  onLike={handleLike}
                  onPass={handlePass}
                  onSuperLike={handleSuperLike}
                  onSave={handleSave}
                  onView={(p) => {
                    setSelectedProfile(p);
                    setDetailOpen(true);
                  }}
                  isLiked={liked.has(profile.id)}
                  isSaved={true}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Detail sheet */}
      <ProfileDetailSheet
        profile={selectedProfile}
        open={detailOpen}
        onClose={() => {
          setDetailOpen(false);
          setSelectedProfile(null);
        }}
      />

      {/* Setup sheet */}
      <SetupProfileSheet
        open={setupOpen}
        onClose={() => setSetupOpen(false)}
        onSave={(profile) => setMyProfile(profile)}
      />

      {/* Footer */}
      <footer className="pt-4 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* Events */}
      <div className="px-4 pb-8 lg:px-8">
        <EventsTab moduleName="Dating" moduleColor="oklch(0.62 0.24 350)" />
      </div>
    </div>
  );
}
