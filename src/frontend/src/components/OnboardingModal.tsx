import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { Switch } from "@/components/ui/switch";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  Loader2,
  Plus,
  School,
  TreePine,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSaveUserProfile } from "../hooks/useQueries";

interface OnboardingModalProps {
  onSkip?: () => void;
}

interface FamilyMember {
  name: string;
  relation: string;
  dob: string;
}

interface Child {
  name: string;
  age: string;
}

const TOTAL_STEPS = 6;

const STEP_META = [
  { label: "Welcome", icon: TreePine },
  { label: "Family", icon: Heart },
  { label: "Work", icon: Briefcase },
  { label: "Community", icon: Building2 },
  { label: "Kids", icon: GraduationCap },
  { label: "Finish", icon: CheckCircle2 },
];

export default function OnboardingModal({ onSkip }: OnboardingModalProps) {
  const [step, setStep] = useState(1);

  // Step 1 — Welcome
  // (no inputs)

  // Step 2 — Family
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [memberForm, setMemberForm] = useState<FamilyMember>({
    name: "",
    relation: "",
    dob: "",
  });

  // Step 3 — Business / Job
  const [profileType, setProfileType] = useState<"business" | "professional">(
    "professional",
  );
  const [bizForm, setBizForm] = useState({
    businessName: "",
    businessType: "",
    businessLocation: "",
  });
  const [profForm, setProfForm] = useState({
    jobTitle: "",
    company: "",
    industry: "",
  });

  // Step 4 — Community
  const [community, setCommunity] = useState("");
  const [ownership, setOwnership] = useState<"owned" | "rental">("owned");
  const [communityRole, setCommunityRole] = useState("resident");

  // Step 5 — Kids
  const [hasKids, setHasKids] = useState(false);
  const [children, setChildren] = useState<Child[]>([]);
  const [childForm, setChildForm] = useState<Child>({ name: "", age: "" });
  const [selectedSchool, setSelectedSchool] = useState("");

  // Step 6 — Finish (save profile)
  const [name, setName] = useState("");
  const save = useSaveUserProfile();

  const addMember = () => {
    if (!memberForm.name.trim()) return;
    setMembers((p) => [...p, memberForm]);
    setMemberForm({ name: "", relation: "", dob: "" });
  };

  const addChild = () => {
    if (!childForm.name.trim()) return;
    setChildren((p) => [...p, childForm]);
    setChildForm({ name: "", age: "" });
  };

  const handleFinish = async () => {
    try {
      await save.mutateAsync({
        name: name || "IndyaCentral User",
        dateOfBirth: "",
        bloodType: "Unknown",
        occupation:
          profileType === "business" ? bizForm.businessType : profForm.jobTitle,
        bio: "",
        photoUrl: "",
        isPrivate: true,
      });
      toast.success("Welcome to IndyaCentral! 🎉");
      onSkip?.();
    } catch {
      toast.error("Failed to save profile. Please try again.");
    }
  };

  const canNext = () => {
    if (step === 6) return !!name.trim();
    return true;
  };

  const StepDots = () => (
    <div className="flex items-center gap-1.5 justify-center mb-6">
      {STEP_META.map((s, i) => {
        const stepNum = i + 1;
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className={`flex items-center justify-center rounded-full transition-all ${
              stepNum === step
                ? "w-8 h-8 bg-primary text-primary-foreground"
                : stepNum < step
                  ? "w-6 h-6 bg-primary/20 text-primary"
                  : "w-6 h-6 bg-muted text-muted-foreground"
            }`}
          >
            <Icon size={stepNum === step ? 16 : 12} />
          </div>
        );
      })}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center space-y-4 py-2">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
              style={{ background: "oklch(0.65 0.25 335 / 0.15)" }}
            >
              <TreePine size={28} style={{ color: "oklch(0.65 0.25 335)" }} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold">
                Welcome to IndyaCentral
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Your privacy-first digital super-platform for South Asia. We'll
                help you set up your family, work, community, and more in just a
                few steps.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: Heart, label: "Family" },
                { icon: Users, label: "Community" },
                { icon: Building2, label: "Business" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl bg-secondary/50 text-center"
                >
                  <Icon
                    size={18}
                    className="mx-auto mb-1"
                    style={{ color: "oklch(0.65 0.25 335)" }}
                  />
                  <p className="text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base">Add Family Members</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Start building your family tree
              </p>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Name"
                  value={memberForm.name}
                  onChange={(e) =>
                    setMemberForm((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="onboarding.family.name.input"
                />
                <Input
                  placeholder="Relation (e.g. Spouse)"
                  value={memberForm.relation}
                  onChange={(e) =>
                    setMemberForm((p) => ({ ...p, relation: e.target.value }))
                  }
                  data-ocid="onboarding.family.relation.input"
                />
              </div>
              <Input
                type="date"
                value={memberForm.dob}
                onChange={(e) =>
                  setMemberForm((p) => ({ ...p, dob: e.target.value }))
                }
                data-ocid="onboarding.family.dob.input"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1 w-full"
                onClick={addMember}
                data-ocid="onboarding.family.add_button"
              >
                <Plus size={13} /> Add Member
              </Button>
            </div>
            {members.length > 0 && (
              <div className="space-y-1.5">
                {members.map((m, i) => (
                  <div
                    key={`${m.name}-${i}`}
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 text-sm"
                    data-ocid={`onboarding.family.item.${i + 1}`}
                  >
                    <span className="font-medium">{m.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {m.relation}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base">
                Business or Professional?
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Tell us about your work
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={profileType === "business" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setProfileType("business")}
                data-ocid="onboarding.work.business.toggle"
              >
                <Building2 size={13} className="mr-1" /> Business Owner
              </Button>
              <Button
                type="button"
                variant={profileType === "professional" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setProfileType("professional")}
                data-ocid="onboarding.work.professional.toggle"
              >
                <Briefcase size={13} className="mr-1" /> Professional
              </Button>
            </div>
            {profileType === "business" ? (
              <div className="space-y-2">
                <Input
                  placeholder="Business Name"
                  value={bizForm.businessName}
                  onChange={(e) =>
                    setBizForm((p) => ({ ...p, businessName: e.target.value }))
                  }
                  data-ocid="onboarding.biz.name.input"
                />
                <Input
                  placeholder="Business Type (e.g. Restaurant, Retail)"
                  value={bizForm.businessType}
                  onChange={(e) =>
                    setBizForm((p) => ({ ...p, businessType: e.target.value }))
                  }
                  data-ocid="onboarding.biz.type.input"
                />
                <Input
                  placeholder="Location"
                  value={bizForm.businessLocation}
                  onChange={(e) =>
                    setBizForm((p) => ({
                      ...p,
                      businessLocation: e.target.value,
                    }))
                  }
                  data-ocid="onboarding.biz.location.input"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  placeholder="Job Title"
                  value={profForm.jobTitle}
                  onChange={(e) =>
                    setProfForm((p) => ({ ...p, jobTitle: e.target.value }))
                  }
                  data-ocid="onboarding.prof.title.input"
                />
                <Input
                  placeholder="Company"
                  value={profForm.company}
                  onChange={(e) =>
                    setProfForm((p) => ({ ...p, company: e.target.value }))
                  }
                  data-ocid="onboarding.prof.company.input"
                />
                <Input
                  placeholder="Industry"
                  value={profForm.industry}
                  onChange={(e) =>
                    setProfForm((p) => ({ ...p, industry: e.target.value }))
                  }
                  data-ocid="onboarding.prof.industry.input"
                />
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base">Your Community</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Which community do you live in?
              </p>
            </div>
            <Input
              placeholder="Search community (e.g. DHA Phase 5, Gulberg)"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              data-ocid="onboarding.community.search_input"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                variant={ownership === "owned" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setOwnership("owned")}
                data-ocid="onboarding.community.owned.toggle"
              >
                Owned
              </Button>
              <Button
                type="button"
                variant={ownership === "rental" ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={() => setOwnership("rental")}
                data-ocid="onboarding.community.rental.toggle"
              >
                Rental
              </Button>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Your Role</Label>
              <Select value={communityRole} onValueChange={setCommunityRole}>
                <SelectTrigger data-ocid="onboarding.community.role.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resident">Resident</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="committee">Committee Member</SelectItem>
                  <SelectItem value="community_admin">
                    Community Admin
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base">Kids & Schools</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Do you have children?
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
              <span className="text-sm font-medium">I have children</span>
              <Switch
                checked={hasKids}
                onCheckedChange={setHasKids}
                data-ocid="onboarding.kids.switch"
              />
            </div>
            {hasKids && (
              <>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Child's name"
                      value={childForm.name}
                      onChange={(e) =>
                        setChildForm((p) => ({ ...p, name: e.target.value }))
                      }
                      data-ocid="onboarding.child.name.input"
                    />
                    <Input
                      placeholder="Age"
                      type="number"
                      value={childForm.age}
                      onChange={(e) =>
                        setChildForm((p) => ({ ...p, age: e.target.value }))
                      }
                      data-ocid="onboarding.child.age.input"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1 w-full"
                    onClick={addChild}
                    data-ocid="onboarding.child.add_button"
                  >
                    <Plus size={13} /> Add Child
                  </Button>
                </div>
                {children.length > 0 && (
                  <div className="space-y-1.5">
                    {children.map((c, i) => (
                      <div
                        key={`${c.name}-${i}`}
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 text-sm"
                        data-ocid={`onboarding.child.item.${i + 1}`}
                      >
                        <School size={13} className="text-muted-foreground" />
                        <span>{c.name}</span>
                        <span className="text-muted-foreground">
                          Age {c.age}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="space-y-2">
                  <Label className="text-xs">Preferred School</Label>
                  <Select
                    value={selectedSchool}
                    onValueChange={setSelectedSchool}
                  >
                    <SelectTrigger data-ocid="onboarding.school.select">
                      <SelectValue placeholder="Select school..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beacon">
                        Beacon House School System
                      </SelectItem>
                      <SelectItem value="city">The City School</SelectItem>
                      <SelectItem value="froebels">
                        Froebels International
                      </SelectItem>
                      <SelectItem value="aitchison">
                        Aitchison College
                      </SelectItem>
                      <SelectItem value="other">Other / Not Decided</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "oklch(0.65 0.25 335 / 0.15)" }}
              >
                <CheckCircle2
                  size={26}
                  style={{ color: "oklch(0.65 0.25 335)" }}
                />
              </div>
              <h3 className="font-semibold text-base">Almost done!</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Enter your name to complete setup
              </p>
            </div>
            <Input
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-ocid="onboarding.finish.name.input"
            />
            <div className="rounded-xl border border-border p-3 space-y-2 bg-secondary/30">
              <p className="text-xs font-semibold text-foreground mb-2">
                Summary
              </p>
              {members.length > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  <Heart size={12} className="text-primary" />
                  <span>{members.length} family member(s) added</span>
                </div>
              )}
              {(bizForm.businessName || profForm.jobTitle) && (
                <div className="flex items-center gap-2 text-xs">
                  <Briefcase size={12} className="text-primary" />
                  <span>
                    {profileType === "business"
                      ? bizForm.businessName || "Business"
                      : profForm.jobTitle || "Professional"}
                  </span>
                </div>
              )}
              {community && (
                <div className="flex items-center gap-2 text-xs">
                  <Building2 size={12} className="text-primary" />
                  <span>
                    {community} ({ownership})
                  </span>
                </div>
              )}
              {hasKids && children.length > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  <GraduationCap size={12} className="text-primary" />
                  <span>{children.length} child(ren) added</span>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <TreePine size={16} className="text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="font-display text-lg">
                  IndyaCentral Setup
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Step {step} of {TOTAL_STEPS} — {STEP_META[step - 1]?.label}
                </DialogDescription>
              </div>
            </div>
            {onSkip && (
              <button
                type="button"
                onClick={onSkip}
                className="rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Skip setup"
                data-ocid="onboarding.close_button"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </DialogHeader>

        <StepDots />

        <div className="min-h-[200px]">{renderStep()}</div>

        <div className="flex gap-2 mt-4">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => setStep((s) => s - 1)}
              data-ocid="onboarding.back.button"
            >
              <ChevronLeft size={14} /> Back
            </Button>
          )}
          <div className="flex-1" />
          {onSkip && step < TOTAL_STEPS && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onSkip}
              data-ocid="onboarding.skip.button"
            >
              Skip
            </Button>
          )}
          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              size="sm"
              className="gap-1"
              onClick={() => setStep((s) => s + 1)}
              data-ocid="onboarding.next.button"
            >
              Next <ChevronRight size={14} />
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              onClick={handleFinish}
              disabled={!canNext() || save.isPending}
              data-ocid="onboarding.finish.primary_button"
            >
              {save.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting
                  up...
                </>
              ) : (
                "Go to IndyaCentral →"
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
