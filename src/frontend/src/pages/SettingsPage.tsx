import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Camera, Loader2, Palette, Shield, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { UserProfile } from "../backend.d";
import { useBlobStorage } from "../hooks/useBlobStorage";
import { useSaveUserProfile } from "../hooks/useQueries";

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

interface Props {
  userProfile: UserProfile | null | undefined;
}

export default function SettingsPage({ userProfile }: Props) {
  const save = useSaveUserProfile();
  const { uploadFile, isUploading, uploadProgress } = useBlobStorage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<UserProfile>({
    name: userProfile?.name || "",
    dateOfBirth: userProfile?.dateOfBirth || "",
    bloodType: userProfile?.bloodType || "Unknown",
    occupation: userProfile?.occupation || "",
    bio: userProfile?.bio || "",
    photoUrl: userProfile?.photoUrl || "",
    isPrivate: userProfile?.isPrivate ?? true,
  });

  useEffect(() => {
    if (userProfile) {
      setForm({
        name: userProfile.name || "",
        dateOfBirth: userProfile.dateOfBirth || "",
        bloodType: userProfile.bloodType || "Unknown",
        occupation: userProfile.occupation || "",
        bio: userProfile.bio || "",
        photoUrl: userProfile.photoUrl || "",
        isPrivate: userProfile.isPrivate ?? true,
      });
    }
  }, [userProfile]);

  const initials = form.name
    ? form.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Photo must be under 5MB");
      return;
    }

    try {
      const url = await uploadFile(file);
      setForm((p) => ({ ...p, photoUrl: url }));
      toast.success("Photo uploaded!");
    } catch {
      // If upload fails, use local preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((p) => ({ ...p, photoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
      toast.info("Photo set locally");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }
    try {
      await save.mutateAsync(form);
      toast.success("Profile saved successfully!");
    } catch {
      toast.error("Failed to save profile");
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-2xl mx-auto">
      <div className="mb-8 animate-fade-up">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your profile and preferences
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Photo */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-1">
          <div className="flex items-center gap-3 mb-4">
            <User size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Profile Photo
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Avatar className="h-20 w-20">
                {form.photoUrl ? (
                  <AvatarImage src={form.photoUrl} alt={form.name} />
                ) : null}
                <AvatarFallback
                  className="text-xl font-label font-bold"
                  style={{
                    background: "oklch(var(--primary) / 0.15)",
                    color: "oklch(var(--primary))",
                  }}
                >
                  {initials}
                </AvatarFallback>
              </Avatar>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow hover:bg-primary/90 transition-colors"
              >
                <Camera size={13} />
              </button>
            </div>

            <div className="flex-1">
              <p className="text-sm font-label font-semibold text-foreground">
                {form.name || "Your Name"}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {isUploading
                  ? `Uploading... ${uploadProgress}%`
                  : "Click camera icon to upload photo"}
              </p>
              {isUploading && (
                <Progress value={uploadProgress} className="h-1" />
              )}
              {!isUploading && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs font-label"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload Photo
                </Button>
              )}
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </div>

        {/* Personal Information */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-2">
          <div className="flex items-center gap-3 mb-5">
            <User size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Personal Information
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your full name"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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

            <div className="space-y-2">
              <Label>Occupation</Label>
              <Input
                value={form.occupation}
                onChange={(e) =>
                  setForm((p) => ({ ...p, occupation: e.target.value }))
                }
                placeholder="e.g. Software Engineer, Teacher, Business Owner"
              />
            </div>

            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea
                value={form.bio}
                onChange={(e) =>
                  setForm((p) => ({ ...p, bio: e.target.value }))
                }
                placeholder="A brief description about yourself..."
                rows={4}
                className="resize-none"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-3">
          <div className="flex items-center gap-3 mb-5">
            <Shield size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Privacy & Visibility
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-label font-semibold text-foreground">
                  Private Profile
                </p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  When enabled, only family members you explicitly connect with
                  can see your profile details.
                </p>
              </div>
              <Switch
                checked={form.isPrivate}
                onCheckedChange={(v) =>
                  setForm((p) => ({ ...p, isPrivate: v }))
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-label font-semibold text-foreground">
                  Share Medical Info
                </p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Allow family members to see your blood type and medical
                  conditions.
                </p>
              </div>
              <Switch defaultChecked={false} />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-4">
          <div className="flex items-center gap-3 mb-5">
            <Bell size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Notification Preferences
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "Family Tree Updates",
                desc: "When someone adds you to their family tree",
                on: true,
              },
              {
                label: "Community Announcements",
                desc: "Important updates from your communities",
                on: true,
              },
              {
                label: "New Job Matches",
                desc: "Jobs matching your profile and location",
                on: false,
              },
              {
                label: "Order & Booking Alerts",
                desc: "Updates on your purchases and bookings",
                on: true,
              },
            ].map((n, i) => (
              <div key={n.label}>
                {i > 0 && <Separator className="my-3" />}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-label font-semibold text-foreground">
                      {n.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <Switch defaultChecked={n.on} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end animate-fade-up animate-fade-up-5">
          <Button
            type="submit"
            className="px-8 font-label"
            disabled={save.isPending}
          >
            {save.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
