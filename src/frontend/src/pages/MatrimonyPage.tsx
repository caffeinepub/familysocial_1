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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Check,
  ChevronDown,
  Filter,
  Heart,
  Search,
  Star,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface MatrimonyProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  caste: string;
  sect: string;
  skinColor: string;
  height: string;
  weight: string;
  occupation: string;
  education: string;
  livingStandard: string;
  lifestyle: string;
  incomeRange: string;
  patienceLevel: number;
  loveExpectation: string;
  features: string[];
  horoscope: string;
  familyBackground: string;
  about: string;
  city: string;
  active: boolean;
  compatibilityScore: number;
  matchingFactors: string[];
}

interface Request {
  id: string;
  profile: MatrimonyProfile;
  status: "Pending" | "Accepted" | "Declined";
  type: "sent" | "received";
  date: string;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const MOCK_PROFILES: MatrimonyProfile[] = [
  {
    id: "1",
    name: "Aisha Fatima",
    age: 26,
    gender: "Female",
    caste: "Syed",
    sect: "Sunni",
    skinColor: "Fair",
    height: "5'4\"",
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
    about:
      "A dedicated doctor who loves reading and traveling. Looking for a life partner who values family and education.",
    city: "Lahore",
    active: true,
    compatibilityScore: 91,
    matchingFactors: ["Caste Match", "Profession Match", "Lifestyle Match"],
  },
  {
    id: "2",
    name: "Zara Khan",
    age: 24,
    gender: "Female",
    caste: "Pathan",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: "5'5\"",
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
    about:
      "Software engineer passionate about technology and innovation. Values simplicity and family traditions.",
    city: "Islamabad",
    active: true,
    compatibilityScore: 78,
    matchingFactors: ["Height Match", "Education Match"],
  },
  {
    id: "3",
    name: "Hina Nawaz",
    age: 27,
    gender: "Female",
    caste: "Mughal",
    sect: "Sunni",
    skinColor: "Fair",
    height: "5'3\"",
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
    about:
      "University professor dedicated to education and building a peaceful home. Very family-oriented.",
    city: "Karachi",
    active: true,
    compatibilityScore: 85,
    matchingFactors: ["Caste Match", "Lifestyle Match", "Patience Match"],
  },
  {
    id: "4",
    name: "Sobia Malik",
    age: 23,
    gender: "Female",
    caste: "Rajput",
    sect: "Sunni",
    skinColor: "Brown",
    height: "5'2\"",
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
    about:
      "Creative architect with a passion for interior design and aesthetics. Looking for a partner who appreciates art.",
    city: "Lahore",
    active: true,
    compatibilityScore: 72,
    matchingFactors: ["Lifestyle Match", "Height Match"],
  },
  {
    id: "5",
    name: "Fatima Rizvi",
    age: 25,
    gender: "Female",
    caste: "Syed",
    sect: "Shia",
    skinColor: "Fair",
    height: "5'6\"",
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
    about:
      "Corporate lawyer who believes in justice and equal partnerships. Loves fine dining and travel.",
    city: "Karachi",
    active: true,
    compatibilityScore: 67,
    matchingFactors: ["Caste Match", "Education Match"],
  },
  {
    id: "6",
    name: "Maryam Qureshi",
    age: 28,
    gender: "Female",
    caste: "Qureshi",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: "5'4\"",
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
    about:
      "Healthcare professional focused on community service. Values humility and strong family bonds.",
    city: "Multan",
    active: true,
    compatibilityScore: 82,
    matchingFactors: ["Profession Match", "Patience Match", "Lifestyle Match"],
  },
  {
    id: "7",
    name: "Nadia Hussain",
    age: 24,
    gender: "Female",
    caste: "Ansari",
    sect: "Sunni",
    skinColor: "Brown",
    height: "5'5\"",
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
    about:
      "Dental surgeon with her own clinic. Independent and ambitious but strongly values family.",
    city: "Faisalabad",
    active: true,
    compatibilityScore: 76,
    matchingFactors: ["Profession Match", "Living Standard Match"],
  },
  {
    id: "8",
    name: "Amna Sheikh",
    age: 22,
    gender: "Female",
    caste: "Sheikh",
    sect: "Sunni",
    skinColor: "Fair",
    height: "5'3\"",
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
    about:
      "Final year medical student. Looking for a partner who shares the value of lifelong learning and growth.",
    city: "Lahore",
    active: true,
    compatibilityScore: 88,
    matchingFactors: ["Caste Match", "Lifestyle Match", "Patience Match"],
  },
  {
    id: "9",
    name: "Rabia Tariq",
    age: 26,
    gender: "Female",
    caste: "Pathan",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: "5'6\"",
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
    about:
      "Senior banker with a passion for finance and investment. Looking for an intellectually stimulating partner.",
    city: "Islamabad",
    active: true,
    compatibilityScore: 63,
    matchingFactors: ["Profession Match", "Education Match"],
  },
  {
    id: "10",
    name: "Saima Bukhari",
    age: 25,
    gender: "Female",
    caste: "Bukhari",
    sect: "Sunni",
    skinColor: "Fair",
    height: "5'4\"",
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
    about:
      "Graphic designer and painter. Believes in soulmate connections and creative partnerships.",
    city: "Lahore",
    active: true,
    compatibilityScore: 74,
    matchingFactors: ["Lifestyle Match", "Patience Match"],
  },
  {
    id: "11",
    name: "Bushra Chaudhry",
    age: 29,
    gender: "Female",
    caste: "Chaudhry",
    sect: "Sunni",
    skinColor: "Brown",
    height: "5'5\"",
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
    about:
      "University professor specializing in Islamic History. Looking for a knowledgeable, cultured life partner.",
    city: "Lahore",
    active: true,
    compatibilityScore: 79,
    matchingFactors: [
      "Education Match",
      "Living Standard Match",
      "Patience Match",
    ],
  },
  {
    id: "12",
    name: "Tuba Aslam",
    age: 23,
    gender: "Female",
    caste: "Aslam",
    sect: "Sunni",
    skinColor: "Wheatish",
    height: "5'3\"",
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
    about:
      "Dedicated healthcare worker with a warm heart. Values kindness, honesty, and a supportive family environment.",
    city: "Rawalpindi",
    active: true,
    compatibilityScore: 84,
    matchingFactors: ["Lifestyle Match", "Patience Match", "Caste Match"],
  },
];

const MOCK_REQUESTS: Request[] = [
  {
    id: "r1",
    profile: MOCK_PROFILES[0],
    status: "Pending",
    type: "sent",
    date: "2 days ago",
  },
  {
    id: "r2",
    profile: MOCK_PROFILES[2],
    status: "Accepted",
    type: "sent",
    date: "1 week ago",
  },
  {
    id: "r3",
    profile: MOCK_PROFILES[5],
    status: "Declined",
    type: "sent",
    date: "2 weeks ago",
  },
  {
    id: "r4",
    profile: MOCK_PROFILES[7],
    status: "Pending",
    type: "received",
    date: "1 day ago",
  },
  {
    id: "r5",
    profile: MOCK_PROFILES[9],
    status: "Pending",
    type: "received",
    date: "3 days ago",
  },
];

const HOROSCOPE_COMPATIBILITY: Record<string, Record<string, string>> = {
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
    Pisces: "Challenging",
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
    Pisces: "Good",
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
    Pisces: "Neutral",
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
    Pisces: "Excellent",
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
    Pisces: "Challenging",
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
    Pisces: "Good",
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
    Pisces: "Good",
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
    Pisces: "Excellent",
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
    Pisces: "Neutral",
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
    Pisces: "Excellent",
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
    Pisces: "Challenging",
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
    Pisces: "Excellent",
  },
};

const MY_HOROSCOPE = "Libra";

function getHoroCompat(a: string, b: string): string {
  return HOROSCOPE_COMPATIBILITY[a]?.[b] ?? "Neutral";
}

function getCompatColor(score: number): string {
  if (score >= 80) return "oklch(0.55 0.2 145)";
  if (score >= 60) return "oklch(0.72 0.19 85)";
  return "oklch(0.55 0.22 25)";
}

function getCompatBg(score: number): string {
  if (score >= 80) return "oklch(0.55 0.2 145 / 0.12)";
  if (score >= 60) return "oklch(0.72 0.19 85 / 0.12)";
  return "oklch(0.55 0.22 25 / 0.12)";
}

function getHoroCompatColor(compat: string): string {
  const map: Record<string, string> = {
    Excellent: "oklch(0.55 0.2 145)",
    Good: "oklch(0.55 0.22 280)",
    Neutral: "oklch(0.72 0.19 85)",
    Challenging: "oklch(0.55 0.22 25)",
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
  "Pisces",
];

const HOROSCOPE_EMOJI: Record<string, string> = {
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
  Pisces: "♓",
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
  "Horoscope",
];

// ─── Sub-components ─────────────────────────────────────────────────────────────

function CompatibilityBadge({ score }: { score: number }) {
  const color = getCompatColor(score);
  const bg = getCompatBg(score);
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold"
      style={{ color, background: bg }}
    >
      <span className="w-2 h-2 rounded-full" style={{ background: color }} />
      {score}% Match
    </span>
  );
}

function MatchCard({
  profile,
  onShortlist,
  onSendRequest,
  onViewProfile,
  isShortlisted,
}: {
  profile: MatrimonyProfile;
  onShortlist: (id: string) => void;
  onSendRequest: (id: string) => void;
  onViewProfile: (profile: MatrimonyProfile) => void;
  isShortlisted: boolean;
}) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const horoCompat = getHoroCompat(MY_HOROSCOPE, profile.horoscope);

  return (
    <Card className="group overflow-hidden transition-all duration-200 hover:shadow-card-hover border-border/60 hover:border-primary/20">
      {/* Top accent bar based on score */}
      <div
        className="h-1.5 w-full"
        style={{ background: getCompatColor(profile.compatibilityScore) }}
      />
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <Avatar
              className="h-12 w-12 border-2 shrink-0"
              style={{
                borderColor: getCompatColor(profile.compatibilityScore),
              }}
            >
              <AvatarFallback
                className="text-base font-label font-bold"
                style={{
                  background: "oklch(0.72 0.15 350 / 0.15)",
                  color: "oklch(0.50 0.18 350)",
                }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-display font-bold text-base text-foreground leading-tight">
                {profile.name}
              </p>
              <p className="text-xs text-muted-foreground font-label">
                {profile.age} yrs · {profile.city}
              </p>
              <p className="text-xs text-muted-foreground font-label">
                {profile.occupation}
              </p>
            </div>
          </div>
          <CompatibilityBadge score={profile.compatibilityScore} />
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 space-y-3">
        {/* Key details */}
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          <span className="text-muted-foreground">
            Caste:{" "}
            <span className="text-foreground font-medium">{profile.caste}</span>
          </span>
          <span className="text-muted-foreground">
            Height:{" "}
            <span className="text-foreground font-medium">
              {profile.height}
            </span>
          </span>
          <span className="text-muted-foreground">
            Education:{" "}
            <span className="text-foreground font-medium">
              {profile.education}
            </span>
          </span>
          <span className="text-muted-foreground">
            Income:{" "}
            <span className="text-foreground font-medium">
              {profile.incomeRange}
            </span>
          </span>
        </div>

        {/* Matching factors */}
        <div className="flex flex-wrap gap-1">
          {profile.matchingFactors.map((f) => (
            <Badge
              key={f}
              variant="secondary"
              className="text-[10px] px-2 py-0.5 font-label"
              style={{
                background: "oklch(0.72 0.15 350 / 0.12)",
                color: "oklch(0.50 0.18 350)",
                border: "none",
              }}
            >
              <Check size={9} className="mr-1" />
              {f}
            </Badge>
          ))}
        </div>

        {/* Horoscope compat */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">Horoscope:</span>
          <span className="font-label">
            {HOROSCOPE_EMOJI[profile.horoscope]} {profile.horoscope}
          </span>
          <span
            className="px-1.5 py-0.5 rounded text-[10px] font-label font-semibold"
            style={{
              background: `${getHoroCompatColor(horoCompat)}20`,
              color: getHoroCompatColor(horoCompat),
            }}
          >
            {horoCompat}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-8 text-xs font-label gap-1"
            onClick={() => onViewProfile(profile)}
          >
            <BookOpen size={12} /> View Profile
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => onShortlist(profile.id)}
            title={isShortlisted ? "Remove from shortlist" : "Shortlist"}
            style={
              isShortlisted
                ? {
                    color: "oklch(0.72 0.19 85)",
                    background: "oklch(0.72 0.19 85 / 0.12)",
                  }
                : {}
            }
          >
            <Star size={14} fill={isShortlisted ? "currentColor" : "none"} />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => onSendRequest(profile.id)}
            title="Send Request"
            style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
          >
            <Heart size={14} />
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
  profile: MatrimonyProfile | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!profile) return null;
  const horoCompat = getHoroCompat(MY_HOROSCOPE, profile.horoscope);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const criteriaStatus = CRITERIA.map((c) => {
    const rand = Math.random();
    if (rand > 0.6) return { label: c, status: "match" };
    if (rand > 0.3) return { label: c, status: "partial" };
    return { label: c, status: "no" };
  });

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-display text-xl">
            Profile Details
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-5">
          {/* Profile header */}
          <div
            className="flex items-start gap-4 p-4 rounded-xl"
            style={{ background: "oklch(0.72 0.15 350 / 0.08)" }}
          >
            <Avatar
              className="h-16 w-16 border-2 shrink-0"
              style={{ borderColor: "oklch(0.72 0.15 350)" }}
            >
              <AvatarFallback
                className="text-xl font-label font-bold"
                style={{
                  background: "oklch(0.72 0.15 350 / 0.2)",
                  color: "oklch(0.50 0.18 350)",
                }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-foreground">
                {profile.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {profile.age} years · {profile.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.occupation} · {profile.education}
              </p>
              <div className="mt-2">
                <CompatibilityBadge score={profile.compatibilityScore} />
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

          {/* Details grid */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Profile Details
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["Caste / Community", profile.caste],
                ["Sect / Religion", profile.sect],
                ["Skin Color", profile.skinColor],
                ["Height", profile.height],
                ["Weight", profile.weight],
                ["Living Standard", profile.livingStandard],
                ["Lifestyle", profile.lifestyle],
                ["Monthly Income", profile.incomeRange],
                ["Love Expectation", profile.loveExpectation],
                ["Family Background", profile.familyBackground],
              ].map(([label, value]) => (
                <div key={label} className="space-y-0.5">
                  <p className="text-[11px] text-muted-foreground font-label">
                    {label}
                  </p>
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility breakdown */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Compatibility Breakdown
            </h4>
            <div className="space-y-2">
              {criteriaStatus.map(({ label, status }) => {
                const colors = {
                  match: {
                    bg: "oklch(0.55 0.2 145 / 0.12)",
                    text: "oklch(0.40 0.18 145)",
                    dot: "oklch(0.55 0.2 145)",
                  },
                  partial: {
                    bg: "oklch(0.72 0.19 85 / 0.12)",
                    text: "oklch(0.55 0.18 85)",
                    dot: "oklch(0.72 0.19 85)",
                  },
                  no: {
                    bg: "oklch(0.55 0.22 25 / 0.12)",
                    text: "oklch(0.45 0.18 25)",
                    dot: "oklch(0.55 0.22 25)",
                  },
                };
                const c = colors[status as keyof typeof colors];
                return (
                  <div
                    key={label}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg"
                    style={{ background: c.bg }}
                  >
                    <span className="text-sm text-foreground">{label}</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: c.dot }}
                      />
                      <span
                        className="text-xs font-label font-semibold capitalize"
                        style={{ color: c.text }}
                      >
                        {status === "no"
                          ? "No Match"
                          : status === "partial"
                            ? "Partial"
                            : "Match"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Horoscope compatibility */}
          <div className="p-4 rounded-xl border border-border/60 space-y-3">
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Horoscope Compatibility
            </h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-3xl">{HOROSCOPE_EMOJI[MY_HOROSCOPE]}</div>
                <p className="text-xs font-label mt-1 text-muted-foreground">
                  You ({MY_HOROSCOPE})
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="px-3 py-1.5 rounded-full text-sm font-label font-bold"
                  style={{
                    background: `${getHoroCompatColor(horoCompat)}20`,
                    color: getHoroCompatColor(horoCompat),
                  }}
                >
                  {horoCompat}
                </div>
                <div
                  className="w-full h-px my-2"
                  style={{ background: getHoroCompatColor(horoCompat) }}
                />
              </div>
              <div className="text-center">
                <div className="text-3xl">
                  {HOROSCOPE_EMOJI[profile.horoscope]}
                </div>
                <p className="text-xs font-label mt-1 text-muted-foreground">
                  {profile.name.split(" ")[0]} ({profile.horoscope})
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Physical Features
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile.features.map((f) => (
                <Badge key={f} variant="outline" className="text-xs font-label">
                  {f}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1 gap-2 font-label"
              style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
              onClick={() => {
                toast.success(`Interest sent to ${profile.name}!`);
                onClose();
              }}
            >
              <Heart size={14} /> Send Interest
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
  onSave: (profile: Partial<MatrimonyProfile>) => void;
}) {
  const [form, setForm] = useState({
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
    features: [] as string[],
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
    "Dusky",
  ];

  const toggleFeature = (f: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((x) => x !== f)
        : [...prev.features, f],
    }));
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-display text-xl">
            <Heart
              size={18}
              className="inline mr-2"
              style={{ color: "oklch(0.72 0.15 350)" }}
            />
            Set Up Matrimony Profile
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-5 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Full Name
              </Label>
              <Input
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Caste / Community
              </Label>
              <Input
                placeholder="e.g. Syed, Pathan"
                value={form.caste}
                onChange={(e) => setForm({ ...form, caste: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Sect / Religion
              </Label>
              <Input
                placeholder="e.g. Sunni, Shia"
                value={form.sect}
                onChange={(e) => setForm({ ...form, sect: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Skin Color
              </Label>
              <Select
                value={form.skinColor}
                onValueChange={(v) => setForm({ ...form, skinColor: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Fair", "Wheatish", "Brown", "Dark"].map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Height
              </Label>
              <Select
                value={form.height}
                onValueChange={(v) => setForm({ ...form, height: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "4'8\"",
                    "4'10\"",
                    "5'0\"",
                    "5'1\"",
                    "5'2\"",
                    "5'3\"",
                    "5'4\"",
                    "5'5\"",
                    "5'6\"",
                    "5'7\"",
                    "5'8\"",
                    "5'9\"",
                    "5'10\"",
                    "5'11\"",
                    "6'0\"",
                    "6'1\"",
                    "6'2\"",
                    "6'3\"",
                    "6'4\"",
                  ].map((h) => (
                    <SelectItem key={h} value={h}>
                      {h}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Weight
              </Label>
              <Select
                value={form.weight}
                onValueChange={(v) => setForm({ ...form, weight: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
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
                    "100kg+",
                  ].map((w) => (
                    <SelectItem key={w} value={w}>
                      {w}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Occupation
              </Label>
              <Input
                placeholder="e.g. Doctor, Engineer"
                value={form.occupation}
                onChange={(e) =>
                  setForm({ ...form, occupation: e.target.value })
                }
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Education Level
              </Label>
              <Select
                value={form.education}
                onValueChange={(v) => setForm({ ...form, education: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Matric",
                    "Intermediate",
                    "Bachelor",
                    "Master",
                    "PhD",
                    "Other",
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
                Living Standard
              </Label>
              <Select
                value={form.livingStandard}
                onValueChange={(v) => setForm({ ...form, livingStandard: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Lower", "Middle", "Upper-Middle", "Upper"].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
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
                  {["Simple", "Moderate", "Luxurious"].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Monthly Income
              </Label>
              <Select
                value={form.incomeRange}
                onValueChange={(v) => setForm({ ...form, incomeRange: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Below 30k",
                    "30k-60k",
                    "60k-100k",
                    "100k-200k",
                    "200k+",
                  ].map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Love Expectation
              </Label>
              <Select
                value={form.loveExpectation}
                onValueChange={(v) => setForm({ ...form, loveExpectation: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Arranged", "Semi-Arranged", "Love Marriage"].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Horoscope Sign
              </Label>
              <Select
                value={form.horoscope}
                onValueChange={(v) => setForm({ ...form, horoscope: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {HOROSCOPE_SIGNS.map((h) => (
                    <SelectItem key={h} value={h}>
                      {HOROSCOPE_EMOJI[h]} {h}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                Family Background
              </Label>
              <Select
                value={form.familyBackground}
                onValueChange={(v) => setForm({ ...form, familyBackground: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Joint Family", "Nuclear Family", "Both OK"].map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Patience slider */}
          <div className="space-y-2">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Patience Level:{" "}
              <span className="text-foreground">{form.patienceLevel}/10</span>
            </Label>
            <Slider
              min={1}
              max={10}
              step={1}
              value={[form.patienceLevel]}
              onValueChange={([v]) => setForm({ ...form, patienceLevel: v })}
              className="w-full"
            />
          </div>

          {/* Physical features */}
          <div className="space-y-2">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Physical Features
            </Label>
            <div className="flex flex-wrap gap-2">
              {FEATURE_OPTIONS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => toggleFeature(f)}
                  className="px-2.5 py-1 rounded-full text-xs font-label border transition-all"
                  style={
                    form.features.includes(f)
                      ? {
                          background: "oklch(0.72 0.15 350 / 0.15)",
                          borderColor: "oklch(0.72 0.15 350)",
                          color: "oklch(0.50 0.18 350)",
                        }
                      : {
                          borderColor: "oklch(var(--border))",
                          color: "oklch(var(--muted-foreground))",
                        }
                  }
                >
                  {form.features.includes(f) && (
                    <Check size={9} className="inline mr-1" />
                  )}
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="space-y-1">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              About Me
            </Label>
            <Textarea
              placeholder="Describe yourself, your family, and what you're looking for..."
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
              className="resize-none h-24"
            />
          </div>

          {/* Active toggle */}
          <div className="flex items-center justify-between p-3 rounded-lg border border-border/60">
            <div>
              <p className="text-sm font-label font-semibold text-foreground">
                Profile Status
              </p>
              <p className="text-xs text-muted-foreground">
                Active profiles are visible to matches
              </p>
            </div>
            <Switch
              checked={form.active}
              onCheckedChange={(v) => setForm({ ...form, active: v })}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex gap-3">
            <Button
              className="flex-1 font-label gap-2"
              style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
              onClick={() => {
                onSave({ ...form, age: Number(form.age) || 0 });
                toast.success("Matrimony profile saved!");
                onClose();
              }}
            >
              <Heart size={14} /> Save Profile
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

export default function MatrimonyPage() {
  const [setupOpen, setSetupOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] =
    useState<MatrimonyProfile | null>(null);
  const [profileDetailOpen, setProfileDetailOpen] = useState(false);
  const [myProfile, setMyProfile] = useState<Partial<MatrimonyProfile> | null>(
    null,
  );
  const [shortlisted, setShortlisted] = useState<Set<string>>(new Set());
  const [requests, setRequests] = useState<Request[]>(MOCK_REQUESTS);
  const [filterCaste, setFilterCaste] = useState("");
  const [filterLiving, setFilterLiving] = useState("");
  const [filterProfession, setFilterProfession] = useState("");
  const [filterHoroscopeOnly, setFilterHoroscopeOnly] = useState(false);
  const [filterAgeMin, setFilterAgeMin] = useState(18);
  const [filterAgeMax, setFilterAgeMax] = useState(40);
  const [showFilters, setShowFilters] = useState(false);

  const toggleShortlist = (id: string) => {
    setShortlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.success("Removed from shortlist");
      } else {
        next.add(id);
        toast.success("Added to shortlist");
      }
      return next;
    });
  };

  const sendRequest = (id: string) => {
    const profile = MOCK_PROFILES.find((p) => p.id === id);
    if (!profile) return;
    if (requests.find((r) => r.profile.id === id && r.type === "sent")) {
      toast.info("Request already sent");
      return;
    }
    setRequests((prev) => [
      ...prev,
      {
        id: `r${Date.now()}`,
        profile,
        status: "Pending",
        type: "sent",
        date: "Just now",
      },
    ]);
    toast.success(`Interest sent to ${profile.name}!`);
  };

  const filteredProfiles = MOCK_PROFILES.filter((p) => {
    if (
      filterCaste &&
      !p.caste.toLowerCase().includes(filterCaste.toLowerCase())
    )
      return false;
    if (filterLiving && p.livingStandard !== filterLiving) return false;
    if (
      filterProfession &&
      !p.occupation.toLowerCase().includes(filterProfession.toLowerCase())
    )
      return false;
    if (
      filterHoroscopeOnly &&
      getHoroCompat(MY_HOROSCOPE, p.horoscope) === "Challenging"
    )
      return false;
    if (p.age < filterAgeMin || p.age > filterAgeMax) return false;
    return true;
  });

  const shortlistedProfiles = MOCK_PROFILES.filter((p) =>
    shortlisted.has(p.id),
  );
  const sentRequests = requests.filter((r) => r.type === "sent");
  const receivedRequests = requests.filter((r) => r.type === "received");

  return (
    <div className="p-4 lg:p-6 space-y-6 min-h-full">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
            <Heart size={22} style={{ color: "oklch(0.72 0.15 350)" }} />
            Matrimony
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Traditional matchmaking with horoscope & compatibility
          </p>
        </div>
        <Button
          className="gap-2 font-label shrink-0"
          style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
          onClick={() => setSetupOpen(true)}
        >
          <User size={14} />
          {myProfile ? "Edit Profile" : "Set Up Profile"}
        </Button>
      </div>

      {/* My Profile Banner */}
      {!myProfile ? (
        <div
          className="rounded-xl p-4 flex items-center justify-between gap-4 border"
          style={{
            background: "oklch(0.72 0.15 350 / 0.08)",
            borderColor: "oklch(0.72 0.15 350 / 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.72 0.15 350 / 0.15)" }}
            >
              <Heart size={18} style={{ color: "oklch(0.72 0.15 350)" }} />
            </div>
            <div>
              <p className="text-sm font-label font-semibold text-foreground">
                Complete your matrimony profile
              </p>
              <p className="text-xs text-muted-foreground">
                Set up your profile to start matching with compatible partners
              </p>
            </div>
          </div>
          <Button
            size="sm"
            className="shrink-0 font-label gap-1"
            style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
            onClick={() => setSetupOpen(true)}
          >
            Set Up Profile
          </Button>
        </div>
      ) : (
        <div
          className="rounded-xl p-4 border flex items-center gap-4"
          style={{
            background: "oklch(0.72 0.15 350 / 0.06)",
            borderColor: "oklch(0.72 0.15 350 / 0.2)",
          }}
        >
          <Avatar
            className="h-12 w-12 shrink-0 border-2"
            style={{ borderColor: "oklch(0.72 0.15 350)" }}
          >
            <AvatarFallback
              style={{
                background: "oklch(0.72 0.15 350 / 0.2)",
                color: "oklch(0.50 0.18 350)",
              }}
            >
              {(myProfile.name ?? "U")
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
                {myProfile.name}
              </p>
              <Badge
                className="text-[10px] font-label shrink-0"
                style={
                  myProfile.active
                    ? {
                        background: "oklch(0.55 0.2 145 / 0.15)",
                        color: "oklch(0.40 0.18 145)",
                        border: "none",
                      }
                    : {
                        background: "oklch(0.5 0.02 280 / 0.1)",
                        color: "oklch(0.5 0.02 280)",
                        border: "none",
                      }
                }
              >
                {myProfile.active ? "Active" : "Paused"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {myProfile.age} yrs · {myProfile.occupation} ·{" "}
              {myProfile.horoscope}
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="shrink-0 font-label"
            onClick={() => setSetupOpen(true)}
          >
            Edit Profile
          </Button>
        </div>
      )}

      {/* Main Tabs */}
      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList className="font-label">
          <TabsTrigger value="browse">Browse Matches</TabsTrigger>
          <TabsTrigger value="requests">
            Requests
            {receivedRequests.filter((r) => r.status === "Pending").length >
              0 && (
              <span
                className="ml-1.5 text-[10px] font-bold rounded-full px-1.5 py-0.5"
                style={{ background: "oklch(0.72 0.15 350)", color: "white" }}
              >
                {receivedRequests.filter((r) => r.status === "Pending").length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="shortlisted">
            Shortlisted ({shortlisted.size})
          </TabsTrigger>
        </TabsList>

        {/* Browse Tab */}
        <TabsContent value="browse" className="space-y-4">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 min-w-[160px] max-w-xs">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search by profession..."
                className="pl-8 h-9 text-sm"
                value={filterProfession}
                onChange={(e) => setFilterProfession(e.target.value)}
              />
            </div>
            <Input
              placeholder="Caste / Community"
              className="h-9 text-sm w-36"
              value={filterCaste}
              onChange={(e) => setFilterCaste(e.target.value)}
            />
            <Select value={filterLiving} onValueChange={setFilterLiving}>
              <SelectTrigger className="h-9 w-36 text-sm font-label">
                <SelectValue placeholder="Living Standard" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Standards</SelectItem>
                {["Lower", "Middle", "Upper-Middle", "Upper"].map((l) => (
                  <SelectItem key={l} value={l}>
                    {l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant={filterHoroscopeOnly ? "default" : "outline"}
              size="sm"
              className="h-9 gap-1.5 font-label text-xs"
              onClick={() => setFilterHoroscopeOnly((v) => !v)}
              style={
                filterHoroscopeOnly
                  ? { background: "oklch(0.72 0.15 350)", color: "white" }
                  : {}
              }
            >
              ♎ Compatible Horoscope
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-1.5 font-label text-xs"
              onClick={() => setShowFilters((v) => !v)}
            >
              <Filter size={12} />
              Age Filter
              <ChevronDown
                size={12}
                className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </Button>
          </div>

          {showFilters && (
            <div
              className="rounded-xl border border-border/60 p-4 space-y-3"
              style={{ background: "oklch(var(--card))" }}
            >
              <div className="space-y-2">
                <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                  Age Range: {filterAgeMin} – {filterAgeMax}
                </Label>
                <div className="flex gap-4 items-center">
                  <span className="text-xs text-muted-foreground w-6">18</span>
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
                  <span className="text-xs text-muted-foreground w-6">50</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground font-label">
            Showing {filteredProfiles.length} compatible matches
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProfiles.map((profile) => (
              <MatchCard
                key={profile.id}
                profile={profile}
                onShortlist={toggleShortlist}
                onSendRequest={sendRequest}
                onViewProfile={(p) => {
                  setSelectedProfile(p);
                  setProfileDetailOpen(true);
                }}
                isShortlisted={shortlisted.has(profile.id)}
              />
            ))}
          </div>
        </TabsContent>

        {/* Requests Tab */}
        <TabsContent value="requests" className="space-y-4">
          <Tabs defaultValue="received">
            <TabsList className="font-label">
              <TabsTrigger value="received">
                Received ({receivedRequests.length})
              </TabsTrigger>
              <TabsTrigger value="sent">
                Sent ({sentRequests.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="received" className="space-y-3 mt-4">
              {receivedRequests.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Heart size={40} className="mx-auto mb-3 opacity-20" />
                  <p className="text-sm">No requests received yet</p>
                </div>
              )}
              {receivedRequests.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card"
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback
                      style={{
                        background: "oklch(0.72 0.15 350 / 0.15)",
                        color: "oklch(0.50 0.18 350)",
                      }}
                    >
                      {req.profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-foreground truncate">
                      {req.profile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {req.profile.age} yrs · {req.profile.occupation} ·{" "}
                      {req.profile.city}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {req.date}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {req.status === "Pending" ? (
                      <>
                        <Button
                          size="sm"
                          className="h-7 text-xs font-label gap-1"
                          style={{
                            background: "oklch(0.55 0.2 145)",
                            color: "white",
                          }}
                          onClick={() => {
                            setRequests((prev) =>
                              prev.map((r) =>
                                r.id === req.id
                                  ? { ...r, status: "Accepted" }
                                  : r,
                              ),
                            );
                            toast.success(
                              `Accepted ${req.profile.name}'s request`,
                            );
                          }}
                        >
                          <Check size={11} /> Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs font-label gap-1"
                          onClick={() => {
                            setRequests((prev) =>
                              prev.map((r) =>
                                r.id === req.id
                                  ? { ...r, status: "Declined" }
                                  : r,
                              ),
                            );
                            toast.info("Request declined");
                          }}
                        >
                          <X size={11} /> Decline
                        </Button>
                      </>
                    ) : (
                      <Badge
                        className="text-xs font-label"
                        style={
                          req.status === "Accepted"
                            ? {
                                background: "oklch(0.55 0.2 145 / 0.15)",
                                color: "oklch(0.40 0.18 145)",
                                border: "none",
                              }
                            : {
                                background: "oklch(0.55 0.22 25 / 0.15)",
                                color: "oklch(0.45 0.18 25)",
                                border: "none",
                              }
                        }
                      >
                        {req.status}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="sent" className="space-y-3 mt-4">
              {sentRequests.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Heart size={40} className="mx-auto mb-3 opacity-20" />
                  <p className="text-sm">No requests sent yet</p>
                </div>
              )}
              {sentRequests.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card"
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback
                      style={{
                        background: "oklch(0.72 0.15 350 / 0.15)",
                        color: "oklch(0.50 0.18 350)",
                      }}
                    >
                      {req.profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-foreground truncate">
                      {req.profile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {req.profile.age} yrs · {req.profile.occupation} ·{" "}
                      {req.profile.city}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {req.date}
                    </p>
                  </div>
                  <Badge
                    className="text-xs font-label shrink-0"
                    style={
                      req.status === "Accepted"
                        ? {
                            background: "oklch(0.55 0.2 145 / 0.15)",
                            color: "oklch(0.40 0.18 145)",
                            border: "none",
                          }
                        : req.status === "Declined"
                          ? {
                              background: "oklch(0.55 0.22 25 / 0.15)",
                              color: "oklch(0.45 0.18 25)",
                              border: "none",
                            }
                          : {
                              background: "oklch(0.72 0.19 85 / 0.15)",
                              color: "oklch(0.55 0.18 85)",
                              border: "none",
                            }
                    }
                  >
                    {req.status}
                  </Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Shortlisted Tab */}
        <TabsContent value="shortlisted" className="space-y-4">
          {shortlistedProfiles.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Star size={40} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm font-label">No shortlisted profiles yet</p>
              <p className="text-xs mt-1">
                Click the star icon on any match card to shortlist them
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {shortlistedProfiles.map((profile) => (
                <MatchCard
                  key={profile.id}
                  profile={profile}
                  onShortlist={toggleShortlist}
                  onSendRequest={sendRequest}
                  onViewProfile={(p) => {
                    setSelectedProfile(p);
                    setProfileDetailOpen(true);
                  }}
                  isShortlisted={true}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Profile detail sheet */}
      <ProfileDetailSheet
        profile={selectedProfile}
        open={profileDetailOpen}
        onClose={() => {
          setProfileDetailOpen(false);
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
        <EventsTab moduleName="Matrimony" moduleColor="oklch(0.65 0.25 335)" />
      </div>
    </div>
  );
}
