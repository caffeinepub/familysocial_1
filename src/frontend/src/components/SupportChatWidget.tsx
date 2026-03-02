import { AlertTriangle, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TabType = "chat" | "complaint" | "review";

interface Message {
  id: number;
  text: string;
  from: "user" | "bot";
  time: string;
}

const ABUSE_WORDS = [
  "abuse",
  "scam",
  "fraud",
  "hate",
  "spam",
  "fake",
  "cheat",
  "threat",
  "kill",
  "stupid",
];

function now(): string {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const BOT_RESPONSES: Record<string, string> = {
  "report issue":
    "I can help you report an issue! Please use the 'Complaint' tab to file a formal complaint, or describe your issue here and I'll guide you.",
  "account help":
    "For account issues: check Settings → Account for password changes, or contact support if you're locked out. What specifically do you need help with?",
  "technical problem":
    "For technical problems, please describe the issue clearly. You can also use the Complaint tab to file a formal report with our technical team.",
  feedback:
    "We love hearing from you! Your feedback helps us improve FamilySocial. Please share your thoughts and I'll make sure they reach the right team.",
};

const SAMPLE_REVIEWS = [
  {
    entity: "Khan Electronics",
    rating: 2,
    text: "Product quality is poor and support is unresponsive.",
    likes: 14,
    dislikes: 2,
  },
  {
    entity: "Usman Travels",
    rating: 4,
    text: "Good experience but some hidden charges were added.",
    likes: 8,
    dislikes: 1,
  },
  {
    entity: "Riaz Coaching",
    rating: 1,
    text: "Teacher barely attends and assignments are never marked.",
    likes: 22,
    dislikes: 0,
  },
];

export default function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("chat");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your FamilySocial Support Agent. How can I help you today?",
      from: "bot",
      time: now(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [abuseLogs, setAbuseLogs] = useState<string[]>([]);

  // Complaint form
  const [targetType, setTargetType] = useState("Business");
  const [targetName, setTargetName] = useState("");
  const [category, setCategory] = useState("Fraud");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [complaintRef, setComplaintRef] = useState("");

  // Review form
  const [entitySearch, setEntitySearch] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [sampleReviewLikes, setSampleReviewLikes] = useState(
    SAMPLE_REVIEWS.map((r) => ({ likes: r.likes, dislikes: r.dislikes })),
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current && activeTab === "chat") {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  const sendMessage = () => {
    const text = inputText.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      from: "user",
      time: now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    const lower = text.toLowerCase();

    // Abuse detection
    const foundAbuse = ABUSE_WORDS.find((w) => lower.includes(w));
    if (foundAbuse) {
      setAbuseLogs((prev) => [...prev, `${now()}: "${text.slice(0, 50)}..."`]);
      setTimeout(() => {
        const warnMsg: Message = {
          id: Date.now() + 1,
          text: "⚠️ I noticed your message may contain sensitive language. FamilySocial maintains a respectful community. Continued use of such language may result in a temporary account restriction. How can I help you constructively?",
          from: "bot",
          time: now(),
        };
        setMessages((prev) => [...prev, warnMsg]);
      }, 800);
      return;
    }

    // Quick reply detection
    const matched = Object.entries(BOT_RESPONSES).find(([key]) =>
      lower.includes(key),
    );
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: matched
          ? matched[1]
          : "Thank you for reaching out! A support specialist will review your message shortly. You can also use the Complaint tab to file a formal report.",
        from: "bot",
        time: now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleComplaintSubmit = () => {
    if (!targetName.trim() || !description.trim()) return;
    const ref = `CMP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setComplaintRef(ref);
    setSubmitted(true);
  };

  const handleReviewSubmit = () => {
    if (!entitySearch.trim() || starRating === 0 || !reviewText.trim()) return;
    setReviewSubmitted(true);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open support chat"
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110 active:scale-95"
          style={{ background: "oklch(0.65 0.25 335)" }}
        >
          <MessageCircle size={24} style={{ color: "white" }} />
          {abuseLogs.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[9px] text-white font-bold">
              {abuseLogs.length}
            </span>
          )}
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-500" />
        </button>
      )}

      {/* Expanded panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 w-80 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
          style={{
            height: "480px",
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-2.5 shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.65 0.25 335))",
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={16} style={{ color: "white" }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-label font-semibold text-white">
                Support Agent
              </p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-white/80">Online</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close support chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tabs */}
          <div
            className="flex border-b shrink-0"
            style={{ borderColor: "oklch(var(--border))" }}
          >
            {(["chat", "complaint", "review"] as TabType[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[11px] font-label font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "border-b-2 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeTab === tab
                    ? { borderColor: "oklch(0.65 0.25 335)" }
                    : {}
                }
              >
                {tab === "chat"
                  ? "💬 Chat"
                  : tab === "complaint"
                    ? "🚨 Complaint"
                    : "⭐ Review"}
              </button>
            ))}
          </div>

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <>
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-xl text-xs font-label ${
                        msg.from === "user" ? "rounded-br-sm" : "rounded-bl-sm"
                      }`}
                      style={
                        msg.from === "user"
                          ? {
                              background: "oklch(0.65 0.25 335)",
                              color: "white",
                            }
                          : {
                              background: "oklch(var(--secondary))",
                              color: "oklch(var(--foreground))",
                            }
                      }
                    >
                      <p>{msg.text}</p>
                      <p className="text-[9px] mt-0.5 opacity-60">{msg.time}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick replies */}
              <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {[
                  "Report Issue",
                  "Account Help",
                  "Technical Problem",
                  "Feedback",
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      setInputText(chip);
                    }}
                    className="text-[10px] font-label px-2 py-1 rounded-full border transition-colors hover:bg-secondary/60"
                    style={{
                      borderColor: "oklch(var(--border))",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div
                className="px-3 pb-3 flex gap-2 items-center shrink-0 border-t pt-2"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 text-xs px-3 py-2 rounded-lg border outline-none focus:ring-1 bg-secondary/40"
                  style={{ borderColor: "oklch(var(--border))" }}
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "oklch(0.65 0.25 335)" }}
                  aria-label="Send message"
                >
                  <Send size={13} style={{ color: "white" }} />
                </button>
              </div>
            </>
          )}

          {/* Complaint Tab */}
          {activeTab === "complaint" && (
            <div className="flex-1 overflow-y-auto p-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.14 155 / 0.15)" }}
                  >
                    <AlertTriangle
                      size={22}
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    />
                  </div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Complaint Submitted!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Reference number:
                  </p>
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: "oklch(0.55 0.22 280)" }}
                  >
                    {complaintRef}
                  </span>
                  <p className="text-[11px] text-muted-foreground">
                    Our team will review within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setTargetName("");
                      setDescription("");
                    }}
                    className="text-xs text-muted-foreground underline"
                  >
                    File another complaint
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-[11px] text-muted-foreground">
                    File a complaint against a business, product, service,
                    school, job, or company.
                  </p>
                  <div>
                    <label
                      htmlFor="cmp-target-type"
                      className="text-[11px] font-label font-medium text-foreground block mb-1"
                    >
                      Target Type
                    </label>
                    <select
                      id="cmp-target-type"
                      value={targetType}
                      onChange={(e) => setTargetType(e.target.value)}
                      className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none"
                      style={{ borderColor: "oklch(var(--border))" }}
                    >
                      {[
                        "Business",
                        "Product",
                        "Service",
                        "School",
                        "Job",
                        "Company",
                      ].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="cmp-target-name"
                      className="text-[11px] font-label font-medium text-foreground block mb-1"
                    >
                      Target Name
                    </label>
                    <input
                      id="cmp-target-name"
                      type="text"
                      value={targetName}
                      onChange={(e) => setTargetName(e.target.value)}
                      placeholder="e.g. Khan Electronics"
                      className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cmp-category"
                      className="text-[11px] font-label font-medium text-foreground block mb-1"
                    >
                      Category
                    </label>
                    <select
                      id="cmp-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none"
                      style={{ borderColor: "oklch(var(--border))" }}
                    >
                      {[
                        "Fraud",
                        "Quality",
                        "Harassment",
                        "Misinformation",
                        "Other",
                      ].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="cmp-description"
                      className="text-[11px] font-label font-medium text-foreground block mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      id="cmp-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      placeholder="Describe the issue in detail..."
                      className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none resize-none"
                      style={{ borderColor: "oklch(var(--border))" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleComplaintSubmit}
                    disabled={!targetName.trim() || !description.trim()}
                    className="w-full py-2 rounded-lg text-xs font-label font-semibold text-white transition-opacity disabled:opacity-50"
                    style={{ background: "oklch(0.65 0.25 335)" }}
                  >
                    Submit Complaint
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Review Tab */}
          {activeTab === "review" && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {!reviewSubmitted ? (
                <>
                  <p className="text-[11px] text-muted-foreground">
                    Your review is completely anonymous — your name will never
                    be shown.
                  </p>
                  <input
                    type="text"
                    value={entitySearch}
                    onChange={(e) => setEntitySearch(e.target.value)}
                    placeholder="Search entity to review..."
                    className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none"
                    style={{ borderColor: "oklch(var(--border))" }}
                  />
                  <div>
                    <label
                      htmlFor="review-stars"
                      className="text-[11px] font-label font-medium text-foreground block mb-1"
                    >
                      Rating
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStarRating(s)}
                          className="text-xl transition-transform hover:scale-110"
                          style={{
                            color:
                              s <= starRating
                                ? "oklch(0.65 0.14 50)"
                                : "oklch(var(--muted-foreground))",
                          }}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={3}
                    placeholder="Write your anonymous review..."
                    className="w-full text-xs px-2 py-1.5 rounded-lg border bg-secondary/40 outline-none resize-none"
                    style={{ borderColor: "oklch(var(--border))" }}
                  />
                  <button
                    type="button"
                    onClick={handleReviewSubmit}
                    disabled={
                      !entitySearch.trim() ||
                      starRating === 0 ||
                      !reviewText.trim()
                    }
                    className="w-full py-2 rounded-lg text-xs font-label font-semibold text-white transition-opacity disabled:opacity-50"
                    style={{ background: "oklch(0.65 0.25 335)" }}
                  >
                    Submit Anonymously
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm font-label font-semibold text-foreground mb-1">
                    Review Submitted!
                  </p>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    Your anonymous review has been posted.
                  </p>
                  <button
                    type="button"
                    onClick={() => setReviewSubmitted(false)}
                    className="text-xs text-muted-foreground underline"
                  >
                    Write another review
                  </button>
                </div>
              )}

              <div
                className="border-t pt-3"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <p className="text-[11px] font-label font-semibold text-muted-foreground mb-2">
                  Recent anonymous reviews
                </p>
                {SAMPLE_REVIEWS.map((r, i) => {
                  const rv = sampleReviewLikes[i];
                  return (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: static list
                      key={i}
                      className="bg-secondary/30 rounded-lg p-2.5 mb-2"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-label font-semibold text-foreground">
                          {r.entity}
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: "oklch(0.65 0.14 50)" }}
                        >
                          {"★".repeat(r.rating)}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mb-1.5">
                        {r.text}
                      </p>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setSampleReviewLikes((p) =>
                              p.map((x, j) =>
                                j === i ? { ...x, likes: x.likes + 1 } : x,
                              ),
                            )
                          }
                          className="text-[10px] text-muted-foreground hover:text-foreground"
                        >
                          👍 {rv.likes}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSampleReviewLikes((p) =>
                              p.map((x, j) =>
                                j === i
                                  ? { ...x, dislikes: x.dislikes + 1 }
                                  : x,
                              ),
                            )
                          }
                          className="text-[10px] text-muted-foreground hover:text-foreground"
                        >
                          👎 {rv.dislikes}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
