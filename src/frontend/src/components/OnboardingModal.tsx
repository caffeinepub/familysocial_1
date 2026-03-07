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
import { Textarea } from "@/components/ui/textarea";
import { Loader2, TreePine, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSaveUserProfile } from "../hooks/useQueries";

interface OnboardingModalProps {
  onSkip?: () => void;
}

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

export default function OnboardingModal({ onSkip }: OnboardingModalProps) {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    bloodType: "Unknown",
    occupation: "",
    bio: "",
    photoUrl: "",
    isPrivate: true,
  });

  const save = useSaveUserProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    try {
      await save.mutateAsync(form);
      toast.success("Welcome to IndyaCentral!");
    } catch {
      toast.error("Failed to save profile. Please try again.");
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <TreePine size={18} className="text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="font-display text-xl">
                  Welcome to IndyaCentral
                </DialogTitle>
                <DialogDescription>
                  Set up your profile to get started (optional)
                </DialogDescription>
              </div>
            </div>
            {onSkip && (
              <button
                type="button"
                onClick={onSkip}
                className="rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Skip profile setup"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="e.g. Ahmad Hassan"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={form.dateOfBirth}
                onChange={(e) =>
                  setForm((p) => ({ ...p, dateOfBirth: e.target.value }))
                }
              />
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

          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              placeholder="e.g. Software Engineer, Teacher, Student"
              value={form.occupation}
              onChange={(e) =>
                setForm((p) => ({ ...p, occupation: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell your family a little about yourself..."
              value={form.bio}
              onChange={(e) => setForm((p) => ({ ...p, bio: e.target.value }))}
              rows={3}
              className="resize-none"
            />
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
            <div>
              <p className="text-sm font-semibold">Private Profile</p>
              <p className="text-xs text-muted-foreground">
                Only family members you connect with can view your details
              </p>
            </div>
            <Switch
              checked={form.isPrivate}
              onCheckedChange={(v) => setForm((p) => ({ ...p, isPrivate: v }))}
            />
          </div>

          <div className="flex gap-2">
            {onSkip && (
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onSkip}
              >
                Skip for now
              </Button>
            )}
            <Button
              type="submit"
              className={onSkip ? "flex-1" : "w-full"}
              disabled={save.isPending}
            >
              {save.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting
                  up...
                </>
              ) : (
                "Continue to IndyaCentral →"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
