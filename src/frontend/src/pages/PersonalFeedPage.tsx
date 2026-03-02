import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BookMarked,
  Briefcase,
  Building2,
  Edit3,
  GraduationCap,
  Heart,
  Lock,
  Plane,
  Send,
  ShoppingBag,
  Trash2,
  TreePine,
  Users,
} from "lucide-react";
import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Draft {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  mood?: string;
  isPublished: boolean;
  publishedTo?: string;
  privacy?: string;
}

// ── Module config ─────────────────────────────────────────────────────────────

const MODULES = [
  { value: "Family", label: "Family", icon: TreePine },
  { value: "Community", label: "Community", icon: Users },
  { value: "Jobs", label: "Jobs", icon: Briefcase },
  { value: "Products", label: "Products", icon: ShoppingBag },
  { value: "Real Estate", label: "Real Estate", icon: Building2 },
  { value: "Healthcare", label: "Healthcare", icon: Heart },
  { value: "Travel", label: "Travel", icon: Plane },
  { value: "Education", label: "Education", icon: GraduationCap },
  { value: "Blog", label: "Blog", icon: BookMarked },
];

const MODULE_COLORS: Record<string, string> = {
  Family: "oklch(0.55 0.22 280)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Products: "oklch(0.65 0.25 335)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Healthcare: "oklch(0.58 0.22 25)",
  Travel: "oklch(0.55 0.18 240)",
  Education: "oklch(0.60 0.22 310)",
  Blog: "oklch(0.60 0.22 310)",
};

// ── Privacy config ────────────────────────────────────────────────────────────

const PRIVACY_OPTIONS = [
  { value: "private", label: "🔒 Private", color: "#64748b" },
  { value: "family", label: "👨‍👩‍👧 Family Only", color: "#7c3aed" },
  { value: "community", label: "🏘️ Community Only", color: "#06b6d4" },
  { value: "friends", label: "👥 Friends", color: "#3b82f6" },
  { value: "public", label: "🌍 Public", color: "#22c55e" },
];

const privacyColor = (privacy: string) => {
  return PRIVACY_OPTIONS.find((p) => p.value === privacy)?.color ?? "#64748b";
};

const privacyLabel = (privacy: string) => {
  return PRIVACY_OPTIONS.find((p) => p.value === privacy)?.label ?? privacy;
};

// ── Moods ─────────────────────────────────────────────────────────────────────

const MOODS = ["😊", "😔", "🎉", "💭", "❤️", "🔥"];

// ── Sample drafts ─────────────────────────────────────────────────────────────

const INITIAL_DRAFTS: Draft[] = [
  {
    id: 1,
    title: "Thoughts on the family reunion",
    content:
      "This year's Eid gathering at Abbottabad was truly special. Three generations under one roof, sharing stories that span decades. I want to write about this properly — the way Dadi's eyes lit up when she talked about partition-era memories, and how the youngest ones listened so intently. This deserves to be in the family feed once I've written it properly.",
    createdAt: "2026-02-28",
    updatedAt: "2026-02-28",
    mood: "❤️",
    isPublished: false,
  },
  {
    id: 2,
    title: "Career shift ideas",
    content:
      "Thinking about moving from corporate finance into tech startup world. The market is shifting and I've been approached twice this month. Pros: better equity, exciting work, flexibility. Cons: less stability, longer hours in early stage. Need to weigh this carefully. Maybe post to Jobs section for community perspective.",
    createdAt: "2026-02-26",
    updatedAt: "2026-02-27",
    mood: "💭",
    isPublished: false,
  },
  {
    id: 3,
    title: "DHA community garden proposal",
    content:
      "I've been thinking about proposing a community vegetable garden in the unused corner of DHA Phase 5 near gate 3. Residents could adopt plots, grow their own produce, and share harvests. This would also reduce food miles and bring the community together. Need to draft a proper proposal for the community committee before sharing.",
    createdAt: "2026-02-24",
    updatedAt: "2026-02-24",
    mood: "🎉",
    isPublished: false,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function PersonalFeedPage() {
  const [drafts, setDrafts] = useState<Draft[]>(INITIAL_DRAFTS);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState<string | undefined>();
  const [editingId, setEditingId] = useState<number | null>(null);

  // Publish dialog state
  const [publishDialogOpen, setPublishDialogOpen] = useState(false);
  const [publishDraftId, setPublishDraftId] = useState<number | null>(null);
  const [publishModule, setPublishModule] = useState("Family");
  const [publishPrivacy, setPublishPrivacy] = useState("friends");

  const handleSave = () => {
    if (!content.trim()) return;
    const now = new Date().toISOString().slice(0, 10);

    if (editingId !== null) {
      setDrafts((prev) =>
        prev.map((d) =>
          d.id === editingId
            ? {
                ...d,
                title: title || "Untitled",
                content,
                mood,
                updatedAt: now,
              }
            : d,
        ),
      );
      setEditingId(null);
    } else {
      const newDraft: Draft = {
        id: Date.now(),
        title: title || "Untitled",
        content,
        createdAt: now,
        updatedAt: now,
        mood,
        isPublished: false,
      };
      setDrafts((prev) => [newDraft, ...prev]);
    }

    setTitle("");
    setContent("");
    setMood(undefined);
  };

  const handleEdit = (draft: Draft) => {
    setEditingId(draft.id);
    setTitle(draft.title);
    setContent(draft.content);
    setMood(draft.mood);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
      setMood(undefined);
    }
  };

  const openPublishDialog = (id: number) => {
    setPublishDraftId(id);
    setPublishDialogOpen(true);
  };

  const handlePublish = () => {
    if (publishDraftId === null) return;
    setDrafts((prev) =>
      prev.map((d) =>
        d.id === publishDraftId
          ? {
              ...d,
              isPublished: true,
              publishedTo: publishModule,
              privacy: publishPrivacy,
            }
          : d,
      ),
    );
    setPublishDialogOpen(false);
    setPublishDraftId(null);
  };

  const unpublishedDrafts = drafts.filter((d) => !d.isPublished);
  const publishedDrafts = drafts.filter((d) => d.isPublished);

  return (
    <div className="p-6 lg:p-8 max-w-2xl mx-auto">
      {/* Page header */}
      <div className="mb-6 animate-fade-up">
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
          >
            <Lock size={17} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              My Personal Feed
            </h1>
            <p className="text-xs text-muted-foreground">
              Write privately. Publish when ready.
            </p>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div
        className="bg-card border border-border rounded-xl shadow-card mb-8 animate-fade-up animate-fade-up-1"
        style={
          editingId !== null
            ? { boxShadow: "0 0 0 2px oklch(0.55 0.22 280 / 0.3)" }
            : {}
        }
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookMarked size={15} style={{ color: "oklch(0.55 0.22 280)" }} />
            <span className="text-xs font-label font-semibold text-muted-foreground">
              {editingId !== null ? "Editing draft" : "New private entry"}
            </span>
          </div>

          {/* Title */}
          <Input
            placeholder="Give this entry a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 border-0 border-b rounded-none px-0 text-base font-display font-semibold bg-transparent focus-visible:ring-0 focus-visible:border-b-primary"
          />

          {/* Content */}
          <Textarea
            placeholder="Write your thoughts privately here. Only you can see this until you choose to publish."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="resize-none border-0 focus-visible:ring-0 px-0 text-sm bg-transparent min-h-[100px]"
            rows={4}
          />
        </div>

        {/* Composer footer */}
        <div className="px-4 py-3 border-t border-border flex items-center gap-3 flex-wrap">
          {/* Mood selector */}
          <div className="flex items-center gap-1">
            {MOODS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMood(mood === m ? undefined : m)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base transition-all hover:scale-110"
                style={
                  mood === m
                    ? {
                        background: "oklch(0.55 0.22 280 / 0.15)",
                        boxShadow: "0 0 0 2px oklch(0.55 0.22 280 / 0.3)",
                      }
                    : {}
                }
                title={`Mood: ${m}`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            {editingId !== null && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-label text-muted-foreground"
                onClick={() => {
                  setEditingId(null);
                  setTitle("");
                  setContent("");
                  setMood(undefined);
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              size="sm"
              className="h-8 px-4 font-label gap-1.5"
              disabled={!content.trim()}
              onClick={handleSave}
            >
              <BookMarked size={13} />
              {editingId !== null ? "Update Draft" : "Save Draft"}
            </Button>
          </div>
        </div>
      </div>

      {/* Draft entries */}
      {unpublishedDrafts.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lock size={14} className="text-muted-foreground" />
            <h2 className="text-sm font-label font-bold text-foreground">
              Private Drafts
            </h2>
            <span
              className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.55 0.22 280 / 0.12)",
                color: "oklch(0.55 0.22 280)",
              }}
            >
              {unpublishedDrafts.length}
            </span>
          </div>

          <div className="space-y-3">
            {unpublishedDrafts.map((draft, i) => (
              <DraftCard
                key={draft.id}
                draft={draft}
                index={i}
                onEdit={() => handleEdit(draft)}
                onDelete={() => handleDelete(draft.id)}
                onPublish={() => openPublishDialog(draft.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Published entries */}
      {publishedDrafts.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Send size={14} className="text-muted-foreground" />
            <h2 className="text-sm font-label font-bold text-foreground">
              Published Posts
            </h2>
            <span
              className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.62 0.20 150 / 0.12)",
                color: "oklch(0.62 0.20 150)",
              }}
            >
              {publishedDrafts.length}
            </span>
          </div>

          <div className="space-y-3">
            {publishedDrafts.map((draft, i) => (
              <PublishedCard
                key={draft.id}
                draft={draft}
                index={i}
                onDelete={() => handleDelete(draft.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {drafts.length === 0 && (
        <div className="text-center py-16">
          <BookMarked
            size={40}
            className="text-muted-foreground/30 mx-auto mb-3"
          />
          <p className="font-label font-semibold text-muted-foreground">
            Your personal feed is empty
          </p>
          <p className="text-sm text-muted-foreground/60 mt-1">
            Write your first private entry above
          </p>
        </div>
      )}

      {/* Publish Dialog */}
      <Dialog open={publishDialogOpen} onOpenChange={setPublishDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Publish to Feed</DialogTitle>
            <DialogDescription>
              Choose where to publish this draft and who can see it.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Module selector */}
            <div className="space-y-2">
              <Label className="text-xs font-label font-semibold">
                Post to module
              </Label>
              <Select value={publishModule} onValueChange={setPublishModule}>
                <SelectTrigger className="h-9 text-sm font-label">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MODULES.map((mod) => {
                    const ModIcon = mod.icon;
                    const color = MODULE_COLORS[mod.value];
                    return (
                      <SelectItem
                        key={mod.value}
                        value={mod.value}
                        className="text-sm font-label"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                            style={{
                              background: `${color}20`,
                              color,
                            }}
                          >
                            <ModIcon size={11} />
                          </span>
                          {mod.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Privacy selector */}
            <div className="space-y-2">
              <Label className="text-xs font-label font-semibold">
                Who can see this?
              </Label>
              <div className="grid grid-cols-1 gap-1.5">
                {PRIVACY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPublishPrivacy(opt.value)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm font-label transition-all text-left"
                    style={
                      publishPrivacy === opt.value
                        ? {
                            borderColor: `${opt.color}50`,
                            background: `${opt.color}10`,
                            color: opt.color,
                          }
                        : {
                            borderColor: "oklch(var(--border))",
                            color: "oklch(var(--foreground))",
                          }
                    }
                  >
                    <span className="text-base">{opt.label.split(" ")[0]}</span>
                    <span>{opt.label.slice(opt.label.indexOf(" ") + 1)}</span>
                    {publishPrivacy === opt.value && (
                      <span className="ml-auto">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setPublishDialogOpen(false)}
              className="font-label"
            >
              Cancel
            </Button>
            <Button onClick={handlePublish} className="font-label gap-1.5">
              <Send size={13} />
              Publish to Feed
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Draft card ─────────────────────────────────────────────────────────────────

function DraftCard({
  draft,
  index,
  onEdit,
  onDelete,
  onPublish,
}: {
  draft: Draft;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
  onPublish: () => void;
}) {
  return (
    <div
      className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-shadow animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {draft.mood && (
              <span className="text-lg shrink-0">{draft.mood}</span>
            )}
            <h3 className="font-label font-semibold text-sm text-foreground truncate">
              {draft.title}
            </h3>
          </div>
          <div
            className="flex items-center gap-1 shrink-0 text-[10px] font-label px-2 py-0.5 rounded-full"
            style={{
              background: "oklch(0.55 0.22 280 / 0.1)",
              color: "oklch(0.55 0.22 280)",
            }}
          >
            <Lock size={9} />
            Private
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {draft.content}
        </p>

        <p className="text-[10px] text-muted-foreground/50 mt-2 font-label">
          Saved {draft.updatedAt}
        </p>
      </div>

      <div className="px-4 py-2.5 border-t border-border flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 text-xs font-label text-muted-foreground"
          onClick={onEdit}
        >
          <Edit3 size={12} />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 text-xs font-label text-destructive hover:text-destructive"
          onClick={onDelete}
        >
          <Trash2 size={12} />
          Delete
        </Button>
        <Button
          size="sm"
          className="ml-auto h-7 px-3 gap-1.5 text-xs font-label"
          onClick={onPublish}
        >
          <Send size={12} />
          Publish
        </Button>
      </div>
    </div>
  );
}

// ── Published card ─────────────────────────────────────────────────────────────

function PublishedCard({
  draft,
  index,
  onDelete,
}: {
  draft: Draft;
  index: number;
  onDelete: () => void;
}) {
  const moduleColor =
    MODULE_COLORS[draft.publishedTo ?? ""] ?? "oklch(0.55 0.22 280)";
  const pColor = privacyColor(draft.privacy ?? "public");

  return (
    <div
      className="bg-card border border-border rounded-xl shadow-card animate-fade-up opacity-80"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {draft.mood && (
              <span className="text-lg shrink-0">{draft.mood}</span>
            )}
            <h3 className="font-label font-semibold text-sm text-foreground truncate">
              {draft.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
            {draft.publishedTo && (
              <span
                className="text-[10px] font-label font-bold px-1.5 py-0.5 rounded"
                style={{
                  background: `${moduleColor}15`,
                  color: moduleColor,
                }}
              >
                {draft.publishedTo}
              </span>
            )}
            {draft.privacy && (
              <span
                className="text-[10px] font-label px-1.5 py-0.5 rounded"
                style={{
                  background: `${pColor}15`,
                  color: pColor,
                }}
              >
                {privacyLabel(draft.privacy).replace(/^.+ /, "")}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {draft.content}
        </p>

        <p className="text-[10px] text-muted-foreground/50 mt-2 font-label">
          Published {draft.updatedAt}
        </p>
      </div>

      <div className="px-4 py-2 border-t border-border flex items-center">
        <div
          className="flex items-center gap-1.5 text-[10px] font-label"
          style={{ color: "oklch(0.62 0.20 150)" }}
        >
          <Send size={9} />
          Published
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto h-7 gap-1.5 text-xs font-label text-destructive hover:text-destructive"
          onClick={onDelete}
        >
          <Trash2 size={12} />
          Remove
        </Button>
      </div>
    </div>
  );
}
