import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Copy,
  Droplets,
  Eye,
  EyeOff,
  Globe,
  Heart,
  Link,
  Loader2,
  Lock,
  Pencil,
  Phone,
  Plus,
  Share2,
  Shield,
  Trash2,
  TreePine,
  UserCircle2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { FamilyMember, Relationship, UserProfile } from "../backend.d";
import EventsTab from "../components/EventsTab";
import { ExtendedProfileSheet } from "../components/ExtendedProfileSheet";
import type { Business } from "../components/ExtendedProfileSheet.types";
import {
  FamilyCircleBanner,
  FamilyCircleManagerSheet,
  loadCircle,
} from "../components/FamilyCircleManager";
import type { FamilyCircle } from "../components/FamilyCircleManager";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useAddFamilyMember,
  useGetFamilyTree,
  useSaveUserProfile,
} from "../hooks/useQueries";
import {
  getFamilyTreeBusinesses,
  saveFamilyTreeBusiness,
} from "../utils/familyTreeState";

// ─── Constants ────────────────────────────────────────────────────────────────

const BLOOD_TYPES = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
  "Unknown",
];

const RELATIONSHIP_LABELS: Record<string, string> = {
  parent: "Parent",
  child: "Child",
  sibling: "Sibling",
  spouse: "Spouse",
  other: "Other",
};

const RELATIONSHIP_COLORS: Record<string, string> = {
  parent: "oklch(0.52 0.14 155)",
  child: "oklch(0.65 0.14 50)",
  sibling: "oklch(0.48 0.12 260)",
  spouse: "oklch(0.72 0.17 85)",
  other: "oklch(0.58 0.16 350)",
};

const BUSINESS_TYPES = [
  "Retail",
  "Restaurant",
  "Services",
  "Technology",
  "Healthcare",
  "Education",
  "Real Estate",
  "Transport",
  "Manufacturing",
  "Other",
] as const;

type BusinessType = (typeof BUSINESS_TYPES)[number];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getRelationshipKind(rel: Relationship): string {
  return rel.__kind__;
}

function getRelationshipLabel(rel: Relationship): string {
  const kind = rel.__kind__;
  if (kind === "other")
    return (rel as { __kind__: "other"; other: string }).other || "Other";
  return RELATIONSHIP_LABELS[kind] || kind;
}

// ─── MemberCard ───────────────────────────────────────────────────────────────

interface MemberCardProps {
  member: FamilyMember;
  isCenter?: boolean;
  isAdmin?: boolean;
  isOwn?: boolean;
  onEdit?: (member: FamilyMember) => void;
  onClick?: (member: FamilyMember) => void;
  lifestyleActive?: { matrimony: boolean; dating: boolean };
}

function MemberCard({
  member,
  isCenter = false,
  isAdmin = false,
  isOwn = false,
  onEdit,
  onClick,
  lifestyleActive,
}: MemberCardProps) {
  const relKind = getRelationshipKind(member.relationship);
  const relColor = RELATIONSHIP_COLORS[relKind] || RELATIONSHIP_COLORS.other;
  const canEdit = isAdmin || isOwn || isCenter;

  return (
    <button
      type="button"
      className={`
        family-tree-node rounded-xl border bg-card shadow-card hover:shadow-card-hover cursor-pointer
        transition-all duration-200 group relative text-left
        ${isCenter ? "border-primary/40 ring-2 ring-primary/20" : "border-border"}
      `}
      style={{ minWidth: "160px", maxWidth: "200px" }}
      onClick={() => onClick?.(member)}
    >
      {/* Color indicator top */}
      {!isCenter && (
        <div
          className="h-1 w-full rounded-t-xl"
          style={{ background: relColor }}
        />
      )}
      {isCenter && (
        <div
          className="h-1 w-full rounded-t-xl"
          style={{ background: "oklch(var(--primary))" }}
        />
      )}

      {/* Edit button (hover reveal) */}
      {canEdit && onEdit && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(member);
          }}
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity
            w-6 h-6 rounded-md bg-background/90 border border-border shadow-sm
            flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary"
          aria-label="Edit member"
        >
          <Pencil size={11} />
        </button>
      )}

      <div className="p-3">
        {/* Avatar & name */}
        <div className="flex items-start gap-2 mb-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-label font-bold shrink-0"
            style={
              isCenter
                ? {
                    background: "oklch(var(--primary) / 0.15)",
                    color: "oklch(var(--primary))",
                  }
                : { background: `${relColor}22`, color: relColor }
            }
          >
            {member.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-label font-semibold text-sm text-foreground truncate pr-5">
              {member.name}
            </p>
            {!isCenter && (
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 mt-0.5 font-label border-0"
                style={{ background: `${relColor}18`, color: relColor }}
              >
                {getRelationshipLabel(member.relationship)}
              </Badge>
            )}
            {isCenter && (
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 mt-0.5 font-label border-0 bg-primary/10 text-primary"
              >
                You
              </Badge>
            )}
          </div>
        </div>

        {/* Lifestyle badges */}
        {isCenter && lifestyleActive && (
          <div className="flex flex-wrap gap-1 mb-2">
            {lifestyleActive.matrimony && (
              <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-label font-semibold bg-pink-500/15 text-pink-500">
                <Heart size={8} />
                Matrimony Active
              </span>
            )}
            {lifestyleActive.dating && (
              <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-label font-semibold bg-purple-500/15 text-purple-500">
                <Users size={8} />
                Dating Active
              </span>
            )}
          </div>
        )}

        {/* Details */}
        <div className="space-y-1">
          {member.bloodType && member.bloodType !== "Unknown" && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Droplets
                size={11}
                className="shrink-0"
                style={{ color: "oklch(0.55 0.22 25)" }}
              />
              <span className="font-label">{member.bloodType}</span>
            </div>
          )}
          {member.occupation && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Briefcase size={11} className="shrink-0" />
              <span className="truncate">{member.occupation}</span>
            </div>
          )}
          {(member.isPublic || isCenter) &&
            member.medicalConditions?.length > 0 && (
              <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <AlertCircle
                  size={11}
                  className="shrink-0 mt-0.5"
                  style={{ color: "oklch(0.65 0.14 50)" }}
                />
                <span className="truncate">
                  {member.medicalConditions.slice(0, 2).join(", ")}
                </span>
              </div>
            )}
        </div>

        {/* Privacy indicator */}
        <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
          {member.isPublic ? <Eye size={10} /> : <EyeOff size={10} />}
          <span>{member.isPublic ? "Public" : "Private"}</span>
        </div>
      </div>
    </button>
  );
}

// ─── GroupedMembers ───────────────────────────────────────────────────────────

function GroupedMembers({
  members,
  isAdmin,
  onEdit,
  onCardClick,
}: {
  members: FamilyMember[];
  relType: string;
  isAdmin?: boolean;
  onEdit?: (member: FamilyMember) => void;
  onCardClick?: (member: FamilyMember) => void;
}) {
  if (members.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {members.map((m) => (
        <MemberCard
          key={m.id.toString()}
          member={m}
          isAdmin={isAdmin}
          onEdit={onEdit}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

// ─── Form type helpers ────────────────────────────────────────────────────────

interface MemberForm {
  name: string;
  relationship: string;
  otherRelationship: string;
  bloodType: string;
  occupation: string;
  medicalConditions: string;
  isPublic: boolean;
  bizCategory?: string;
  bizMode?: "none" | "add" | "link";
  bizName?: string;
  bizLocation?: string;
  bizPhone?: string;
  bizLinkId?: string;
}

interface ProfileForm {
  name: string;
  occupation: string;
  bloodType: string;
  dateOfBirth: string;
  bio: string;
  isPrivate: boolean;
}

const DEFAULT_MEMBER_FORM: MemberForm = {
  name: "",
  relationship: "parent",
  otherRelationship: "",
  bloodType: "Unknown",
  occupation: "",
  medicalConditions: "",
  isPublic: false,
  bizCategory: "",
  bizMode: "none",
  bizName: "",
  bizLocation: "",
  bizPhone: "",
  bizLinkId: "",
};

// ─── EditMemberDialog ─────────────────────────────────────────────────────────

interface EditMemberDialogProps {
  member: FamilyMember | null;
  open: boolean;
  onClose: () => void;
  onSave: (updated: FamilyMember) => Promise<void>;
  isSaving: boolean;
}

function EditMemberDialog({
  member,
  open,
  onClose,
  onSave,
  isSaving,
}: EditMemberDialogProps) {
  const [form, setForm] = useState<MemberForm>(DEFAULT_MEMBER_FORM);

  useEffect(() => {
    if (!member) return;
    const relKind = getRelationshipKind(member.relationship);
    setForm({
      name: member.name,
      relationship: relKind,
      otherRelationship:
        relKind === "other"
          ? (member.relationship as { __kind__: "other"; other: string })
              .other || ""
          : "",
      bloodType: member.bloodType || "Unknown",
      occupation: member.occupation || "",
      medicalConditions: (member.medicalConditions || []).join(", "),
      isPublic: member.isPublic,
    });
  }, [member]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!member || !form.name.trim()) {
      toast.error("Please enter a name");
      return;
    }

    let relationship: Relationship;
    switch (form.relationship) {
      case "parent":
        relationship = { __kind__: "parent", parent: null };
        break;
      case "child":
        relationship = { __kind__: "child", child: null };
        break;
      case "sibling":
        relationship = { __kind__: "sibling", sibling: null };
        break;
      case "spouse":
        relationship = { __kind__: "spouse", spouse: null };
        break;
      default:
        relationship = {
          __kind__: "other",
          other: form.otherRelationship || "Other",
        };
    }

    const medConditions = form.medicalConditions
      ? form.medicalConditions
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    await onSave({
      id: member.id,
      name: form.name.trim(),
      relationship,
      bloodType: form.bloodType,
      occupation: form.occupation.trim(),
      medicalConditions: medConditions,
      isPublic: form.isPublic,
    });
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Edit Family Member</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label>
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Relationship</Label>
              <Select
                value={form.relationship}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, relationship: v }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Blood Type</Label>
              <Select
                value={form.bloodType}
                onValueChange={(v) => setForm((p) => ({ ...p, bloodType: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BLOOD_TYPES.map((bt) => (
                    <SelectItem key={bt} value={bt}>
                      {bt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {form.relationship === "other" && (
            <div className="space-y-2">
              <Label>Specify Relationship</Label>
              <Input
                placeholder="e.g. Uncle, Aunt, Cousin"
                value={form.otherRelationship}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    otherRelationship: e.target.value,
                  }))
                }
              />
            </div>
          )}

          <div className="space-y-2">
            <Label>Occupation</Label>
            <Input
              placeholder="e.g. Teacher, Engineer, Student"
              value={form.occupation}
              onChange={(e) =>
                setForm((p) => ({ ...p, occupation: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Medical Conditions</Label>
            <Input
              placeholder="Comma-separated, e.g. Diabetes, Hypertension"
              value={form.medicalConditions}
              onChange={(e) =>
                setForm((p) => ({ ...p, medicalConditions: e.target.value }))
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
            <div>
              <p className="text-sm font-semibold">Make Public</p>
              <p className="text-xs text-muted-foreground">
                Show this member to community members
              </p>
            </div>
            <Switch
              checked={form.isPublic}
              onCheckedChange={(v) => setForm((p) => ({ ...p, isPublic: v }))}
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── EditProfileDialog ────────────────────────────────────────────────────────

interface EditProfileDialogProps {
  userProfile: UserProfile | null | undefined;
  open: boolean;
  onClose: () => void;
}

function EditProfileDialog({
  userProfile,
  open,
  onClose,
}: EditProfileDialogProps) {
  const saveProfile = useSaveUserProfile();
  const [form, setForm] = useState<ProfileForm>({
    name: "",
    occupation: "",
    bloodType: "Unknown",
    dateOfBirth: "",
    bio: "",
    isPrivate: true,
  });

  useEffect(() => {
    if (!userProfile) return;
    setForm({
      name: userProfile.name || "",
      occupation: userProfile.occupation || "",
      bloodType: userProfile.bloodType || "Unknown",
      dateOfBirth: userProfile.dateOfBirth || "",
      bio: userProfile.bio || "",
      isPrivate: userProfile.isPrivate ?? true,
    });
  }, [userProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveProfile.mutateAsync({
        name: form.name.trim(),
        occupation: form.occupation.trim(),
        bloodType: form.bloodType,
        dateOfBirth: form.dateOfBirth,
        bio: form.bio.trim(),
        isPrivate: form.isPrivate,
        photoUrl: userProfile?.photoUrl || "",
      });
      toast.success("Profile updated successfully");
      onClose();
    } catch {
      toast.error("Failed to update profile");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Edit Your Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label>
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Blood Type</Label>
              <Select
                value={form.bloodType}
                onValueChange={(v) => setForm((p) => ({ ...p, bloodType: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BLOOD_TYPES.map((bt) => (
                    <SelectItem key={bt} value={bt}>
                      {bt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Input
                type="date"
                value={form.dateOfBirth}
                onChange={(e) =>
                  setForm((p) => ({ ...p, dateOfBirth: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Occupation</Label>
            <Input
              placeholder="e.g. Teacher, Engineer, Student"
              value={form.occupation}
              onChange={(e) =>
                setForm((p) => ({ ...p, occupation: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
              placeholder="Tell your family about yourself..."
              value={form.bio}
              onChange={(e) => setForm((p) => ({ ...p, bio: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
            <div>
              <p className="text-sm font-semibold">Private Profile</p>
              <p className="text-xs text-muted-foreground">
                Only family members can see your details
              </p>
            </div>
            <Switch
              checked={form.isPrivate}
              onCheckedChange={(v) => setForm((p) => ({ ...p, isPrivate: v }))}
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={saveProfile.isPending}
            >
              {saveProfile.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Profile"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── BusinessDialog ───────────────────────────────────────────────────────────

interface BusinessDialogProps {
  business: Business | null;
  open: boolean;
  onClose: () => void;
  onSave: (b: Business) => void;
}

const DEFAULT_BUSINESS: Omit<Business, "id"> = {
  name: "",
  type: "Services",
  category: "",
  location: "",
  description: "",
  website: "",
  phone: "",
};

function BusinessDialog({
  business,
  open,
  onClose,
  onSave,
}: BusinessDialogProps) {
  const [form, setForm] = useState<Omit<Business, "id">>(DEFAULT_BUSINESS);

  useEffect(() => {
    if (business) {
      setForm({
        name: business.name,
        type: business.type,
        category: business.category,
        location: business.location,
        description: business.description,
        website: business.website,
        phone: business.phone,
      });
    } else {
      setForm(DEFAULT_BUSINESS);
    }
  }, [business]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Business name is required");
      return;
    }
    onSave({
      id: business?.id || `biz_${Date.now()}`,
      ...form,
      name: form.name.trim(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">
            {business ? "Edit Business" : "Add Business"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label>
              Business Name <span className="text-destructive">*</span>
            </Label>
            <Input
              placeholder="e.g. Ahmed Traders"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Business Type</Label>
              <Select
                value={form.type}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, type: v as BusinessType }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BUSINESS_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                placeholder="e.g. Grocery, IT Services"
                value={form.category}
                onChange={(e) =>
                  setForm((p) => ({ ...p, category: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              placeholder="e.g. Lahore, Punjab"
              value={form.location}
              onChange={(e) =>
                setForm((p) => ({ ...p, location: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Brief description of your business..."
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Website URL</Label>
              <Input
                placeholder="https://example.com"
                value={form.website}
                onChange={(e) =>
                  setForm((p) => ({ ...p, website: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                placeholder="+92 300 1234567"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              {business ? "Save Changes" : "Add Business"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── BusinessCard ─────────────────────────────────────────────────────────────

function BusinessCard({
  business,
  onEdit,
  onDelete,
}: {
  business: Business;
  onEdit: (b: Business) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3 hover:shadow-card-hover transition-shadow group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Building2 size={18} className="text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-label font-semibold text-sm text-foreground truncate">
              {business.name}
            </p>
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 py-0 mt-0.5 font-label"
            >
              {business.type}
            </Badge>
          </div>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button
            type="button"
            onClick={() => onEdit(business)}
            className="w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            aria-label="Edit business"
          >
            <Pencil size={12} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm(`Delete "${business.name}"?`)) {
                onDelete(business.id);
              }
            }}
            className="w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
            aria-label="Delete business"
          >
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      {business.category && (
        <p className="text-xs text-muted-foreground font-label">
          {business.category}
        </p>
      )}

      {business.location && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Globe size={11} className="shrink-0" />
          <span className="truncate">{business.location}</span>
        </div>
      )}

      {business.description && (
        <p className="text-xs text-muted-foreground line-clamp-2">
          {business.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {business.website && (
          <a
            href={
              business.website.startsWith("http")
                ? business.website
                : `https://${business.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <Globe size={10} />
            Website
          </a>
        )}
        {business.phone && (
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <Phone size={10} />
            {business.phone}
          </a>
        )}
      </div>

      {/* Linked to family tree label */}
      <div className="flex items-center gap-1.5 pt-2 border-t border-border/60">
        <Link size={10} className="text-muted-foreground shrink-0" />
        <span className="text-[10px] text-muted-foreground font-label">
          Linked to Family Tree
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

// ─── FamilyTree Share & Privacy ─────────────────────────────────────────────

type FTPrivacyLevel = "Public" | "Restricted" | "Private";

const FT_PRIVACY_KEY = "ic_familytree_privacy";

function FamilyTreePrivacyBadge() {
  const [privacy] = useState<FTPrivacyLevel>(
    () => (localStorage.getItem(FT_PRIVACY_KEY) as FTPrivacyLevel) || "Private",
  );
  const colors: Record<FTPrivacyLevel, string> = {
    Public: "bg-green-500/15 text-green-600 border-green-500/30",
    Restricted: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Private: "bg-muted text-muted-foreground border-border",
  };
  return (
    <Badge className={`text-[10px] font-label gap-1 ${colors[privacy]}`}>
      <Lock size={9} />
      {privacy}
    </Badge>
  );
}

function FamilyTreeShareButton() {
  const [privacy, setPrivacy] = useState<FTPrivacyLevel>(
    () => (localStorage.getItem(FT_PRIVACY_KEY) as FTPrivacyLevel) || "Private",
  );
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const url = `${typeof window !== "undefined" ? window.location.origin : ""}?page=family-tree`;

  const handlePrivacyChange = (val: FTPrivacyLevel) => {
    setPrivacy(val);
    localStorage.setItem(FT_PRIVACY_KEY, val);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 font-label"
          data-ocid="familytree.share.button"
        >
          <Share2 size={14} />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4 space-y-4"
        align="end"
        data-ocid="familytree.share.popover"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">
            Share Family Tree
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Share this link to let others view your Family Tree
          </p>
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Page URL</Label>
          <div className="flex gap-2">
            <Input value={url} readOnly className="text-xs h-8 flex-1" />
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-2"
              onClick={copyLink}
            >
              {copied ? (
                <CheckCircle2 size={13} className="text-green-500" />
              ) : (
                <Copy size={13} />
              )}
            </Button>
          </div>
          {copied && <p className="text-xs text-green-600">Copied!</p>}
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Visibility</Label>
          <RadioGroup
            value={privacy}
            onValueChange={(v) => handlePrivacyChange(v as FTPrivacyLevel)}
            className="space-y-1"
          >
            {(["Public", "Restricted", "Private"] as FTPrivacyLevel[]).map(
              (opt) => (
                <div key={opt} className="flex items-center gap-2">
                  <RadioGroupItem value={opt} id={`ft-privacy-${opt}`} />
                  <Label
                    htmlFor={`ft-privacy-${opt}`}
                    className="text-xs cursor-pointer"
                  >
                    {opt === "Public"
                      ? "🌍 Public — anyone with the link can view"
                      : opt === "Restricted"
                        ? "🔒 Restricted — only family circle members"
                        : "🔐 Private — only you"}
                  </Label>
                </div>
              ),
            )}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface Props {
  userProfile: UserProfile | null | undefined;
  onNavigate?: (page: string) => void;
}

export default function FamilyTreePage({ userProfile, onNavigate }: Props) {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const principalId = identity?.getPrincipal().toString() ?? "anonymous";

  const { data: members, isLoading } = useGetFamilyTree();
  const addMember = useAddFamilyMember();

  // Admin check
  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => (actor ? actor.isCallerAdmin() : false),
    enabled: !!actor && !actorFetching,
  });

  // ── Add member dialog state ──
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<MemberForm>(DEFAULT_MEMBER_FORM);

  // ── Edit member dialog state ──
  const [editMember, setEditMember] = useState<FamilyMember | null>(null);
  const [editMemberOpen, setEditMemberOpen] = useState(false);
  const [isSavingMember, setIsSavingMember] = useState(false);

  // ── Edit profile dialog state ──
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  // ── Family Circle state ──
  const [circle, setCircle] = useState<FamilyCircle | null>(() =>
    loadCircle(principalId),
  );
  const [circleManagerOpen, setCircleManagerOpen] = useState(false);

  // ── Extended Profile Sheet state ──
  const [extProfileMember, setExtProfileMember] = useState<FamilyMember | null>(
    null,
  );
  const [extProfileOpen, setExtProfileOpen] = useState(false);

  // ── Lifestyle toggles (localStorage) ──
  const lifestyleKey = `familysocial_lifestyle_${principalId}`;
  const [matrimonyEnabled, setMatrimonyEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem(lifestyleKey);
      return stored ? (JSON.parse(stored).matrimony ?? false) : false;
    } catch {
      return false;
    }
  });
  const [datingEnabled, setDatingEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem(lifestyleKey);
      return stored ? (JSON.parse(stored).dating ?? false) : false;
    } catch {
      return false;
    }
  });

  // Persist lifestyle toggles
  useEffect(() => {
    try {
      localStorage.setItem(
        lifestyleKey,
        JSON.stringify({ matrimony: matrimonyEnabled, dating: datingEnabled }),
      );
    } catch {
      // localStorage may be unavailable
    }
  }, [matrimonyEnabled, datingEnabled, lifestyleKey]);

  // ── Businesses (localStorage) ──
  const businessesKey = `familysocial_businesses_${principalId}`;
  const [businesses, setBusinesses] = useState<Business[]>(() => {
    try {
      const stored = localStorage.getItem(businessesKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [businessDialogOpen, setBusinessDialogOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);

  // Persist businesses
  useEffect(() => {
    try {
      localStorage.setItem(businessesKey, JSON.stringify(businesses));
    } catch {
      // localStorage may be unavailable
    }
  }, [businesses, businessesKey]);

  // ── Derived tree data ──
  const parents =
    members?.filter((m) => getRelationshipKind(m.relationship) === "parent") ??
    [];
  const siblings =
    members?.filter((m) => getRelationshipKind(m.relationship) === "sibling") ??
    [];
  const spouses =
    members?.filter((m) => getRelationshipKind(m.relationship) === "spouse") ??
    [];
  const children =
    members?.filter((m) => getRelationshipKind(m.relationship) === "child") ??
    [];
  const others =
    members?.filter(
      (m) =>
        !["parent", "sibling", "spouse", "child"].includes(
          getRelationshipKind(m.relationship),
        ),
    ) ?? [];

  const isMarried = spouses.length > 0;

  const selfMember: FamilyMember = {
    id: BigInt(0),
    name: userProfile?.name || "You",
    relationship: { __kind__: "other", other: "self" } as Relationship,
    bloodType: userProfile?.bloodType || "Unknown",
    occupation: userProfile?.occupation || "",
    medicalConditions: [],
    isPublic: !(userProfile?.isPrivate ?? true),
  };

  // ── Handlers ──

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter a name");
      return;
    }

    let relationship: Relationship;
    switch (form.relationship) {
      case "parent":
        relationship = { __kind__: "parent", parent: null };
        break;
      case "child":
        relationship = { __kind__: "child", child: null };
        break;
      case "sibling":
        relationship = { __kind__: "sibling", sibling: null };
        break;
      case "spouse":
        relationship = { __kind__: "spouse", spouse: null };
        break;
      default:
        relationship = {
          __kind__: "other",
          other: form.otherRelationship || "Other",
        };
        break;
    }

    const medConditions = form.medicalConditions
      ? form.medicalConditions
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    const nextId = BigInt(Date.now());

    try {
      await addMember.mutateAsync({
        id: nextId,
        name: form.name.trim(),
        relationship,
        bloodType: form.bloodType,
        occupation: form.occupation.trim(),
        medicalConditions: medConditions,
        isPublic: form.isPublic,
      });
      toast.success(`${form.name} added to your family tree`);
      // Save business if user chose to add one
      if (form.bizMode === "add" && form.bizCategory && form.bizName?.trim()) {
        saveFamilyTreeBusiness({
          id: `biz-${Date.now()}`,
          name: form.bizName.trim(),
          category: form.bizCategory,
          ownerName: form.name.trim(),
          phone: form.bizPhone?.trim() ?? "",
          location: form.bizLocation?.trim() ?? "",
        });
      } else if (form.bizMode === "link" && form.bizLinkId) {
        // link is already saved, nothing extra needed
      }
      setOpen(false);
      setForm(DEFAULT_MEMBER_FORM);
    } catch {
      toast.error("Failed to add family member");
    }
  };

  const handleEditMember = (member: FamilyMember) => {
    setEditMember(member);
    setEditMemberOpen(true);
  };

  const handleSaveEditedMember = async (updated: FamilyMember) => {
    setIsSavingMember(true);
    try {
      await addMember.mutateAsync(updated);
      toast.success(`${updated.name} updated`);
      setEditMemberOpen(false);
      setEditMember(null);
    } catch {
      toast.error("Failed to update family member");
    } finally {
      setIsSavingMember(false);
    }
  };

  const handleSaveBusiness = (b: Business) => {
    setBusinesses((prev) => {
      const idx = prev.findIndex((x) => x.id === b.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = b;
        return next;
      }
      return [...prev, b];
    });
    // Sync to shared cross-module state
    saveFamilyTreeBusiness({
      id: b.id,
      name: b.name,
      category: b.category,
      type: b.type,
      ownerName: identity?.getPrincipal().toString() ?? "anonymous",
      phone: b.phone,
      location: b.location,
    });
    toast.success(
      editingBusiness
        ? `${b.name} updated`
        : `${b.name} added to your family tree`,
    );
    setEditingBusiness(null);
  };

  const handleDeleteBusiness = (id: string) => {
    setBusinesses((prev) => prev.filter((b) => b.id !== id));
    toast.success("Business removed");
  };

  // ── Self-node edit handler (opens profile edit) ──
  const handleEditSelf = () => {
    setEditProfileOpen(true);
  };

  // ── Open extended profile sheet ──
  const handleOpenExtProfile = (member: FamilyMember) => {
    setExtProfileMember(member);
    setExtProfileOpen(true);
  };

  const handleOpenSelfExtProfile = () => {
    setExtProfileMember(selfMember);
    setExtProfileOpen(true);
  };

  return (
    <TooltipProvider>
      <div className="p-6 lg:p-8 max-w-5xl mx-auto">
        {/* Family Circle Banner */}
        <FamilyCircleBanner
          circle={circle}
          members={members ?? []}
          isAdmin={!!isAdmin}
          onManage={() => setCircleManagerOpen(true)}
          onCircleUpdate={(updates) => {
            if (circle) {
              const updated = { ...circle, ...updates };
              setCircle(updated);
              // Persist to localStorage
              try {
                localStorage.setItem(
                  `familysocial_circle_${principalId}`,
                  JSON.stringify(updated),
                );
              } catch {
                // ignore
              }
            }
          }}
        />

        {/* Family Circle Manager Sheet */}
        <FamilyCircleManagerSheet
          open={circleManagerOpen}
          onClose={() => setCircleManagerOpen(false)}
          circle={circle}
          members={members ?? []}
          principalId={principalId}
          onCircleChange={setCircle}
        />

        {/* Extended Profile Sheet */}
        <ExtendedProfileSheet
          open={extProfileOpen}
          onClose={() => {
            setExtProfileOpen(false);
            setExtProfileMember(null);
          }}
          member={extProfileMember}
          isOwner={
            extProfileMember?.id === BigInt(0) ||
            extProfileMember?.id.toString() === principalId
          }
          isAdmin={!!isAdmin}
          principalId={principalId}
        />

        {/* Page header */}
        <div className="flex items-center justify-between mb-8 animate-fade-up">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-display font-bold text-foreground">
                Family Tree
              </h1>
              {isAdmin && (
                <Badge className="gap-1 bg-amber-500/15 text-amber-600 border-amber-500/30 hover:bg-amber-500/20 font-label text-xs">
                  <Shield size={11} />
                  Admin
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground mt-1">
              {members?.length
                ? `${members.length} family member${members.length === 1 ? "" : "s"} connected`
                : "Start building your family tree"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FamilyTreePrivacyBadge />
            <FamilyTreeShareButton />
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 font-label">
                  <Plus size={16} />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Add Family Member
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddSubmit} className="space-y-4 mt-2">
                  <div className="space-y-2">
                    <Label>
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Relationship</Label>
                      <Select
                        value={form.relationship}
                        onValueChange={(v) =>
                          setForm((p) => ({ ...p, relationship: v }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="child">Child</SelectItem>
                          <SelectItem value="sibling">Sibling</SelectItem>
                          <SelectItem value="spouse">Spouse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Blood Type</Label>
                      <Select
                        value={form.bloodType}
                        onValueChange={(v) =>
                          setForm((p) => ({ ...p, bloodType: v }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {BLOOD_TYPES.map((bt) => (
                            <SelectItem key={bt} value={bt}>
                              {bt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {form.relationship === "other" && (
                    <div className="space-y-2">
                      <Label>Specify Relationship</Label>
                      <Input
                        placeholder="e.g. Uncle, Aunt, Cousin"
                        value={form.otherRelationship}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            otherRelationship: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Occupation</Label>
                    <Input
                      placeholder="e.g. Teacher, Engineer, Student"
                      value={form.occupation}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, occupation: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Medical Conditions</Label>
                    <Input
                      placeholder="Comma-separated, e.g. Diabetes, Hypertension"
                      value={form.medicalConditions}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          medicalConditions: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
                    <div>
                      <p className="text-sm font-semibold">Make Public</p>
                      <p className="text-xs text-muted-foreground">
                        Show this member to community members
                      </p>
                    </div>
                    <Switch
                      checked={form.isPublic}
                      onCheckedChange={(v) =>
                        setForm((p) => ({ ...p, isPublic: v }))
                      }
                    />
                  </div>

                  {/* Business & Services Section */}
                  <div className="space-y-3 rounded-xl border border-border bg-secondary/20 p-3">
                    <p className="text-xs font-semibold text-foreground">
                      Business &amp; Services
                    </p>
                    <Select
                      value={form.bizCategory ?? ""}
                      onValueChange={(v) =>
                        setForm((p) => ({
                          ...p,
                          bizCategory: v,
                          bizMode: p.bizMode ?? "none",
                        }))
                      }
                    >
                      <SelectTrigger
                        className="h-8 text-xs"
                        data-ocid="family.member.biz.select"
                      >
                        <SelectValue placeholder="Select category (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="food">
                          Food &amp; Beverage
                        </SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="realestate">Real Estate</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.bizCategory && (
                      <div className="flex gap-2">
                        {(["none", "add", "link"] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            className={`flex-1 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${(form.bizMode ?? "none") === mode ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-secondary"}`}
                            onClick={() =>
                              setForm((p) => ({ ...p, bizMode: mode }))
                            }
                            data-ocid={`family.member.biz.${mode}.toggle`}
                          >
                            {mode === "none"
                              ? "Skip"
                              : mode === "add"
                                ? "Add New"
                                : "Link Existing"}
                          </button>
                        ))}
                      </div>
                    )}
                    {form.bizMode === "add" && form.bizCategory && (
                      <div className="space-y-2">
                        <input
                          className="w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Business name"
                          value={form.bizName ?? ""}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, bizName: e.target.value }))
                          }
                          data-ocid="family.member.biz.input"
                        />
                        <input
                          className="w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Location"
                          value={form.bizLocation ?? ""}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              bizLocation: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Phone number"
                          value={form.bizPhone ?? ""}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, bizPhone: e.target.value }))
                          }
                        />
                      </div>
                    )}
                    {form.bizMode === "link" && form.bizCategory && (
                      <Select
                        value={form.bizLinkId ?? ""}
                        onValueChange={(v) =>
                          setForm((p) => ({ ...p, bizLinkId: v }))
                        }
                      >
                        <SelectTrigger
                          className="h-8 text-xs"
                          data-ocid="family.member.biz.link.select"
                        >
                          <SelectValue placeholder="Select existing business" />
                        </SelectTrigger>
                        <SelectContent>
                          {getFamilyTreeBusinesses().map((b) => (
                            <SelectItem key={b.id} value={b.id}>
                              {b.name}
                            </SelectItem>
                          ))}
                          {getFamilyTreeBusinesses().length === 0 && (
                            <SelectItem value="_none" disabled>
                              No businesses found — add one first
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={addMember.isPending}
                  >
                    {addMember.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Adding...
                      </>
                    ) : (
                      "Add to Family Tree"
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Edit Member Dialog */}
        <EditMemberDialog
          member={editMember}
          open={editMemberOpen}
          onClose={() => {
            setEditMemberOpen(false);
            setEditMember(null);
          }}
          onSave={handleSaveEditedMember}
          isSaving={isSavingMember}
        />

        {/* Edit Profile Dialog */}
        <EditProfileDialog
          userProfile={userProfile}
          open={editProfileOpen}
          onClose={() => setEditProfileOpen(false)}
        />

        {/* Business Dialog */}
        <BusinessDialog
          business={editingBusiness}
          open={businessDialogOpen}
          onClose={() => {
            setBusinessDialogOpen(false);
            setEditingBusiness(null);
          }}
          onSave={handleSaveBusiness}
        />

        {/* Tree layout */}
        {isLoading ? (
          <div className="space-y-8">
            <div className="flex justify-center gap-4">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="h-32 w-44 rounded-xl" />
              ))}
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-36 w-48 rounded-xl" />
            </div>
            <div className="flex justify-center gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-32 w-44 rounded-xl" />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-0">
            {/* Parents row */}
            {parents.length > 0 && (
              <div className="flex flex-col items-center animate-fade-up animate-fade-up-1">
                <div className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Parents
                </div>
                <GroupedMembers
                  members={parents}
                  relType="parent"
                  isAdmin={!!isAdmin}
                  onEdit={handleEditMember}
                  onCardClick={handleOpenExtProfile}
                />
                <div className="h-8 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-border" />
                </div>
              </div>
            )}

            {/* Siblings + Self + Spouses row */}
            <div className="animate-fade-up animate-fade-up-2">
              {(siblings.length > 0 || spouses.length > 0) && (
                <div className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3 text-center">
                  Family Circle
                </div>
              )}
              <div className="flex flex-wrap justify-center items-start gap-4">
                {/* Siblings */}
                {siblings.map((m) => (
                  <MemberCard
                    key={m.id.toString()}
                    member={m}
                    isAdmin={!!isAdmin}
                    onEdit={handleEditMember}
                    onClick={handleOpenExtProfile}
                  />
                ))}

                {/* Self node */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    {(siblings.length > 0 || spouses.length > 0) && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-label font-bold tracking-wider"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        ★
                      </div>
                    )}
                    {/* Self node with edit button overlay */}
                    <div className="relative group/self">
                      <MemberCard
                        member={selfMember}
                        isCenter
                        isOwn
                        lifestyleActive={{
                          matrimony: matrimonyEnabled,
                          dating: datingEnabled,
                        }}
                        onClick={handleOpenSelfExtProfile}
                      />
                      {/* Dedicated edit profile button for self node */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditSelf();
                        }}
                        className="absolute top-2 right-2 z-10 opacity-0 group-hover/self:opacity-100 transition-opacity
                          w-6 h-6 rounded-md bg-background/90 border border-border shadow-sm
                          flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        aria-label="Edit your profile"
                      >
                        <Pencil size={11} />
                      </button>
                    </div>
                  </div>

                  {/* Lifestyle Settings */}
                  <div
                    className="rounded-xl border border-border bg-card/80 p-4 w-full"
                    style={{ minWidth: "200px", maxWidth: "240px" }}
                  >
                    <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Lifestyle Settings
                    </p>
                    <div className="space-y-3">
                      {/* Matrimony toggle */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={`flex items-center justify-between gap-3 ${isMarried ? "opacity-50" : ""}`}
                          >
                            <div className="flex items-center gap-2">
                              <Heart
                                size={14}
                                className={
                                  matrimonyEnabled && !isMarried
                                    ? "text-pink-500"
                                    : "text-muted-foreground"
                                }
                              />
                              <div>
                                <p className="text-xs font-label font-medium text-foreground">
                                  Matrimony Profile
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  Find life partner
                                </p>
                              </div>
                            </div>
                            <Switch
                              checked={matrimonyEnabled && !isMarried}
                              onCheckedChange={(v) => {
                                if (!isMarried) {
                                  setMatrimonyEnabled(v);
                                  if (v) {
                                    toast.success(
                                      "You are now visible on the Matrimony map. Visit Geomap to see your pin.",
                                    );
                                  }
                                }
                              }}
                              disabled={isMarried}
                              className="data-[state=checked]:bg-pink-500"
                            />
                          </div>
                        </TooltipTrigger>
                        {isMarried && (
                          <TooltipContent>
                            Not available for married members
                          </TooltipContent>
                        )}
                      </Tooltip>
                      {matrimonyEnabled && !isMarried && (
                        <button
                          type="button"
                          onClick={() => onNavigate?.("matrimony")}
                          className="flex items-center gap-1 text-[11px] font-label font-medium mt-1 ml-6 transition-colors hover:opacity-80"
                          style={{ color: "oklch(0.65 0.18 350)" }}
                        >
                          Set up profile <ArrowRight size={10} />
                        </button>
                      )}

                      <div className="h-px bg-border/60" />

                      {/* Dating toggle */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={`flex items-center justify-between gap-3 ${isMarried ? "opacity-50" : ""}`}
                          >
                            <div className="flex items-center gap-2">
                              <Users
                                size={14}
                                className={
                                  datingEnabled && !isMarried
                                    ? "text-purple-500"
                                    : "text-muted-foreground"
                                }
                              />
                              <div>
                                <p className="text-xs font-label font-medium text-foreground">
                                  Dating Profile
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  Meet new people
                                </p>
                              </div>
                            </div>
                            <Switch
                              checked={datingEnabled && !isMarried}
                              onCheckedChange={(v) => {
                                if (!isMarried) {
                                  setDatingEnabled(v);
                                  if (v) {
                                    toast.success(
                                      "You are now visible on the Dating map. Visit Geomap to see your pin.",
                                    );
                                  }
                                }
                              }}
                              disabled={isMarried}
                              className="data-[state=checked]:bg-purple-500"
                            />
                          </div>
                        </TooltipTrigger>
                        {isMarried && (
                          <TooltipContent>
                            Not available for married members
                          </TooltipContent>
                        )}
                      </Tooltip>
                      {datingEnabled && !isMarried && (
                        <button
                          type="button"
                          onClick={() => onNavigate?.("dating")}
                          className="flex items-center gap-1 text-[11px] font-label font-medium mt-1 ml-6 transition-colors hover:opacity-80"
                          style={{ color: "oklch(0.55 0.22 280)" }}
                        >
                          Set up profile <ArrowRight size={10} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spouses */}
                {spouses.map((m) => (
                  <MemberCard
                    key={m.id.toString()}
                    member={m}
                    isAdmin={!!isAdmin}
                    onEdit={handleEditMember}
                    onClick={handleOpenExtProfile}
                  />
                ))}
              </div>
            </div>

            {/* Children row */}
            {children.length > 0 && (
              <div className="flex flex-col items-center animate-fade-up animate-fade-up-3">
                <div className="h-8 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Children
                </div>
                <GroupedMembers
                  members={children}
                  relType="child"
                  isAdmin={!!isAdmin}
                  onEdit={handleEditMember}
                  onCardClick={handleOpenExtProfile}
                />
              </div>
            )}

            {/* Others */}
            {others.length > 0 && (
              <div className="mt-8 animate-fade-up animate-fade-up-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                    Extended Family
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <GroupedMembers
                  members={others}
                  relType="other"
                  isAdmin={!!isAdmin}
                  onEdit={handleEditMember}
                  onCardClick={handleOpenExtProfile}
                />
              </div>
            )}

            {/* Empty state */}
            {(!members || members.length === 0) && (
              <div className="text-center py-16 animate-fade-up animate-fade-up-2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TreePine size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Your family tree awaits
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                  Start by adding your parents, siblings, spouse, or children to
                  build your family's digital legacy.
                </p>
                <Button onClick={() => setOpen(true)} className="gap-2">
                  <Plus size={16} />
                  Add your first family member
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        {members && members.length > 0 && (
          <div className="mt-10 p-4 rounded-xl bg-secondary/50 border border-border animate-fade-up animate-fade-up-5">
            <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Legend
            </p>
            <div className="flex flex-wrap gap-4">
              {Object.entries(RELATIONSHIP_LABELS).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: RELATIONSHIP_COLORS[key] }}
                  />
                  <span className="text-xs font-label text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-label text-muted-foreground">
                  You
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── My Businesses Section ── */}
        <div className="mt-10 animate-fade-up">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-display font-bold text-foreground">
                My Businesses
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Businesses linked to your family tree profile
              </p>
            </div>
            <Button
              className="gap-2 font-label"
              onClick={() => {
                setEditingBusiness(null);
                setBusinessDialogOpen(true);
              }}
            >
              <Plus size={16} />
              Add Business
            </Button>
          </div>

          {businesses.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-10 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Building2 size={22} className="text-primary" />
              </div>
              <p className="font-label font-semibold text-foreground mb-1">
                No businesses yet
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Link your businesses to your family tree to showcase your
                ventures.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => {
                  setEditingBusiness(null);
                  setBusinessDialogOpen(true);
                }}
              >
                <Plus size={14} />
                Add your first business
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businesses.map((b) => (
                <BusinessCard
                  key={b.id}
                  business={b}
                  onEdit={(biz) => {
                    setEditingBusiness(biz);
                    setBusinessDialogOpen(true);
                  }}
                  onDelete={handleDeleteBusiness}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Events */}
      <div className="mt-8 pt-6 border-t border-border">
        <EventsTab
          moduleName="Family Tree"
          moduleColor="oklch(0.55 0.22 280)"
        />
      </div>
    </TooltipProvider>
  );
}
