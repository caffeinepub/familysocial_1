import { r as reactExports, j as jsxRuntimeExports, af as BookMarked, I as Input, B as Button, a7 as Send, w as Dialog, y as DialogContent, z as DialogHeader, A as DialogTitle, aO as DialogDescription, L as Label, l as Select, m as SelectTrigger, n as SelectValue, o as SelectContent, aD as TreePine, U as Users, G as Briefcase, q as ShoppingBag, W as Building2, N as Heart, H as Plane, J as GraduationCap, p as SelectItem, a6 as DialogFooter, O as Sparkles, f as Star } from "./index-CTlHP6rz.js";
import { T as Textarea } from "./textarea-DN_5fxc7.js";
import { L as Lock } from "./lock-V-mFFXXN.js";
import { P as PenLine } from "./pen-line-Dm3-ps45.js";
import { T as Trash2 } from "./trash-2-B3FJtFdn.js";
const MODULES = [
  { value: "Family", label: "Family", icon: TreePine },
  { value: "Community", label: "Community", icon: Users },
  { value: "Jobs", label: "Jobs", icon: Briefcase },
  { value: "Products", label: "Products", icon: ShoppingBag },
  { value: "Real Estate", label: "Real Estate", icon: Building2 },
  { value: "Healthcare", label: "Healthcare", icon: Heart },
  { value: "Travel", label: "Travel", icon: Plane },
  { value: "Education", label: "Education", icon: GraduationCap },
  { value: "Blog", label: "Blog", icon: BookMarked }
];
const MODULE_COLORS = {
  Family: "oklch(0.55 0.22 280)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Products: "oklch(0.65 0.25 335)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Healthcare: "oklch(0.58 0.22 25)",
  Travel: "oklch(0.55 0.18 240)",
  Education: "oklch(0.60 0.22 310)",
  Blog: "oklch(0.60 0.22 310)"
};
const PRIVACY_OPTIONS = [
  { value: "private", label: "🔒 Private", color: "#64748b" },
  { value: "family", label: "👨‍👩‍👧 Family Only", color: "#7c3aed" },
  { value: "community", label: "🏘️ Community Only", color: "#06b6d4" },
  { value: "friends", label: "👥 Friends", color: "#3b82f6" },
  { value: "public", label: "🌍 Public", color: "#22c55e" }
];
const privacyColor = (privacy) => {
  var _a;
  return ((_a = PRIVACY_OPTIONS.find((p) => p.value === privacy)) == null ? void 0 : _a.color) ?? "#64748b";
};
const privacyLabel = (privacy) => {
  var _a;
  return ((_a = PRIVACY_OPTIONS.find((p) => p.value === privacy)) == null ? void 0 : _a.label) ?? privacy;
};
const MOODS = ["😊", "😔", "🎉", "💭", "❤️", "🔥"];
const INITIAL_DRAFTS = [
  {
    id: 1,
    title: "Thoughts on the family reunion",
    content: "This year's Eid gathering at Abbottabad was truly special. Three generations under one roof, sharing stories that span decades. I want to write about this properly — the way Dadi's eyes lit up when she talked about partition-era memories, and how the youngest ones listened so intently. This deserves to be in the family feed once I've written it properly.",
    createdAt: "2026-02-28",
    updatedAt: "2026-02-28",
    mood: "❤️",
    isPublished: false
  },
  {
    id: 2,
    title: "Career shift ideas",
    content: "Thinking about moving from corporate finance into tech startup world. The market is shifting and I've been approached twice this month. Pros: better equity, exciting work, flexibility. Cons: less stability, longer hours in early stage. Need to weigh this carefully. Maybe post to Jobs section for community perspective.",
    createdAt: "2026-02-26",
    updatedAt: "2026-02-27",
    mood: "💭",
    isPublished: false
  },
  {
    id: 3,
    title: "DHA community garden proposal",
    content: "I've been thinking about proposing a community vegetable garden in the unused corner of DHA Phase 5 near gate 3. Residents could adopt plots, grow their own produce, and share harvests. This would also reduce food miles and bring the community together. Need to draft a proper proposal for the community committee before sharing.",
    createdAt: "2026-02-24",
    updatedAt: "2026-02-24",
    mood: "🎉",
    isPublished: false
  }
];
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
  "Pisces"
];
const HOROSCOPE_DATA = {
  Aries: {
    text: "Fiery energy propels you forward today. A leadership opportunity arrives unexpectedly — seize it with confidence. Your instincts are razor-sharp.",
    planet: "Mars ♂",
    color: "Coral Red",
    colorHex: "#FF6B6B",
    number: 7,
    time: "10:00 AM – 12:00 PM",
    advice: "Channel your passion into a new project. Avoid reactive decisions — pause and reflect before acting."
  },
  Taurus: {
    text: "Financial clarity arrives today. A long-pending deal shows movement. Your patience and steady nature are your greatest strengths right now.",
    planet: "Venus ♀",
    color: "Forest Green",
    colorHex: "#52B788",
    number: 2,
    time: "2:00 PM – 4:00 PM",
    advice: "Ground yourself with nature or music. Avoid overindulgence — moderation brings rewards."
  },
  Gemini: {
    text: "Communication flows effortlessly. Multiple conversations open new doors. A sibling or close friend brings unexpected good news today.",
    planet: "Mercury ☿",
    color: "Sunny Yellow",
    colorHex: "#FFD166",
    number: 5,
    time: "9:00 AM – 11:00 AM",
    advice: "Write down your ideas before they vanish. Avoid spreading yourself too thin."
  },
  Cancer: {
    text: "Home and heart take center stage. Property or family matters resolve favorably. Emotional bonds deepen, bringing warmth and security.",
    planet: "Moon 🌙",
    color: "Pearl White",
    colorHex: "#E8E8E8",
    number: 4,
    time: "6:00 PM – 8:00 PM",
    advice: "Trust your intuition above all else. Share your feelings openly with loved ones."
  },
  Leo: {
    text: "Your charisma is magnetic today. Creative projects flourish under your attention. Romance and recognition are highlighted — shine boldly.",
    planet: "Sun ☀️",
    color: "Royal Gold",
    colorHex: "#FFB703",
    number: 1,
    time: "12:00 PM – 2:00 PM",
    advice: "Lead with generosity today. Let others share the spotlight — collective wins last longer."
  },
  Virgo: {
    text: "Detail-oriented work yields significant rewards. Health routines need review. Your analytical mind solves a problem others have overlooked.",
    planet: "Mercury ☿",
    color: "Earth Brown",
    colorHex: "#BC6C25",
    number: 6,
    time: "7:00 AM – 9:00 AM",
    advice: "Perfection is the enemy of progress. Accept good enough, then improve incrementally."
  },
  Libra: {
    text: "Partnerships flourish beautifully today. Legal and contractual matters see favorable movement. Your diplomatic nature smooths over tensions.",
    planet: "Venus ♀",
    color: "Blush Pink",
    colorHex: "#FFAFCC",
    number: 3,
    time: "3:00 PM – 5:00 PM",
    advice: "Make decisions rather than weighing indefinitely. Balance requires action, not just thought."
  },
  Scorpio: {
    text: "Transformative energy runs deep today. Hidden truths surface, bringing clarity. Financial investigations and research yield powerful results.",
    planet: "Pluto/Mars",
    color: "Deep Crimson",
    colorHex: "#9B1D20",
    number: 9,
    time: "11:00 PM – 1:00 AM",
    advice: "Trust the transformation. Release what no longer serves you to make room for power."
  },
  Sagittarius: {
    text: "Expansion and adventure call to you. Higher knowledge and travel plans come into focus. Your optimism is contagious and opens unexpected doors.",
    planet: "Jupiter ♃",
    color: "Indigo Blue",
    colorHex: "#3A0CA3",
    number: 8,
    time: "4:00 PM – 6:00 PM",
    advice: "Aim higher than you think is possible. Your arrows always fly farther than you expect."
  },
  Capricorn: {
    text: "Career advancement comes through diligent, steady effort. Authority figures are supportive today. Long-term plans crystallize into action.",
    planet: "Saturn ♄",
    color: "Obsidian Black",
    colorHex: "#2D2D2D",
    number: 10,
    time: "8:00 AM – 10:00 AM",
    advice: "Every step forward counts, no matter how small. Consistency is your superpower."
  },
  Aquarius: {
    text: "Innovation and humanitarian ideals inspire you. Technology ventures and group projects are highly favored. Think outside conventional boundaries.",
    planet: "Uranus/Saturn",
    color: "Electric Blue",
    colorHex: "#4CC9F0",
    number: 11,
    time: "1:00 PM – 3:00 PM",
    advice: "Your unique perspective is a gift. Don't dim your vision to fit conventional expectations."
  },
  Pisces: {
    text: "Spiritual insights and creative inspiration flow freely. Dreams carry important messages. Your compassion and empathy open unexpected doors.",
    planet: "Neptune/Jupiter",
    color: "Sea Green",
    colorHex: "#06D6A0",
    number: 12,
    time: "5:00 PM – 7:00 PM",
    advice: "Meditate before big decisions. Your inner voice carries more wisdom than logic alone."
  }
};
function HoroscopeWidget() {
  const [selectedSign, setSelectedSign] = reactExports.useState(
    () => localStorage.getItem("ic_user_zodiac") || "Scorpio"
  );
  const horoscope = HOROSCOPE_DATA[selectedSign];
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const handleSignChange = (sign) => {
    setSelectedSign(sign);
    localStorage.setItem("ic_user_zodiac", sign);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-5 mb-8 animate-fade-up",
      style: {
        background: "linear-gradient(135deg, oklch(0.25 0.10 280), oklch(0.20 0.12 310))",
        border: "1px solid oklch(0.55 0.22 280 / 0.3)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-xl flex items-center justify-center",
                style: { background: "oklch(0.55 0.22 280 / 0.25)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, style: { color: "oklch(0.85 0.15 280)" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-bold text-white", children: "🔮 Today's Horoscope" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50", children: today })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedSign, onValueChange: handleSignChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-7 w-32 text-xs border-white/20 bg-white/10 text-white",
                "data-ocid": "horoscope.sign.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ZODIAC_SIGNS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-sm", children: s }, s)) })
          ] })
        ] }),
        horoscope && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90 leading-relaxed mb-4", children: horoscope.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-3 text-center",
                style: { background: "oklch(1 0 0 / 0.07)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50 mb-1", children: "Planet of Day" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white", children: horoscope.planet })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-3 text-center",
                style: { background: "oklch(1 0 0 / 0.07)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50 mb-1", children: "Lucky Color" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded-full border border-white/20",
                        style: { background: horoscope.colorHex }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white", children: horoscope.color })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-3 text-center",
                style: { background: "oklch(1 0 0 / 0.07)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50 mb-1", children: "Lucky Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xl font-display font-bold",
                      style: { color: "oklch(0.85 0.20 85)" },
                      children: horoscope.number
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-3 text-center",
                style: { background: "oklch(1 0 0 / 0.07)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50 mb-1", children: "Fav. Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-white leading-tight", children: horoscope.time })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-3 flex items-start gap-2",
              style: { background: "oklch(0.55 0.22 280 / 0.2)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 14,
                    style: { color: "oklch(0.85 0.20 85)", marginTop: 2 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white/80 leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-white/90", children: [
                    "Astro Advice:",
                    " "
                  ] }),
                  horoscope.advice
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-3", children: ZODIAC_SIGNS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleSignChange(s),
              className: "text-[10px] px-2 py-0.5 rounded-full border transition-all font-label",
              style: {
                borderColor: selectedSign === s ? "oklch(0.85 0.15 280)" : "oklch(1 0 0 / 0.15)",
                background: selectedSign === s ? "oklch(0.55 0.22 280 / 0.35)" : "transparent",
                color: selectedSign === s ? "white" : "oklch(1 0 0 / 0.5)"
              },
              children: s
            },
            s
          )) })
        ] })
      ]
    }
  );
}
function PersonalFeedPage() {
  const [drafts, setDrafts] = reactExports.useState(INITIAL_DRAFTS);
  const [title, setTitle] = reactExports.useState("");
  const [content, setContent] = reactExports.useState("");
  const [mood, setMood] = reactExports.useState();
  const [editingId, setEditingId] = reactExports.useState(null);
  const [publishDialogOpen, setPublishDialogOpen] = reactExports.useState(false);
  const [publishDraftId, setPublishDraftId] = reactExports.useState(null);
  const [publishModule, setPublishModule] = reactExports.useState("Family");
  const [publishPrivacy, setPublishPrivacy] = reactExports.useState("friends");
  const handleSave = () => {
    if (!content.trim()) return;
    const now = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (editingId !== null) {
      setDrafts(
        (prev) => prev.map(
          (d) => d.id === editingId ? {
            ...d,
            title: title || "Untitled",
            content,
            mood,
            updatedAt: now
          } : d
        )
      );
      setEditingId(null);
    } else {
      const newDraft = {
        id: Date.now(),
        title: title || "Untitled",
        content,
        createdAt: now,
        updatedAt: now,
        mood,
        isPublished: false
      };
      setDrafts((prev) => [newDraft, ...prev]);
    }
    setTitle("");
    setContent("");
    setMood(void 0);
  };
  const handleEdit = (draft) => {
    setEditingId(draft.id);
    setTitle(draft.title);
    setContent(draft.content);
    setMood(draft.mood);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDelete = (id) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
      setMood(void 0);
    }
  };
  const openPublishDialog = (id) => {
    setPublishDraftId(id);
    setPublishDialogOpen(true);
  };
  const handlePublish = () => {
    if (publishDraftId === null) return;
    setDrafts(
      (prev) => prev.map(
        (d) => d.id === publishDraftId ? {
          ...d,
          isPublished: true,
          publishedTo: publishModule,
          privacy: publishPrivacy
        } : d
      )
    );
    setPublishDialogOpen(false);
    setPublishDraftId(null);
  };
  const unpublishedDrafts = drafts.filter((d) => !d.isPublished);
  const publishedDrafts = drafts.filter((d) => d.isPublished);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-9 h-9 rounded-xl flex items-center justify-center",
          style: { background: "oklch(0.55 0.22 280 / 0.15)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 17, style: { color: "oklch(0.55 0.22 280)" } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Personal Feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Write privately. Publish when ready." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HoroscopeWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl shadow-card mb-8 animate-fade-up animate-fade-up-1",
        style: editingId !== null ? { boxShadow: "0 0 0 2px oklch(0.55 0.22 280 / 0.3)" } : {},
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { size: 15, style: { color: "oklch(0.55 0.22 280)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold text-muted-foreground", children: editingId !== null ? "Editing draft" : "New private entry" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Give this entry a title...",
                value: title,
                onChange: (e) => setTitle(e.target.value),
                className: "mb-3 border-0 border-b rounded-none px-0 text-base font-display font-semibold bg-transparent focus-visible:ring-0 focus-visible:border-b-primary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Write your thoughts privately here. Only you can see this until you choose to publish.",
                value: content,
                onChange: (e) => setContent(e.target.value),
                className: "resize-none border-0 focus-visible:ring-0 px-0 text-sm bg-transparent min-h-[100px]",
                rows: 4
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-t border-border flex items-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: MOODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMood(mood === m ? void 0 : m),
                className: "w-8 h-8 rounded-lg flex items-center justify-center text-base transition-all hover:scale-110",
                style: mood === m ? {
                  background: "oklch(0.55 0.22 280 / 0.15)",
                  boxShadow: "0 0 0 2px oklch(0.55 0.22 280 / 0.3)"
                } : {},
                title: `Mood: ${m}`,
                children: m
              },
              m
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
              editingId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "h-8 text-xs font-label text-muted-foreground",
                  onClick: () => {
                    setEditingId(null);
                    setTitle("");
                    setContent("");
                    setMood(void 0);
                  },
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-8 px-4 font-label gap-1.5",
                  disabled: !content.trim(),
                  onClick: handleSave,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { size: 13 }),
                    editingId !== null ? "Update Draft" : "Save Draft"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    unpublishedDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-label font-bold text-foreground", children: "Private Drafts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.55 0.22 280 / 0.12)",
              color: "oklch(0.55 0.22 280)"
            },
            children: unpublishedDrafts.length
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: unpublishedDrafts.map((draft, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DraftCard,
        {
          draft,
          index: i,
          onEdit: () => handleEdit(draft),
          onDelete: () => handleDelete(draft.id),
          onPublish: () => openPublishDialog(draft.id)
        },
        draft.id
      )) })
    ] }),
    publishedDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-label font-bold text-foreground", children: "Published Posts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.62 0.20 150 / 0.12)",
              color: "oklch(0.62 0.20 150)"
            },
            children: publishedDrafts.length
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: publishedDrafts.map((draft, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        PublishedCard,
        {
          draft,
          index: i,
          onDelete: () => handleDelete(draft.id)
        },
        draft.id
      )) })
    ] }),
    drafts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BookMarked,
        {
          size: 40,
          className: "text-muted-foreground/30 mx-auto mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-muted-foreground", children: "Your personal feed is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground/60 mt-1", children: "Write your first private entry above" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: publishDialogOpen, onOpenChange: setPublishDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Publish to Feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Choose where to publish this draft and who can see it." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold", children: "Post to module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: publishModule, onValueChange: setPublishModule, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: MODULES.map((mod) => {
              const ModIcon = mod.icon;
              const color = MODULE_COLORS[mod.value];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectItem,
                {
                  value: mod.value,
                  className: "text-sm font-label",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-5 h-5 rounded flex items-center justify-center shrink-0",
                        style: {
                          background: `${color}20`,
                          color
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModIcon, { size: 11 })
                      }
                    ),
                    mod.label
                  ] })
                },
                mod.value
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold", children: "Who can see this?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1.5", children: PRIVACY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setPublishPrivacy(opt.value),
              className: "flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm font-label transition-all text-left",
              style: publishPrivacy === opt.value ? {
                borderColor: `${opt.color}50`,
                background: `${opt.color}10`,
                color: opt.color
              } : {
                borderColor: "oklch(var(--border))",
                color: "oklch(var(--foreground))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: opt.label.split(" ")[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.label.slice(opt.label.indexOf(" ") + 1) }),
                publishPrivacy === opt.value && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto", children: "✓" })
              ]
            },
            opt.value
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            onClick: () => setPublishDialogOpen(false),
            className: "font-label",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handlePublish, className: "font-label gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 13 }),
          "Publish to Feed"
        ] })
      ] })
    ] }) })
  ] });
}
function DraftCard({
  draft,
  index,
  onEdit,
  onDelete,
  onPublish
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-shadow animate-fade-up",
      style: { animationDelay: `${index * 0.05}s` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              draft.mood && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0", children: draft.mood }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-sm text-foreground truncate", children: draft.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1 shrink-0 text-[10px] font-label px-2 py-0.5 rounded-full",
                style: {
                  background: "oklch(0.55 0.22 280 / 0.1)",
                  color: "oklch(0.55 0.22 280)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 9 }),
                  "Private"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3", children: draft.content }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground/50 mt-2 font-label", children: [
            "Saved ",
            draft.updatedAt
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-t border-border flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 gap-1.5 text-xs font-label text-muted-foreground",
              onClick: onEdit,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 12 }),
                "Edit"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 gap-1.5 text-xs font-label text-destructive hover:text-destructive",
              onClick: onDelete,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                "Delete"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "ml-auto h-7 px-3 gap-1.5 text-xs font-label",
              onClick: onPublish,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 12 }),
                "Publish"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function PublishedCard({
  draft,
  index,
  onDelete
}) {
  const moduleColor = MODULE_COLORS[draft.publishedTo ?? ""] ?? "oklch(0.55 0.22 280)";
  const pColor = privacyColor(draft.privacy ?? "public");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl shadow-card animate-fade-up opacity-80",
      style: { animationDelay: `${index * 0.05}s` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              draft.mood && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0", children: draft.mood }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-sm text-foreground truncate", children: draft.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 flex-wrap justify-end", children: [
              draft.publishedTo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label font-bold px-1.5 py-0.5 rounded",
                  style: {
                    background: `${moduleColor}15`,
                    color: moduleColor
                  },
                  children: draft.publishedTo
                }
              ),
              draft.privacy && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label px-1.5 py-0.5 rounded",
                  style: {
                    background: `${pColor}15`,
                    color: pColor
                  },
                  children: privacyLabel(draft.privacy).replace(/^.+ /, "")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-2", children: draft.content }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground/50 mt-2 font-label", children: [
            "Published ",
            draft.updatedAt
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-t border-border flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-[10px] font-label",
              style: { color: "oklch(0.62 0.20 150)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 9 }),
                "Published"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "ml-auto h-7 gap-1.5 text-xs font-label text-destructive hover:text-destructive",
              onClick: onDelete,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                "Remove"
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  PersonalFeedPage as default
};
