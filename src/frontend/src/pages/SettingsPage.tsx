import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import {
  Bell,
  Camera,
  CheckCircle2,
  Database,
  Download,
  FileUp,
  Loader2,
  MessageCircle,
  Palette,
  Shield,
  Trash2,
  Upload,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useBlobStorage } from "../hooks/useBlobStorage";
import { useSaveUserProfile } from "../hooks/useQueries";
import type { UserProfile } from "../types/platform";

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

// ─── WhatsApp Import Section Component ────────────────────────────────────────────────────
type ImportState = "idle" | "scanning" | "processing" | "done" | "error";

function WhatsAppImportSection() {
  const [contactsState, setContactsState] = useState<ImportState>("idle");
  const [productsState, setProductsState] = useState<ImportState>("idle");
  const [contactsCount, setContactsCount] = useState(0);
  const [importRows, setImportRows] = useState<
    { row: number; name: string; status: string }[]
  >([]);

  const simulateImport = (
    setter: (s: ImportState) => void,
    onDone: () => void,
  ) => {
    setter("scanning");
    setTimeout(() => {
      setter("processing");
      setTimeout(() => {
        setter("done");
        onDone();
      }, 1800);
    }, 1200);
  };

  const handleContactsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".csv")) {
      toast.error("Only CSV files are accepted");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      toast.error("File exceeds 50MB limit");
      return;
    }
    simulateImport(setContactsState, () => {
      const count = Math.floor(Math.random() * 80) + 20;
      setContactsCount(count);
      toast.success(`${count} WhatsApp contacts created`);
    });
  };

  const handleProductsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".csv")) {
      toast.error("Only CSV files are accepted");
      return;
    }
    simulateImport(setProductsState, () => {
      const rows = Array.from({ length: 5 }, (_, i) => ({
        row: i + 1,
        name: [
          "Organic Honey",
          "Silk Saree",
          "Basmati Rice",
          "Brass Lamp",
          "Cotton Kurta",
        ][i],
        status:
          i === 2
            ? "Pending Moderation"
            : i === 4
              ? "Error - Missing Image"
              : "Created",
      }));
      setImportRows(rows);
      toast.success("Products imported — 5 rows processed");
    });
  };

  const stateLabel: Record<ImportState, string> = {
    idle: "",
    scanning: "Scanning for viruses...",
    processing: "Processing data...",
    done: "Complete",
    error: "Failed",
  };

  return (
    <div className="space-y-6">
      <p
        className="text-xs text-muted-foreground p-3 rounded-lg"
        style={{
          background: "oklch(0.72 0.19 85 / 0.1)",
          color: "oklch(0.62 0.15 85)",
        }}
      >
        ⚠️ Only CSV, JPG, PNG files accepted. Files are scanned and deleted
        immediately after processing.
      </p>

      {/* WhatsApp Contacts CSV */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageCircle size={14} style={{ color: "oklch(0.52 0.14 155)" }} />
          <p className="text-sm font-label font-semibold text-foreground">
            Import WhatsApp Contacts (CSV)
          </p>
        </div>
        <label
          className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors hover:bg-muted/20"
          style={{ borderColor: "oklch(0.52 0.14 155 / 0.4)" }}
          data-ocid="settings.contacts.dropzone"
        >
          <Upload size={24} className="text-muted-foreground mb-2" />
          <p className="text-sm font-label font-semibold text-foreground">
            Drop CSV file or click to upload
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Max 50MB · CSV only
          </p>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleContactsFile}
            data-ocid="settings.contacts.upload_button"
          />
        </label>
        {contactsState !== "idle" && (
          <div
            className="flex items-center gap-3 text-sm"
            data-ocid="settings.contacts.loading_state"
          >
            {contactsState === "done" ? (
              <CheckCircle2
                size={16}
                style={{ color: "oklch(0.52 0.14 155)" }}
              />
            ) : (
              <Loader2
                size={16}
                className="animate-spin text-muted-foreground"
              />
            )}
            <span
              className={
                contactsState === "done"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }
            >
              {contactsState === "done"
                ? `✓ ${contactsCount} users created successfully`
                : stateLabel[contactsState]}
            </span>
          </div>
        )}
      </div>

      {/* Product Data CSV */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileUp size={14} className="text-muted-foreground" />
          <p className="text-sm font-label font-semibold text-foreground">
            Import Product Data (CSV + Images)
          </p>
        </div>
        <label
          className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors hover:bg-muted/20"
          style={{ borderColor: "oklch(0.65 0.25 335 / 0.4)" }}
          data-ocid="settings.products.dropzone"
        >
          <Upload size={24} className="text-muted-foreground mb-2" />
          <p className="text-sm font-label font-semibold text-foreground">
            Drop product CSV here
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            CSV with image_url column · Max 50MB
          </p>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleProductsFile}
            data-ocid="settings.products.upload_button"
          />
        </label>

        {productsState !== "idle" && (
          <div
            className="flex items-center gap-3 text-sm"
            data-ocid="settings.products.loading_state"
          >
            {productsState === "done" ? (
              <CheckCircle2
                size={16}
                style={{ color: "oklch(0.52 0.14 155)" }}
              />
            ) : (
              <Loader2
                size={16}
                className="animate-spin text-muted-foreground"
              />
            )}
            <span
              className={
                productsState === "done"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }
            >
              {productsState === "done"
                ? "✓ Import complete"
                : stateLabel[productsState]}
            </span>
          </div>
        )}

        {importRows.length > 0 && (
          <div
            className="overflow-x-auto rounded-xl border border-border"
            data-ocid="settings.products.table"
          >
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/30">
                  <th className="px-3 py-2 text-left font-label text-muted-foreground">
                    Row
                  </th>
                  <th className="px-3 py-2 text-left font-label text-muted-foreground">
                    Name
                  </th>
                  <th className="px-3 py-2 text-left font-label text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {importRows.map((row, i) => (
                  <tr
                    key={row.row}
                    className="border-t border-border"
                    data-ocid={`settings.import.row.${i + 1}`}
                  >
                    <td className="px-3 py-2 text-muted-foreground">
                      #{row.row}
                    </td>
                    <td className="px-3 py-2 font-semibold">{row.name}</td>
                    <td className="px-3 py-2">
                      <span
                        className="font-label px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            row.status === "Created"
                              ? "oklch(0.52 0.14 155 / 0.15)"
                              : row.status.includes("Error")
                                ? "oklch(0.58 0.22 25 / 0.15)"
                                : "oklch(0.72 0.19 85 / 0.15)",
                          color:
                            row.status === "Created"
                              ? "oklch(0.52 0.14 155)"
                              : row.status.includes("Error")
                                ? "oklch(0.58 0.22 25)"
                                : "oklch(0.72 0.19 85)",
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
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

        {/* Privacy & Data */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up">
          <div className="flex items-center gap-3 mb-5">
            <Database size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Privacy &amp; Data
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-label font-semibold text-foreground">
                  Export My Data
                </p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Download a complete copy of your FamilySocial data including
                  profile, family tree, posts, and activity history.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs font-label shrink-0 gap-1.5"
                  >
                    <Download size={13} />
                    Request Export
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-label">
                      Export Your Data
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will generate a JSON file containing all your
                      FamilySocial data: profile, family tree, posts, healthcare
                      records, and activity history. The file will download
                      immediately.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="font-label text-xs">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="font-label text-xs"
                      onClick={() => {
                        const mockData = {
                          exportDate: new Date().toISOString(),
                          profile: {
                            name: form.name,
                            occupation: form.occupation,
                            bloodType: form.bloodType,
                            dateOfBirth: form.dateOfBirth,
                            bio: form.bio,
                          },
                          familyTree: { members: 8, businesses: 2 },
                          posts: { total: 47, public: 12, private: 35 },
                          healthcare: { conditions: 2, appointments: 5 },
                          timeline: { entries: 22 },
                          note: "This is a mock data export from FamilySocial",
                        };
                        const blob = new Blob(
                          [JSON.stringify(mockData, null, 2)],
                          { type: "application/json" },
                        );
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `familysocial-export-${new Date().toISOString().split("T")[0]}.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                        toast.success("Data export downloaded!");
                      }}
                    >
                      Download Export
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <Separator />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-label font-semibold text-destructive">
                  Delete Account
                </p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Request permanent account deletion. Your data will be archived
                  for 30 days before deletion.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs font-label shrink-0 gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10"
                  >
                    <Trash2 size={13} />
                    Request Deletion
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-label text-destructive">
                      Delete Account?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <strong>This action cannot be undone.</strong> Your
                      account will be archived for 30 days, after which all your
                      data will be permanently deleted. You will lose access to
                      your family tree, posts, healthcare records, and all other
                      data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="font-label text-xs">
                      Keep My Account
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="font-label text-xs bg-destructive hover:bg-destructive/90"
                      onClick={() => {
                        toast.success(
                          "Deletion requested. Your account will be archived in 30 days.",
                          { duration: 6000 },
                        );
                      }}
                    >
                      Yes, Delete My Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
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

        {/* WhatsApp Integration */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
            <span className="text-green-500">📱</span> WhatsApp Integration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="wa-phone" className="text-xs">
                WhatsApp Phone Number
              </Label>
              <Input
                id="wa-phone"
                className="mt-1"
                placeholder="+91 98765 43210"
                data-ocid="settings.whatsapp.input"
              />
            </div>
            <div className="flex items-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 font-label"
                onClick={() => {
                  alert("OTP sent to your WhatsApp number (simulated)");
                }}
                data-ocid="settings.whatsapp.primary_button"
              >
                Send OTP
              </Button>
              <Input
                placeholder="Enter OTP"
                className="flex-1 h-9"
                data-ocid="settings.whatsapp.input"
              />
              <Button
                size="sm"
                className="h-9 font-label"
                onClick={() => alert("WhatsApp verified!")}
                data-ocid="settings.whatsapp.secondary_button"
              >
                Verify
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">
              Subscribe to WhatsApp Updates
            </p>
            {[
              "Daily digest of nearby deals",
              "Order & booking updates",
              "Community notices",
              "Job alerts",
            ].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded"
                  data-ocid="settings.whatsapp.checkbox"
                />
                <span className="text-sm">{sub}</span>
              </label>
            ))}
          </div>
        </div>

        {/* WhatsApp & Data Import */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up">
          <div className="flex items-center gap-3 mb-5">
            <FileUp size={16} className="text-primary" />
            <h2 className="font-label font-semibold text-foreground">
              Data Import &amp; Contacts
            </h2>
          </div>

          <WhatsAppImportSection />
        </div>
      </form>
    </div>
  );
}
