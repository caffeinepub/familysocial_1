import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Building2,
  Heart,
  Search,
  Sparkles,
  TreePine,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface Suggestion {
  id: number;
  name: string;
  initials: string;
  module: string;
  detail: string;
  mutualCount?: number;
  action: string;
}

const MODULE_COLORS: Record<string, string> = {
  Friends: "oklch(0.55 0.22 280)",
  Family: "oklch(0.60 0.22 310)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Matrimony: "oklch(0.65 0.25 335)",
  Business: "oklch(0.72 0.19 85)",
};

const MODULE_ICONS: Record<string, React.ElementType> = {
  Friends: UserPlus,
  Family: TreePine,
  Community: Users,
  Jobs: Briefcase,
  Matrimony: Heart,
  Business: Building2,
};

const SAMPLE_SUGGESTIONS: Suggestion[] = [
  // Friends
  {
    id: 1,
    name: "Hamza Raza",
    initials: "HR",
    module: "Friends",
    detail: "5 mutual connections",
    mutualCount: 5,
    action: "Connect",
  },
  {
    id: 2,
    name: "Sana Malik",
    initials: "SM",
    module: "Friends",
    detail: "3 mutual connections",
    mutualCount: 3,
    action: "Connect",
  },
  {
    id: 3,
    name: "Bilal Chaudhry",
    initials: "BC",
    module: "Friends",
    detail: "8 mutual connections",
    mutualCount: 8,
    action: "Connect",
  },
  // Family
  {
    id: 4,
    name: "Nadia Hassan",
    initials: "NH",
    module: "Family",
    detail: "Possible cousin — 2 shared relatives",
    mutualCount: 2,
    action: "Add to Family",
  },
  {
    id: 5,
    name: "Tariq Mirza",
    initials: "TM",
    module: "Family",
    detail: "Same family surname — Hassan",
    action: "Add to Family",
  },
  {
    id: 6,
    name: "Rukhsana Qureshi",
    initials: "RQ",
    module: "Family",
    detail: "4 shared family connections",
    mutualCount: 4,
    action: "Add to Family",
  },
  // Community
  {
    id: 7,
    name: "Asif Javed",
    initials: "AJ",
    module: "Community",
    detail: "DHA Phase 5 resident",
    action: "Follow",
  },
  {
    id: 8,
    name: "Sadia Butt",
    initials: "SB",
    module: "Community",
    detail: "Green Valley Society member",
    action: "Follow",
  },
  {
    id: 9,
    name: "Usman Baig",
    initials: "UB",
    module: "Community",
    detail: "Gulberg III community",
    action: "Follow",
  },
  // Jobs
  {
    id: 10,
    name: "Rabia Farooq",
    initials: "RF",
    module: "Jobs",
    detail: "UI/UX Designer at PixelBridge",
    action: "View Profile",
  },
  {
    id: 11,
    name: "Kamran Akhtar",
    initials: "KA",
    module: "Jobs",
    detail: "Senior Engineer at NexaTech Lahore",
    action: "View Profile",
  },
  {
    id: 12,
    name: "Zainab Nawaz",
    initials: "ZN",
    module: "Jobs",
    detail: "Product Manager at StartupPK",
    action: "View Profile",
  },
  // Matrimony
  {
    id: 13,
    name: "Ayesha Siddiqui",
    initials: "AS",
    module: "Matrimony",
    detail: "27 yrs · Lahore · Pharmacist",
    action: "Send Request",
  },
  {
    id: 14,
    name: "Ali Rehman",
    initials: "AR",
    module: "Matrimony",
    detail: "30 yrs · Karachi · Software Engineer",
    action: "Send Request",
  },
  // Business
  {
    id: 15,
    name: "Hassan Enterprises",
    initials: "HE",
    module: "Business",
    detail: "Textile & Garments · Lahore",
    action: "Connect",
  },
  {
    id: 16,
    name: "Fatima Designs",
    initials: "FD",
    module: "Business",
    detail: "Interior Design · Islamabad",
    action: "Connect",
  },
];

const MODULE_ORDER = [
  "Friends",
  "Family",
  "Community",
  "Jobs",
  "Matrimony",
  "Business",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuggestionsPanel({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDialogElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [connected, setConnected] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return SAMPLE_SUGGESTIONS;
    const q = searchQuery.toLowerCase();
    return SAMPLE_SUGGESTIONS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.module.toLowerCase().includes(q) ||
        s.detail.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const grouped = useMemo(() => {
    const map: Record<string, Suggestion[]> = {};
    for (const s of filtered) {
      if (!map[s.module]) map[s.module] = [];
      map[s.module].push(s);
    }
    return map;
  }, [filtered]);

  const handleAction = (id: number) => {
    setConnected((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
        aria-hidden="true"
      />

      {/* Panel */}
      <dialog
        ref={panelRef}
        aria-label="Suggestions"
        open={open}
        className="fixed top-0 right-0 h-full z-50 flex flex-col bg-card border-l border-border shadow-2xl p-0 m-0 max-h-none max-w-none"
        style={{
          width: "min(400px, 100vw)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0"
          style={{ background: "oklch(var(--sidebar))" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.65 0.25 335 / 0.2)" }}
            >
              <Sparkles size={15} style={{ color: "oklch(0.65 0.25 335)" }} />
            </div>
            <div>
              <h2 className="text-sm font-label font-bold text-sidebar-foreground">
                Suggestions
              </h2>
              <p className="text-[10px] text-sidebar-foreground/50">
                People & connections you may know
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={onClose}
            aria-label="Close suggestions"
          >
            <X size={14} />
          </Button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-border shrink-0">
          <div className="relative">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search suggestions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-8 text-xs bg-secondary/60 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Suggestions grouped by module */}
        <div className="flex-1 overflow-y-auto main-scroll">
          {Object.keys(grouped).length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3">
              <UserPlus size={32} className="text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground">
                No suggestions found
              </p>
            </div>
          ) : (
            <div className="py-2">
              {MODULE_ORDER.filter((mod) => grouped[mod]?.length > 0).map(
                (module) => {
                  const ModIcon = MODULE_ICONS[module] ?? UserPlus;
                  const color = MODULE_COLORS[module];
                  const suggestions = grouped[module];
                  return (
                    <div key={module} className="mb-1">
                      {/* Module section header */}
                      <div
                        className="flex items-center gap-2 px-4 py-2 sticky top-0"
                        style={{ background: "oklch(var(--card))" }}
                      >
                        <span
                          className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                          style={{ background: `${color}20`, color }}
                        >
                          <ModIcon size={11} />
                        </span>
                        <span
                          className="text-[11px] font-label font-bold uppercase tracking-wider"
                          style={{ color }}
                        >
                          {module}
                        </span>
                        <span
                          className="text-[10px] font-label px-1.5 py-0.5 rounded-full"
                          style={{ background: `${color}15`, color }}
                        >
                          {suggestions.length}
                        </span>
                      </div>

                      {/* Suggestion items */}
                      {suggestions.map((s) => {
                        const isDone = connected.has(s.id);
                        return (
                          <div
                            key={s.id}
                            className="px-4 py-2.5 flex items-center gap-3 hover:bg-secondary/40 transition-colors"
                          >
                            <Avatar className="h-9 w-9 shrink-0">
                              <AvatarFallback
                                className="text-[11px] font-label font-bold"
                                style={{
                                  background: `${color}22`,
                                  color,
                                }}
                              >
                                {s.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-label font-semibold text-foreground truncate">
                                {s.name}
                              </p>
                              <p className="text-[10px] text-muted-foreground truncate">
                                {s.detail}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 text-[11px] font-label shrink-0 px-2.5"
                              style={
                                isDone
                                  ? {
                                      background: `${color}15`,
                                      color,
                                      borderColor: `${color}30`,
                                    }
                                  : {}
                              }
                              onClick={() => handleAction(s.id)}
                              disabled={isDone}
                            >
                              {isDone ? "✓ Done" : s.action}
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  );
                },
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-5 py-3 shrink-0">
          <Button
            variant="ghost"
            className="w-full h-8 text-xs font-label text-muted-foreground hover:text-foreground"
          >
            Explore all connections
          </Button>
        </div>
      </dialog>
    </>
  );
}
