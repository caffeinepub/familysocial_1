import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  Clock,
  Send,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Mood = "calm" | "focused" | "creative";

interface Message {
  role: "user" | "assistant";
  text: string;
  time: string;
}

// ── Astro Data ───────────────────────────────────────────────────────────────

const LIFE_AREA_ADVICE: Record<
  string,
  { advice: string; action: string; caution: string; healings: string[] }
> = {
  Career: {
    advice:
      "The planets align for professional growth this week. Mercury enhances communication — presentations and negotiations are highly favorable.",
    action:
      "Best day to sign contracts: Thursday. Reach out to mentors on Wednesday.",
    caution:
      "Avoid major job changes on Tuesday. Saturn suggests patience over impulsiveness.",
    healings: [
      "Chant Om Suryaya Namah 11 times at sunrise",
      "Wear orange or yellow on Sundays for success energy",
      "Place a yellow citrine crystal on your work desk",
    ],
  },
  Love: {
    advice:
      "Venus shines brightly. Open your heart with vulnerability — authentic communication deepens bonds significantly right now.",
    action:
      "Friday is highly auspicious for romantic gestures. Express feelings held back.",
    caution:
      "Avoid confrontations on Saturday. Mars creates friction between 3-5 PM.",
    healings: [
      "Rose quartz under your pillow attracts loving energy",
      "Burn rose incense on Friday evenings",
      "Chant Om Shukraya Namah 16 times for Venus blessings",
    ],
  },
  Personal: {
    advice:
      "A period of deep self-discovery is underway. The Moon encourages journaling, meditation, and honest self-assessment.",
    action:
      "Mornings 6-8 AM are your most powerful reflection window. Start a wellness ritual.",
    caution:
      "Avoid self-criticism between 2-4 PM. Rahu creates mental distortions.",
    healings: [
      "Practice 10 minutes of mindful breathing at dawn",
      "Write 3 gratitude affirmations each morning",
      "Wear white or light blue for mental clarity",
    ],
  },
  Family: {
    advice:
      "Jupiter's protective influence surrounds family matters. Old misunderstandings can be healed with patience and love.",
    action:
      "Sunday is ideal for family gatherings. Call a relative you haven't spoken to.",
    caution: "Avoid discussing money on Monday. Emotional wounds can reopen.",
    healings: [
      "Light a ghee lamp at home entrance on Thursday",
      "Place a family photo in northeast corner of home",
      "Chant Sarve Bhavantu Sukhinah for collective wellbeing",
    ],
  },
  Health: {
    advice:
      "Mars energizes your vitality. Starting a new fitness routine or dietary change now has lasting positive effects.",
    action:
      "Wednesday morning is best for new health habits. Medical appointments on Tuesday show clarity.",
    caution: "Avoid overexertion on Friday evenings. Saturn may cause fatigue.",
    healings: [
      "Meditate for 10 minutes at sunrise",
      "Wear green on Wednesdays for Mercury healing energy",
      "Chant Om Namah Shivaya 108 times for overall healing",
    ],
  },
  Luck: {
    advice:
      "Jupiter and the Moon create a rare abundance window. Your intuition about opportunities is exceptionally sharp.",
    action: "Make bold moves on Thursday. 11 AM is your peak luck hour.",
    caution:
      "Avoid speculation on Saturday. Ketu creates illusions around windfalls.",
    healings: [
      "Wear yellow sapphire or topaz for Jupiter's luck",
      "Donate yellow items on Thursday to activate abundance",
      "Chant Om Gurave Namah 18 times before important decisions",
    ],
  },
  Education: {
    advice:
      "Mercury governs learning and your mind is exceptionally sharp. Complex subjects that were confusing will suddenly make sense.",
    action:
      "Study between 7-11 AM for maximum retention. Wednesday is ideal for exams.",
    caution: "Avoid starting study plans on Tuesday. Mars creates distraction.",
    healings: [
      "Keep a saraswati yantra at your study desk",
      "Wear green on Wednesdays to enhance Mercury",
      "Chant Om Aim Saraswatyai Namah before studying",
    ],
  },
  Marriage: {
    advice:
      "Venus and Jupiter form a beautiful trine -- one of the best configurations for marriage matters.",
    action:
      "Friday and Sunday are auspicious for engagement or marriage talks.",
    caution: "Avoid finalizing decisions on Saturday. Saturn creates doubt.",
    healings: [
      "Light jasmine incense on Friday evenings for Venus",
      "Wear a pearl or moonstone for emotional harmony",
      "Recite Lalitha Sahasranamam for harmonious partnerships",
    ],
  },
};

const TAROT_DECK = [
  {
    name: "The Fool",
    emoji: "\u2728",
    past: "A naive beginning full of potential, before life's lessons were learned.",
    present:
      "You stand at the edge of something new. Leap with faith -- the universe supports your journey.",
    future:
      "An unexpected adventure is coming. Embrace spontaneity over excessive planning.",
  },
  {
    name: "The Magician",
    emoji: "\u2728",
    past: "Skills and resources were gathered for this moment.",
    present:
      "You have everything you need. Channel your willpower and manifest your vision.",
    future:
      "A breakthrough is imminent. Your talents will be recognized in a meaningful way.",
  },
  {
    name: "The High Priestess",
    emoji: "\u2728",
    past: "Hidden knowledge was sought beneath the surface.",
    present: "Trust your intuition over logic. The answers lie within.",
    future:
      "A mystery will be revealed. Patience and inner listening will guide you.",
  },
  {
    name: "The Empress",
    emoji: "\u2728",
    past: "Abundance, creativity, and nurturing defined this period.",
    present:
      "Creation and fertility are strong. Start that project or creative work.",
    future: "Abundance and growth are on the horizon. Nurture what you love.",
  },
  {
    name: "The Emperor",
    emoji: "\u2728",
    past: "Structure and authority were established.",
    present: "Take charge. Establish boundaries and lead with clarity.",
    future: "A period of stability and authority is approaching.",
  },
  {
    name: "The Lovers",
    emoji: "\u2728",
    past: "A significant choice and connection defined this phase.",
    present: "A meaningful relationship demands your full attention.",
    future: "A deep union or important choice is ahead. Listen to your heart.",
  },
  {
    name: "The Chariot",
    emoji: "\u2728",
    past: "Victory came through sheer willpower and determination.",
    present:
      "Push forward with focused determination. You are close to your goal.",
    future: "Success through discipline. Drive toward your destination.",
  },
  {
    name: "Strength",
    emoji: "\u2728",
    past: "Inner courage was developed through facing fears.",
    present:
      "Gentle persistence overcomes obstacles. Inner strength is your weapon.",
    future: "Courage and compassion will carry you through challenges.",
  },
  {
    name: "The Hermit",
    emoji: "\u2728",
    past: "A period of solitude and deep inner searching.",
    present: "Withdraw temporarily for inner guidance. Your soul has answers.",
    future: "Reflection will lead to profound wisdom and clarity.",
  },
  {
    name: "Wheel of Fortune",
    emoji: "\u2728",
    past: "Life's cycles brought unexpected changes.",
    present: "Change is inevitable -- flow with it rather than resisting.",
    future: "A significant turn of luck is coming.",
  },
  {
    name: "Justice",
    emoji: "\u2728",
    past: "Fairness and accountability were key lessons.",
    present: "Be honest in all dealings. Legal matters may need attention.",
    future: "Balance will be restored. Truth and fairness will prevail.",
  },
  {
    name: "The Star",
    emoji: "\u2728",
    past: "Hope and inspiration guided healing after difficulty.",
    present:
      "Believe in your future. Your authentic self is your greatest gift.",
    future: "A period of hope, renewal, and creativity is approaching.",
  },
  {
    name: "The Moon",
    emoji: "\u2728",
    past: "Illusions and subconscious patterns played tricks.",
    present: "Trust your instincts but verify your perceptions.",
    future: "Clarity will emerge from current confusion.",
  },
  {
    name: "The Sun",
    emoji: "\u2728",
    past: "Clarity, joy, and success illuminated this time.",
    present: "Radiate your authentic energy. Success and joy surround you.",
    future: "A period of joy and vitality is coming. Embrace the light.",
  },
  {
    name: "Judgement",
    emoji: "\u2728",
    past: "A major awakening and life review took place.",
    present: "Heed the call to a higher version of yourself.",
    future: "A karmic reckoning or spiritual awakening is near.",
  },
  {
    name: "The World",
    emoji: "\u2728",
    past: "Completion and wholeness were achieved.",
    present:
      "You are nearing the end of a major cycle. Celebrate how far you've come.",
    future: "Total fulfillment and completion await.",
  },
  {
    name: "The Tower",
    emoji: "\u2728",
    past: "A sudden upheaval cleared away what was unstable.",
    present: "Disruption is clearing the path for authentic foundations.",
    future:
      "An unexpected event will shake the ground -- what remains will be stronger.",
  },
  {
    name: "Temperance",
    emoji: "\u2728",
    past: "Balance and moderation created lasting harmony.",
    present: "Find the middle path. Blend opposing forces with patience.",
    future:
      "Healing and restoration are near. A balanced approach leads to peace.",
  },
  {
    name: "The Devil",
    emoji: "\u2728",
    past: "Attachments and limiting beliefs held you back.",
    present: "Examine what chains you. Unhealthy patterns can be released.",
    future:
      "Liberation from something that bound you is possible -- choose freedom.",
  },
  {
    name: "The Hierophant",
    emoji: "\u2728",
    past: "Traditional wisdom and mentorship shaped this time.",
    present: "Seek guidance from tradition. Conventional paths have wisdom.",
    future: "An institution or teacher will play a key role in your path.",
  },
  {
    name: "The Hanged Man",
    emoji: "\u2728",
    past: "Surrender and a new perspective were needed.",
    present:
      "Pause and see the situation from a different angle. Release control.",
    future:
      "A willing sacrifice leads to spiritual insight and eventual breakthrough.",
  },
  {
    name: "Death (Transformation)",
    emoji: "\u2728",
    past: "A major transformation made way for the new.",
    present:
      "Let go of what no longer serves you. Transformation is essential, not optional.",
    future:
      "A profound ending brings beautiful new beginnings. Embrace the change.",
  },
];

const FAVORABLE_TIMES: Record<string, { good: string; avoid: string }> = {
  Aries: { good: "10:00 AM - 12:00 PM", avoid: "3:00 PM - 5:00 PM" },
  Taurus: { good: "2:00 PM - 4:00 PM", avoid: "7:00 AM - 9:00 AM" },
  Gemini: { good: "9:00 AM - 11:00 AM", avoid: "1:00 PM - 3:00 PM" },
  Cancer: { good: "6:00 PM - 8:00 PM", avoid: "11:00 AM - 1:00 PM" },
  Leo: { good: "12:00 PM - 2:00 PM", avoid: "4:00 PM - 6:00 PM" },
  Virgo: { good: "7:00 AM - 9:00 AM", avoid: "2:00 PM - 4:00 PM" },
  Libra: { good: "3:00 PM - 5:00 PM", avoid: "9:00 AM - 11:00 AM" },
  Scorpio: { good: "8:00 PM - 10:00 PM", avoid: "6:00 AM - 8:00 AM" },
  Sagittarius: { good: "4:00 PM - 6:00 PM", avoid: "12:00 PM - 2:00 PM" },
  Capricorn: { good: "8:00 AM - 10:00 AM", avoid: "5:00 PM - 7:00 PM" },
  Aquarius: { good: "1:00 PM - 3:00 PM", avoid: "8:00 AM - 10:00 AM" },
  Pisces: { good: "5:00 AM - 7:00 AM", avoid: "3:00 PM - 5:00 PM" },
};

function calcLifePath(birthdate: string): number {
  const digits = birthdate.replace(/-/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return sum;
}

const LIFE_PATH_DESC: Record<number, string> = {
  1: "The Leader -- Independent, pioneering, and original. You are meant to lead and innovate. Embrace your individuality and trust your vision.",
  2: "The Mediator -- Sensitive, cooperative, and intuitive. You thrive in partnerships. Diplomacy is your superpower.",
  3: "The Communicator -- Creative, expressive, and joyful. You uplift others through art, words, and humor.",
  4: "The Builder -- Practical, disciplined, and reliable. You create lasting structures. Hard work and order are your foundation.",
  5: "The Freedom Seeker -- Adventurous, versatile, and dynamic. Change and exploration fuel your soul.",
  6: "The Nurturer -- Caring, responsible, and harmonious. Family and community are your calling.",
  7: "The Seeker -- Analytical, introspective, and spiritual. You search for deeper truth.",
  8: "The Powerhouse -- Ambitious, authoritative. You are destined for success. Balance material achievement with spiritual wisdom.",
  9: "The Humanitarian -- Compassionate, artistic, and universal. Your life is a gift to humanity.",
  11: "Master Number 11 -- Highly intuitive visionary and spiritual messenger. You carry extraordinary sensitivity.",
  22: "Master Number 22 -- The Master Builder. You can turn dreams into reality on a grand scale.",
  33: "Master Number 33 -- The Master Teacher. Pure love and compassion define you.",
};

// ── Chat Data ─────────────────────────────────────────────────────────────────

const MODULE_SUGGESTIONS: Record<string, string[]> = {
  "family-tree": [
    "Add your spouse and children to complete your family tree",
    "Enable matrimony toggle to find compatible matches",
    "Link your business to your profile for better visibility",
    "Set privacy levels for sensitive sections like Medical & Financial",
  ],
  "social-feed": [
    "Post an update to your Community feed to stay connected",
    "Browse the Jobs tab in the feed for career opportunities",
    "Share your recent travel experience with photos",
    "Check if any family members posted updates recently",
  ],
  map: [
    "Turn on the Family layer to see where your connections are",
    "Enable the Jobs layer to spot nearby opportunities",
    "Check Matrimony layer for new match pins in your area",
    "Update your area/neighborhood for better match accuracy",
  ],
  products: [
    "Add photos to your products to increase buyer interest",
    "Create rental variants for items you'd like to rent out",
    "Set community-exclusive pricing to reward local buyers",
    "Attach affiliate links to products for extra income",
  ],
  pos: [
    "Apply a discount code to close a deal faster",
    "Use the tax % field to automatically calculate inclusive pricing",
    "Check your Sales History to review past transactions",
    "Add frequently sold items to a quick-access list",
  ],
  jobs: [
    "Update your freelancer profile with your latest portfolio",
    "Browse Delivery jobs if you have a vehicle available",
    "Check your application status in My Applications tab",
    "Connect your Family Tree business to post job listings",
  ],
  healthcare: [
    "Log your latest vitals in Medical Records",
    "Book a consultation with an advisor for preventive care",
    "Verify your insurance policy expiry dates",
    "Add family member conditions for the Family Health overview",
  ],
  "real-estate": [
    "Add photos and location details to improve listing visibility",
    "Check the Rent Management tab for tenant payment status",
    "Properties appear on the Geomap -- verify your pin location",
    "Upload NOC documents in the Documents tab",
  ],
  education: [
    "Check your assignment submissions and pending results",
    "Verify your timetable for any schedule changes",
    "Browse the Library for course-related books",
    "Send an attendance note to your subject teacher if absent",
  ],
  travel: [
    "Complete your itinerary day-by-day for better trip planning",
    "Compare hotel prices using check-in/check-out date filters",
    "Book a cab with distance pricing for local transfers",
    "If you have a business, create a tour package to earn commissions",
  ],
  blog: [
    "Use the Recipe template to write a food blog with affiliate links",
    "Your referral code is auto-appended to all shared links",
    "Track which affiliate links are generating clicks in Dashboard",
    "Mark sponsored posts with the Sponsored badge to stay compliant",
  ],
  matrimony: [
    "Complete your horoscope details for better compatibility scores",
    "Shortlist profiles you're interested in for easy access later",
    "Update your living standard and lifestyle preferences",
    "New matches show as 'New Today' pins on the Geomap",
  ],
  dating: [
    "Add your habits and lifestyle preferences to get better matches",
    "Super Like a profile to stand out in their notification feed",
    "Check your Matches tab for mutual connections",
    "Update your clothing style and eating habits for finer matching",
  ],
  dashboard: [
    "Check Affiliate earnings for your top performing blog posts",
    "Review Delivery Income to see your commission breakdown",
    "Look at the monetization opportunities suggested for this week",
    "Export your earnings report as CSV for offline record-keeping",
  ],
  "gated-community": [
    "Share your QR code with security for faster gate check-in",
    "Lodge a complaint for any maintenance issue in your flat",
    "Browse Community Marketplace for member-exclusive deals",
    "List your empty parking spot to earn passive income",
  ],
  community: [
    "Post an announcement to your community feed",
    "Check upcoming community events in the notice board",
    "Connect with neighbors in the community member directory",
    "Join a sub-group within your community for specific interests",
  ],
  "admin-panel": [
    "Review pending content moderation queue in Agent 14",
    "Check monetization suggestions in Agent 13 tab",
    "Approve or reject quarterly evolution changes in Agent 4",
    "Run the fake user agent temporarily to boost community activity",
  ],
};

const SIMULATED_RESPONSES: Record<Mood, Record<string, string>> = {
  calm: {
    default:
      "That's a thoughtful question. Let me help you navigate this step by step. IndyaCentral is designed to make every interaction meaningful -- take it at your own pace.",
    help: "Of course! I'm here to help. You can ask me about any module -- Family Tree, Jobs, Healthcare, Real Estate, or even the Geomap. What would you like to explore?",
    stuck:
      "No worries. It happens to everyone. Tell me what you're trying to do and I'll walk you through it calmly.",
  },
  focused: {
    default:
      "Let's get to it. Quick tip: use the module tabs at the top to switch context fast. What specific task are you trying to complete right now?",
    help: "Got it. I'll be direct -- what's the goal? Tell me the exact action you want to take and I'll give you the fastest path to it.",
    stuck:
      "Let's diagnose this quickly. Is it a navigation issue, a missing feature, or something not working as expected?",
  },
  creative: {
    default:
      "Interesting! There are actually several creative ways to approach this. Did you know you can link your blog affiliate links directly to your family tree business for a unique income stream?",
    help: "Oh, there's so much to explore! Have you tried combining the Geomap with the Dating module filters? Or using the Blog module to promote your Real Estate listings?",
    stuck:
      "Let's think outside the box here! Sometimes the solution is in an unexpected module. What if we approach this from a different angle?",
  },
};

const getTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    text: "Hello! I'm your FamilySocial Friend. I know every module and can help you navigate, suggest next steps, and answer questions. What are you working on today?",
    time: getTime(),
  },
];

interface Props {
  currentPage: string;
}

export default function CoworkerAssistant({ currentPage }: Props) {
  const [open, setOpen] = useState(false);
  const [mood, setMood] = useState<Mood>("focused");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [remindedSuggestions, setRemindedSuggestions] = useState<Set<number>>(
    new Set(),
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions =
    MODULE_SUGGESTIONS[currentPage] ?? MODULE_SUGGESTIONS["social-feed"];
  const activeSuggestions = suggestions.filter(
    (_, i) => !remindedSuggestions.has(i),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on message changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      role: "user",
      text: text.trim(),
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(
      () => {
        const responses = SIMULATED_RESPONSES[mood];
        const lowerText = text.toLowerCase();
        let response = responses.default;
        if (lowerText.includes("help") || lowerText.includes("how"))
          response = responses.help;
        else if (
          lowerText.includes("stuck") ||
          lowerText.includes("can't") ||
          lowerText.includes("issue")
        )
          response = responses.stuck;
        else if (lowerText.includes("job") || lowerText.includes("work")) {
          response =
            "For jobs, head to the Jobs module. Use the Browse tab to filter by Full Time / Part Time / Delivery, or switch to Recruiter if you're hiring. Applications are tracked with ATS stages.";
        } else if (lowerText.includes("family") || lowerText.includes("tree")) {
          response =
            "Family Tree is your foundation. Add members by hovering over existing nodes, edit your own profile with the pencil icon, and link businesses at the bottom. Privacy is per-section.";
        } else if (
          lowerText.includes("map") ||
          lowerText.includes("location")
        ) {
          response =
            "The Geomap has 9+ module layers you can toggle. Your own pins appear when you enable Matrimony or Dating. All module entries (jobs, properties, etc.) show as color-coded pins.";
        } else if (
          lowerText.includes("earn") ||
          lowerText.includes("income") ||
          lowerText.includes("affiliate")
        ) {
          response =
            "Great question! You can earn through affiliate blog links, delivery jobs, POS sales, matrimony boosts, and community marketplace listings. Check Dashboard > Affiliate & Commissions for tracking.";
        }

        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: response, time: getTime() },
        ]);
      },
      1200 + Math.random() * 600,
    );
  };

  const pageName = currentPage
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-5 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
            style={{ background: "oklch(0.52 0.14 155)" }}
            aria-label="Open Friend assistant"
          >
            <BrainCircuit
              size={22}
              style={{ color: "oklch(0.98 0.005 155)" }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/10"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-card border-l border-border flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0"
                style={{ background: "oklch(0.52 0.14 155 / 0.05)" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.14 155)" }}
                  >
                    <Bot size={16} style={{ color: "oklch(0.98 0.005 155)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-label font-semibold text-foreground">
                      Friend
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.52_0.14_155)] animate-pulse" />
                      <p className="text-[10px] text-muted-foreground">
                        on {pageName}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setOpen(false)}
                >
                  <X size={14} />
                </Button>
              </div>

              {/* Tab bar: Chat | Astro */}
              <Tabs
                defaultValue="chat"
                className="flex flex-col flex-1 min-h-0"
              >
                <TabsList className="shrink-0 h-9 rounded-none border-b border-border bg-transparent justify-start gap-0 px-3 flex w-full">
                  <TabsTrigger
                    value="chat"
                    className="text-xs px-3 h-9 data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-transparent transition-colors"
                    data-ocid="friend.chat.tab"
                  >
                    Chat
                  </TabsTrigger>
                  <TabsTrigger
                    value="astro"
                    className="text-xs px-3 h-9 data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-transparent transition-colors"
                    data-ocid="friend.astro.tab"
                  >
                    Astro
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="chat"
                  className="mt-0 flex flex-col flex-1 min-h-0"
                >
                  {/* Mood selector */}
                  <div className="px-3 py-2 border-b border-border/50 flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-muted-foreground font-label mr-1">
                      Mood:
                    </span>
                    {(["calm", "focused", "creative"] as Mood[]).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMood(m)}
                        className={`text-[10px] font-label font-medium px-2 py-1 rounded-full border transition-all ${
                          mood === m
                            ? "border-transparent text-white"
                            : "border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                        style={
                          mood === m
                            ? {
                                background:
                                  m === "calm"
                                    ? "oklch(0.55 0.15 240)"
                                    : m === "focused"
                                      ? "oklch(0.55 0.22 280)"
                                      : "oklch(0.65 0.25 335)",
                              }
                            : {}
                        }
                      >
                        {m === "calm"
                          ? "Calm"
                          : m === "focused"
                            ? "Focused"
                            : "Creative"}
                      </button>
                    ))}
                  </div>

                  {/* Suggestions */}
                  {activeSuggestions.length > 0 && (
                    <div className="px-3 pt-2 pb-1 border-b border-border/30 shrink-0">
                      <p className="text-[10px] font-label font-semibold text-muted-foreground mb-1.5">
                        SUGGESTIONS FOR {pageName.toUpperCase()}
                      </p>
                      <div className="space-y-1">
                        {activeSuggestions.slice(0, 2).map((s) => (
                          <div
                            key={s}
                            className="flex items-start gap-1.5 group"
                          >
                            <button
                              type="button"
                              onClick={() => sendMessage(s)}
                              className="flex-1 text-left text-[11px] font-label text-foreground/80 hover:text-foreground px-2 py-1.5 rounded-lg bg-secondary/40 hover:bg-secondary/80 transition-colors leading-relaxed"
                            >
                              {s}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setRemindedSuggestions(
                                  (prev) =>
                                    new Set([...prev, suggestions.indexOf(s)]),
                                )
                              }
                              className="shrink-0 mt-1.5 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all"
                              title="Remind me later"
                            >
                              <Clock size={11} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Messages */}
                  <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto px-3 py-2 space-y-2"
                  >
                    {messages.slice(-5).map((msg, i) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: chat list
                        key={i}
                        className={`flex ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl px-3 py-2 ${
                            msg.role === "user"
                              ? "rounded-br-sm"
                              : "rounded-bl-sm"
                          }`}
                          style={
                            msg.role === "user"
                              ? {
                                  background: "oklch(0.55 0.22 280)",
                                  color: "oklch(0.98 0.005 280)",
                                }
                              : {
                                  background: "oklch(var(--secondary))",
                                  color: "oklch(var(--foreground))",
                                }
                          }
                        >
                          <p className="text-[11px] font-label leading-relaxed">
                            {msg.text}
                          </p>
                          <p className="text-[9px] opacity-60 mt-0.5 text-right">
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="rounded-xl rounded-bl-sm px-3 py-2 bg-secondary/60">
                          <div className="flex gap-1 items-center h-4">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.15,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="border-t border-border p-3 shrink-0">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage(input);
                          }
                        }}
                        placeholder="Ask anything..."
                        className="flex-1 bg-secondary/60 border border-border rounded-lg px-3 py-2 text-xs font-label text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                      />
                      <Button
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        style={{ background: "oklch(0.52 0.14 155)" }}
                        onClick={() => sendMessage(input)}
                        disabled={!input.trim() || isTyping}
                      >
                        <Send
                          size={13}
                          style={{ color: "oklch(0.98 0.005 155)" }}
                        />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="astro"
                  forceMount
                  className="mt-0 flex-1 min-h-0 overflow-y-auto data-[state=inactive]:hidden"
                >
                  <AstroTabContent />
                </TabsContent>
              </Tabs>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Zodiac calculation helpers ────────────────────────────────────────────────

const ZODIAC_SIGNS = [
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

const SIGN_META: Record<
  string,
  { planet: string; element: string; lucky: number }
> = {
  Aries: { planet: "Mars", element: "Fire", lucky: 9 },
  Taurus: { planet: "Venus", element: "Earth", lucky: 6 },
  Gemini: { planet: "Mercury", element: "Air", lucky: 5 },
  Cancer: { planet: "Moon", element: "Water", lucky: 2 },
  Leo: { planet: "Sun", element: "Fire", lucky: 1 },
  Virgo: { planet: "Mercury", element: "Earth", lucky: 5 },
  Libra: { planet: "Venus", element: "Air", lucky: 6 },
  Scorpio: { planet: "Mars", element: "Water", lucky: 8 },
  Sagittarius: { planet: "Jupiter", element: "Fire", lucky: 3 },
  Capricorn: { planet: "Saturn", element: "Earth", lucky: 8 },
  Aquarius: { planet: "Saturn", element: "Air", lucky: 4 },
  Pisces: { planet: "Jupiter", element: "Water", lucky: 7 },
};

function getZodiacFromDOB(dob: string): string {
  if (!dob) return "";
  const [, m, d] = dob.split("-").map(Number);
  if (!m || !d) return "";
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "Aries";
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "Taurus";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "Gemini";
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "Cancer";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "Leo";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "Virgo";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "Libra";
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "Scorpio";
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "Sagittarius";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "Capricorn";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "Aquarius";
  return "Pisces";
}

// ── AstroTabContent ───────────────────────────────────────────────────────────
function AstroTabContent() {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [fullName, setFullName] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("ic_astro_name") || ""
      : "",
  );
  const [dob, setDob] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("ic_astro_dob") || ""
      : "",
  );
  const [timeOfBirth, setTimeOfBirth] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("ic_astro_tob") || ""
      : "",
  );
  const [placeOfBirth, setPlaceOfBirth] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("ic_astro_pob") || ""
      : "",
  );
  const [manualSign, setManualSign] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("ic_astro_manual_sign") || ""
      : "",
  );

  const autoSign = getZodiacFromDOB(dob);
  const effectiveSign =
    manualSign ||
    autoSign ||
    (typeof window !== "undefined"
      ? localStorage.getItem("ic_user_zodiac") || "Scorpio"
      : "Scorpio");
  const lifePath = dob ? calcLifePath(dob) : null;
  const signMeta = SIGN_META[effectiveSign] || SIGN_META.Scorpio;

  // Save details to localStorage on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (fullName) localStorage.setItem("ic_astro_name", fullName);
    if (dob) localStorage.setItem("ic_astro_dob", dob);
    if (timeOfBirth) localStorage.setItem("ic_astro_tob", timeOfBirth);
    if (placeOfBirth) localStorage.setItem("ic_astro_pob", placeOfBirth);
    if (manualSign) localStorage.setItem("ic_astro_manual_sign", manualSign);
    if (effectiveSign) localStorage.setItem("ic_user_zodiac", effectiveSign);
  }, [fullName, dob, timeOfBirth, placeOfBirth, manualSign, effectiveSign]);

  const hasPersonalDetails = !!(fullName && dob);

  const [lifeArea, setLifeArea] = useState<string>("Career");
  const [tarotCards, setTarotCards] = useState<(typeof TAROT_DECK)[number][]>(
    [],
  );
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const areaData = LIFE_AREA_ADVICE[lifeArea];
  const timeData = FAVORABLE_TIMES[effectiveSign] || FAVORABLE_TIMES.Scorpio;

  const LIFE_AREAS = [
    "Career",
    "Love",
    "Personal",
    "Family",
    "Health",
    "Luck",
    "Education",
    "Marriage",
  ];

  function drawTarot() {
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    setTarotCards(shuffled.slice(0, 3));
  }

  function buildPersonalizedAnswer(q: string): string {
    const namePrefix = fullName ? `${fullName.split(" ")[0]}, ` : "";
    const signPhrase = effectiveSign
      ? `as a ${effectiveSign} with ruling planet ${signMeta.planet}`
      : "based on the cosmic alignment";
    const lpPhrase = lifePath
      ? ` Your Life Path ${lifePath} ${[11, 22, 33].includes(lifePath) ? "(Master Number)" : ""} adds a layer of ${lifePath === 1 ? "leadership" : lifePath === 7 ? "deep introspection" : lifePath === 8 ? "ambition" : "unique purpose"}.`
      : "";
    const areaContext = ` Focusing on ${lifeArea}, `;
    const birthTimePhrase = timeOfBirth
      ? ` Born at ${timeOfBirth}, your chart carries a ${Number(timeOfBirth.split(":")[0]) < 12 ? "morning" : "evening"} energy that ${Number(timeOfBirth.split(":")[0]) < 12 ? "sharpens your clarity and initiative" : "deepens your intuition and reflective power"}.`
      : "";
    const placePhrase = placeOfBirth
      ? ` Your roots in ${placeOfBirth} ground your cosmic journey with a distinct cultural energy.`
      : "";

    const templates = [
      `${namePrefix}${signPhrase}, the stars suggest that "${q}" holds a favorable resolution.${areaContext}${signMeta.planet} ${lifeArea === "Career" ? "amplifies professional clarity" : lifeArea === "Love" ? "opens your heart to authentic connection" : lifeArea === "Health" ? "restores vitality" : lifeArea === "Education" ? "sharpens your intellect" : "brings positive momentum"} this week.${lpPhrase}${birthTimePhrase} Trust your intuition — clarity is approaching.`,

      `${namePrefix}the cosmic map for a ${effectiveSign} (${signMeta.element} sign) reveals that "${q}" is actively supported by the current planetary configuration.${areaContext}${signMeta.planet}'s influence suggests deliberate, grounded action rather than impulse.${lpPhrase}${placePhrase} The timing is more favorable than you realize.`,

      `${namePrefix}${signPhrase}, Mercury's position illuminates the path around "${q}".${areaContext}patience and honest communication will accelerate your answer.${lpPhrase}${birthTimePhrase} Your ${signMeta.element} nature gives you the resilience to navigate this with grace.`,

      `${namePrefix}regarding "${q}" — the ${effectiveSign} energy you carry is both your challenge and your gift.${areaContext}${signMeta.planet} reminds you that the answer lies in alignment, not force.${lpPhrase}${placePhrase} A quiet moment of reflection between ${timeData.good} will bring unexpected clarity.`,

      `${namePrefix}the stars see your question about "${q}" clearly. ${signPhrase}, your ${signMeta.element} element gives you ${signMeta.element === "Fire" ? "bold instincts" : signMeta.element === "Water" ? "deep emotional intelligence" : signMeta.element === "Earth" ? "grounded wisdom" : "flexible perspective"}.${areaContext}the next 3 days are particularly auspicious. Lucky number ${signMeta.lucky} guides your decisions.${lpPhrase}${birthTimePhrase}`,
    ];

    return templates[Math.floor(Math.random() * templates.length)];
  }

  function askQuestion() {
    if (!question.trim() || isAsking) return;
    setIsAsking(true);
    setAnswer(""); // clear previous answer while loading
    const q = question.trim();
    setQuestion("");
    // Small delay to simulate cosmic consultation
    setTimeout(() => {
      const newAnswer = buildPersonalizedAnswer(q);
      setIsAsking(false);
      setAnswer(newAnswer);
    }, 800);
  }

  return (
    <div className="px-3 py-3 space-y-4">
      {/* ── Personal Details ── */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid oklch(0.65 0.20 85 / 0.3)" }}
      >
        <button
          type="button"
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="w-full flex items-center justify-between px-3 py-2.5 text-left"
          style={{ background: "oklch(0.65 0.20 85 / 0.10)" }}
        >
          <div className="flex items-center gap-2">
            <User size={12} style={{ color: "oklch(0.55 0.18 85)" }} />
            <span
              className="text-[10px] font-label font-semibold uppercase tracking-wider"
              style={{ color: "oklch(0.55 0.18 85)" }}
            >
              Personal Details {hasPersonalDetails && `— ${effectiveSign}`}
            </span>
          </div>
          {detailsOpen ? (
            <ChevronUp size={12} className="text-muted-foreground" />
          ) : (
            <ChevronDown size={12} className="text-muted-foreground" />
          )}
        </button>

        {detailsOpen && (
          <div
            className="px-3 pb-3 pt-2 space-y-2.5"
            style={{ background: "oklch(0.65 0.20 85 / 0.04)" }}
          >
            <div>
              <label
                htmlFor="astro-name"
                className="text-[9px] font-label font-semibold text-muted-foreground uppercase tracking-wider block mb-1"
              >
                Full Name
              </label>
              <input
                id="astro-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="w-full h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                data-ocid="friend.astro.name_input"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="astro-dob"
                  className="text-[9px] font-label font-semibold text-muted-foreground uppercase tracking-wider block mb-1"
                >
                  Date of Birth *
                </label>
                <input
                  id="astro-dob"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                    if (manualSign) return; // don't override manual
                    // auto sign will recalculate via derived value
                  }}
                  className="w-full h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  data-ocid="friend.astro.dob_input"
                />
              </div>
              <div>
                <label
                  htmlFor="astro-tob"
                  className="text-[9px] font-label font-semibold text-muted-foreground uppercase tracking-wider block mb-1"
                >
                  Time of Birth
                </label>
                <input
                  id="astro-tob"
                  type="time"
                  value={timeOfBirth}
                  onChange={(e) => setTimeOfBirth(e.target.value)}
                  className="w-full h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  data-ocid="friend.astro.tob_input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="astro-pob"
                className="text-[9px] font-label font-semibold text-muted-foreground uppercase tracking-wider block mb-1"
              >
                Place of Birth
              </label>
              <input
                id="astro-pob"
                type="text"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                placeholder="City, Country"
                className="w-full h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                data-ocid="friend.astro.pob_input"
              />
            </div>

            <div>
              <label
                htmlFor="astro-sign"
                className="text-[9px] font-label font-semibold text-muted-foreground uppercase tracking-wider block mb-1"
              >
                Zodiac Sign{" "}
                {autoSign && (
                  <span className="text-primary normal-case">
                    (auto: {autoSign})
                  </span>
                )}
              </label>
              <select
                id="astro-sign"
                value={manualSign || autoSign}
                onChange={(e) => setManualSign(e.target.value)}
                className="w-full h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                data-ocid="friend.astro.sign_select"
              >
                <option value="">— Auto from DOB —</option>
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ── Mini Personal Reading Card ── */}
      {hasPersonalDetails && (
        <div
          className="rounded-xl p-3 space-y-2"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.14 155 / 0.12), oklch(0.55 0.22 280 / 0.10))",
            border: "1px solid oklch(0.52 0.14 155 / 0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={12} style={{ color: "oklch(0.52 0.14 155)" }} />
            <p className="text-[10px] font-label font-bold text-foreground uppercase tracking-wider">
              Personal Reading — {fullName.split(" ")[0]}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-[9px] text-muted-foreground">Sun Sign</p>
              <p className="text-[11px] font-semibold text-foreground">
                {effectiveSign}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Ruling Planet</p>
              <p className="text-[11px] font-semibold text-foreground">
                {signMeta.planet}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Element</p>
              <p className="text-[11px] font-semibold text-foreground">
                {signMeta.element}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Lucky Number</p>
              <p className="text-[11px] font-semibold text-foreground">
                {signMeta.lucky}
              </p>
            </div>
            {lifePath !== null && (
              <div>
                <p className="text-[9px] text-muted-foreground">Life Path</p>
                <p className="text-[11px] font-semibold text-foreground">
                  {lifePath}
                  {[11, 22, 33].includes(lifePath) ? " ✦" : ""}
                </p>
              </div>
            )}
            {timeOfBirth && (
              <div>
                <p className="text-[9px] text-muted-foreground">Birth Time</p>
                <p className="text-[11px] font-semibold text-foreground">
                  {timeOfBirth}
                </p>
              </div>
            )}
          </div>
          <p className="text-[10px] text-muted-foreground leading-relaxed pt-1 border-t border-border/30">
            {effectiveSign === "Scorpio" ||
            effectiveSign === "Cancer" ||
            effectiveSign === "Pisces"
              ? `As a ${signMeta.element} sign, you possess deep emotional intelligence and intuitive gifts. ${signMeta.planet} shapes your inner drive toward transformation and depth.`
              : effectiveSign === "Aries" ||
                  effectiveSign === "Leo" ||
                  effectiveSign === "Sagittarius"
                ? `Your ${signMeta.element} energy ignites passion and courage in all you pursue. ${signMeta.planet} amplifies your natural leadership and creative force.`
                : effectiveSign === "Taurus" ||
                    effectiveSign === "Virgo" ||
                    effectiveSign === "Capricorn"
                  ? `Grounded in ${signMeta.element}, you build lasting foundations with precision. ${signMeta.planet} rewards your discipline with material and spiritual abundance.`
                  : `Your ${signMeta.element} nature brings intellectual agility and adaptability. ${signMeta.planet} opens doors through communication and social connection.`}
            {lifePath
              ? ` Life Path ${lifePath}: ${LIFE_PATH_DESC[lifePath]?.split(" -- ")[1] || "a unique cosmic journey awaits."}`
              : ""}
          </p>
        </div>
      )}

      {/* ── Life Area Selector ── */}
      <div>
        <p className="text-[10px] font-label font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
          Life Area
        </p>
        <div className="flex flex-wrap gap-1">
          {LIFE_AREAS.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => setLifeArea(area)}
              className="text-[10px] px-2 py-1 rounded-full border transition-all font-label font-medium"
              style={{
                borderColor:
                  lifeArea === area
                    ? "oklch(0.52 0.14 155)"
                    : "oklch(var(--border))",
                background:
                  lifeArea === area ? "oklch(0.52 0.14 155)" : "transparent",
                color:
                  lifeArea === area
                    ? "white"
                    : "oklch(var(--muted-foreground))",
              }}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      {/* ── Astro Advice for selected area ── */}
      {areaData && (
        <div className="space-y-2">
          <div
            className="rounded-xl p-3 space-y-2"
            style={{
              background: "oklch(0.52 0.14 155 / 0.08)",
              border: "1px solid oklch(0.52 0.14 155 / 0.2)",
            }}
          >
            {hasPersonalDetails && (
              <p
                className="text-[10px] font-semibold"
                style={{ color: "oklch(0.52 0.14 155)" }}
              >
                For {fullName.split(" ")[0]} · {effectiveSign} · {lifeArea}
              </p>
            )}
            <p className="text-[11px] text-foreground leading-relaxed">
              {hasPersonalDetails
                ? `Based on your ${effectiveSign} nature (ruled by ${signMeta.planet}): ${areaData.advice}`
                : areaData.advice}
            </p>
            <p
              className="text-[10px]"
              style={{ color: "oklch(0.52 0.14 155)" }}
            >
              Action: {areaData.action}
            </p>
            <p className="text-[10px] text-muted-foreground">
              Caution: {areaData.caution}
            </p>
          </div>

          {/* Favorable time */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "oklch(0.65 0.20 85 / 0.08)",
              border: "1px solid oklch(0.65 0.20 85 / 0.2)",
            }}
          >
            <p
              className="text-[10px] font-semibold mb-1"
              style={{ color: "oklch(0.55 0.18 85)" }}
            >
              Favorable Time Today ({effectiveSign})
            </p>
            <p className="text-[10px] text-foreground">
              Window: <strong>{timeData.good}</strong>
            </p>
            <p className="text-[10px] text-muted-foreground">
              Avoid: {timeData.avoid}
            </p>
          </div>

          {/* Healings */}
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
              Healings & Remedies
            </p>
            <div className="space-y-1">
              {areaData.healings.map((h) => (
                <div key={h} className="flex items-start gap-1.5">
                  <Star
                    size={9}
                    className="shrink-0 mt-1"
                    style={{ color: "oklch(0.65 0.20 85)" }}
                  />
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Numerology ── */}
      <div className="border-t border-border/30 pt-4">
        <p className="text-[10px] font-label font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
          Numerology{" "}
          {hasPersonalDetails && dob ? "— calculated from your DOB" : ""}
        </p>
        {!dob && (
          <div className="flex gap-2 mb-2">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="flex-1 h-8 px-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              placeholder="Enter DOB above or here"
              data-ocid="friend.astro.numerology_dob"
            />
          </div>
        )}
        {lifePath !== null && (
          <div
            className="rounded-xl p-3"
            style={{
              background: "oklch(0.55 0.22 280 / 0.08)",
              border: "1px solid oklch(0.55 0.22 280 / 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-2xl font-display font-bold"
                style={{ color: "oklch(0.55 0.22 280)" }}
              >
                {lifePath}
              </span>
              <div>
                <p className="text-[10px] font-semibold text-foreground">
                  {[11, 22, 33].includes(lifePath)
                    ? "Master Number"
                    : "Life Path"}{" "}
                  {lifePath}
                  {hasPersonalDetails && ` · ${fullName.split(" ")[0]}`}
                </p>
                {hasPersonalDetails && (
                  <p className="text-[9px] text-muted-foreground">
                    Lucky Number: {signMeta.lucky}
                  </p>
                )}
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              {LIFE_PATH_DESC[lifePath] ||
                "A unique vibration — research your specific combination for deeper insight."}
            </p>
            {hasPersonalDetails && (
              <p
                className="text-[10px] mt-1.5 leading-relaxed"
                style={{ color: "oklch(0.55 0.22 280)" }}
              >
                Combined with your {effectiveSign} sun sign, your Life Path{" "}
                {lifePath} creates a unique destiny signature. {signMeta.planet}{" "}
                amplifies this energy in practical ways.
              </p>
            )}
          </div>
        )}
        {!lifePath && (
          <p className="text-[10px] text-muted-foreground">
            Enter your date of birth in Personal Details above to calculate your
            Life Path number.
          </p>
        )}
      </div>

      {/* ── Tarot ── */}
      <div className="border-t border-border/30 pt-4">
        <p className="text-[10px] font-label font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
          Tarot Reading{" "}
          {hasPersonalDetails ? `for ${fullName.split(" ")[0]}` : ""}
        </p>
        <button
          type="button"
          onClick={drawTarot}
          className="w-full h-8 rounded-lg text-xs font-semibold text-white transition-colors"
          style={{ background: "oklch(0.60 0.25 335)" }}
          data-ocid="friend.astro.tarot_button"
        >
          Draw 3 Cards
        </button>
        {tarotCards.length === 3 && (
          <div className="mt-3 space-y-2">
            {(["Past", "Present", "Future"] as const).map((pos, i) => {
              const card = tarotCards[i];
              const posText =
                pos === "Past"
                  ? card.past
                  : pos === "Present"
                    ? card.present
                    : card.future;
              return (
                <div
                  key={pos}
                  className="rounded-xl p-3"
                  style={{
                    background: "oklch(0.60 0.25 335 / 0.07)",
                    border: "1px solid oklch(0.60 0.25 335 / 0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{card.emoji}</span>
                    <div>
                      <p className="text-[10px] font-bold text-foreground">
                        {card.name}
                      </p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider">
                        {pos}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {hasPersonalDetails
                      ? `${fullName.split(" ")[0]}, as a ${effectiveSign}: ${posText}`
                      : posText}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Q&A ── */}
      <div className="border-t border-border/30 pt-4 pb-4">
        <p className="text-[10px] font-label font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
          Ask the Stars
        </p>
        {hasPersonalDetails && (
          <p className="text-[9px] text-muted-foreground mb-2">
            Personalised for {effectiveSign} · Life Area: {lifeArea}
          </p>
        )}
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isAsking) askQuestion();
            }}
            placeholder={
              hasPersonalDetails
                ? `Ask about ${lifeArea.toLowerCase()}, love, timing...`
                : "Ask a life question..."
            }
            className="flex-1 bg-secondary/60 border border-border rounded-lg px-3 py-2 text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            data-ocid="friend.astro.question.input"
          />
          <button
            type="button"
            onClick={askQuestion}
            disabled={!question.trim() || isAsking}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-white shrink-0 disabled:opacity-50 transition-opacity"
            style={{ background: "oklch(0.52 0.14 155)" }}
            data-ocid="friend.astro.ask_button"
          >
            {isAsking ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles size={13} />
              </motion.div>
            ) : (
              <Sparkles size={13} />
            )}
          </button>
        </div>

        {/* Answer display — always renders when answer is non-empty or asking */}
        {(answer || isAsking) && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 rounded-xl p-3"
            style={{
              background: "oklch(0.52 0.14 155 / 0.10)",
              border: "1px solid oklch(0.52 0.14 155 / 0.25)",
            }}
            data-ocid="friend.astro.answer"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sparkles size={10} style={{ color: "oklch(0.52 0.14 155)" }} />
              <p
                className="text-[9px] font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.52 0.14 155)" }}
              >
                {isAsking ? "Consulting the Stars…" : "Cosmic Answer"}
              </p>
            </div>
            {isAsking ? (
              <div className="flex gap-1 items-center h-5 pl-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "oklch(0.52 0.14 155)" }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-foreground leading-relaxed">
                {answer}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
