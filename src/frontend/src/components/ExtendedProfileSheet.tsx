import type { FamilyMember } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Banknote,
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  Heart,
  Lock,
  Pencil,
  Phone,
  Plus,
  Stethoscope,
  UserCircle2,
  X,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { Business } from "./ExtendedProfileSheet.types";

// ─── Types ───────────────────────────────────────────────────────────────────

export type SectionPrivacy = "private" | "family" | "friends" | "public";

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

export interface JobEntry {
  id: string;
  employer: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ActivityEntry {
  id: string;
  name: string;
  frequency: string;
  since: string;
}

export interface ExtendedProfile {
  education: EducationEntry[];
  educationPrivacy: SectionPrivacy;
  jobs: JobEntry[];
  jobsPrivacy: SectionPrivacy;
  medicalConditions: string;
  medicalMedications: string;
  medicalSurgeries: string;
  medicalAllergies: string;
  medicalPrivacy: SectionPrivacy;
  financialIncomeRange: string;
  financialPropertyOwned: boolean;
  financialPropertyDesc: string;
  financialAssets: string;
  financialGoals: string;
  financialPrivacy: SectionPrivacy;
  hobbies: string[];
  activities: ActivityEntry[];
  activitiesPrivacy: SectionPrivacy;
  businessesPrivacy: SectionPrivacy;
}

const DEFAULT_EXTENDED_PROFILE: ExtendedProfile = {
  education: [],
  educationPrivacy: "family",
  jobs: [],
  jobsPrivacy: "family",
  medicalConditions: "",
  medicalMedications: "",
  medicalSurgeries: "",
  medicalAllergies: "",
  medicalPrivacy: "family",
  financialIncomeRange: "",
  financialPropertyOwned: false,
  financialPropertyDesc: "",
  financialAssets: "",
  financialGoals: "",
  financialPrivacy: "private",
  hobbies: [],
  activities: [],
  activitiesPrivacy: "family",
  businessesPrivacy: "family",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function loadExtendedProfile(memberId: string): ExtendedProfile {
  try {
    const raw = localStorage.getItem(
      `familysocial_extended_profile_${memberId}`,
    );
    if (!raw) return { ...DEFAULT_EXTENDED_PROFILE };
    return {
      ...DEFAULT_EXTENDED_PROFILE,
      ...(JSON.parse(raw) as Partial<ExtendedProfile>),
    };
  } catch {
    return { ...DEFAULT_EXTENDED_PROFILE };
  }
}

function saveExtendedProfile(memberId: string, profile: ExtendedProfile) {
  try {
    localStorage.setItem(
      `familysocial_extended_profile_${memberId}`,
      JSON.stringify(profile),
    );
  } catch {
    // localStorage may be unavailable
  }
}

function loadBusinesses(principalId: string): Business[] {
  try {
    const raw = localStorage.getItem(`familysocial_businesses_${principalId}`);
    return raw ? (JSON.parse(raw) as Business[]) : [];
  } catch {
    return [];
  }
}

// ─── Privacy selector ─────────────────────────────────────────────────────────

const PRIVACY_ICONS: Record<SectionPrivacy, React.ReactNode> = {
  private: <Lock size={11} />,
  family: <Heart size={11} />,
  friends: <UserCircle2 size={11} />,
  public: <Globe size={11} />,
};

const PRIVACY_LABELS: Record<SectionPrivacy, string> = {
  private: "Private",
  family: "Family Circle",
  friends: "Friends",
  public: "Public",
};

function PrivacySelector({
  value,
  onChange,
  disabled,
}: {
  value: SectionPrivacy;
  onChange: (v: SectionPrivacy) => void;
  disabled?: boolean;
}) {
  return (
    <Select
      value={value}
      onValueChange={(v) => onChange(v as SectionPrivacy)}
      disabled={disabled}
    >
      <SelectTrigger className="h-7 w-[130px] text-xs gap-1.5 px-2 font-label">
        <span className="flex items-center gap-1.5">
          {PRIVACY_ICONS[value]}
          {PRIVACY_LABELS[value]}
        </span>
      </SelectTrigger>
      <SelectContent>
        {(Object.keys(PRIVACY_LABELS) as SectionPrivacy[]).map((k) => (
          <SelectItem key={k} value={k} className="text-xs">
            <span className="flex items-center gap-1.5">
              {PRIVACY_ICONS[k]}
              {PRIVACY_LABELS[k]}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ─── Section header row ───────────────────────────────────────────────────────

function SectionHeader({
  title,
  icon,
  privacy,
  onPrivacyChange,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  canEdit,
}: {
  title: string;
  icon: React.ReactNode;
  privacy: SectionPrivacy;
  onPrivacyChange: (v: SectionPrivacy) => void;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  canEdit: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h3 className="font-label font-semibold text-sm text-foreground">
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <PrivacySelector
          value={privacy}
          onChange={onPrivacyChange}
          disabled={!canEdit}
        />
        {canEdit && !isEditing && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="h-7 w-7 p-0 hover:bg-primary/10 hover:text-primary"
          >
            <Pencil size={13} />
          </Button>
        )}
        {canEdit && isEditing && (
          <div className="flex gap-1">
            <Button
              type="button"
              size="sm"
              onClick={onSave}
              className="h-7 px-3 text-xs font-label"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onCancel}
              className="h-7 px-3 text-xs font-label"
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Private placeholder ──────────────────────────────────────────────────────

function PrivatePlaceholder() {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center">
      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
        <Lock size={18} className="text-muted-foreground" />
      </div>
      <p className="text-sm font-label font-medium text-muted-foreground">
        This section is private
      </p>
      <p className="text-xs text-muted-foreground max-w-xs">
        The member has restricted access to this information.
      </p>
    </div>
  );
}

// ─── Education Tab ────────────────────────────────────────────────────────────

function EducationTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState<EducationEntry[]>([
    ...profile.education,
  ]);
  const [privacy, setPrivacy] = useState<SectionPrivacy>(
    profile.educationPrivacy,
  );

  const canView =
    viewerIsOwner ||
    profile.educationPrivacy === "public" ||
    profile.educationPrivacy === "family" ||
    profile.educationPrivacy === "friends";

  useEffect(() => {
    setEntries([...profile.education]);
    setPrivacy(profile.educationPrivacy);
  }, [profile]);

  const blank = (): EducationEntry => ({
    id: `edu_${Date.now()}_${Math.random()}`,
    institution: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: "",
  });

  const handleSave = () => {
    onUpdate({ education: entries, educationPrivacy: privacy });
    setIsEditing(false);
    toast.success("Education history saved");
  };

  const handleCancel = () => {
    setEntries([...profile.education]);
    setPrivacy(profile.educationPrivacy);
    setIsEditing(false);
  };

  if (!canView && !viewerIsOwner) return <PrivatePlaceholder />;

  return (
    <div>
      <SectionHeader
        title="Education History"
        icon={<GraduationCap size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ educationPrivacy: v });
        }}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        canEdit={canEdit}
      />

      <div className="space-y-3">
        {entries.length === 0 && !isEditing && (
          <div className="text-center py-6 text-muted-foreground text-sm">
            No education history added yet.
          </div>
        )}

        {entries.map((entry, idx) => (
          <div
            key={entry.id}
            className="rounded-xl border border-border bg-secondary/20 p-4 relative"
          >
            {isEditing && (
              <button
                type="button"
                onClick={() =>
                  setEntries((prev) => prev.filter((_, i) => i !== idx))
                }
                className="absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X size={11} />
              </button>
            )}
            {isEditing ? (
              <div className="grid grid-cols-2 gap-3 pr-8">
                <div className="col-span-2">
                  <Label className="text-xs mb-1 block">Institution</Label>
                  <Input
                    value={entry.institution}
                    placeholder="e.g. University of Lahore"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx
                            ? { ...en, institution: e.target.value }
                            : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Degree</Label>
                  <Input
                    value={entry.degree}
                    placeholder="e.g. BSc"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, degree: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Field of Study</Label>
                  <Input
                    value={entry.field}
                    placeholder="e.g. Computer Science"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, field: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Start Year</Label>
                  <Input
                    value={entry.startYear}
                    placeholder="2018"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, startYear: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">End Year</Label>
                  <Input
                    value={entry.endYear}
                    placeholder="2022 or Present"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, endYear: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
              </div>
            ) : (
              <div>
                <p className="font-label font-semibold text-sm text-foreground">
                  {entry.institution || "—"}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {[entry.degree, entry.field].filter(Boolean).join(" · ")}
                </p>
                {(entry.startYear || entry.endYear) && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {entry.startYear}
                    {entry.endYear ? ` – ${entry.endYear}` : ""}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {isEditing && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full gap-2 font-label border-dashed"
            onClick={() => setEntries((prev) => [...prev, blank()])}
          >
            <Plus size={13} />
            Add Education Entry
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Jobs Tab ─────────────────────────────────────────────────────────────────

function JobsTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState<JobEntry[]>([...profile.jobs]);
  const [privacy, setPrivacy] = useState<SectionPrivacy>(profile.jobsPrivacy);

  const canView =
    viewerIsOwner ||
    profile.jobsPrivacy === "public" ||
    profile.jobsPrivacy === "family" ||
    profile.jobsPrivacy === "friends";

  useEffect(() => {
    setEntries([...profile.jobs]);
    setPrivacy(profile.jobsPrivacy);
  }, [profile]);

  const blank = (): JobEntry => ({
    id: `job_${Date.now()}_${Math.random()}`,
    employer: "",
    role: "",
    type: "Full-time",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleSave = () => {
    onUpdate({ jobs: entries, jobsPrivacy: privacy });
    setIsEditing(false);
    toast.success("Job history saved");
  };

  const handleCancel = () => {
    setEntries([...profile.jobs]);
    setPrivacy(profile.jobsPrivacy);
    setIsEditing(false);
  };

  if (!canView && !viewerIsOwner) return <PrivatePlaceholder />;

  return (
    <div>
      <SectionHeader
        title="Job History"
        icon={<Briefcase size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ jobsPrivacy: v });
        }}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        canEdit={canEdit}
      />

      <div className="space-y-3">
        {entries.length === 0 && !isEditing && (
          <div className="text-center py-6 text-muted-foreground text-sm">
            No job history added yet.
          </div>
        )}

        {entries.map((entry, idx) => (
          <div
            key={entry.id}
            className="rounded-xl border border-border bg-secondary/20 p-4 relative"
          >
            {isEditing && (
              <button
                type="button"
                onClick={() =>
                  setEntries((prev) => prev.filter((_, i) => i !== idx))
                }
                className="absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X size={11} />
              </button>
            )}
            {isEditing ? (
              <div className="grid grid-cols-2 gap-3 pr-8">
                <div className="col-span-2">
                  <Label className="text-xs mb-1 block">Employer</Label>
                  <Input
                    value={entry.employer}
                    placeholder="e.g. Systems Limited"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, employer: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Role / Title</Label>
                  <Input
                    value={entry.role}
                    placeholder="e.g. Software Engineer"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, role: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Type</Label>
                  <Select
                    value={entry.type}
                    onValueChange={(v) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, type: v } : en,
                        ),
                      )
                    }
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Full-time", "Part-time", "Freelance", "Contract"].map(
                        (t) => (
                          <SelectItem key={t} value={t} className="text-sm">
                            {t}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Start Date</Label>
                  <Input
                    value={entry.startDate}
                    placeholder="Jan 2020"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, startDate: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">End Date</Label>
                  <Input
                    value={entry.endDate}
                    placeholder="Dec 2022 or Present"
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx ? { ...en, endDate: e.target.value } : en,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs mb-1 block">Description</Label>
                  <Textarea
                    value={entry.description}
                    placeholder="Brief description of responsibilities..."
                    onChange={(e) =>
                      setEntries((prev) =>
                        prev.map((en, i) =>
                          i === idx
                            ? { ...en, description: e.target.value }
                            : en,
                        ),
                      )
                    }
                    rows={2}
                    className="text-sm resize-none"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-label font-semibold text-sm text-foreground">
                    {entry.role || "—"}
                  </p>
                  {entry.type && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-label"
                    >
                      {entry.type}
                    </Badge>
                  )}
                </div>
                {entry.employer && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {entry.employer}
                  </p>
                )}
                {(entry.startDate || entry.endDate) && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {entry.startDate}
                    {entry.endDate ? ` – ${entry.endDate}` : ""}
                  </p>
                )}
                {entry.description && (
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                    {entry.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {isEditing && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full gap-2 font-label border-dashed"
            onClick={() => setEntries((prev) => [...prev, blank()])}
          >
            <Plus size={13} />
            Add Job Entry
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Medical Tab ──────────────────────────────────────────────────────────────

function MedicalTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    medicalConditions: profile.medicalConditions,
    medicalMedications: profile.medicalMedications,
    medicalSurgeries: profile.medicalSurgeries,
    medicalAllergies: profile.medicalAllergies,
  });
  const [privacy, setPrivacy] = useState<SectionPrivacy>(
    profile.medicalPrivacy,
  );

  const canView =
    viewerIsOwner ||
    profile.medicalPrivacy === "public" ||
    profile.medicalPrivacy === "friends";
  const canViewFamily = canView || profile.medicalPrivacy === "family";

  useEffect(() => {
    setForm({
      medicalConditions: profile.medicalConditions,
      medicalMedications: profile.medicalMedications,
      medicalSurgeries: profile.medicalSurgeries,
      medicalAllergies: profile.medicalAllergies,
    });
    setPrivacy(profile.medicalPrivacy);
  }, [profile]);

  const handleSave = () => {
    onUpdate({ ...form, medicalPrivacy: privacy });
    setIsEditing(false);
    toast.success("Medical information saved");
  };

  const handleCancel = () => {
    setForm({
      medicalConditions: profile.medicalConditions,
      medicalMedications: profile.medicalMedications,
      medicalSurgeries: profile.medicalSurgeries,
      medicalAllergies: profile.medicalAllergies,
    });
    setPrivacy(profile.medicalPrivacy);
    setIsEditing(false);
  };

  if (!canViewFamily && !viewerIsOwner) return <PrivatePlaceholder />;

  const renderTags = (value: string) => {
    const tags = value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (tags.length === 0)
      return <span className="text-xs text-muted-foreground">None</span>;
    return (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-secondary text-foreground border border-border font-label"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SectionHeader
        title="Medical History"
        icon={<Stethoscope size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ medicalPrivacy: v });
        }}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        canEdit={canEdit}
      />

      <div className="space-y-4">
        {(
          [
            "medicalConditions",
            "medicalMedications",
            "medicalSurgeries",
            "medicalAllergies",
          ] as const
        ).map((field) => {
          const labels: Record<string, string> = {
            medicalConditions: "Conditions",
            medicalMedications: "Medications",
            medicalSurgeries: "Surgeries",
            medicalAllergies: "Allergies",
          };
          return (
            <div
              key={field}
              className="rounded-xl border border-border bg-secondary/20 p-3"
            >
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
                {labels[field]}
              </Label>
              {isEditing ? (
                <Textarea
                  value={form[field]}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  placeholder="Comma-separated, e.g. Condition 1, Condition 2"
                  rows={2}
                  className="mt-2 text-sm resize-none"
                />
              ) : (
                <div className="mt-1">{renderTags(form[field])}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Financial Tab ────────────────────────────────────────────────────────────

function FinancialTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    financialIncomeRange: profile.financialIncomeRange,
    financialPropertyOwned: profile.financialPropertyOwned,
    financialPropertyDesc: profile.financialPropertyDesc,
    financialAssets: profile.financialAssets,
    financialGoals: profile.financialGoals,
  });
  const [privacy, setPrivacy] = useState<SectionPrivacy>(
    profile.financialPrivacy,
  );

  const canView =
    viewerIsOwner ||
    profile.financialPrivacy === "public" ||
    profile.financialPrivacy === "friends" ||
    profile.financialPrivacy === "family";

  useEffect(() => {
    setForm({
      financialIncomeRange: profile.financialIncomeRange,
      financialPropertyOwned: profile.financialPropertyOwned,
      financialPropertyDesc: profile.financialPropertyDesc,
      financialAssets: profile.financialAssets,
      financialGoals: profile.financialGoals,
    });
    setPrivacy(profile.financialPrivacy);
  }, [profile]);

  const handleSave = () => {
    onUpdate({ ...form, financialPrivacy: privacy });
    setIsEditing(false);
    toast.success("Financial profile saved");
  };

  const handleCancel = () => {
    setForm({
      financialIncomeRange: profile.financialIncomeRange,
      financialPropertyOwned: profile.financialPropertyOwned,
      financialPropertyDesc: profile.financialPropertyDesc,
      financialAssets: profile.financialAssets,
      financialGoals: profile.financialGoals,
    });
    setPrivacy(profile.financialPrivacy);
    setIsEditing(false);
  };

  if (!canView && !viewerIsOwner) return <PrivatePlaceholder />;

  return (
    <div>
      <SectionHeader
        title="Financial Profile"
        icon={<Banknote size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ financialPrivacy: v });
        }}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        canEdit={canEdit}
      />

      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-secondary/20 p-4">
          <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
            Monthly Income Range (PKR)
          </Label>
          {isEditing ? (
            <Select
              value={form.financialIncomeRange}
              onValueChange={(v) =>
                setForm((prev) => ({ ...prev, financialIncomeRange: v }))
              }
            >
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Select range..." />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Below 30,000",
                  "30,000 – 100,000",
                  "100,000 – 300,000",
                  "300,000+",
                  "Prefer not to say",
                ].map((r) => (
                  <SelectItem key={r} value={r} className="text-sm">
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <p className="text-sm text-foreground font-label">
              {form.financialIncomeRange || "—"}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-secondary/20 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              Property Owned
            </Label>
            {isEditing ? (
              <Switch
                checked={form.financialPropertyOwned}
                onCheckedChange={(v) =>
                  setForm((prev) => ({ ...prev, financialPropertyOwned: v }))
                }
              />
            ) : (
              <Badge
                variant={form.financialPropertyOwned ? "default" : "secondary"}
                className="text-xs font-label"
              >
                {form.financialPropertyOwned ? "Yes" : "No"}
              </Badge>
            )}
          </div>
          {form.financialPropertyOwned &&
            (isEditing ? (
              <Textarea
                value={form.financialPropertyDesc}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    financialPropertyDesc: e.target.value,
                  }))
                }
                placeholder="Brief description of property owned..."
                rows={2}
                className="text-sm resize-none"
              />
            ) : (
              form.financialPropertyDesc && (
                <p className="text-xs text-muted-foreground">
                  {form.financialPropertyDesc}
                </p>
              )
            ))}
        </div>

        {["financialAssets", "financialGoals"].map((field) => {
          const labels: Record<string, string> = {
            financialAssets: "Investments & Assets",
            financialGoals: "Financial Goals",
          };
          return (
            <div
              key={field}
              className="rounded-xl border border-border bg-secondary/20 p-4"
            >
              <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                {labels[field]}
              </Label>
              {isEditing ? (
                <Textarea
                  value={form[field as keyof typeof form] as string}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  placeholder={`Enter ${labels[field].toLowerCase()}...`}
                  rows={2}
                  className="text-sm resize-none"
                />
              ) : (
                <p className="text-sm text-foreground">
                  {(form[field as keyof typeof form] as string) || "—"}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Activities Tab ───────────────────────────────────────────────────────────

function ActivitiesTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [hobbies, setHobbies] = useState<string[]>([...profile.hobbies]);
  const [activities, setActivities] = useState<ActivityEntry[]>([
    ...profile.activities,
  ]);
  const [privacy, setPrivacy] = useState<SectionPrivacy>(
    profile.activitiesPrivacy,
  );
  const [newHobby, setNewHobby] = useState("");

  const canView =
    viewerIsOwner ||
    profile.activitiesPrivacy === "public" ||
    profile.activitiesPrivacy === "family" ||
    profile.activitiesPrivacy === "friends";

  useEffect(() => {
    setHobbies([...profile.hobbies]);
    setActivities([...profile.activities]);
    setPrivacy(profile.activitiesPrivacy);
  }, [profile]);

  const blank = (): ActivityEntry => ({
    id: `act_${Date.now()}_${Math.random()}`,
    name: "",
    frequency: "Weekly",
    since: "",
  });

  const handleAddHobby = () => {
    const t = newHobby.trim();
    if (!t || hobbies.includes(t)) return;
    setHobbies((prev) => [...prev, t]);
    setNewHobby("");
  };

  const handleSave = () => {
    onUpdate({ hobbies, activities, activitiesPrivacy: privacy });
    setIsEditing(false);
    toast.success("Activities & hobbies saved");
  };

  const handleCancel = () => {
    setHobbies([...profile.hobbies]);
    setActivities([...profile.activities]);
    setPrivacy(profile.activitiesPrivacy);
    setIsEditing(false);
  };

  if (!canView && !viewerIsOwner) return <PrivatePlaceholder />;

  return (
    <div>
      <SectionHeader
        title="Activities & Hobbies"
        icon={<Heart size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ activitiesPrivacy: v });
        }}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        canEdit={canEdit}
      />

      <div className="space-y-4">
        {/* Hobbies tags */}
        <div className="rounded-xl border border-border bg-secondary/20 p-4">
          <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3 block">
            Hobbies & Interests
          </Label>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-label"
              >
                {h}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() =>
                      setHobbies((prev) => prev.filter((x) => x !== h))
                    }
                    className="hover:text-destructive transition-colors"
                  >
                    <X size={10} />
                  </button>
                )}
              </span>
            ))}
            {hobbies.length === 0 && !isEditing && (
              <span className="text-xs text-muted-foreground">
                No hobbies added
              </span>
            )}
          </div>
          {isEditing && (
            <div className="flex gap-2 mt-3">
              <Input
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                placeholder="Add a hobby..."
                className="h-8 text-sm flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddHobby();
                  }
                }}
              />
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleAddHobby}
                className="h-8 px-3 gap-1 font-label"
              >
                <Plus size={12} />
                Add
              </Button>
            </div>
          )}
        </div>

        {/* Structured activities */}
        <div className="space-y-2">
          <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
            Regular Activities
          </Label>
          {activities.map((act, idx) => (
            <div
              key={act.id}
              className="rounded-xl border border-border bg-secondary/20 p-3 relative"
            >
              {isEditing && (
                <button
                  type="button"
                  onClick={() =>
                    setActivities((prev) => prev.filter((_, i) => i !== idx))
                  }
                  className="absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <X size={11} />
                </button>
              )}
              {isEditing ? (
                <div className="grid grid-cols-3 gap-2 pr-8">
                  <div className="col-span-3">
                    <Input
                      value={act.name}
                      placeholder="Activity name"
                      onChange={(e) =>
                        setActivities((prev) =>
                          prev.map((a, i) =>
                            i === idx ? { ...a, name: e.target.value } : a,
                          ),
                        )
                      }
                      className="h-8 text-sm"
                    />
                  </div>
                  <Select
                    value={act.frequency}
                    onValueChange={(v) =>
                      setActivities((prev) =>
                        prev.map((a, i) =>
                          i === idx ? { ...a, frequency: v } : a,
                        ),
                      )
                    }
                  >
                    <SelectTrigger className="h-8 text-sm col-span-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Daily", "Weekly", "Monthly"].map((f) => (
                        <SelectItem key={f} value={f} className="text-sm">
                          {f}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    value={act.since}
                    placeholder="Since (year)"
                    onChange={(e) =>
                      setActivities((prev) =>
                        prev.map((a, i) =>
                          i === idx ? { ...a, since: e.target.value } : a,
                        ),
                      )
                    }
                    className="h-8 text-sm"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="font-label font-medium text-sm text-foreground flex-1">
                    {act.name || "—"}
                  </p>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0 font-label shrink-0"
                  >
                    {act.frequency}
                  </Badge>
                  {act.since && (
                    <span className="text-xs text-muted-foreground shrink-0">
                      since {act.since}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
          {isEditing && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full gap-2 font-label border-dashed"
              onClick={() => setActivities((prev) => [...prev, blank()])}
            >
              <Plus size={13} />
              Add Activity
            </Button>
          )}
          {activities.length === 0 && !isEditing && (
            <div className="text-center py-4 text-muted-foreground text-xs">
              No regular activities added yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Businesses Tab ────────────────────────────────────────────────────────────

function BusinessesTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
  memberId,
}: {
  profile: ExtendedProfile;
  canEdit: boolean;
  onUpdate: (updates: Partial<ExtendedProfile>) => void;
  viewerIsOwner: boolean;
  memberId: string;
}) {
  const [privacy, setPrivacy] = useState<SectionPrivacy>(
    profile.businessesPrivacy,
  );
  const businesses = loadBusinesses(memberId);

  const canView =
    viewerIsOwner ||
    profile.businessesPrivacy === "public" ||
    profile.businessesPrivacy === "family" ||
    profile.businessesPrivacy === "friends";

  useEffect(() => {
    setPrivacy(profile.businessesPrivacy);
  }, [profile]);

  if (!canView && !viewerIsOwner) return <PrivatePlaceholder />;

  return (
    <div>
      <SectionHeader
        title="Businesses"
        icon={<Building2 size={16} />}
        privacy={privacy}
        onPrivacyChange={(v) => {
          setPrivacy(v);
          onUpdate({ businessesPrivacy: v });
        }}
        isEditing={false}
        onEdit={() => {}}
        onSave={() => {}}
        onCancel={() => {}}
        canEdit={canEdit}
      />

      {businesses.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <Building2 size={28} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm">No businesses linked to this profile.</p>
          {viewerIsOwner && (
            <p className="text-xs mt-1 text-muted-foreground">
              Add businesses in the "My Businesses" section below the family
              tree.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {businesses.map((b) => (
            <div
              key={b.id}
              className="rounded-xl border border-border bg-secondary/20 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 size={15} className="text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-label font-semibold text-sm text-foreground truncate">
                    {b.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-label"
                    >
                      {b.type}
                    </Badge>
                    {b.category && (
                      <span className="text-[10px] text-muted-foreground">
                        {b.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {b.location && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                  <Globe size={10} className="shrink-0" />
                  <span className="truncate">{b.location}</span>
                </div>
              )}
              {b.description && (
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                  {b.description}
                </p>
              )}
              {(b.website || b.phone) && (
                <div className="flex gap-3 mt-2 pt-2 border-t border-border/60">
                  {b.website && (
                    <a
                      href={
                        b.website.startsWith("http")
                          ? b.website
                          : `https://${b.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <Globe size={10} />
                      Website
                    </a>
                  )}
                  {b.phone && (
                    <a
                      href={`tel:${b.phone}`}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Phone size={10} />
                      {b.phone}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Profile Tab ──────────────────────────────────────────────────────────────

function ProfileTab({
  member,
  canEdit,
  viewerIsOwner,
}: {
  member: FamilyMember;
  canEdit: boolean;
  viewerIsOwner: boolean;
}) {
  const fields = [
    { label: "Name", value: member.name },
    { label: "Blood Type", value: member.bloodType || "Unknown" },
    { label: "Occupation", value: member.occupation || "—" },
    {
      label: "Medical Conditions",
      value:
        !viewerIsOwner && !member.isPublic
          ? "Private"
          : member.medicalConditions?.join(", ") || "None",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <UserCircle2 size={16} className="text-primary" />
        <h3 className="font-label font-semibold text-sm text-foreground">
          Basic Profile
        </h3>
        <div className="ml-auto">
          {member.isPublic ? (
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 font-label gap-1 border-green-500/30 text-green-600 bg-green-500/8"
            >
              <Globe size={8} />
              Public
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 font-label gap-1 border-muted-foreground/30 text-muted-foreground"
            >
              <Lock size={8} />
              Private
            </Badge>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {fields.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-secondary/20 px-4 py-3"
          >
            <Label className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider">
              {label}
            </Label>
            <p className="text-sm text-foreground mt-1 font-label">{value}</p>
          </div>
        ))}
      </div>

      {canEdit && (
        <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              Quick edit tip:
            </span>{" "}
            Hover the member card and click the pencil icon to edit basic
            profile fields quickly.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Main ExtendedProfileSheet ────────────────────────────────────────────────

interface ExtendedProfileSheetProps {
  open: boolean;
  onClose: () => void;
  member: FamilyMember | null;
  isOwner: boolean;
  isAdmin: boolean;
  principalId: string;
}

export function ExtendedProfileSheet({
  open,
  onClose,
  member,
  isOwner,
  isAdmin,
  principalId,
}: ExtendedProfileSheetProps) {
  const canEdit = isOwner || isAdmin;
  const memberId = member ? member.id.toString() : "";

  const [extProfile, setExtProfile] = useState<ExtendedProfile>(
    DEFAULT_EXTENDED_PROFILE,
  );

  // Load on open/member change
  useEffect(() => {
    if (!member) return;
    setExtProfile(loadExtendedProfile(memberId));
  }, [member, memberId]);

  const handleUpdate = (updates: Partial<ExtendedProfile>) => {
    if (!member) return;
    const next = { ...extProfile, ...updates };
    setExtProfile(next);
    saveExtendedProfile(memberId, next);
  };

  if (!member) return null;

  const relLabel =
    member.id === BigInt(0)
      ? "You"
      : (() => {
          const k = member.relationship.__kind__;
          if (k === "other")
            return (
              (member.relationship as { __kind__: "other"; other: string })
                .other || "Other"
            );
          return (
            {
              parent: "Parent",
              child: "Child",
              sibling: "Sibling",
              spouse: "Spouse",
            }[k] || k
          );
        })();

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl flex flex-col p-0 gap-0 overflow-hidden"
      >
        <Tabs
          defaultValue="profile"
          className="flex flex-col h-full overflow-hidden"
        >
          {/* Sticky header with member info + tabs bar */}
          <div className="px-6 pt-6 pb-0 border-b border-border shrink-0 bg-background">
            {/* Hidden title for accessibility */}
            <SheetHeader className="p-0 mb-0">
              <SheetTitle className="sr-only">
                {member.name} - Extended Profile
              </SheetTitle>
            </SheetHeader>

            {/* Member info row */}
            <div className="flex items-start gap-3 pb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-lg font-display font-bold text-primary">
                {member.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <p className="font-display font-bold text-base leading-snug text-foreground truncate">
                  {member.name}
                </p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 font-label border-primary/30 text-primary bg-primary/8"
                  >
                    {relLabel}
                  </Badge>
                  {canEdit && (
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0 font-label gap-1 border-amber-500/30 text-amber-600 bg-amber-500/8"
                    >
                      <Pencil size={7} />
                      Can edit
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Sticky tabs bar */}
            <TabsList className="w-full h-auto flex flex-wrap gap-0.5 bg-transparent border-0 p-0 pb-0 rounded-none">
              {[
                {
                  value: "profile",
                  icon: <UserCircle2 size={13} />,
                  label: "Profile",
                },
                {
                  value: "education",
                  icon: <GraduationCap size={13} />,
                  label: "Education",
                },
                { value: "jobs", icon: <Briefcase size={13} />, label: "Jobs" },
                {
                  value: "medical",
                  icon: <Stethoscope size={13} />,
                  label: "Medical",
                },
                {
                  value: "financial",
                  icon: <Banknote size={13} />,
                  label: "Financial",
                },
                {
                  value: "activities",
                  icon: <Heart size={13} />,
                  label: "Activities",
                },
                {
                  value: "businesses",
                  icon: <Building2 size={13} />,
                  label: "Businesses",
                },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 min-w-0 gap-1 text-[11px] font-label px-2 py-2 h-auto rounded-t-lg rounded-b-none data-[state=active]:bg-background data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-border data-[state=active]:border-b-0 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground transition-colors"
                >
                  {tab.icon}
                  <span className="hidden sm:inline truncate">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <TabsContent value="profile" className="p-6 mt-0">
              <ProfileTab
                member={member}
                canEdit={canEdit}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="education" className="p-6 mt-0">
              <EducationTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="jobs" className="p-6 mt-0">
              <JobsTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="medical" className="p-6 mt-0">
              <MedicalTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="financial" className="p-6 mt-0">
              <FinancialTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="activities" className="p-6 mt-0">
              <ActivitiesTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
              />
            </TabsContent>

            <TabsContent value="businesses" className="p-6 mt-0">
              <BusinessesTab
                profile={extProfile}
                canEdit={canEdit}
                onUpdate={handleUpdate}
                viewerIsOwner={isOwner}
                memberId={isOwner ? principalId : memberId}
              />
            </TabsContent>
          </div>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
