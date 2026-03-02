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
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  MapPin,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

interface CommunityCardProps {
  community: Community;
  onJoin: (id: number) => void;
}

function CommunityCard({ community, onJoin }: CommunityCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up">
      <div className="p-5">
        {/* Header */}
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

        {/* Meta */}
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

        <Button
          className="w-full h-8 text-xs font-label"
          variant={community.joined ? "outline" : "default"}
          onClick={() => !community.joined && onJoin(community.id)}
        >
          {community.joined ? "View Community" : "Join Community"}
        </Button>
      </div>
    </div>
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

  const filtered = communities.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase()),
  );

  const handleJoin = (id: number) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, joined: true, memberCount: c.memberCount + 1 }
          : c,
      ),
    );
    const community = communities.find((c) => c.id === id);
    toast.success(`Joined ${community?.name}!`);
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
      address: form.address || "Pakistan",
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
            <Button className="gap-2 font-label">
              <Plus size={16} />
              Create Community
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
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
                />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
                >
                  <SelectTrigger>
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
                  placeholder="e.g. Phase 1, Islamabad"
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
                />
              </div>
              <Button type="submit" className="w-full font-label">
                Create Community
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

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
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
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
    </div>
  );
}
