import { r as reactExports, j as jsxRuntimeExports, a0 as BookMarked, I as Input, a as Button, a1 as Send, D as Dialog, E as DialogContent, F as DialogHeader, G as DialogTitle, a2 as DialogDescription, L as Label, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, Q as TreePine, q as Users, x as Briefcase, a3 as ShoppingBag, l as Building2, H as Heart, R as Plane, a4 as GraduationCap, i as SelectItem, J as DialogFooter } from "./index-C1f4DgoI.js";
import { T as Textarea } from "./textarea-BvUTkV1i.js";
import { L as Lock } from "./lock-CJYq-a1b.js";
import { P as PenLine } from "./pen-line-UYmATwcs.js";
import { T as Trash2 } from "./trash-2-D_bzstOU.js";
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
