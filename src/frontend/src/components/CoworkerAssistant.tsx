import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, BrainCircuit, Clock, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Mood = "calm" | "focused" | "creative";

interface Message {
  role: "user" | "assistant";
  text: string;
  time: string;
}

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
    "Properties appear on the Geomap — verify your pin location",
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
      "That's a thoughtful question. Let me help you navigate this step by step. FamilySocial is designed to make every interaction meaningful — take it at your own pace.",
    help: "Of course! I'm here to help. You can ask me about any module — Family Tree, Jobs, Healthcare, Real Estate, or even the Geomap. What would you like to explore?",
    stuck:
      "No worries. It happens to everyone. Tell me what you're trying to do and I'll walk you through it calmly.",
  },
  focused: {
    default:
      "Let's get to it. Quick tip: use the module tabs at the top to switch context fast. What specific task are you trying to complete right now?",
    help: "Got it. I'll be direct — what's the goal? Tell me the exact action you want to take and I'll give you the fastest path to it.",
    stuck:
      "Let's diagnose this quickly. Is it a navigation issue, a missing feature, or something not working as expected?",
  },
  creative: {
    default:
      "Interesting! There are actually several creative ways to approach this. Did you know you can link your blog affiliate links directly to your family tree business for a unique income stream?",
    help: "Oh, there's so much to explore! Have you tried combining the Geomap with the Dating module filters? Or using the Blog module to promote your Real Estate listings with affiliate links?",
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
    text: "Hello! I'm your FamilySocial co-worker. I know every module and can help you navigate, suggest next steps, and answer questions. What are you working on today?",
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on message/typing changes
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
            aria-label="Open co-worker assistant"
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
                className="flex items-center justify-between px-4 py-3 border-b border-border"
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
                      Co-worker
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

              {/* Mood selector */}
              <div className="px-3 py-2 border-b border-border/50 flex items-center gap-1.5">
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
                      ? "😌 Calm"
                      : m === "focused"
                        ? "🎯 Focused"
                        : "✨ Creative"}
                  </button>
                ))}
              </div>

              {/* Suggestions */}
              {activeSuggestions.length > 0 && (
                <div className="px-3 pt-2 pb-1 border-b border-border/30">
                  <p className="text-[10px] font-label font-semibold text-muted-foreground mb-1.5">
                    SUGGESTIONS FOR {pageName.toUpperCase()}
                  </p>
                  <div className="space-y-1">
                    {activeSuggestions.slice(0, 2).map((s) => (
                      <div key={s} className="flex items-start gap-1.5 group">
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
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl px-3 py-2 ${
                        msg.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"
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
              <div className="border-t border-border p-3">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
