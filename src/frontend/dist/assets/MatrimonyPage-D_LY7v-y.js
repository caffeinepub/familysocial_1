import { r as reactExports, j as jsxRuntimeExports, H as Heart, B as Button, A as Avatar, m as AvatarFallback, k as Search, I as Input, S as Select, e as SelectTrigger, f as SelectValue, g as SelectContent, h as SelectItem, t as ChevronDown, L as Label, n as Check, u as ue, X, q as BookOpen, T as Textarea, v as Switch } from "./index-Daa_jkDV.js";
import { B as Badge } from "./badge-CgPShR5m.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-BwXCLAcG.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-BCSMLL0M.js";
import { S as Slider } from "./slider-7vUSXr0B.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C44-sP5D.js";
import { E as EventsTab } from "./EventsTab-PQpXp_oa.js";
import { Q as QuickAddBar } from "./QuickAddBar-CHEkBj4Z.js";
import { U as User } from "./user-BIPj2Ags.js";
import { F as Funnel } from "./funnel-C8tKqSzd.js";
import { S as Star } from "./star-QRKfelm0.js";
import "./plus-B0rBT2fy.js";
import "./external-link-BTlYDj87.js";
import "./share-2-C__mi0H_.js";
import "./lock-DkDyL_fq.js";
import "./calendar-DYxx0An1.js";
import "./map-pin-BlSqDiOZ.js";
import "./checkbox-DRLfEn2u.js";
import "./package-P_JLPPzx.js";
const MOCK_PROFILES = [
  {
    id: "1",
    name: "Aisha Fatima",
    age: 26,
    gender: "Female",
    caste: "Syed",
    sect: "Sunni",
    skinColor: "Fair",
    height: `5'4"`,
    weight: "55kg",
    occupation: "Doctor",
    education: "MBBS",
    livingStandard: "Upper-Middle",
    lifestyle: "Moderate",
    incomeRange: "100k-200k",
    patienceLevel: 8,
    loveExpectation: "Semi-Arranged",
    features: ["Slim", "Tall"],
    horoscope: "Libra",
    familyBackground: "Nuclear Family",
    about: "A dedicated doctor who loves reading and traveling. Looking for a life partner who values family and education.",
    city: "Lahore",
    active: true,
    compatibilityScore: 91,
    matchingFactors: ["Caste Match", "Profession Match", "Lifestyle Match"]
  },
  {
    id: "2",
    name: "Zara Khan",
    age: 24,
    gender: "Female",
    caste: "Pathan",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: `5'5"`,
    weight: "58kg",
    occupation: "Engineer",
    education: "Bachelor",
    livingStandard: "Middle",
    lifestyle: "Simple",
    incomeRange: "60k-100k",
    patienceLevel: 7,
    loveExpectation: "Arranged",
    features: ["Athletic", "Average"],
    horoscope: "Aries",
    familyBackground: "Joint Family",
    about: "Software engineer passionate about technology and innovation. Values simplicity and family traditions.",
    city: "Islamabad",
    active: true,
    compatibilityScore: 78,
    matchingFactors: ["Height Match", "Education Match"]
  },
  {
    id: "3",
    name: "Hina Nawaz",
    age: 27,
    gender: "Female",
    caste: "Mughal",
    sect: "Sunni",
    skinColor: "Fair",
    height: `5'3"`,
    weight: "52kg",
    occupation: "Teacher",
    education: "Master",
    livingStandard: "Middle",
    lifestyle: "Simple",
    incomeRange: "30k-60k",
    patienceLevel: 9,
    loveExpectation: "Arranged",
    features: ["Slim", "Average", "Spectacles"],
    horoscope: "Gemini",
    familyBackground: "Joint Family",
    about: "University professor dedicated to education and building a peaceful home. Very family-oriented.",
    city: "Karachi",
    active: true,
    compatibilityScore: 85,
    matchingFactors: ["Caste Match", "Lifestyle Match", "Patience Match"]
  },
  {
    id: "4",
    name: "Sobia Malik",
    age: 23,
    gender: "Female",
    caste: "Rajput",
    sect: "Sunni",
    skinColor: "Brown",
    height: `5'2"`,
    weight: "50kg",
    occupation: "Architect",
    education: "Bachelor",
    livingStandard: "Upper-Middle",
    lifestyle: "Moderate",
    incomeRange: "60k-100k",
    patienceLevel: 6,
    loveExpectation: "Semi-Arranged",
    features: ["Slim", "Short"],
    horoscope: "Leo",
    familyBackground: "Nuclear Family",
    about: "Creative architect with a passion for interior design and aesthetics. Looking for a partner who appreciates art.",
    city: "Lahore",
    active: true,
    compatibilityScore: 72,
    matchingFactors: ["Lifestyle Match", "Height Match"]
  },
  {
    id: "5",
    name: "Fatima Rizvi",
    age: 25,
    gender: "Female",
    caste: "Syed",
    sect: "Shia",
    skinColor: "Fair",
    height: `5'6"`,
    weight: "57kg",
    occupation: "Lawyer",
    education: "Master",
    livingStandard: "Upper",
    lifestyle: "Luxurious",
    incomeRange: "200k+",
    patienceLevel: 7,
    loveExpectation: "Semi-Arranged",
    features: ["Athletic", "Tall"],
    horoscope: "Scorpio",
    familyBackground: "Nuclear Family",
    about: "Corporate lawyer who believes in justice and equal partnerships. Loves fine dining and travel.",
    city: "Karachi",
    active: true,
    compatibilityScore: 67,
    matchingFactors: ["Caste Match", "Education Match"]
  },
  {
    id: "6",
    name: "Maryam Qureshi",
    age: 28,
    gender: "Female",
    caste: "Qureshi",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: `5'4"`,
    weight: "56kg",
    occupation: "Pharmacist",
    education: "Bachelor",
    livingStandard: "Middle",
    lifestyle: "Moderate",
    incomeRange: "60k-100k",
    patienceLevel: 8,
    loveExpectation: "Arranged",
    features: ["Average", "Spectacles"],
    horoscope: "Taurus",
    familyBackground: "Joint Family",
    about: "Healthcare professional focused on community service. Values humility and strong family bonds.",
    city: "Multan",
    active: true,
    compatibilityScore: 82,
    matchingFactors: ["Profession Match", "Patience Match", "Lifestyle Match"]
  },
  {
    id: "7",
    name: "Nadia Hussain",
    age: 24,
    gender: "Female",
    caste: "Ansari",
    sect: "Sunni",
    skinColor: "Brown",
    height: `5'5"`,
    weight: "60kg",
    occupation: "Dentist",
    education: "BDS",
    livingStandard: "Upper-Middle",
    lifestyle: "Moderate",
    incomeRange: "100k-200k",
    patienceLevel: 7,
    loveExpectation: "Semi-Arranged",
    features: ["Average", "Tall"],
    horoscope: "Virgo",
    familyBackground: "Nuclear Family",
    about: "Dental surgeon with her own clinic. Independent and ambitious but strongly values family.",
    city: "Faisalabad",
    active: true,
    compatibilityScore: 76,
    matchingFactors: ["Profession Match", "Living Standard Match"]
  },
  {
    id: "8",
    name: "Amna Sheikh",
    age: 22,
    gender: "Female",
    caste: "Sheikh",
    sect: "Sunni",
    skinColor: "Fair",
    height: `5'3"`,
    weight: "48kg",
    occupation: "Student",
    education: "Bachelor",
    livingStandard: "Upper-Middle",
    lifestyle: "Simple",
    incomeRange: "Below 30k",
    patienceLevel: 9,
    loveExpectation: "Arranged",
    features: ["Slim", "Short"],
    horoscope: "Cancer",
    familyBackground: "Joint Family",
    about: "Final year medical student. Looking for a partner who shares the value of lifelong learning and growth.",
    city: "Lahore",
    active: true,
    compatibilityScore: 88,
    matchingFactors: ["Caste Match", "Lifestyle Match", "Patience Match"]
  },
  {
    id: "9",
    name: "Rabia Tariq",
    age: 26,
    gender: "Female",
    caste: "Pathan",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: `5'6"`,
    weight: "62kg",
    occupation: "Banker",
    education: "MBA",
    livingStandard: "Upper-Middle",
    lifestyle: "Moderate",
    incomeRange: "100k-200k",
    patienceLevel: 6,
    loveExpectation: "Semi-Arranged",
    features: ["Athletic", "Tall", "Bearded"],
    horoscope: "Sagittarius",
    familyBackground: "Nuclear Family",
    about: "Senior banker with a passion for finance and investment. Looking for an intellectually stimulating partner.",
    city: "Islamabad",
    active: true,
    compatibilityScore: 63,
    matchingFactors: ["Profession Match", "Education Match"]
  },
  {
    id: "10",
    name: "Saima Bukhari",
    age: 25,
    gender: "Female",
    caste: "Bukhari",
    sect: "Sunni",
    skinColor: "Fair",
    height: `5'4"`,
    weight: "54kg",
    occupation: "Artist",
    education: "Bachelor",
    livingStandard: "Middle",
    lifestyle: "Simple",
    incomeRange: "30k-60k",
    patienceLevel: 9,
    loveExpectation: "Love Marriage",
    features: ["Slim", "Average"],
    horoscope: "Pisces",
    familyBackground: "Nuclear Family",
    about: "Graphic designer and painter. Believes in soulmate connections and creative partnerships.",
    city: "Lahore",
    active: true,
    compatibilityScore: 74,
    matchingFactors: ["Lifestyle Match", "Patience Match"]
  },
  {
    id: "11",
    name: "Bushra Chaudhry",
    age: 29,
    gender: "Female",
    caste: "Chaudhry",
    sect: "Sunni",
    skinColor: "Brown",
    height: `5'5"`,
    weight: "65kg",
    occupation: "Professor",
    education: "PhD",
    livingStandard: "Upper-Middle",
    lifestyle: "Moderate",
    incomeRange: "100k-200k",
    patienceLevel: 8,
    loveExpectation: "Arranged",
    features: ["Average", "Spectacles"],
    horoscope: "Aquarius",
    familyBackground: "Joint Family",
    about: "University professor specializing in Islamic History. Looking for a knowledgeable, cultured life partner.",
    city: "Lahore",
    active: true,
    compatibilityScore: 79,
    matchingFactors: [
      "Education Match",
      "Living Standard Match",
      "Patience Match"
    ]
  },
  {
    id: "12",
    name: "Tuba Aslam",
    age: 23,
    gender: "Female",
    caste: "Aslam",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: `5'3"`,
    weight: "52kg",
    occupation: "Nurse",
    education: "Bachelor",
    livingStandard: "Middle",
    lifestyle: "Simple",
    incomeRange: "30k-60k",
    patienceLevel: 9,
    loveExpectation: "Arranged",
    features: ["Slim", "Short"],
    horoscope: "Capricorn",
    familyBackground: "Joint Family",
    about: "Dedicated healthcare worker with a warm heart. Values kindness, honesty, and a supportive family environment.",
    city: "Rawalpindi",
    active: true,
    compatibilityScore: 84,
    matchingFactors: ["Lifestyle Match", "Patience Match", "Caste Match"]
  }
];
const MOCK_REQUESTS = [
  {
    id: "r1",
    profile: MOCK_PROFILES[0],
    status: "Pending",
    type: "sent",
    date: "2 days ago"
  },
  {
    id: "r2",
    profile: MOCK_PROFILES[2],
    status: "Accepted",
    type: "sent",
    date: "1 week ago"
  },
  {
    id: "r3",
    profile: MOCK_PROFILES[5],
    status: "Declined",
    type: "sent",
    date: "2 weeks ago"
  },
  {
    id: "r4",
    profile: MOCK_PROFILES[7],
    status: "Pending",
    type: "received",
    date: "1 day ago"
  },
  {
    id: "r5",
    profile: MOCK_PROFILES[9],
    status: "Pending",
    type: "received",
    date: "3 days ago"
  }
];
const HOROSCOPE_COMPATIBILITY = {
  Aries: {
    Aries: "Good",
    Taurus: "Neutral",
    Gemini: "Excellent",
    Cancer: "Challenging",
    Leo: "Excellent",
    Virgo: "Neutral",
    Libra: "Challenging",
    Scorpio: "Good",
    Sagittarius: "Excellent",
    Capricorn: "Neutral",
    Aquarius: "Good",
    Pisces: "Challenging"
  },
  Taurus: {
    Aries: "Neutral",
    Taurus: "Excellent",
    Gemini: "Challenging",
    Cancer: "Excellent",
    Leo: "Neutral",
    Virgo: "Excellent",
    Libra: "Neutral",
    Scorpio: "Excellent",
    Sagittarius: "Challenging",
    Capricorn: "Excellent",
    Aquarius: "Challenging",
    Pisces: "Good"
  },
  Gemini: {
    Aries: "Excellent",
    Taurus: "Challenging",
    Gemini: "Good",
    Cancer: "Neutral",
    Leo: "Excellent",
    Virgo: "Challenging",
    Libra: "Excellent",
    Scorpio: "Challenging",
    Sagittarius: "Good",
    Capricorn: "Challenging",
    Aquarius: "Excellent",
    Pisces: "Neutral"
  },
  Cancer: {
    Aries: "Challenging",
    Taurus: "Excellent",
    Gemini: "Neutral",
    Cancer: "Good",
    Leo: "Challenging",
    Virgo: "Excellent",
    Libra: "Neutral",
    Scorpio: "Excellent",
    Sagittarius: "Challenging",
    Capricorn: "Good",
    Aquarius: "Challenging",
    Pisces: "Excellent"
  },
  Leo: {
    Aries: "Excellent",
    Taurus: "Neutral",
    Gemini: "Excellent",
    Cancer: "Challenging",
    Leo: "Good",
    Virgo: "Neutral",
    Libra: "Excellent",
    Scorpio: "Challenging",
    Sagittarius: "Excellent",
    Capricorn: "Neutral",
    Aquarius: "Good",
    Pisces: "Challenging"
  },
  Virgo: {
    Aries: "Neutral",
    Taurus: "Excellent",
    Gemini: "Challenging",
    Cancer: "Excellent",
    Leo: "Neutral",
    Virgo: "Good",
    Libra: "Neutral",
    Scorpio: "Excellent",
    Sagittarius: "Challenging",
    Capricorn: "Excellent",
    Aquarius: "Challenging",
    Pisces: "Good"
  },
  Libra: {
    Aries: "Challenging",
    Taurus: "Neutral",
    Gemini: "Excellent",
    Cancer: "Neutral",
    Leo: "Excellent",
    Virgo: "Neutral",
    Libra: "Good",
    Scorpio: "Challenging",
    Sagittarius: "Excellent",
    Capricorn: "Neutral",
    Aquarius: "Excellent",
    Pisces: "Good"
  },
  Scorpio: {
    Aries: "Good",
    Taurus: "Excellent",
    Gemini: "Challenging",
    Cancer: "Excellent",
    Leo: "Challenging",
    Virgo: "Excellent",
    Libra: "Challenging",
    Scorpio: "Good",
    Sagittarius: "Neutral",
    Capricorn: "Excellent",
    Aquarius: "Neutral",
    Pisces: "Excellent"
  },
  Sagittarius: {
    Aries: "Excellent",
    Taurus: "Challenging",
    Gemini: "Good",
    Cancer: "Challenging",
    Leo: "Excellent",
    Virgo: "Challenging",
    Libra: "Excellent",
    Scorpio: "Neutral",
    Sagittarius: "Good",
    Capricorn: "Neutral",
    Aquarius: "Excellent",
    Pisces: "Neutral"
  },
  Capricorn: {
    Aries: "Neutral",
    Taurus: "Excellent",
    Gemini: "Challenging",
    Cancer: "Good",
    Leo: "Neutral",
    Virgo: "Excellent",
    Libra: "Neutral",
    Scorpio: "Excellent",
    Sagittarius: "Neutral",
    Capricorn: "Good",
    Aquarius: "Neutral",
    Pisces: "Excellent"
  },
  Aquarius: {
    Aries: "Good",
    Taurus: "Challenging",
    Gemini: "Excellent",
    Cancer: "Challenging",
    Leo: "Good",
    Virgo: "Challenging",
    Libra: "Excellent",
    Scorpio: "Neutral",
    Sagittarius: "Excellent",
    Capricorn: "Neutral",
    Aquarius: "Good",
    Pisces: "Challenging"
  },
  Pisces: {
    Aries: "Challenging",
    Taurus: "Good",
    Gemini: "Neutral",
    Cancer: "Excellent",
    Leo: "Challenging",
    Virgo: "Good",
    Libra: "Good",
    Scorpio: "Excellent",
    Sagittarius: "Neutral",
    Capricorn: "Excellent",
    Aquarius: "Challenging",
    Pisces: "Excellent"
  }
};
const MY_HOROSCOPE = "Libra";
function getHoroCompat(a, b) {
  var _a;
  return ((_a = HOROSCOPE_COMPATIBILITY[a]) == null ? void 0 : _a[b]) ?? "Neutral";
}
function getCompatColor(score) {
  if (score >= 80) return "oklch(0.55 0.2 145)";
  if (score >= 60) return "oklch(0.72 0.19 85)";
  return "oklch(0.55 0.22 25)";
}
function getCompatBg(score) {
  if (score >= 80) return "oklch(0.55 0.2 145 / 0.12)";
  if (score >= 60) return "oklch(0.72 0.19 85 / 0.12)";
  return "oklch(0.55 0.22 25 / 0.12)";
}
function getHoroCompatColor(compat) {
  const map = {
    Excellent: "oklch(0.55 0.2 145)",
    Good: "oklch(0.55 0.22 280)",
    Neutral: "oklch(0.72 0.19 85)",
    Challenging: "oklch(0.55 0.22 25)"
  };
  return map[compat] ?? "oklch(0.5 0.02 280)";
}
const HOROSCOPE_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
const HOROSCOPE_EMOJI = {
  Aries: "♈",
  Taurus: "♉",
  Gemini: "♊",
  Cancer: "♋",
  Leo: "♌",
  Virgo: "♍",
  Libra: "♎",
  Scorpio: "♏",
  Sagittarius: "♐",
  Capricorn: "♑",
  Aquarius: "♒",
  Pisces: "♓"
};
const CRITERIA = [
  "Caste",
  "Height",
  "Weight",
  "Skin Color",
  "Profession",
  "Living Standard",
  "Lifestyle",
  "Patience",
  "Love Type",
  "Features",
  "Horoscope"
];
function CompatibilityBadge({ score }) {
  const color = getCompatColor(score);
  const bg = getCompatBg(score);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold",
      style: { color, background: bg },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: color } }),
        score,
        "% Match"
      ]
    }
  );
}
function MatchCard({
  profile,
  onShortlist,
  onSendRequest,
  onViewProfile,
  isShortlisted
}) {
  const initials = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const horoCompat = getHoroCompat(MY_HOROSCOPE, profile.horoscope);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group overflow-hidden transition-all duration-200 hover:shadow-card-hover border-border/60 hover:border-primary/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-1.5 w-full",
        style: { background: getCompatColor(profile.compatibilityScore) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Avatar,
          {
            className: "h-12 w-12 border-2 shrink-0",
            style: {
              borderColor: getCompatColor(profile.compatibilityScore)
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AvatarFallback,
              {
                className: "text-base font-label font-bold",
                style: {
                  background: "oklch(0.72 0.15 350 / 0.15)",
                  color: "oklch(0.50 0.18 350)"
                },
                children: initials
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground leading-tight", children: profile.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
            profile.age,
            " yrs · ",
            profile.city
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: profile.occupation })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompatibilityBadge, { score: profile.compatibilityScore })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Caste:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: profile.caste })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Height:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: profile.height })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Education:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: profile.education })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Income:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: profile.incomeRange })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: profile.matchingFactors.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "text-[10px] px-2 py-0.5 font-label",
          style: {
            background: "oklch(0.72 0.15 350 / 0.12)",
            color: "oklch(0.50 0.18 350)",
            border: "none"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 9, className: "mr-1" }),
            f
          ]
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Horoscope:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-label", children: [
          HOROSCOPE_EMOJI[profile.horoscope],
          " ",
          profile.horoscope
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-1.5 py-0.5 rounded text-[10px] font-label font-semibold",
            style: {
              background: `${getHoroCompatColor(horoCompat)}20`,
              color: getHoroCompatColor(horoCompat)
            },
            children: horoCompat
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 h-8 text-xs font-label gap-1",
            onClick: () => onViewProfile(profile),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 12 }),
              " View Profile"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-8 w-8 shrink-0",
            onClick: () => onShortlist(profile.id),
            title: isShortlisted ? "Remove from shortlist" : "Shortlist",
            style: isShortlisted ? {
              color: "oklch(0.72 0.19 85)",
              background: "oklch(0.72 0.19 85 / 0.12)"
            } : {},
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: isShortlisted ? "currentColor" : "none" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            className: "h-8 w-8 shrink-0",
            onClick: () => onSendRequest(profile.id),
            title: "Send Request",
            style: { background: "oklch(0.72 0.15 350)", color: "white" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 })
          }
        )
      ] })
    ] })
  ] });
}
function ProfileDetailSheet({
  profile,
  open,
  onClose
}) {
  if (!profile) return null;
  const horoCompat = getHoroCompat(MY_HOROSCOPE, profile.horoscope);
  const initials = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const criteriaStatus = CRITERIA.map((c) => {
    const rand = Math.random();
    if (rand > 0.6) return { label: c, status: "match" };
    if (rand > 0.3) return { label: c, status: "partial" };
    return { label: c, status: "no" };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-lg overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-xl", children: "Profile Details" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-4 p-4 rounded-xl",
          style: { background: "oklch(0.72 0.15 350 / 0.08)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Avatar,
              {
                className: "h-16 w-16 border-2 shrink-0",
                style: { borderColor: "oklch(0.72 0.15 350)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarFallback,
                  {
                    className: "text-xl font-label font-bold",
                    style: {
                      background: "oklch(0.72 0.15 350 / 0.2)",
                      color: "oklch(0.50 0.18 350)"
                    },
                    children: initials
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: profile.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                profile.age,
                " years · ",
                profile.city
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                profile.occupation,
                " · ",
                profile.education
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompatibilityBadge, { score: profile.compatibilityScore }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: profile.about })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Profile Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
          ["Caste / Community", profile.caste],
          ["Sect / Religion", profile.sect],
          ["Skin Color", profile.skinColor],
          ["Height", profile.height],
          ["Weight", profile.weight],
          ["Living Standard", profile.livingStandard],
          ["Lifestyle", profile.lifestyle],
          ["Monthly Income", profile.incomeRange],
          ["Love Expectation", profile.loveExpectation],
          ["Family Background", profile.familyBackground]
        ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: value })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Compatibility Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: criteriaStatus.map(({ label, status }) => {
          const colors = {
            match: {
              bg: "oklch(0.55 0.2 145 / 0.12)",
              text: "oklch(0.40 0.18 145)",
              dot: "oklch(0.55 0.2 145)"
            },
            partial: {
              bg: "oklch(0.72 0.19 85 / 0.12)",
              text: "oklch(0.55 0.18 85)",
              dot: "oklch(0.72 0.19 85)"
            },
            no: {
              bg: "oklch(0.55 0.22 25 / 0.12)",
              text: "oklch(0.45 0.18 25)",
              dot: "oklch(0.55 0.22 25)"
            }
          };
          const c = colors[status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-1.5 px-3 rounded-lg",
              style: { background: c.bg },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full shrink-0",
                      style: { background: c.dot }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-label font-semibold capitalize",
                      style: { color: c.text },
                      children: status === "no" ? "No Match" : status === "partial" ? "Partial" : "Match"
                    }
                  )
                ] })
              ]
            },
            label
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/60 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Horoscope Compatibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: HOROSCOPE_EMOJI[MY_HOROSCOPE] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label mt-1 text-muted-foreground", children: [
              "You (",
              MY_HOROSCOPE,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-3 py-1.5 rounded-full text-sm font-label font-bold",
                style: {
                  background: `${getHoroCompatColor(horoCompat)}20`,
                  color: getHoroCompatColor(horoCompat)
                },
                children: horoCompat
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full h-px my-2",
                style: { background: getHoroCompatColor(horoCompat) }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: HOROSCOPE_EMOJI[profile.horoscope] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label mt-1 text-muted-foreground", children: [
              profile.name.split(" ")[0],
              " (",
              profile.horoscope,
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Physical Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: profile.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs font-label", children: f }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 gap-2 font-label",
            style: { background: "oklch(0.72 0.15 350)", color: "white" },
            onClick: () => {
              ue.success(`Interest sent to ${profile.name}!`);
              onClose();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
              " Send Interest"
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
    name: "",
    age: "",
    gender: "",
    caste: "",
    sect: "",
    skinColor: "",
    height: "",
    weight: "",
    occupation: "",
    education: "",
    livingStandard: "",
    lifestyle: "",
    incomeRange: "",
    patienceLevel: 7,
    loveExpectation: "",
    horoscope: "",
    familyBackground: "",
    about: "",
    active: true,
    features: []
  });
  const FEATURE_OPTIONS = [
    "Slim",
    "Athletic",
    "Average",
    "Heavy",
    "Tall",
    "Short",
    "Spectacles",
    "Bearded",
    "Fair Complexion",
    "Dusky"
  ];
  const toggleFeature = (f) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(f) ? prev.features.filter((x) => x !== f) : [...prev.features, f]
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-lg overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Heart,
        {
          size: 18,
          className: "inline mr-2",
          style: { color: "oklch(0.72 0.15 350)" }
        }
      ),
      "Set Up Matrimony Profile"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Your full name",
              value: form.name,
              onChange: (e) => setForm({ ...form, name: e.target.value })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Other", children: "Other" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Caste / Community" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Syed, Pathan",
              value: form.caste,
              onChange: (e) => setForm({ ...form, caste: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Sect / Religion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Sunni, Shia",
              value: form.sect,
              onChange: (e) => setForm({ ...form, sect: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Skin Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.skinColor,
              onValueChange: (v) => setForm({ ...form, skinColor: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Fair", "Wheatish", "Brown", "Dark"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Height" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.height,
              onValueChange: (v) => setForm({ ...form, height: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  `4'8"`,
                  `4'10"`,
                  `5'0"`,
                  `5'1"`,
                  `5'2"`,
                  `5'3"`,
                  `5'4"`,
                  `5'5"`,
                  `5'6"`,
                  `5'7"`,
                  `5'8"`,
                  `5'9"`,
                  `5'10"`,
                  `5'11"`,
                  `6'0"`,
                  `6'1"`,
                  `6'2"`,
                  `6'3"`,
                  `6'4"`
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: h, children: h }, h)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Weight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.weight,
              onValueChange: (v) => setForm({ ...form, weight: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "40kg",
                  "45kg",
                  "50kg",
                  "52kg",
                  "54kg",
                  "56kg",
                  "58kg",
                  "60kg",
                  "65kg",
                  "70kg",
                  "75kg",
                  "80kg",
                  "85kg",
                  "90kg",
                  "95kg",
                  "100kg+"
                ].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: w, children: w }, w)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Occupation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Doctor, Engineer",
              value: form.occupation,
              onChange: (e) => setForm({ ...form, occupation: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Education Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.education,
              onValueChange: (v) => setForm({ ...form, education: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Matric",
                  "Intermediate",
                  "Bachelor",
                  "Master",
                  "PhD",
                  "Other"
                ].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: e, children: e }, e)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Living Standard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.livingStandard,
              onValueChange: (v) => setForm({ ...form, livingStandard: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Lower", "Middle", "Upper-Middle", "Upper"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l)) })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Simple", "Moderate", "Luxurious"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Monthly Income" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.incomeRange,
              onValueChange: (v) => setForm({ ...form, incomeRange: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Below 30k",
                  "30k-60k",
                  "60k-100k",
                  "100k-200k",
                  "200k+"
                ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Love Expectation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.loveExpectation,
              onValueChange: (v) => setForm({ ...form, loveExpectation: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Arranged", "Semi-Arranged", "Love Marriage"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Horoscope Sign" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.horoscope,
              onValueChange: (v) => setForm({ ...form, horoscope: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: HOROSCOPE_SIGNS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: h, children: [
                  HOROSCOPE_EMOJI[h],
                  " ",
                  h
                ] }, h)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Family Background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.familyBackground,
              onValueChange: (v) => setForm({ ...form, familyBackground: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Joint Family", "Nuclear Family", "Both OK"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, children: f }, f)) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: [
          "Patience Level:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            form.patienceLevel,
            "/10"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            min: 1,
            max: 10,
            step: 1,
            value: [form.patienceLevel],
            onValueChange: ([v]) => setForm({ ...form, patienceLevel: v }),
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Physical Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: FEATURE_OPTIONS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggleFeature(f),
            className: "px-2.5 py-1 rounded-full text-xs font-label border transition-all",
            style: form.features.includes(f) ? {
              background: "oklch(0.72 0.15 350 / 0.15)",
              borderColor: "oklch(0.72 0.15 350)",
              color: "oklch(0.50 0.18 350)"
            } : {
              borderColor: "oklch(var(--border))",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              form.features.includes(f) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 9, className: "inline mr-1" }),
              f
            ]
          },
          f
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "About Me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Describe yourself, your family, and what you're looking for...",
            value: form.about,
            onChange: (e) => setForm({ ...form, about: e.target.value }),
            className: "resize-none h-24"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Profile Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Active profiles are visible to matches" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: form.active,
            onCheckedChange: (v) => setForm({ ...form, active: v }),
            className: "data-[state=checked]:bg-green-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 font-label gap-2",
            style: { background: "oklch(0.72 0.15 350)", color: "white" },
            onClick: () => {
              onSave({ ...form, age: Number(form.age) || 0 });
              ue.success("Matrimony profile saved!");
              onClose();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
              " Save Profile"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "font-label", onClick: onClose, children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function MatrimonyPage() {
  const [setupOpen, setSetupOpen] = reactExports.useState(false);
  const [selectedProfile, setSelectedProfile] = reactExports.useState(null);
  const [profileDetailOpen, setProfileDetailOpen] = reactExports.useState(false);
  const [myProfile, setMyProfile] = reactExports.useState(
    null
  );
  const [shortlisted, setShortlisted] = reactExports.useState(/* @__PURE__ */ new Set());
  const [requests, setRequests] = reactExports.useState(MOCK_REQUESTS);
  const [filterCaste, setFilterCaste] = reactExports.useState("");
  const [filterLiving, setFilterLiving] = reactExports.useState("all");
  const [filterProfession, setFilterProfession] = reactExports.useState("");
  const [filterHoroscopeOnly, setFilterHoroscopeOnly] = reactExports.useState(false);
  const [filterAgeMin, setFilterAgeMin] = reactExports.useState(18);
  const [filterAgeMax, setFilterAgeMax] = reactExports.useState(40);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const toggleShortlist = (id) => {
    setShortlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        ue.success("Removed from shortlist");
      } else {
        next.add(id);
        ue.success("Added to shortlist");
      }
      return next;
    });
  };
  const sendRequest = (id) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    if (requests.find((r) => r.profile.id === id && r.type === "sent")) {
      ue.info("Request already sent");
      return;
    }
    setRequests((prev) => [
      ...prev,
      {
        id: `r${Date.now()}`,
        profile,
        status: "Pending",
        type: "sent",
        date: "Just now"
      }
    ]);
    ue.success(`Interest sent to ${profile.name}!`);
  };
  const filteredProfiles = MOCK_PROFILES.filter((p) => {
    if (filterCaste && !p.caste.toLowerCase().includes(filterCaste.toLowerCase()))
      return false;
    if (filterLiving && filterLiving !== "all" && p.livingStandard !== filterLiving)
      return false;
    if (filterProfession && !p.occupation.toLowerCase().includes(filterProfession.toLowerCase()))
      return false;
    if (filterHoroscopeOnly && getHoroCompat(MY_HOROSCOPE, p.horoscope) === "Challenging")
      return false;
    if (p.age < filterAgeMin || p.age > filterAgeMax) return false;
    return true;
  });
  const shortlistedProfiles = MOCK_PROFILES.filter(
    (p) => shortlisted.has(p.id)
  );
  const sentRequests = requests.filter((r) => r.type === "sent");
  const receivedRequests = requests.filter((r) => r.type === "received");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6 min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 22, style: { color: "oklch(0.72 0.15 350)" } }),
          "Matrimony"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Traditional matchmaking with horoscope & compatibility" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "gap-2 font-label shrink-0",
          style: { background: "oklch(0.72 0.15 350)", color: "white" },
          onClick: () => setSetupOpen(true),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
            myProfile ? "Edit Profile" : "Set Up Profile"
          ]
        }
      )
    ] }),
    !myProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 flex items-center justify-between gap-4 border",
        style: {
          background: "oklch(0.72 0.15 350 / 0.08)",
          borderColor: "oklch(0.72 0.15 350 / 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                style: { background: "oklch(0.72 0.15 350 / 0.15)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, style: { color: "oklch(0.72 0.15 350)" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Complete your matrimony profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Set up your profile to start matching with compatible partners" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "shrink-0 font-label gap-1",
              style: { background: "oklch(0.72 0.15 350)", color: "white" },
              onClick: () => setSetupOpen(true),
              children: "Set Up Profile"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 border flex items-center gap-4",
        style: {
          background: "oklch(0.72 0.15 350 / 0.06)",
          borderColor: "oklch(0.72 0.15 350 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Avatar,
            {
              className: "h-12 w-12 shrink-0 border-2",
              style: { borderColor: "oklch(0.72 0.15 350)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  style: {
                    background: "oklch(0.72 0.15 350 / 0.2)",
                    color: "oklch(0.50 0.18 350)"
                  },
                  children: (myProfile.name ?? "U").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground truncate", children: myProfile.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-label shrink-0",
                  style: myProfile.active ? {
                    background: "oklch(0.55 0.2 145 / 0.15)",
                    color: "oklch(0.40 0.18 145)",
                    border: "none"
                  } : {
                    background: "oklch(0.5 0.02 280 / 0.1)",
                    color: "oklch(0.5 0.02 280)",
                    border: "none"
                  },
                  children: myProfile.active ? "Active" : "Paused"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              myProfile.age,
              " yrs · ",
              myProfile.occupation,
              " ·",
              " ",
              myProfile.horoscope
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "shrink-0 font-label",
              onClick: () => setSetupOpen(true),
              children: "Edit Profile"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddBar, { moduleName: "Matrimony" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "browse", className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "font-label", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "browse", children: "Browse Matches" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "requests", children: [
          "Requests",
          receivedRequests.filter((r) => r.status === "Pending").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "ml-1.5 text-[10px] font-bold rounded-full px-1.5 py-0.5",
              style: { background: "oklch(0.72 0.15 350)", color: "white" },
              children: receivedRequests.filter((r) => r.status === "Pending").length
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "shortlisted", children: [
          "Shortlisted (",
          shortlisted.size,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "browse", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px] max-w-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 14,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search by profession...",
                className: "pl-8 h-9 text-sm",
                value: filterProfession,
                onChange: (e) => setFilterProfession(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Caste / Community",
              className: "h-9 text-sm w-36",
              value: filterCaste,
              onChange: (e) => setFilterCaste(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterLiving, onValueChange: setFilterLiving, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Living Standard" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Standards" }),
              ["Lower", "Middle", "Upper-Middle", "Upper"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: filterHoroscopeOnly ? "default" : "outline",
              size: "sm",
              className: "h-9 gap-1.5 font-label text-xs",
              onClick: () => setFilterHoroscopeOnly((v) => !v),
              style: filterHoroscopeOnly ? { background: "oklch(0.72 0.15 350)", color: "white" } : {},
              children: "♎ Compatible Horoscope"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 gap-1.5 font-label text-xs",
              onClick: () => setShowFilters((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 12 }),
                "Age Filter",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    size: 12,
                    className: `transition-transform ${showFilters ? "rotate-180" : ""}`
                  }
                )
              ]
            }
          )
        ] }),
        showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-xl border border-border/60 p-4 space-y-3",
            style: { background: "oklch(var(--card))" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: [
                "Age Range: ",
                filterAgeMin,
                " – ",
                filterAgeMax
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-6", children: "18" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-6", children: "50" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
          "Showing ",
          filteredProfiles.length,
          " compatible matches"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: filteredProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchCard,
          {
            profile,
            onShortlist: toggleShortlist,
            onSendRequest: sendRequest,
            onViewProfile: (p) => {
              setSelectedProfile(p);
              setProfileDetailOpen(true);
            },
            isShortlisted: shortlisted.has(profile.id)
          },
          profile.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "requests", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "received", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "font-label", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "received", children: [
            "Received (",
            receivedRequests.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "sent", children: [
            "Sent (",
            sentRequests.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "received", className: "space-y-3 mt-4", children: [
          receivedRequests.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 40, className: "mx-auto mb-3 opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No requests received yet" })
          ] }),
          receivedRequests.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarFallback,
                  {
                    style: {
                      background: "oklch(0.72 0.15 350 / 0.15)",
                      color: "oklch(0.50 0.18 350)"
                    },
                    children: req.profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground truncate", children: req.profile.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    req.profile.age,
                    " yrs · ",
                    req.profile.occupation,
                    " ·",
                    " ",
                    req.profile.city
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: req.date })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 shrink-0", children: req.status === "Pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      className: "h-7 text-xs font-label gap-1",
                      style: {
                        background: "oklch(0.55 0.2 145)",
                        color: "white"
                      },
                      onClick: () => {
                        setRequests(
                          (prev) => prev.map(
                            (r) => r.id === req.id ? { ...r, status: "Accepted" } : r
                          )
                        );
                        ue.success(
                          `Accepted ${req.profile.name}'s request`
                        );
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }),
                        " Accept"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 text-xs font-label gap-1",
                      onClick: () => {
                        setRequests(
                          (prev) => prev.map(
                            (r) => r.id === req.id ? { ...r, status: "Declined" } : r
                          )
                        );
                        ue.info("Request declined");
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 }),
                        " Decline"
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-xs font-label",
                    style: req.status === "Accepted" ? {
                      background: "oklch(0.55 0.2 145 / 0.15)",
                      color: "oklch(0.40 0.18 145)",
                      border: "none"
                    } : {
                      background: "oklch(0.55 0.22 25 / 0.15)",
                      color: "oklch(0.45 0.18 25)",
                      border: "none"
                    },
                    children: req.status
                  }
                ) })
              ]
            },
            req.id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "sent", className: "space-y-3 mt-4", children: [
          sentRequests.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 40, className: "mx-auto mb-3 opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No requests sent yet" })
          ] }),
          sentRequests.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarFallback,
                  {
                    style: {
                      background: "oklch(0.72 0.15 350 / 0.15)",
                      color: "oklch(0.50 0.18 350)"
                    },
                    children: req.profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground truncate", children: req.profile.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    req.profile.age,
                    " yrs · ",
                    req.profile.occupation,
                    " ·",
                    " ",
                    req.profile.city
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: req.date })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-xs font-label shrink-0",
                    style: req.status === "Accepted" ? {
                      background: "oklch(0.55 0.2 145 / 0.15)",
                      color: "oklch(0.40 0.18 145)",
                      border: "none"
                    } : req.status === "Declined" ? {
                      background: "oklch(0.55 0.22 25 / 0.15)",
                      color: "oklch(0.45 0.18 25)",
                      border: "none"
                    } : {
                      background: "oklch(0.72 0.19 85 / 0.15)",
                      color: "oklch(0.55 0.18 85)",
                      border: "none"
                    },
                    children: req.status
                  }
                )
              ]
            },
            req.id
          ))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "shortlisted", className: "space-y-4", children: shortlistedProfiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 40, className: "mx-auto mb-3 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label", children: "No shortlisted profiles yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Click the star icon on any match card to shortlist them" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: shortlistedProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        MatchCard,
        {
          profile,
          onShortlist: toggleShortlist,
          onSendRequest: sendRequest,
          onViewProfile: (p) => {
            setSelectedProfile(p);
            setProfileDetailOpen(true);
          },
          isShortlisted: true
        },
        profile.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProfileDetailSheet,
      {
        profile: selectedProfile,
        open: profileDetailOpen,
        onClose: () => {
          setProfileDetailOpen(false);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Matrimony", moduleColor: "oklch(0.65 0.25 335)" }) })
  ] });
}
export {
  MatrimonyPage as default
};
