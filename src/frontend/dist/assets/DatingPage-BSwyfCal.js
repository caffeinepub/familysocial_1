import { r as reactExports, j as jsxRuntimeExports, Z as Zap, a as Button, U as User, A as Avatar, b as AvatarFallback, B as Badge, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, L as Label, H as Heart, u as ue, M as MessageCircle, X, k as Star, C as Check, I as Input } from "./index-lw5pjVJK.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-CqMfxsLj.js";
import { P as Progress } from "./progress-D6ePfeJT.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-DY1vgUKx.js";
import { S as Slider } from "./slider-KXmPqt_y.js";
import { T as Textarea } from "./textarea-fKvKYplq.js";
import { E as EventsTab } from "./EventsTab-CTmDP_UB.js";
import { Q as QuickAddBar } from "./QuickAddBar-RPwTb5Id.js";
import { F as Funnel } from "./funnel-DSHeXvce.js";
import { B as Bookmark } from "./bookmark-BnXdVBEy.js";
import "./share-2-DUI91J_K.js";
import "./lock-q4Co4miu.js";
import "./globe-CTGspTLv.js";
import "./calendar-CsW0M5bW.js";
import "./checkbox-g2PvVHHG.js";
import "./settings-2-rgtxuF2l.js";
import "./megaphone-DSsrHW8S.js";
import "./upload-XzXhKw7K.js";
const MOCK_PROFILES = [
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
      "Non-Vegetarian"
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
    about: "Design enthusiast who believes in meaningful connections. Let's grab coffee and talk about everything.",
    compatibilityScore: 88,
    active: true
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
      "Non-Vegetarian"
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
    about: "Tech nerd by day, home chef by night. Looking for someone who enjoys spontaneous adventures.",
    compatibilityScore: 72,
    active: true
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
    about: "I ask too many questions and write about everything. Passionate about social change and good stories.",
    compatibilityScore: 65,
    active: true
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
      "Non-Vegetarian"
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
    about: "I design spaces for a living and appreciate beauty in simplicity. Looking for depth over small talk.",
    compatibilityScore: 81,
    active: true
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
      "Non-Vegetarian"
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
    about: "Building my second startup. Life's short, make it exciting. Looking for someone who keeps up.",
    compatibilityScore: 59,
    active: true
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
      "Non-Vegetarian"
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
    about: "Pediatrician who loves long hikes and quiet evenings. Looking for a thoughtful life partner.",
    compatibilityScore: 84,
    active: true
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
    about: "I teach yoga and practice what I preach. Looking for a mindful partner who values growth.",
    compatibilityScore: 77,
    active: true
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
      "Non-Vegetarian"
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
    about: "Finance guy who loves planning for the future. Stable, grounded, and ready to settle.",
    compatibilityScore: 70,
    active: true
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
    about: "I draw things and have opinions about fonts. Looking for a fellow creative who gets it.",
    compatibilityScore: 73,
    active: true
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
      "Non-Vegetarian"
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
    about: "Professional chef who cooks love into every meal. Let me make you the best biryani of your life.",
    compatibilityScore: 66,
    active: true
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
      "Non-Vegetarian"
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
    about: "I help people understand their minds for a living. Looking for emotional depth and intellectual conversations.",
    compatibilityScore: 86,
    active: true
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
      "Non-Vegetarian"
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
    about: "I capture moments for a living. Always up for an adventure — let's make some good memories.",
    compatibilityScore: 61,
    active: true
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
    about: "Fighting for the planet one study at a time. Looking for someone who shares a love for the environment.",
    compatibilityScore: 79,
    active: true
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
    about: "High school history teacher who believes knowledge is the greatest adventure. Patient, kind, deep.",
    compatibilityScore: 75,
    active: true
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
    active: true
  }
];
const CARD_GRADIENTS = [
  "linear-gradient(135deg, oklch(0.35 0.12 280) 0%, oklch(0.25 0.10 310) 100%)",
  "linear-gradient(135deg, oklch(0.30 0.14 330) 0%, oklch(0.25 0.10 280) 100%)",
  "linear-gradient(135deg, oklch(0.28 0.10 190) 0%, oklch(0.25 0.12 230) 100%)",
  "linear-gradient(135deg, oklch(0.35 0.12 50) 0%, oklch(0.28 0.10 330) 100%)",
  "linear-gradient(135deg, oklch(0.30 0.12 150) 0%, oklch(0.25 0.10 200) 100%)"
];
function getCardGradient(id) {
  const idx = Number.parseInt(id, 10) % CARD_GRADIENTS.length;
  return CARD_GRADIENTS[idx];
}
function getCompatColor(score) {
  if (score >= 80) return "oklch(0.55 0.2 145)";
  if (score >= 60) return "oklch(0.65 0.22 280)";
  return "oklch(0.72 0.19 85)";
}
function getCompatBg(score) {
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
  { key: "goal", label: "Relationship Goal" }
];
const MY_PROFILE_DEFAULTS = {
  habits: ["Morning Person", "Non-Drinker", "Exercise Sometimes"],
  lifestyle: "Active & Outdoorsy",
  philosophy: "Balanced Life",
  eating: "Non-Vegetarian",
  drinking: "Non-Drinker",
  emotional: "Moderate",
  financial: "Independent",
  goal: "Serious Relationship"
};
function computeCompatBreakdown(profile) {
  return COMPAT_CATEGORIES.map(({ key, label }) => {
    let match = 0;
    switch (key) {
      case "habits": {
        const shared = profile.habits.filter(
          (h) => MY_PROFILE_DEFAULTS.habits.includes(h)
        ).length;
        match = Math.min(
          100,
          shared / Math.max(MY_PROFILE_DEFAULTS.habits.length, 1) * 100
        );
        break;
      }
      case "lifestyle":
        match = profile.lifestyle === MY_PROFILE_DEFAULTS.lifestyle ? 100 : 40;
        break;
      case "philosophy":
        match = profile.philosophy === MY_PROFILE_DEFAULTS.philosophy ? 100 : 30;
        break;
      case "personality": {
        const map = {
          Ambivert: 90,
          Introvert: 55,
          Extrovert: 45
        };
        match = map[profile.personalityType] ?? 50;
        break;
      }
      case "eating":
        match = profile.eatingHabits === MY_PROFILE_DEFAULTS.eating ? 100 : 60;
        break;
      case "drinking":
        match = profile.drinkingHabits === MY_PROFILE_DEFAULTS.drinking ? 100 : 30;
        break;
      case "emotional":
        match = profile.emotionalNeeds === MY_PROFILE_DEFAULTS.emotional ? 100 : 50;
        break;
      case "financial":
        match = profile.financialNeeds === MY_PROFILE_DEFAULTS.financial ? 100 : 60;
        break;
      case "goal":
        match = profile.relationshipGoal === MY_PROFILE_DEFAULTS.goal ? 100 : 35;
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
  "Social Butterfly"
];
function CompatBadge({ score }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold",
      style: { color: getCompatColor(score), background: getCompatBg(score) },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 9 }),
        score,
        "%"
      ]
    }
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
  isSaved
}) {
  const initials = profile.displayName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "overflow-hidden border-0 shadow-elevated cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-elevated group",
      onClick: () => onView(profile),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative h-32 flex flex-col justify-end p-4",
            style: { background: getCardGradient(profile.id) },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full border-4 border-white/30" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-14 w-14 border-2 border-white/40 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  className: "text-lg font-label font-bold",
                  style: { background: "rgba(255,255,255,0.15)", color: "white" },
                  children: initials
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompatBadge, { score: profile.compatibilityScore }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base text-foreground", children: profile.displayName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: profile.age }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: profile.city })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
              profile.occupation,
              " · ",
              profile.pronouns
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
            profile.habits.slice(0, 3).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0.5 font-label",
                children: h
              },
              h
            )),
            profile.habits.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0.5 font-label",
                children: [
                  "+",
                  profile.habits.length - 3
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: profile.about }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-2 pt-1",
              onClick: (e) => e.stopPropagation(),
              onKeyDown: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "flex-1 h-8 text-xs font-label gap-1 hover:bg-secondary/80",
                    onClick: (e) => {
                      e.stopPropagation();
                      onPass(profile.id);
                    },
                    title: "Pass",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-muted-foreground" }),
                      " Pass"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "flex-1 h-8 text-xs font-label gap-1",
                    onClick: (e) => {
                      e.stopPropagation();
                      onLike(profile.id);
                    },
                    title: "Like",
                    style: isLiked ? { background: "oklch(0.72 0.15 350)", color: "white" } : {
                      background: "oklch(0.72 0.15 350 / 0.1)",
                      color: "oklch(0.55 0.18 350)",
                      border: "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 12, fill: isLiked ? "currentColor" : "none" }),
                      isLiked ? "Liked" : "Like"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: (e) => {
                      e.stopPropagation();
                      onSuperLike(profile.id);
                    },
                    title: "Super Like",
                    style: {
                      color: "oklch(0.72 0.19 85)",
                      background: "oklch(0.72 0.19 85 / 0.1)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: (e) => {
                      e.stopPropagation();
                      onSave(profile.id);
                    },
                    title: "Save",
                    style: isSaved ? {
                      color: "oklch(0.55 0.22 280)",
                      background: "oklch(0.55 0.22 280 / 0.1)"
                    } : {},
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 14, fill: isSaved ? "currentColor" : "none" })
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ProfileDetailSheet({
  profile,
  open,
  onClose
}) {
  if (!profile) return null;
  const breakdown = computeCompatBreakdown(profile);
  const initials = profile.displayName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const sharedHabits = profile.habits.filter(
    (h) => MY_PROFILE_DEFAULTS.habits.includes(h)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-lg overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Zap,
        {
          size: 16,
          className: "inline mr-2",
          style: { color: "oklch(0.65 0.22 280)" }
        }
      ),
      "Profile"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl p-4 flex items-start gap-4",
          style: { background: getCardGradient(profile.id) },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-16 w-16 border-2 border-white/30 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AvatarFallback,
              {
                className: "text-xl font-label font-bold",
                style: { background: "rgba(255,255,255,0.15)", color: "white" },
                children: initials
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-white", children: profile.displayName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/70", children: profile.age })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/70", children: [
                profile.occupation,
                " · ",
                profile.city
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60 mt-0.5", children: profile.pronouns }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompatBadge, { score: profile.compatibilityScore }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: profile.about })
      ] }),
      sharedHabits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Shared Habits ✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: sharedHabits.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            className: "text-xs font-label gap-1",
            style: {
              background: "oklch(0.55 0.2 145 / 0.15)",
              color: "oklch(0.40 0.18 145)",
              border: "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10 }),
              " ",
              h
            ]
          },
          h
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Likes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: profile.likes.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-xs font-label",
              children: [
                "❤ ",
                l
              ]
            },
            l
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Dislikes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: profile.dislikes.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-xs font-label text-muted-foreground",
              children: [
                "✕ ",
                d
              ]
            },
            d
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Profile Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
          ["Lifestyle", profile.lifestyle],
          ["Philosophy", profile.philosophy],
          ["Personality", profile.personalityType],
          ["Clothing Style", profile.clothingStyle],
          ["Eating Habits", profile.eatingHabits],
          ["Drinking Habits", profile.drinkingHabits],
          ["Financial Needs", profile.financialNeeds],
          ["Emotional Needs", profile.emotionalNeeds],
          ["Adaptability", profile.adaptability],
          ["Looking For", profile.relationshipGoal]
        ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-xs", children: value })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Habits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: profile.habits.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-xs font-label",
            children: h
          },
          h
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Compatibility Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: breakdown.map(({ label, match }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-label", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-label font-semibold",
                style: { color: getCompatColor(match) },
                children: [
                  match,
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: match, className: "h-1.5" })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 gap-2 font-label",
            style: { background: "oklch(0.72 0.15 350)", color: "white" },
            onClick: () => {
              ue.success(`Liked ${profile.displayName}!`);
              onClose();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
              " Like"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "flex-1 font-label",
            onClick: onClose,
            children: "Close"
          }
        )
      ] })
    ] })
  ] }) });
}
function SetupProfileSheet({
  open,
  onClose,
  onSave
}) {
  const [form, setForm] = reactExports.useState({
    displayName: "",
    age: "",
    gender: "",
    pronouns: "",
    occupation: "",
    city: "",
    habits: [],
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
    ageRangeMax: 35
  });
  const toggleHabit = (h) => {
    setForm((prev) => ({
      ...prev,
      habits: prev.habits.includes(h) ? prev.habits.filter((x) => x !== h) : [...prev.habits, h]
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-lg overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Zap,
        {
          size: 18,
          className: "inline mr-2",
          style: { color: "oklch(0.65 0.22 280)" }
        }
      ),
      "Create Dating Profile"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Display Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "How you'll appear to others",
              value: form.displayName,
              onChange: (e) => setForm({ ...form, displayName: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              placeholder: "25",
              value: form.age,
              onChange: (e) => setForm({ ...form, age: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.gender,
              onValueChange: (v) => setForm({ ...form, gender: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Male", children: "Male" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Female", children: "Female" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Non-binary", children: "Non-binary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Prefer not to say", children: "Prefer not to say" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Pronouns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "he/him, she/her, they/them",
              value: form.pronouns,
              onChange: (e) => setForm({ ...form, pronouns: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Occupation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "What do you do?",
              value: form.occupation,
              onChange: (e) => setForm({ ...form, occupation: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Your city",
              value: form.city,
              onChange: (e) => setForm({ ...form, city: e.target.value })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Your Habits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: HABIT_OPTIONS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggleHabit(h),
            className: "px-2.5 py-1 rounded-full text-xs font-label border transition-all",
            style: form.habits.includes(h) ? {
              background: "oklch(0.65 0.22 280 / 0.15)",
              borderColor: "oklch(0.65 0.22 280)",
              color: "oklch(0.45 0.18 280)"
            } : {
              borderColor: "oklch(var(--border))",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              form.habits.includes(h) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 9, className: "inline mr-1" }),
              h
            ]
          },
          h
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Likes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Hiking, Coffee, Music...",
              value: form.likes,
              onChange: (e) => setForm({ ...form, likes: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Dislikes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Drama, Dishonesty...",
              value: form.dislikes,
              onChange: (e) => setForm({ ...form, dislikes: e.target.value })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Adaptability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.adaptability,
              onValueChange: (v) => setForm({ ...form, adaptability: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Very Adaptive",
                  "Moderately Adaptive",
                  "Prefers Stability"
                ].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, children: a }, a)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Financial Needs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.financialNeeds,
              onValueChange: (v) => setForm({ ...form, financialNeeds: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Independent", "Shared", "Partner Supports"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, children: f }, f)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Emotional Needs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.emotionalNeeds,
              onValueChange: (v) => setForm({ ...form, emotionalNeeds: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Low Maintenance",
                  "Moderate",
                  "High Emotional Connection"
                ].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: e, children: e }, e)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Lifestyle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.lifestyle,
              onValueChange: (v) => setForm({ ...form, lifestyle: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Active & Outdoorsy",
                  "Creative & Artistic",
                  "Intellectual",
                  "Social & Party",
                  "Homebody",
                  "Adventurous"
                ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Life Philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.philosophy,
              onValueChange: (v) => setForm({ ...form, philosophy: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "YOLO",
                  "Work Hard Play Hard",
                  "Balanced Life",
                  "Spiritual",
                  "Minimalist",
                  "Ambitious"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Personality Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.personalityType,
              onValueChange: (v) => setForm({ ...form, personalityType: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Introvert", "Extrovert", "Ambivert"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Clothing Style" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.clothingStyle,
              onValueChange: (v) => setForm({ ...form, clothingStyle: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Casual",
                  "Formal",
                  "Trendy/Fashionable",
                  "Traditional",
                  "Sporty",
                  "Eclectic/Boho"
                ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Eating Habits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.eatingHabits,
              onValueChange: (v) => setForm({ ...form, eatingHabits: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Vegetarian",
                  "Vegan",
                  "Non-Vegetarian",
                  "Pescatarian",
                  "Keto",
                  "No Preference"
                ].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: e, children: e }, e)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Drinking Habits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.drinkingHabits,
              onValueChange: (v) => setForm({ ...form, drinkingHabits: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Non-Drinker", "Social Drinker", "Regular Drinker"].map(
                  (d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Relationship Goal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.relationshipGoal,
              onValueChange: (v) => setForm({ ...form, relationshipGoal: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Casual Dating",
                  "Serious Relationship",
                  "Marriage",
                  "Friendship First",
                  "Not Sure"
                ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: [
          "Looking For Ages: ",
          form.ageRangeMin,
          " – ",
          form.ageRangeMax
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "18" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              min: 18,
              max: 50,
              step: 1,
              value: [form.ageRangeMin, form.ageRangeMax],
              onValueChange: ([min, max]) => setForm({ ...form, ageRangeMin: min, ageRangeMax: max }),
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "About Me" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
            form.about.length,
            "/300"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "What makes you unique? What are you looking for?",
            value: form.about,
            onChange: (e) => setForm({ ...form, about: e.target.value.slice(0, 300) }),
            className: "resize-none h-24",
            maxLength: 300
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 font-label gap-2",
            style: { background: "oklch(0.65 0.22 280)", color: "white" },
            onClick: () => {
              onSave({
                ...form,
                age: Number(form.age) || 0,
                likes: form.likes.split(",").map((l) => l.trim()).filter(Boolean),
                dislikes: form.dislikes.split(",").map((d) => d.trim()).filter(Boolean)
              });
              ue.success("Dating profile saved!");
              onClose();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14 }),
              " Save Profile"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "font-label", onClick: onClose, children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function DatingPage() {
  const [setupOpen, setSetupOpen] = reactExports.useState(false);
  const [myProfile, setMyProfile] = reactExports.useState(
    null
  );
  const [selectedProfile, setSelectedProfile] = reactExports.useState(
    null
  );
  const [detailOpen, setDetailOpen] = reactExports.useState(false);
  const [liked, setLiked] = reactExports.useState(/* @__PURE__ */ new Set(["4", "6", "11"]));
  const [passed, setPassed] = reactExports.useState(/* @__PURE__ */ new Set());
  const [saved, setSaved] = reactExports.useState(/* @__PURE__ */ new Set(["3", "7"]));
  const [matches] = reactExports.useState(/* @__PURE__ */ new Set(["4", "11"]));
  const [filterHabit, setFilterHabit] = reactExports.useState("all");
  const [filterLifestyle, setFilterLifestyle] = reactExports.useState("all");
  const [filterPersonality, setFilterPersonality] = reactExports.useState("all");
  const [filterGoal, setFilterGoal] = reactExports.useState("all");
  const [filterAgeMin, setFilterAgeMin] = reactExports.useState(18);
  const [filterAgeMax, setFilterAgeMax] = reactExports.useState(40);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const handleLike = (id) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        ue.info("Removed like");
      } else {
        next.add(id);
        if (matches.has(id)) {
          ue.success(`🎉 It's a match with ${profile.displayName}!`, {
            duration: 4e3
          });
        } else {
          ue.success(`Liked ${profile.displayName}!`);
        }
      }
      return next;
    });
  };
  const handlePass = (id) => {
    setPassed((prev) => /* @__PURE__ */ new Set([...prev, id]));
    ue.info("Passed");
  };
  const handleSuperLike = (id) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    ue.success(`⭐ Super liked ${profile == null ? void 0 : profile.displayName}!`);
    setLiked((prev) => /* @__PURE__ */ new Set([...prev, id]));
  };
  const handleSave = (id) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        ue.info("Removed from saved");
      } else {
        next.add(id);
        ue.success("Saved profile");
      }
      return next;
    });
  };
  const filteredProfiles = MOCK_PROFILES.filter((p) => {
    if (passed.has(p.id)) return false;
    if (filterHabit && filterHabit !== "all" && !p.habits.includes(filterHabit))
      return false;
    if (filterLifestyle && filterLifestyle !== "all" && p.lifestyle !== filterLifestyle)
      return false;
    if (filterPersonality && filterPersonality !== "all" && p.personalityType !== filterPersonality)
      return false;
    if (filterGoal && filterGoal !== "all" && p.relationshipGoal !== filterGoal)
      return false;
    if (p.age < filterAgeMin || p.age > filterAgeMax) return false;
    return true;
  });
  const likedProfiles = MOCK_PROFILES.filter((p) => liked.has(p.id));
  const savedProfiles = MOCK_PROFILES.filter((p) => saved.has(p.id));
  const matchedProfiles = MOCK_PROFILES.filter(
    (p) => liked.has(p.id) && matches.has(p.id)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6 min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 22, style: { color: "oklch(0.65 0.22 280)" } }),
          "Dating"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Modern matches based on habits, lifestyle & compatibility" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "gap-2 font-label shrink-0",
          style: { background: "oklch(0.65 0.22 280)", color: "white" },
          onClick: () => setSetupOpen(true),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
            myProfile ? "Edit Profile" : "Create Profile"
          ]
        }
      )
    ] }),
    !myProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 flex items-center justify-between gap-4 border",
        style: {
          background: "oklch(0.65 0.22 280 / 0.08)",
          borderColor: "oklch(0.65 0.22 280 / 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                style: { background: "oklch(0.65 0.22 280 / 0.15)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18, style: { color: "oklch(0.65 0.22 280)" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Create your dating profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Add your habits, lifestyle & preferences to find compatible matches" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "shrink-0 font-label gap-1",
              style: { background: "oklch(0.65 0.22 280)", color: "white" },
              onClick: () => setSetupOpen(true),
              children: "Create Profile"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 border flex items-center gap-4",
        style: {
          background: "oklch(0.65 0.22 280 / 0.06)",
          borderColor: "oklch(0.65 0.22 280 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Avatar,
            {
              className: "h-12 w-12 shrink-0 border-2",
              style: { borderColor: "oklch(0.65 0.22 280)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  style: {
                    background: "oklch(0.65 0.22 280 / 0.2)",
                    color: "oklch(0.40 0.18 280)"
                  },
                  children: (myProfile.displayName ?? "U").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground truncate", children: myProfile.displayName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-label shrink-0",
                  style: {
                    background: "oklch(0.55 0.2 145 / 0.15)",
                    color: "oklch(0.40 0.18 145)",
                    border: "none"
                  },
                  children: "Active"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              myProfile.age,
              " · ",
              myProfile.occupation,
              " ·",
              " ",
              myProfile.lifestyle
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "shrink-0 font-label",
              onClick: () => setSetupOpen(true),
              children: "Edit"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddBar, { moduleName: "Dating" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "discover", className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "font-label", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "discover", children: "Discover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "matches", children: [
          "Matches",
          matchedProfiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "ml-1.5 text-[10px] font-bold rounded-full px-1.5 py-0.5",
              style: { background: "oklch(0.72 0.15 350)", color: "white" },
              children: matchedProfiles.length
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "liked", children: [
          "Liked (",
          likedProfiles.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "saved", children: [
          "Saved (",
          savedProfiles.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "discover", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterHabit, onValueChange: setFilterHabit, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-40 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by Habit" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Habits" }),
              HABIT_OPTIONS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: h, children: h }, h))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterLifestyle, onValueChange: setFilterLifestyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-40 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Lifestyle" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Lifestyles" }),
              [
                "Active & Outdoorsy",
                "Creative & Artistic",
                "Intellectual",
                "Social & Party",
                "Homebody",
                "Adventurous"
              ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filterPersonality,
              onValueChange: setFilterPersonality,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Personality" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Types" }),
                  ["Introvert", "Extrovert", "Ambivert"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterGoal, onValueChange: setFilterGoal, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-40 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Looking For" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Any Goal" }),
              [
                "Casual Dating",
                "Serious Relationship",
                "Marriage",
                "Friendship First",
                "Not Sure"
              ].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: g, children: g }, g))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 gap-1.5 font-label text-xs",
              onClick: () => setShowFilters((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 12 }),
                " Age Range"
              ]
            }
          )
        ] }),
        showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/60 p-4 bg-card space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: [
            "Age Range: ",
            filterAgeMin,
            " – ",
            filterAgeMax
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Slider,
              {
                min: 18,
                max: 50,
                step: 1,
                value: [filterAgeMin, filterAgeMax],
                onValueChange: ([min, max]) => {
                  setFilterAgeMin(min);
                  setFilterAgeMax(max);
                },
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "50" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
          filteredProfiles.length,
          " profiles in your area"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: [
          filteredProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiscoverCard,
            {
              profile,
              onLike: handleLike,
              onPass: handlePass,
              onSuperLike: handleSuperLike,
              onSave: handleSave,
              onView: (p) => {
                setSelectedProfile(p);
                setDetailOpen(true);
              },
              isLiked: liked.has(profile.id),
              isSaved: saved.has(profile.id)
            },
            profile.id
          )),
          filteredProfiles.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-center py-16 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 40, className: "mx-auto mb-3 opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "No profiles match your filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Try adjusting your filters to see more people" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matches", className: "space-y-4", children: matchedProfiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 40, className: "mx-auto mb-3 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "No mutual matches yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Keep liking profiles — when someone likes you back, they'll appear here" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: matchedProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "overflow-hidden border-border/60",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-1.5",
                style: { background: "oklch(0.55 0.2 145)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  className: "h-12 w-12 border-2 shrink-0",
                  style: { borderColor: "oklch(0.55 0.2 145)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AvatarFallback,
                    {
                      className: "font-label font-bold text-base",
                      style: {
                        background: "oklch(0.55 0.2 145 / 0.15)",
                        color: "oklch(0.40 0.18 145)"
                      },
                      children: profile.displayName.split(" ").map((n) => n[0]).join("").slice(0, 2)
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: profile.displayName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  profile.age,
                  " · ",
                  profile.occupation,
                  " · ",
                  profile.city
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-label shrink-0",
                  style: {
                    background: "oklch(0.55 0.2 145 / 0.15)",
                    color: "oklch(0.40 0.18 145)",
                    border: "none"
                  },
                  children: "Matched!"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full h-8 text-xs font-label gap-2",
                variant: "outline",
                onClick: () => ue.info("Chat feature coming soon!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 12 }),
                  " Start Conversation"
                ]
              }
            ) })
          ]
        },
        profile.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "liked", className: "space-y-4", children: likedProfiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 40, className: "mx-auto mb-3 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "You haven't liked anyone yet" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: likedProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "overflow-hidden border-border/60",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-1",
                style: { background: "oklch(0.72 0.15 350)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  style: {
                    background: "oklch(0.72 0.15 350 / 0.15)",
                    color: "oklch(0.50 0.18 350)"
                  },
                  children: profile.displayName.split(" ").map((n) => n[0]).join("").slice(0, 2)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground truncate", children: profile.displayName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  profile.age,
                  " · ",
                  profile.occupation
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-label shrink-0",
                  style: matches.has(profile.id) ? {
                    background: "oklch(0.55 0.2 145 / 0.15)",
                    color: "oklch(0.40 0.18 145)",
                    border: "none"
                  } : {
                    background: "oklch(0.72 0.19 85 / 0.15)",
                    color: "oklch(0.55 0.18 85)",
                    border: "none"
                  },
                  children: matches.has(profile.id) ? "Matched!" : "Waiting"
                }
              )
            ] }) })
          ]
        },
        profile.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "saved", className: "space-y-4", children: savedProfiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 40, className: "mx-auto mb-3 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "No saved profiles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Bookmark profiles to revisit them later" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: savedProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DiscoverCard,
        {
          profile,
          onLike: handleLike,
          onPass: handlePass,
          onSuperLike: handleSuperLike,
          onSave: handleSave,
          onView: (p) => {
            setSelectedProfile(p);
            setDetailOpen(true);
          },
          isLiked: liked.has(profile.id),
          isSaved: true
        },
        profile.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProfileDetailSheet,
      {
        profile: selectedProfile,
        open: detailOpen,
        onClose: () => {
          setDetailOpen(false);
          setSelectedProfile(null);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SetupProfileSheet,
      {
        open: setupOpen,
        onClose: () => setSetupOpen(false),
        onSave: (profile) => setMyProfile(profile)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "pt-4 border-t border-border/40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-foreground transition-colors",
          children: "caffeine.ai"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Dating", moduleColor: "oklch(0.62 0.24 350)" }) })
  ] });
}
export {
  DatingPage as default
};
