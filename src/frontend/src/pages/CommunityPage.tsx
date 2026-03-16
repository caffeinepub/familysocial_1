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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardList,
  DoorOpen,
  Gavel,
  MapPin,
  Package,
  Plus,
  Search,
  Shield,
  ShoppingBag,
  UserCog,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";

type CommunityRole =
  | "owner"
  | "resident"
  | "visitor"
  | "security"
  | "committee"
  | "community_admin"
  | null;

interface Community {
  id: number;
  name: string;
  type: string;
  description: string;
  address: string;
  memberCount: number;
  joined: boolean;
  color: string;
}

const SAMPLE_COMMUNITIES: Community[] = [
  {
    id: 1,
    name: "DHA Phase 5",
    type: "Society",
    description:
      "Defense Housing Authority Phase 5 — a premium residential community with parks, schools, and markets.",
    address: "DHA Phase 5, Lahore, Punjab",
    memberCount: 4280,
    joined: true,
    color: "oklch(0.52 0.14 155)",
  },
  {
    id: 2,
    name: "Gulberg Greens",
    type: "Locality",
    description:
      "Gulberg Greens is a well-established residential locality known for its tree-lined streets and vibrant commercial areas.",
    address: "Gulberg III, Lahore, Punjab",
    memberCount: 2150,
    joined: false,
    color: "oklch(0.65 0.14 50)",
  },
  {
    id: 3,
    name: "Model Town",
    type: "Neighborhood",
    description:
      "One of Lahore's oldest planned residential areas, offering a rich community life with parks and local markets.",
    address: "Model Town, Lahore, Punjab",
    memberCount: 5670,
    joined: false,
    color: "oklch(0.48 0.12 260)",
  },
  {
    id: 4,
    name: "Bahria Town Phase 7",
    type: "Society",
    description:
      "A gated community with 24/7 security, parks, community center, and shopping malls.",
    address: "Bahria Town, Rawalpindi",
    memberCount: 8900,
    joined: false,
    color: "oklch(0.72 0.17 85)",
  },
  {
    id: 5,
    name: "Johar Town",
    type: "Locality",
    description:
      "A bustling residential area with excellent schools, hospitals, and shopping facilities.",
    address: "Johar Town, Lahore, Punjab",
    memberCount: 3200,
    joined: false,
    color: "oklch(0.58 0.16 350)",
  },
  {
    id: 6,
    name: "F-7 Islamabad",
    type: "Neighborhood",
    description:
      "One of Islamabad's most sought-after sectors with embassies, restaurants, and upscale residences.",
    address: "F-7, Islamabad",
    memberCount: 1800,
    joined: false,
    color: "oklch(0.52 0.14 155)",
  },
];

const TYPE_COLORS: Record<string, string> = {
  Society: "oklch(0.52 0.14 155)",
  Locality: "oklch(0.65 0.14 50)",
  Neighborhood: "oklch(0.48 0.12 260)",
};

const ROLE_META: Record<
  NonNullable<CommunityRole>,
  { label: string; icon: React.ElementType; color: string }
> = {
  owner: { label: "Owner", icon: Building2, color: "oklch(0.65 0.25 335)" },
  resident: { label: "Resident", icon: Users, color: "oklch(0.55 0.22 280)" },
  visitor: { label: "Visitor", icon: DoorOpen, color: "oklch(0.65 0.14 50)" },
  security: { label: "Security", icon: Shield, color: "oklch(0.52 0.14 155)" },
  committee: {
    label: "Committee Member",
    icon: Gavel,
    color: "oklch(0.60 0.18 190)",
  },
  community_admin: {
    label: "Community Admin",
    icon: UserCog,
    color: "oklch(0.72 0.17 85)",
  },
};

interface CommunityCardProps {
  community: Community;
  onJoin: (id: number, role: CommunityRole) => void;
}

function RolePickerDialog({
  onSelect,
  communityName,
}: {
  communityName: string;
  onSelect: (role: NonNullable<CommunityRole>) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState<NonNullable<CommunityRole>>("resident");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full h-8 text-xs font-label"
          data-ocid="community.join.open_modal_button"
        >
          Join Community
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm" data-ocid="community.role.dialog">
        <DialogHeader>
          <DialogTitle className="font-display">
            Join {communityName}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 mt-2">
          <Label className="text-xs text-muted-foreground">
            Select your role in this community
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {(
              Object.entries(ROLE_META) as [
                NonNullable<CommunityRole>,
                (typeof ROLE_META)["owner"],
              ][]
            ).map(([key, meta]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-center ${
                  selected === key
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                }`}
                data-ocid={`community.role.${key}.toggle`}
              >
                <meta.icon size={18} style={{ color: meta.color }} />
                <span className="text-xs font-label font-medium">
                  {meta.label}
                </span>
              </button>
            ))}
          </div>
          <Button
            className="w-full"
            onClick={() => {
              onSelect(selected);
              setOpen(false);
            }}
            data-ocid="community.role.confirm_button"
          >
            Join as {ROLE_META[selected].label}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CommunityCard({ community, onJoin }: CommunityCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${community.color}18` }}
            >
              <Building2 size={18} style={{ color: community.color }} />
            </div>
            <div>
              <h3 className="font-label font-semibold text-foreground">
                {community.name}
              </h3>
              <Badge
                className="text-[10px] px-1.5 py-0 font-label border-0 mt-0.5"
                style={{
                  background: `${TYPE_COLORS[community.type] || community.color}18`,
                  color: TYPE_COLORS[community.type] || community.color,
                }}
              >
                {community.type}
              </Badge>
            </div>
          </div>
          {community.joined && (
            <div className="flex items-center gap-1 text-xs text-primary font-label">
              <CheckCircle2 size={14} />
              Joined
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {community.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Users size={12} />
            <span className="font-label">
              {community.memberCount.toLocaleString()} members
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span className="truncate max-w-[140px]">{community.address}</span>
          </div>
        </div>
        {community.joined ? (
          <Button className="w-full h-8 text-xs font-label" variant="outline">
            View Community
          </Button>
        ) : (
          <RolePickerDialog
            communityName={community.name}
            onSelect={(role) => onJoin(community.id, role)}
          />
        )}
      </div>
    </div>
  );
}

// ── Role-based community views ──────────────────────────────────────────────

function SecurityView() {
  return (
    <Tabs defaultValue="gate">
      <TabsList className="mb-4">
        <TabsTrigger value="gate" data-ocid="community.security.gate.tab">
          Gate Entry/Exit
        </TabsTrigger>
        <TabsTrigger
          value="maintenance"
          data-ocid="community.security.maintenance.tab"
        >
          Maintenance
        </TabsTrigger>
        <TabsTrigger value="shifts" data-ocid="community.security.shifts.tab">
          Shifts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="gate">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Gate Entry / Exit Log</h3>
          {[
            "Delivery — Amazon (IN)",
            "Visitor — Mr. Sharma for Flat 204",
            "Resident — Anil Kumar",
          ].map((entry, i) => (
            <div
              key={entry}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.gate.item.${i + 1}`}
            >
              <span className="text-sm">{entry}</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs"
                  data-ocid={`community.gate.approve.button.${i + 1}`}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-7 text-xs"
                  data-ocid={`community.gate.delete_button.${i + 1}`}
                >
                  Deny
                </Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="maintenance">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Maintenance Complaints</h3>
          {[
            "Water leakage in Block C stairwell",
            "Street light out at Gate 2",
            "Lift not working in Tower B",
          ].map((c, i) => (
            <div
              key={c}
              className="p-3 rounded-lg bg-secondary/30 text-sm"
              data-ocid={`community.maintenance.item.${i + 1}`}
            >
              {c}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="shifts">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">My Shifts</h3>
          {[
            "Morning Shift 06:00–14:00",
            "Night Shift 22:00–06:00",
            "Evening Shift 14:00–22:00",
          ].map((s, i) => (
            <div
              key={s}
              className="p-3 rounded-lg bg-secondary/30 text-sm flex items-center gap-2"
              data-ocid={`community.shift.item.${i + 1}`}
            >
              <ClipboardList size={14} className="text-muted-foreground" />
              {s}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function VisitorView() {
  return (
    <Tabs defaultValue="jobs">
      <TabsList className="mb-4">
        <TabsTrigger value="jobs" data-ocid="community.visitor.jobs.tab">
          Available Jobs
        </TabsTrigger>
        <TabsTrigger
          value="directory"
          data-ocid="community.visitor.directory.tab"
        >
          Apartment Directory
        </TabsTrigger>
      </TabsList>
      <TabsContent value="jobs">
        <div className="space-y-2">
          {[
            "Security Guard — Night Shift",
            "Housekeeping Assistant",
            "Maintenance Technician",
          ].map((j, i) => (
            <div
              key={j}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.job.item.${i + 1}`}
            >
              <span className="text-sm">{j}</span>
              <Button size="sm" className="h-7 text-xs">
                Apply
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="directory">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Apartment Directory</h3>
          {[
            { flat: "101", block: "A", name: "Kumar Family" },
            { flat: "102", block: "A", name: "Sharma Residence" },
            { flat: "201", block: "B", name: "Patel Family" },
            { flat: "301", block: "C", name: "Singh Household" },
          ].map((apt, i) => (
            <div
              key={apt.flat}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.apt.item.${i + 1}`}
            >
              <MapPin size={14} className="text-muted-foreground" />
              <span className="text-sm font-medium">
                Block {apt.block}, Flat {apt.flat}
              </span>
              <span className="text-sm text-muted-foreground">{apt.name}</span>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function OwnerView() {
  return (
    <Tabs defaultValue="property">
      <TabsList className="mb-4">
        <TabsTrigger value="property" data-ocid="community.owner.property.tab">
          My Property
        </TabsTrigger>
        <TabsTrigger
          value="complaints"
          data-ocid="community.owner.complaints.tab"
        >
          Complaints
        </TabsTrigger>
        <TabsTrigger
          value="marketplace"
          data-ocid="community.owner.marketplace.tab"
        >
          Marketplace
        </TabsTrigger>
      </TabsList>
      <TabsContent value="property">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">My Properties & Parkings</h3>
            <Button
              size="sm"
              className="h-7 text-xs gap-1"
              data-ocid="community.property.open_modal_button"
            >
              <Plus size={12} />
              Add
            </Button>
          </div>
          {[
            "Flat 304, Block A — 3BHK (Owner)",
            "Parking Slot P-12 (For Rent: ₹2,500/mo)",
          ].map((p, i) => (
            <div
              key={p}
              className="p-3 rounded-lg bg-secondary/30 text-sm"
              data-ocid={`community.property.item.${i + 1}`}
            >
              {p}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="complaints">
        <div className="space-y-3">
          <Button
            size="sm"
            className="gap-1"
            data-ocid="community.complaint.open_modal_button"
          >
            <Plus size={12} />
            Raise Complaint
          </Button>
          {[
            "Noise from upper floor — Filed 3 days ago",
            "Garbage not collected — Filed 1 week ago",
          ].map((c, i) => (
            <div
              key={c}
              className="p-3 rounded-lg bg-secondary/30 text-sm"
              data-ocid={`community.complaint.item.${i + 1}`}
            >
              {c}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="marketplace">
        <div className="space-y-2">
          {[
            "Sofa Set — ₹8,000",
            "Study Table — ₹2,500",
            "Air Conditioner — ₹15,000",
          ].map((item, i) => (
            <div
              key={item}
              className="flex justify-between items-center p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.market.item.${i + 1}`}
            >
              <span className="text-sm">{item}</span>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Contact
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function ResidentView() {
  return (
    <Tabs defaultValue="marketplace">
      <TabsList className="mb-4">
        <TabsTrigger
          value="marketplace"
          data-ocid="community.resident.marketplace.tab"
        >
          Marketplace
        </TabsTrigger>
        <TabsTrigger value="events" data-ocid="community.resident.events.tab">
          Events
        </TabsTrigger>
        <TabsTrigger
          value="complaints"
          data-ocid="community.resident.complaints.tab"
        >
          Complaints
        </TabsTrigger>
      </TabsList>
      <TabsContent value="marketplace">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Study Table — ₹2,500",
            "Bicycle — ₹4,000",
            "Washing Machine — ₹7,000",
            "TV — ₹12,000",
          ].map((item, i) => (
            <div
              key={item}
              className="flex justify-between items-center p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.market.item.${i + 1}`}
            >
              <span className="text-sm">{item}</span>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Buy
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="events">
        <EventsTab moduleName="Community" moduleColor="oklch(0.60 0.20 190)" />
      </TabsContent>
      <TabsContent value="complaints">
        <div className="space-y-3">
          <Button
            size="sm"
            className="gap-1"
            data-ocid="community.complaint.open_modal_button"
          >
            <Plus size={12} />
            Raise Complaint
          </Button>
          {[
            "Water pressure issue — Pending",
            "Broken streetlight — Resolved",
          ].map((c, i) => (
            <div
              key={c}
              className="p-3 rounded-lg bg-secondary/30 text-sm"
              data-ocid={`community.complaint.item.${i + 1}`}
            >
              {c}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function AdminCommunityView() {
  return (
    <Tabs defaultValue="visitors">
      <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
        <TabsTrigger value="visitors" data-ocid="community.admin.visitors.tab">
          Approve Visitors
        </TabsTrigger>
        <TabsTrigger
          value="committees"
          data-ocid="community.admin.committees.tab"
        >
          Committees
        </TabsTrigger>
        <TabsTrigger value="work" data-ocid="community.admin.work.tab">
          Assign Work
        </TabsTrigger>
        <TabsTrigger
          value="marketplace"
          data-ocid="community.admin.marketplace.tab"
        >
          Marketplace
        </TabsTrigger>
        <TabsTrigger value="security" data-ocid="community.admin.security.tab">
          Security
        </TabsTrigger>
        <TabsTrigger
          value="maintenance"
          data-ocid="community.admin.maintenance.tab"
        >
          Maintenance
        </TabsTrigger>
        <TabsTrigger value="events" data-ocid="community.admin.events.tab">
          Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="visitors">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Pending Visitor Approvals</h3>
          {[
            "Mr. Raj Mehta — visiting Flat 302",
            "Delivery — Flipkart for Block B",
            "Ms. Kavita — visiting Flat 104",
          ].map((v, i) => (
            <div
              key={v}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.visitor.item.${i + 1}`}
            >
              <span className="text-sm">{v}</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="h-7 text-xs"
                  data-ocid={`community.visitor.confirm_button.${i + 1}`}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-7 text-xs"
                  data-ocid={`community.visitor.delete_button.${i + 1}`}
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="committees">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Society Committees</h3>
            <Button
              size="sm"
              className="h-7 text-xs gap-1"
              data-ocid="community.committee.open_modal_button"
            >
              <Plus size={12} />
              New Committee
            </Button>
          </div>
          {[
            {
              name: "Maintenance Committee",
              members: 5,
              dues: "₹1,200 pending",
            },
            { name: "Cultural Committee", members: 8, dues: "All paid" },
            { name: "Finance Committee", members: 3, dues: "₹800 pending" },
          ].map((c, i) => (
            <div
              key={c.name}
              className="p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.committee.item.${i + 1}`}
            >
              <div className="flex justify-between">
                <span className="text-sm font-medium">{c.name}</span>
                <Badge variant="outline" className="text-xs">
                  {c.members} members
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Dues: {c.dues}
              </p>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="work">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Work Assignments</h3>
          {[
            {
              task: "Fix broken gate latch",
              assigned: "Maintenance Team",
              due: "Tomorrow",
            },
            {
              task: "Paint Block C stairwell",
              assigned: "External Vendor",
              due: "Next week",
            },
            {
              task: "Replace parking lights",
              assigned: "Electrician",
              due: "2 days",
            },
          ].map((w, i) => (
            <div
              key={w.task}
              className="p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.work.item.${i + 1}`}
            >
              <div className="flex justify-between">
                <span className="text-sm font-medium">{w.task}</span>
                <span className="text-xs text-muted-foreground">
                  Due: {w.due}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Assigned to: {w.assigned}
              </p>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="marketplace">
        <ResidentView />
      </TabsContent>
      <TabsContent value="security">
        <SecurityView />
      </TabsContent>
      <TabsContent value="maintenance">
        <div className="space-y-2">
          {[
            "Water leakage — Block C",
            "Lift breakdown — Tower B",
            "Generator fuel low",
          ].map((m, i) => (
            <div
              key={m}
              className="flex justify-between items-center p-3 rounded-lg bg-secondary/30"
              data-ocid={`community.maint.item.${i + 1}`}
            >
              <span className="text-sm">{m}</span>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs"
                data-ocid={`community.maint.button.${i + 1}`}
              >
                Assign
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="events">
        <EventsTab moduleName="Community" moduleColor="oklch(0.60 0.20 190)" />
      </TabsContent>
    </Tabs>
  );
}

interface NewCommunityForm {
  name: string;
  description: string;
  type: string;
  address: string;
}

export default function CommunityPage() {
  const [search, setSearch] = useState("");
  const [communities, setCommunities] =
    useState<Community[]>(SAMPLE_COMMUNITIES);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<NewCommunityForm>({
    name: "",
    description: "",
    type: "Society",
    address: "",
  });
  const [activeCommunity, setActiveCommunity] = useState<Community | null>(
    null,
  );
  const [activeRole, setActiveRole] = useState<CommunityRole>(null);

  const filtered = communities.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase()),
  );

  const handleJoin = (id: number, role: CommunityRole) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, joined: true, memberCount: c.memberCount + 1 }
          : c,
      ),
    );
    const community = communities.find((c) => c.id === id);
    if (community) {
      setActiveCommunity(community);
      setActiveRole(role);
      toast.success(
        `Joined ${community.name} as ${role ? ROLE_META[role].label : "Member"}!`,
      );
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter a community name");
      return;
    }
    const colors = [
      "oklch(0.52 0.14 155)",
      "oklch(0.65 0.14 50)",
      "oklch(0.48 0.12 260)",
    ];
    const newCommunity: Community = {
      id: Date.now(),
      name: form.name,
      type: form.type,
      description: form.description || "A new community",
      address: form.address || "India",
      memberCount: 1,
      joined: true,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setCommunities((p) => [newCommunity, ...p]);
    toast.success(`${form.name} community created!`);
    setOpen(false);
    setForm({ name: "", description: "", type: "Society", address: "" });
  };

  const joinedCount = communities.filter((c) => c.joined).length;

  // If viewing a community with a role
  if (activeCommunity && activeRole) {
    const meta = ROLE_META[activeRole];
    return (
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setActiveCommunity(null);
              setActiveRole(null);
            }}
            className="text-xs"
            data-ocid="community.back.button"
          >
            ← All Communities
          </Button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-display font-bold text-foreground">
              {activeCommunity.name}
            </h1>
            <Badge
              className="text-xs px-2 py-0.5 border-0"
              style={{ background: `${meta.color}18`, color: meta.color }}
            >
              <meta.icon size={11} className="inline mr-1" />
              {meta.label}
            </Badge>
          </div>
        </div>
        {activeRole === "security" && <SecurityView />}
        {activeRole === "visitor" && <VisitorView />}
        {activeRole === "owner" && <OwnerView />}
        {(activeRole === "resident" || activeRole === "committee") && (
          <ResidentView />
        )}
        {activeRole === "community_admin" && <AdminCommunityView />}
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-up">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Community
          </h1>
          <p className="text-muted-foreground mt-1">
            Member of {joinedCount}{" "}
            {joinedCount === 1 ? "community" : "communities"}
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="gap-2 font-label"
              data-ocid="community.create.open_modal_button"
            >
              <Plus size={16} />
              Create Community
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-md"
            data-ocid="community.create.dialog"
          >
            <DialogHeader>
              <DialogTitle className="font-display">
                Create Community
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>
                  Community Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  placeholder="e.g. Green Valley Society"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  data-ocid="community.create.input"
                />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
                >
                  <SelectTrigger data-ocid="community.create.select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Society">Society</SelectItem>
                    <SelectItem value="Locality">Locality</SelectItem>
                    <SelectItem value="Neighborhood">Neighborhood</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input
                  placeholder="e.g. Phase 1, Mumbai"
                  value={form.address}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, address: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe your community..."
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                  rows={3}
                  className="resize-none"
                  data-ocid="community.create.textarea"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-label"
                data-ocid="community.create.submit_button"
              >
                Create Community
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Already joined — quick access */}
      {communities.filter((c) => c.joined).length > 0 && (
        <div className="mb-5 p-4 rounded-xl border bg-primary/5 border-primary/20 animate-fade-up">
          <p className="text-xs font-semibold text-foreground mb-2">
            Your Communities — click to enter
          </p>
          <div className="flex flex-wrap gap-2">
            {communities
              .filter((c) => c.joined)
              .map((c) => (
                <Button
                  key={c.id}
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs gap-1"
                  onClick={() => {
                    setActiveCommunity(c);
                    setActiveRole("resident");
                  }}
                  data-ocid="community.joined.link"
                >
                  <Building2 size={11} />
                  {c.name}
                </Button>
              ))}
          </div>
        </div>
      )}

      {/* Jobs banner */}
      <div
        className="flex items-center justify-between gap-3 mb-5 px-4 py-2.5 rounded-xl border animate-fade-up"
        style={{
          background: "oklch(0.52 0.14 155 / 0.06)",
          borderColor: "oklch(0.52 0.14 155 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <Briefcase size={14} style={{ color: "oklch(0.52 0.14 155)" }} />
          <span className="text-xs font-label text-foreground font-medium">
            Security &amp; Maintenance Jobs Available
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            — apply via the Jobs module
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs font-label shrink-0"
          onClick={() => toast.info("Navigating to Jobs...")}
          data-ocid="community.jobs.button"
        >
          View Jobs
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6 animate-fade-up animate-fade-up-1">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="Search communities by name, type, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
          data-ocid="community.search_input"
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16" data-ocid="community.empty_state">
          <Users size={40} className="mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground font-label">
            No communities found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((c, i) => (
            <div key={c.id} style={{ animationDelay: `${i * 0.05}s` }}>
              <CommunityCard community={c} onJoin={handleJoin} />
            </div>
          ))}
        </div>
      )}

      {/* Events */}
      <div className="mt-8 pt-6 border-t border-border">
        <EventsTab moduleName="Community" moduleColor="oklch(0.60 0.20 190)" />
      </div>
    </div>
  );
}
