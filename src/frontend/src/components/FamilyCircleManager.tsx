import type { FamilyMember } from "@/backend.d";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Crown, Plus, Shield, Trash2, Users, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FamilyCircle {
  id: string;
  name: string;
  description: string;
  adminIds: string[];
  memberIds: string[];
  coAdminIds: string[];
  createdAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCircleKey(principalId: string) {
  return `familysocial_circle_${principalId}`;
}

export function loadCircle(principalId: string): FamilyCircle | null {
  try {
    const raw = localStorage.getItem(getCircleKey(principalId));
    return raw ? (JSON.parse(raw) as FamilyCircle) : null;
  } catch {
    return null;
  }
}

function saveCircle(principalId: string, circle: FamilyCircle) {
  try {
    localStorage.setItem(getCircleKey(principalId), JSON.stringify(circle));
  } catch {
    // localStorage may be unavailable
  }
}

// ─── FamilyCircleBanner ───────────────────────────────────────────────────────

interface FamilyCircleBannerProps {
  circle: FamilyCircle | null;
  members: FamilyMember[];
  isAdmin: boolean;
  onManage: () => void;
}

export function FamilyCircleBanner({
  circle,
  members,
  isAdmin,
  onManage,
}: FamilyCircleBannerProps) {
  const circleMembers = members.filter((m) =>
    circle?.memberIds.includes(m.id.toString()),
  );
  const visibleMembers = circleMembers.slice(0, 5);
  const extraCount = Math.max(0, circleMembers.length - 5);

  if (!circle) {
    return (
      <div className="mb-6 rounded-2xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-primary/3 to-accent/5 p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <UsersRound size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-label font-semibold text-foreground text-sm">
              Create Your Family Circle
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Bring your family together in a private, named group
            </p>
          </div>
        </div>
        {isAdmin && (
          <Button
            size="sm"
            onClick={onManage}
            className="gap-2 shrink-0 font-label"
          >
            <Plus size={14} />
            Create Circle
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/8 via-primary/4 to-accent/8 p-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <UsersRound size={20} className="text-primary" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-display font-bold text-foreground truncate">
                {circle.name}
              </p>
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 font-label border-primary/30 text-primary bg-primary/8 shrink-0"
              >
                Family Circle
              </Badge>
            </div>
            {circle.description && (
              <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">
                {circle.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Avatar row */}
          <div className="flex items-center">
            {visibleMembers.map((m, i) => (
              <Avatar
                key={m.id.toString()}
                className="w-7 h-7 border-2 border-background ring-1 ring-primary/20"
                style={{ marginLeft: i > 0 ? "-10px" : undefined }}
              >
                <AvatarFallback className="text-[10px] font-bold bg-primary/10 text-primary">
                  {m.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}
            {extraCount > 0 && (
              <div
                className="w-7 h-7 rounded-full border-2 border-background ring-1 ring-primary/20 bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground"
                style={{ marginLeft: "-10px" }}
              >
                +{extraCount}
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground font-label">
            <span className="font-semibold text-foreground">
              {circleMembers.length}
            </span>{" "}
            member{circleMembers.length !== 1 ? "s" : ""}
          </div>

          {isAdmin && (
            <Button
              size="sm"
              variant="outline"
              onClick={onManage}
              className="gap-2 font-label shrink-0 border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <Users size={13} />
              Manage Circle
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FamilyCircleManagerSheet ─────────────────────────────────────────────────

interface FamilyCircleManagerSheetProps {
  open: boolean;
  onClose: () => void;
  circle: FamilyCircle | null;
  members: FamilyMember[];
  principalId: string;
  onCircleChange: (circle: FamilyCircle | null) => void;
}

export function FamilyCircleManagerSheet({
  open,
  onClose,
  circle,
  members,
  principalId,
  onCircleChange,
}: FamilyCircleManagerSheetProps) {
  const [name, setName] = useState(circle?.name ?? "");
  const [description, setDescription] = useState(circle?.description ?? "");
  const [selectedMemberIds, setSelectedMemberIds] = useState<Set<string>>(
    () => new Set(circle?.memberIds ?? []),
  );
  const [coAdminIds, setCoAdminIds] = useState<Set<string>>(
    () => new Set(circle?.coAdminIds ?? []),
  );

  // Sync form when circle changes
  useEffect(() => {
    setName(circle?.name ?? "");
    setDescription(circle?.description ?? "");
    setSelectedMemberIds(new Set(circle?.memberIds ?? []));
    setCoAdminIds(new Set(circle?.coAdminIds ?? []));
  }, [circle]);

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Circle name is required");
      return;
    }
    const updated: FamilyCircle = {
      id: circle?.id ?? `circle_${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      adminIds: [principalId],
      memberIds: Array.from(selectedMemberIds),
      coAdminIds: Array.from(coAdminIds),
      createdAt: circle?.createdAt ?? new Date().toISOString(),
    };
    saveCircle(principalId, updated);
    onCircleChange(updated);
    toast.success(circle ? "Family circle updated" : "Family circle created!");
    onClose();
  };

  const handleDelete = () => {
    if (!confirm("Delete this family circle? This cannot be undone.")) return;
    try {
      localStorage.removeItem(getCircleKey(principalId));
    } catch {
      // ignore
    }
    onCircleChange(null);
    toast.success("Family circle deleted");
    onClose();
  };

  const toggleMember = (id: string) => {
    setSelectedMemberIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        // remove from co-admin if removed from circle
        setCoAdminIds((ca) => {
          const nca = new Set(ca);
          nca.delete(id);
          return nca;
        });
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleCoAdmin = (id: string) => {
    setCoAdminIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const removeMember = (id: string) => {
    setSelectedMemberIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setCoAdminIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const circleMembers = members.filter((m) =>
    selectedMemberIds.has(m.id.toString()),
  );
  const nonCircleMembers = members.filter(
    (m) => !selectedMemberIds.has(m.id.toString()),
  );

  // Live preview
  const previewName = name.trim() || "Your Family Circle";

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg flex flex-col p-0 gap-0 overflow-hidden"
      >
        {/* Sticky header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <SheetTitle className="font-display text-lg flex items-center gap-2">
            <UsersRound size={20} className="text-primary" />
            {circle ? "Manage Family Circle" : "Create Family Circle"}
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            {circle
              ? "Edit circle settings, manage members and roles"
              : "Create a named group for your family members"}
          </p>
        </SheetHeader>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Live preview */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-[10px] font-label font-semibold uppercase tracking-wider text-primary mb-2">
              Preview
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <UsersRound size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-foreground">
                  {previewName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {circleMembers.length} member
                  {circleMembers.length !== 1 ? "s" : ""} · You are the Admin
                </p>
              </div>
            </div>
          </div>

          {/* Circle info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>
                Circle Name <span className="text-destructive">*</span>
              </Label>
              <Input
                placeholder="e.g. The Khan Family"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Description (optional)</Label>
              <Textarea
                placeholder="A brief description of your family circle..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Current members */}
          {circleMembers.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-label font-semibold text-foreground">
                  Circle Members ({circleMembers.length})
                </p>
              </div>
              <div className="space-y-2">
                {circleMembers.map((m) => {
                  const mid = m.id.toString();
                  const isCoAdmin = coAdminIds.has(mid);
                  return (
                    <div
                      key={mid}
                      className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-3 py-2.5"
                    >
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">
                          {m.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-medium text-sm text-foreground truncate">
                          {m.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {isCoAdmin ? (
                            <Badge className="text-[10px] px-1.5 py-0 gap-1 bg-amber-500/15 text-amber-600 border-amber-500/30 font-label">
                              <Crown size={8} />
                              Co-Admin
                            </Badge>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="text-[10px] px-1.5 py-0 font-label"
                            >
                              Member
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => toggleCoAdmin(mid)}
                          title={
                            isCoAdmin ? "Remove Co-Admin" : "Make Co-Admin"
                          }
                          className={`w-7 h-7 rounded-md border flex items-center justify-center transition-colors
                            ${
                              isCoAdmin
                                ? "bg-amber-500/15 border-amber-500/30 text-amber-600 hover:bg-amber-500/25"
                                : "border-border bg-background text-muted-foreground hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-500/30"
                            }`}
                        >
                          <Crown size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeMember(mid)}
                          title="Remove from circle"
                          className="w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add members */}
          {nonCircleMembers.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-label font-semibold text-foreground">
                Add Members
              </p>
              <div className="space-y-2">
                {nonCircleMembers.map((m) => {
                  const mid = m.id.toString();
                  return (
                    <button
                      key={mid}
                      type="button"
                      className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5 cursor-pointer hover:bg-secondary/30 transition-colors w-full text-left"
                      onClick={() => toggleMember(mid)}
                    >
                      <Checkbox
                        checked={selectedMemberIds.has(mid)}
                        onCheckedChange={() => toggleMember(mid)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarFallback className="text-xs font-bold bg-muted text-muted-foreground">
                          {m.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-medium text-sm text-foreground truncate">
                          {m.name}
                        </p>
                        {m.occupation && (
                          <p className="text-xs text-muted-foreground truncate">
                            {m.occupation}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {members.length === 0 && (
            <div className="rounded-xl border border-dashed border-border p-6 text-center">
              <Shield
                size={24}
                className="text-muted-foreground mx-auto mb-2"
              />
              <p className="text-sm text-muted-foreground">
                Add family members to your tree first, then add them to your
                circle.
              </p>
            </div>
          )}
        </div>

        {/* Sticky footer */}
        <div className="px-6 py-4 border-t border-border shrink-0 flex gap-2">
          {circle && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 size={14} />
              Delete
            </Button>
          )}
          <div className="flex-1" />
          <SheetClose asChild>
            <Button variant="outline" size="sm" className="font-label">
              Cancel
            </Button>
          </SheetClose>
          <Button size="sm" onClick={handleSave} className="gap-2 font-label">
            <UsersRound size={14} />
            {circle ? "Save Changes" : "Create Circle"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
