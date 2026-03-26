/**
 * BusinessDiscoveryFeatures.tsx
 * Contains:
 *  - Agent11BusinessDiscovery  (admin panel)
 *  - BusinessClaimsAdmin       (admin panel)
 *  - DiscoverClaimTab          (business page)
 *  - AuctionBidDialog          (shop + community)
 *  - CommunityBiddingSection   (community page)
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle,
  Clock,
  Gavel,
  Globe,
  IndianRupee,
  Loader2,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Seed data ────────────────────────────────────────────────────────────────

const SEED_UNCLAIMED: UnclaimedBusiness[] = [
  {
    id: "ub1",
    name: "MedPlus Pharmacy",
    category: "Healthcare",
    city: "Bangalore",
    phone: "080-4124-0000",
    status: "Unclaimed",
  },
  {
    id: "ub2",
    name: "Sharma General Store",
    category: "Retail",
    city: "Delhi",
    phone: "011-2345-6789",
    status: "Unclaimed",
  },
  {
    id: "ub3",
    name: "Biryani House",
    category: "Food",
    city: "Hyderabad",
    phone: "040-6677-8899",
    status: "Unclaimed",
  },
  {
    id: "ub4",
    name: "Green Valley School",
    category: "Education",
    city: "Pune",
    phone: "020-2244-5566",
    status: "Unclaimed",
  },
  {
    id: "ub5",
    name: "FastFix Repairs",
    category: "Services",
    city: "Chennai",
    phone: "044-7788-9900",
    status: "Unclaimed",
  },
  {
    id: "ub6",
    name: "Prime Properties",
    category: "Real Estate",
    city: "Mumbai",
    phone: "022-6655-4433",
    status: "Unclaimed",
  },
  {
    id: "ub7",
    name: "Om Sweet Shop",
    category: "Food",
    city: "Jaipur",
    phone: "0141-223-4455",
    status: "Unclaimed",
  },
  {
    id: "ub8",
    name: "Digital Bazaar",
    category: "Retail",
    city: "Kolkata",
    phone: "033-4455-6677",
    status: "Unclaimed",
  },
  {
    id: "ub9",
    name: "CityFit Gym",
    category: "Services",
    city: "Ahmedabad",
    phone: "079-3344-5566",
    status: "Unclaimed",
  },
  {
    id: "ub10",
    name: "Sunrise Clinic",
    category: "Healthcare",
    city: "Lucknow",
    phone: "0522-334-4455",
    status: "Unclaimed",
  },
];

export interface UnclaimedBusiness {
  id: string;
  name: string;
  category: string;
  city: string;
  phone: string;
  status: "Unclaimed" | "Pending" | "Claimed" | "Rejected";
}

export interface BusinessClaim {
  id: string;
  businessId: string;
  businessName: string;
  claimedBy: string;
  phone: string;
  submittedDate: string;
  status: "Pending" | "Approved" | "Rejected";
  rejectReason?: string;
}

const STORAGE_BUSINESSES = "indyacentral-discovered-businesses";
const STORAGE_CLAIMS = "indyacentral-business-claims";

function loadBusinesses(): UnclaimedBusiness[] {
  try {
    const raw = localStorage.getItem(STORAGE_BUSINESSES);
    if (raw) return JSON.parse(raw) as UnclaimedBusiness[];
  } catch {}
  return SEED_UNCLAIMED;
}

function saveBusinesses(list: UnclaimedBusiness[]) {
  localStorage.setItem(STORAGE_BUSINESSES, JSON.stringify(list));
}

function loadClaims(): BusinessClaim[] {
  try {
    const raw = localStorage.getItem(STORAGE_CLAIMS);
    if (raw) return JSON.parse(raw) as BusinessClaim[];
  } catch {}
  return [];
}

function saveClaims(list: BusinessClaim[]) {
  localStorage.setItem(STORAGE_CLAIMS, JSON.stringify(list));
  window.dispatchEvent(new Event("businessClaimsUpdated"));
}

// ─── Agent 11 Business Discovery (Admin Panel) ────────────────────────────────

const DISCOVERY_LOG_TEMPLATES = [
  (city: string, cat: string) =>
    `🔍 Searching ${city} for ${cat} businesses...`,
  (city: string, cat: string) => `✅ Found: ${cat} business in ${city}`,
  (city: string, _cat: string) =>
    `📋 Added unclaimed listing from ${city} to queue`,
  (city: string, cat: string) =>
    `🌐 Cross-checking ${cat} listing in ${city} with open data...`,
  (_city: string, cat: string) =>
    `📊 Ranking ${cat} listings by relevance score`,
  (city: string, _cat: string) => `💾 Synced ${city} data — queue updated`,
];

const CITIES = [
  "Bangalore",
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Jaipur",
  "Ahmedabad",
  "Lucknow",
];
const CATEGORIES_LIST = [
  "Retail",
  "Food",
  "Healthcare",
  "Education",
  "Services",
  "Real Estate",
];

export function Agent11BusinessDiscovery() {
  const [activeTab, setActiveTab] = useState("config");
  const [running, setRunning] = useState(false);
  const [regions, setRegions] = useState(["India"]);
  const [selectedCats, setSelectedCats] = useState<string[]>([
    "Retail",
    "Food",
    "Healthcare",
  ]);
  const [frequency, setFrequency] = useState("daily");
  const [logs, setLogs] = useState<string[]>([]);
  const [businesses, setBusinesses] =
    useState<UnclaimedBusiness[]>(loadBusinesses);
  const [rejectId, setRejectId] = useState<string | null>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  const appendLog = useCallback((msg: string) => {
    setLogs((prev) => [
      ...prev.slice(-99),
      `[${new Date().toLocaleTimeString()}] ${msg}`,
    ]);
  }, []);

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const cat = selectedCats.length
        ? selectedCats[Math.floor(Math.random() * selectedCats.length)]
        : CATEGORIES_LIST[Math.floor(Math.random() * CATEGORIES_LIST.length)];
      const tmpl =
        DISCOVERY_LOG_TEMPLATES[
          Math.floor(Math.random() * DISCOVERY_LOG_TEMPLATES.length)
        ];
      appendLog(tmpl(city, cat));

      // Occasionally add a new discovered business
      if (Math.random() > 0.65) {
        const newBiz: UnclaimedBusiness = {
          id: `ub_${Date.now()}`,
          name: `${city} ${cat} Hub`,
          category: cat,
          city,
          phone: `+91 98${Math.floor(10000000 + Math.random() * 89999999)}`,
          status: "Unclaimed",
        };
        setBusinesses((prev) => {
          const updated = [newBiz, ...prev];
          saveBusinesses(updated);
          return updated;
        });
      }
    };
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, [running, appendLog, selectedCats]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleCat = (cat: string) =>
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );

  const approveB = (id: string) => {
    setBusinesses((prev) => {
      const updated = prev.map((b) =>
        b.id === id ? { ...b, status: "Claimed" as const } : b,
      );
      saveBusinesses(updated);
      return updated;
    });
    toast.success("Business approved and visible to users");
  };

  const rejectB = (id: string) => {
    setBusinesses((prev) => {
      const updated = prev.map((b) =>
        b.id === id ? { ...b, status: "Rejected" as const } : b,
      );
      saveBusinesses(updated);
      return updated;
    });
    setRejectId(null);
    toast.error("Business listing rejected");
  };

  const pendingCount = businesses.filter(
    (b) => b.status === "Unclaimed",
  ).length;

  return (
    <div className="space-y-4" data-ocid="admin.agent11discovery.panel">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-base">
            Agent 11 — Business Discovery
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Discovers and indexes businesses across regions for users to claim
          </p>
        </div>
        <div className="flex items-center gap-2">
          {running && (
            <Badge
              className="bg-green-500/15 text-green-600 border-green-500/30 animate-pulse"
              data-ocid="admin.agent11discovery.loading_state"
            >
              ● LIVE
            </Badge>
          )}
          <Button
            size="sm"
            variant={running ? "destructive" : "default"}
            onClick={() => {
              setRunning((r) => !r);
              if (!running) appendLog("▶ Discovery agent started");
              else appendLog("⏹ Discovery agent stopped");
            }}
            data-ocid="admin.agent11discovery.toggle"
          >
            {running ? "Stop Agent" : "Start Agent"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Discovered", value: businesses.length, icon: Globe },
          { label: "Pending Claim", value: pendingCount, icon: Clock },
          {
            label: "Claimed",
            value: businesses.filter((b) => b.status === "Claimed").length,
            icon: CheckCircle,
          },
        ].map(({ label, value, icon: Icon }) => (
          <Card key={label} className="border-border/60">
            <CardContent className="p-3 flex items-center gap-3">
              <Icon size={18} className="text-primary" />
              <div>
                <div className="text-lg font-bold">{value}</div>
                <div className="text-[11px] text-muted-foreground">{label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="config" data-ocid="admin.agent11discovery.tab">
            Config
          </TabsTrigger>
          <TabsTrigger
            value="monitoring"
            data-ocid="admin.agent11discovery.tab"
          >
            Monitoring
          </TabsTrigger>
          <TabsTrigger
            value="businesses"
            data-ocid="admin.agent11discovery.tab"
          >
            Discovered ({businesses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-semibold">Discovery Region</Label>
            <div className="flex gap-2">
              {["India", "South Asia", "Global"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegions([r])}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    regions.includes(r)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-muted"
                  }`}
                  data-ocid="admin.agent11discovery.toggle"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Business Categories</Label>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES_LIST.map((cat) => (
                <div key={cat} className="flex items-center gap-1.5">
                  <Checkbox
                    id={`cat-${cat}`}
                    checked={selectedCats.includes(cat)}
                    onCheckedChange={() => toggleCat(cat)}
                    data-ocid="admin.agent11discovery.checkbox"
                  />
                  <Label
                    htmlFor={`cat-${cat}`}
                    className="text-xs cursor-pointer"
                  >
                    {cat}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Discovery Frequency</Label>
            <div className="flex gap-2">
              {["hourly", "daily"].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrequency(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-colors ${
                    frequency === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-muted"
                  }`}
                  data-ocid="admin.agent11discovery.select"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="mt-4">
          <ScrollArea
            className="h-64 rounded-lg border border-border bg-muted/40 p-3"
            data-ocid="admin.agent11discovery.panel"
          >
            {logs.length === 0 ? (
              <p className="text-xs text-muted-foreground">
                Start the agent to see live discovery logs…
              </p>
            ) : (
              logs.map((l) => (
                <p
                  key={l}
                  className="text-[11px] font-mono mb-1 leading-relaxed"
                >
                  {l}
                </p>
              ))
            )}
            <div ref={logEndRef} />
          </ScrollArea>
        </TabsContent>

        <TabsContent value="businesses" className="mt-4">
          <Table data-ocid="admin.agent11discovery.table">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {businesses.slice(0, 30).map((b, i) => (
                <TableRow
                  key={b.id}
                  data-ocid={`admin.agent11discovery.row.${i + 1}`}
                >
                  <TableCell className="font-medium text-sm">
                    {b.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px]">
                      {b.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs">{b.city}</TableCell>
                  <TableCell className="text-xs">{b.phone}</TableCell>
                  <TableCell>
                    <Badge
                      className={`text-[10px] ${
                        b.status === "Claimed"
                          ? "bg-green-500/15 text-green-700 border-green-400/30"
                          : b.status === "Rejected"
                            ? "bg-red-500/15 text-red-700 border-red-400/30"
                            : b.status === "Pending"
                              ? "bg-amber-500/15 text-amber-700 border-amber-400/30"
                              : "bg-blue-500/15 text-blue-700 border-blue-400/30"
                      }`}
                    >
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {b.status === "Unclaimed" && (
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 text-[10px] px-2"
                          onClick={() => approveB(b.id)}
                          data-ocid="admin.agent11discovery.confirm_button"
                        >
                          <CheckCircle size={10} className="mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 text-[10px] px-2 text-destructive hover:text-destructive"
                          onClick={() => setRejectId(b.id)}
                          data-ocid="admin.agent11discovery.delete_button"
                        >
                          <XCircle size={10} className="mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <Dialog open={!!rejectId} onOpenChange={() => setRejectId(null)}>
        <DialogContent data-ocid="admin.agent11discovery.dialog">
          <DialogHeader>
            <DialogTitle>Reject Business Listing?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This listing will be hidden from the platform.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRejectId(null)}
              data-ocid="admin.agent11discovery.cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => rejectId && rejectB(rejectId)}
              data-ocid="admin.agent11discovery.confirm_button"
            >
              Reject
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Admin: Business Claims Queue ─────────────────────────────────────────────

export function BusinessClaimsAdmin() {
  const [claims, setClaims] = useState<BusinessClaim[]>(loadClaims);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    const h = () => setClaims(loadClaims());
    window.addEventListener("businessClaimsUpdated", h);
    return () => window.removeEventListener("businessClaimsUpdated", h);
  }, []);

  const stats = {
    total: claims.length,
    pending: claims.filter((c) => c.status === "Pending").length,
    approved: claims.filter((c) => c.status === "Approved").length,
    rejected: claims.filter((c) => c.status === "Rejected").length,
  };

  const approve = (id: string) => {
    setClaims((prev) => {
      const updated = prev.map((c) =>
        c.id === id ? { ...c, status: "Approved" as const } : c,
      );
      saveClaims(updated);
      return updated;
    });
    toast.success("Claim approved — business linked to user's Family Tree");
  };

  const reject = () => {
    if (!rejectId) return;
    setClaims((prev) => {
      const updated = prev.map((c) =>
        c.id === rejectId
          ? { ...c, status: "Rejected" as const, rejectReason }
          : c,
      );
      saveClaims(updated);
      return updated;
    });
    setRejectOpen(false);
    setRejectId(null);
    setRejectReason("");
    toast.error("Claim rejected");
  };

  return (
    <div className="space-y-4" data-ocid="admin.claims.panel">
      <div>
        <h3 className="font-semibold text-base">Business Claim Requests</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Review ownership claims submitted by users
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total", value: stats.total, color: "text-foreground" },
          { label: "Pending", value: stats.pending, color: "text-amber-600" },
          { label: "Approved", value: stats.approved, color: "text-green-600" },
          { label: "Rejected", value: stats.rejected, color: "text-red-600" },
        ].map(({ label, value, color }) => (
          <Card key={label} className="border-border/60">
            <CardContent className="p-3 text-center">
              <div className={`text-xl font-bold ${color}`}>{value}</div>
              <div className="text-[11px] text-muted-foreground">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {claims.length === 0 ? (
        <div
          className="text-center py-10 text-muted-foreground"
          data-ocid="admin.claims.empty_state"
        >
          <ShieldCheck size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">No claim requests yet</p>
        </div>
      ) : (
        <Table data-ocid="admin.claims.table">
          <TableHeader>
            <TableRow>
              <TableHead>Business Name</TableHead>
              <TableHead>Claimed By</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {claims.map((c, i) => (
              <TableRow key={c.id} data-ocid={`admin.claims.row.${i + 1}`}>
                <TableCell className="font-medium text-sm">
                  {c.businessName}
                </TableCell>
                <TableCell className="text-xs">{c.claimedBy}</TableCell>
                <TableCell className="text-xs">{c.phone}</TableCell>
                <TableCell className="text-xs">{c.submittedDate}</TableCell>
                <TableCell>
                  <Badge
                    className={`text-[10px] ${
                      c.status === "Approved"
                        ? "bg-green-500/15 text-green-700 border-green-400/30"
                        : c.status === "Rejected"
                          ? "bg-red-500/15 text-red-700 border-red-400/30"
                          : "bg-amber-500/15 text-amber-700 border-amber-400/30"
                    }`}
                  >
                    {c.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {c.status === "Pending" && (
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 text-[10px] px-2"
                        onClick={() => approve(c.id)}
                        data-ocid="admin.claims.confirm_button"
                      >
                        <CheckCircle size={10} className="mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 text-[10px] px-2 text-destructive"
                        onClick={() => {
                          setRejectId(c.id);
                          setRejectOpen(true);
                        }}
                        data-ocid="admin.claims.delete_button"
                      >
                        <XCircle size={10} className="mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <DialogContent data-ocid="admin.claims.dialog">
          <DialogHeader>
            <DialogTitle>Reject Claim</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <Label className="text-xs">Reason for rejection</Label>
            <Textarea
              placeholder="Enter reason..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              rows={3}
              data-ocid="admin.claims.textarea"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRejectOpen(false)}
              data-ocid="admin.claims.cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={reject}
              data-ocid="admin.claims.confirm_button"
            >
              Reject Claim
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Discover & Claim Tab (Business Page) ─────────────────────────────────────

export function DiscoverClaimTab() {
  const [businesses, setBusinesses] =
    useState<UnclaimedBusiness[]>(loadBusinesses);
  const [claimTarget, setClaimTarget] = useState<UnclaimedBusiness | null>(
    null,
  );
  const [step, setStep] = useState<"phone" | "otp" | "done">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const h = () => setBusinesses(loadBusinesses());
    window.addEventListener("storage", h);
    return () => window.removeEventListener("storage", h);
  }, []);

  const displayList = businesses.filter(
    (b) =>
      b.status === "Unclaimed" &&
      (b.name.toLowerCase().includes(searchQ.toLowerCase()) ||
        b.city.toLowerCase().includes(searchQ.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQ.toLowerCase())),
  );

  const sendOtp = () => {
    if (!phone) {
      toast.error("Enter your phone number");
      return;
    }
    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setStep("otp");
      toast.success(`OTP sent to ${phone}`);
    }, 1500);
  };

  const submitClaim = () => {
    if (otp.length < 4) {
      toast.error("Enter the OTP");
      return;
    }
    if (!claimTarget) return;
    const claim: BusinessClaim = {
      id: `cl_${Date.now()}`,
      businessId: claimTarget.id,
      businessName: claimTarget.name,
      claimedBy: "Current User",
      phone,
      submittedDate: new Date().toLocaleDateString("en-IN"),
      status: "Pending",
    };
    saveClaims([...loadClaims(), claim]);
    setBusinesses((prev) => {
      const updated = prev.map((b) =>
        b.id === claimTarget.id ? { ...b, status: "Pending" as const } : b,
      );
      saveBusinesses(updated);
      return updated;
    });
    setStep("done");
    toast.success(
      `Claim submitted for "${claimTarget.name}" — admin will review`,
    );
  };

  const resetDialog = () => {
    setClaimTarget(null);
    setStep("phone");
    setPhone("");
    setOtp("");
  };

  const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    Healthcare: <span className="text-base">🏥</span>,
    Retail: <span className="text-base">🛒</span>,
    Food: <span className="text-base">🍽️</span>,
    Education: <span className="text-base">📚</span>,
    Services: <span className="text-base">🔧</span>,
    "Real Estate": <span className="text-base">🏘️</span>,
  };

  return (
    <div className="space-y-4" data-ocid="business.discover.panel">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-display font-bold">
            Discover &amp; Claim Businesses
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Agent 11 continuously discovers businesses. Claim yours to manage it
            here.
          </p>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20">
          {displayList.length} available
        </Badge>
      </div>

      <div className="relative max-w-sm">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="Search by name, city or category…"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          className="pl-9 h-9 text-sm"
          data-ocid="business.discover.search_input"
        />
      </div>

      {displayList.length === 0 ? (
        <div
          className="text-center py-10 text-muted-foreground"
          data-ocid="business.discover.empty_state"
        >
          <Building2 size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">No unclaimed businesses found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayList.map((b, i) => (
            <Card
              key={b.id}
              className="border-border/60 hover:shadow-md transition-shadow"
              data-ocid={`business.discover.item.${i + 1}`}
            >
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {CATEGORY_ICONS[b.category] ?? <Building2 size={16} />}
                    <CardTitle className="text-sm font-semibold leading-tight">
                      {b.name}
                    </CardTitle>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[9px] shrink-0 bg-blue-500/10 text-blue-600 border-blue-400/30"
                  >
                    Unclaimed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={11} />
                  {b.city}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone size={11} />
                  {b.phone}
                </div>
                <Badge variant="secondary" className="text-[10px]">
                  {b.category}
                </Badge>
                <Button
                  size="sm"
                  className="w-full mt-2 h-8 text-xs"
                  onClick={() => {
                    setClaimTarget(b);
                    setStep("phone");
                  }}
                  data-ocid="business.discover.primary_button"
                >
                  <ShieldCheck size={12} className="mr-1.5" />
                  Claim This Business
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Claim Dialog */}
      <Dialog open={!!claimTarget} onOpenChange={() => resetDialog()}>
        <DialogContent data-ocid="business.discover.dialog">
          <DialogHeader>
            <DialogTitle>
              {step === "done"
                ? "Claim Submitted!"
                : `Verify Ownership — ${claimTarget?.name}`}
            </DialogTitle>
          </DialogHeader>

          {step === "phone" && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Enter the phone number registered with this business to verify
                ownership.
              </p>
              <div className="space-y-1.5">
                <Label className="text-xs">Phone Number</Label>
                <Input
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  data-ocid="business.discover.input"
                />
              </div>
              <Button
                className="w-full"
                onClick={sendOtp}
                disabled={sendingOtp}
                data-ocid="business.discover.primary_button"
              >
                {sendingOtp ? (
                  <Loader2 size={14} className="mr-2 animate-spin" />
                ) : (
                  <Phone size={14} className="mr-2" />
                )}
                {sendingOtp ? "Sending OTP…" : "Send OTP"}
              </Button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Enter the OTP sent to {phone}
              </p>
              <div className="space-y-1.5">
                <Label className="text-xs">OTP</Label>
                <Input
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  data-ocid="business.discover.input"
                />
              </div>
              <Button
                className="w-full"
                onClick={submitClaim}
                data-ocid="business.discover.submit_button"
              >
                Submit Claim
              </Button>
            </div>
          )}

          {step === "done" && (
            <div className="text-center py-4 space-y-3">
              <CheckCircle size={40} className="mx-auto text-green-500" />
              <p className="text-sm font-medium">
                Your claim is under admin review.
              </p>
              <p className="text-xs text-muted-foreground">
                Once approved, <strong>{claimTarget?.name}</strong> will be
                linked to your Family Tree.
              </p>
              <Button
                variant="outline"
                onClick={resetDialog}
                data-ocid="business.discover.close_button"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Auction / Bidding for Shop Products ──────────────────────────────────────

export interface AuctionListing {
  productId: string;
  productName: string;
  currentBid: number;
  startingPrice: number;
  endTime: string; // ISO string
  bidCount: number;
  seller: string;
}

const STORAGE_BIDS = "indyacentral-shop-bids";

function loadAuctions(): AuctionListing[] {
  try {
    const raw = localStorage.getItem(STORAGE_BIDS);
    if (raw) return JSON.parse(raw) as AuctionListing[];
  } catch {}
  return [
    {
      productId: "auction_1",
      productName: "Vintage Handloom Saree",
      currentBid: 1200,
      startingPrice: 800,
      endTime: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
      bidCount: 5,
      seller: "Priya Textiles",
    },
    {
      productId: "auction_2",
      productName: "Antique Brass Lamp",
      currentBid: 3500,
      startingPrice: 2000,
      endTime: new Date(Date.now() + 2 * 24 * 3600 * 1000).toISOString(),
      bidCount: 12,
      seller: "Heritage Crafts",
    },
    {
      productId: "auction_3",
      productName: "Hand-painted Madhubani Art",
      currentBid: 850,
      startingPrice: 500,
      endTime: new Date(Date.now() + 6 * 3600 * 1000).toISOString(),
      bidCount: 3,
      seller: "Bihar Art Gallery",
    },
  ];
}

function saveAuctions(list: AuctionListing[]) {
  localStorage.setItem(STORAGE_BIDS, JSON.stringify(list));
}

function timeLeft(endTime: string): string {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return "Ended";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 24) return `${Math.floor(h / 24)}d left`;
  return `${h}h ${m}m left`;
}

export function ShopAuctionTab() {
  const [auctions, setAuctions] = useState<AuctionListing[]>(loadAuctions);
  const [bidTarget, setBidTarget] = useState<AuctionListing | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [newAuction, setNewAuction] = useState(false);
  const [newForm, setNewForm] = useState({
    name: "",
    startingPrice: "",
    hours: "24",
  });

  const placeBid = () => {
    if (!bidTarget) return;
    const amt = Number(bidAmount);
    if (!amt || amt <= bidTarget.currentBid) {
      toast.error(
        `Bid must be higher than ₹${bidTarget.currentBid.toLocaleString("en-IN")}`,
      );
      return;
    }
    setAuctions((prev) => {
      const updated = prev.map((a) =>
        a.productId === bidTarget.productId
          ? { ...a, currentBid: amt, bidCount: a.bidCount + 1 }
          : a,
      );
      saveAuctions(updated);
      return updated;
    });
    toast.success(
      `Bid of ₹${amt.toLocaleString("en-IN")} placed successfully!`,
    );
    setBidTarget(null);
    setBidAmount("");
  };

  const createAuction = () => {
    if (!newForm.name || !newForm.startingPrice) {
      toast.error("Fill in all fields");
      return;
    }
    const a: AuctionListing = {
      productId: `auction_${Date.now()}`,
      productName: newForm.name,
      currentBid: Number(newForm.startingPrice),
      startingPrice: Number(newForm.startingPrice),
      endTime: new Date(
        Date.now() + Number(newForm.hours) * 3600000,
      ).toISOString(),
      bidCount: 0,
      seller: "You",
    };
    setAuctions((prev) => {
      const updated = [a, ...prev];
      saveAuctions(updated);
      return updated;
    });
    setNewAuction(false);
    setNewForm({ name: "", startingPrice: "", hours: "24" });
    toast.success("Auction listing created!");
  };

  return (
    <div className="space-y-4" data-ocid="shop.auction.panel">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-display font-bold">🔨 Live Auctions</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Bid on exclusive items — highest bid wins
          </p>
        </div>
        <Button
          size="sm"
          onClick={() => setNewAuction(true)}
          data-ocid="shop.auction.open_modal_button"
        >
          <Gavel size={13} className="mr-1.5" />
          List Auction
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {auctions.map((a, i) => {
          const ended = new Date(a.endTime).getTime() < Date.now();
          return (
            <Card
              key={a.productId}
              className="border-border/60 hover:shadow-md transition-shadow"
              data-ocid={`shop.auction.item.${i + 1}`}
            >
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-sm font-semibold leading-tight">
                    {a.productName}
                  </CardTitle>
                  <Badge
                    className={`text-[9px] shrink-0 ${ended ? "bg-muted text-muted-foreground" : "bg-amber-500/15 text-amber-700 border-amber-400/30 animate-pulse"}`}
                  >
                    {ended ? "Ended" : "🔨 Auction"}
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  by {a.seller}
                </p>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[11px] text-muted-foreground">
                      Current Bid
                    </div>
                    <div className="text-lg font-bold text-primary flex items-center gap-0.5">
                      <IndianRupee size={14} />
                      {a.currentBid.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground">
                      {a.bidCount} bids
                    </div>
                    <div
                      className={`text-[10px] font-medium ${ended ? "text-muted-foreground" : "text-amber-600"}`}
                    >
                      <Clock size={9} className="inline mr-0.5" />
                      {timeLeft(a.endTime)}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 h-8 text-xs"
                    disabled={ended}
                    onClick={() => {
                      setBidTarget(a);
                      setBidAmount(String(a.currentBid + 1));
                    }}
                    data-ocid="shop.auction.primary_button"
                  >
                    <TrendingUp size={12} className="mr-1" />
                    {ended ? "Auction Ended" : "Place Bid"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bid Dialog */}
      <Dialog
        open={!!bidTarget}
        onOpenChange={() => {
          setBidTarget(null);
          setBidAmount("");
        }}
      >
        <DialogContent data-ocid="shop.auction.dialog">
          <DialogHeader>
            <DialogTitle>Place Bid — {bidTarget?.productName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Bid</span>
              <span className="font-bold">
                ₹{bidTarget?.currentBid.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">
                Your Bid Amount (INR) — must be higher than current
              </Label>
              <Input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder={`More than ₹${bidTarget?.currentBid}`}
                data-ocid="shop.auction.input"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setBidTarget(null)}
              data-ocid="shop.auction.cancel_button"
            >
              Cancel
            </Button>
            <Button onClick={placeBid} data-ocid="shop.auction.confirm_button">
              <Gavel size={13} className="mr-1.5" />
              Confirm Bid
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Auction Dialog */}
      <Dialog open={newAuction} onOpenChange={setNewAuction}>
        <DialogContent data-ocid="shop.auction.modal">
          <DialogHeader>
            <DialogTitle>Create Auction Listing</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Product / Item Name</Label>
              <Input
                value={newForm.name}
                onChange={(e) =>
                  setNewForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="e.g. Antique Jewelry Box"
                data-ocid="shop.auction.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Starting Price (INR)</Label>
              <Input
                type="number"
                value={newForm.startingPrice}
                onChange={(e) =>
                  setNewForm((f) => ({ ...f, startingPrice: e.target.value }))
                }
                placeholder="500"
                data-ocid="shop.auction.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Auction Duration</Label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                value={newForm.hours}
                onChange={(e) =>
                  setNewForm((f) => ({ ...f, hours: e.target.value }))
                }
                data-ocid="shop.auction.select"
              >
                <option value="6">6 hours</option>
                <option value="12">12 hours</option>
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
                <option value="72">72 hours</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setNewAuction(false)}
              data-ocid="shop.auction.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={createAuction}
              data-ocid="shop.auction.submit_button"
            >
              Create Auction
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Community Bidding Section ─────────────────────────────────────────────────

export interface CommunityJob {
  id: string;
  title: string;
  description: string;
  budget: number;
  openForBidding: boolean;
  postedDate: string;
  proposals: {
    vendorName: string;
    price: number;
    description: string;
    accepted?: boolean;
  }[];
}

const STORAGE_COMMUNITY_JOBS = "indyacentral-community-jobs";

function loadCommunityJobs(): CommunityJob[] {
  try {
    const raw = localStorage.getItem(STORAGE_COMMUNITY_JOBS);
    if (raw) return JSON.parse(raw) as CommunityJob[];
  } catch {}
  return [
    {
      id: "cj1",
      title: "Elevator Maintenance Q2",
      description:
        "Annual elevator servicing and safety check for all 3 elevators",
      budget: 35000,
      openForBidding: true,
      postedDate: "12 Mar 2026",
      proposals: [
        {
          vendorName: "LiftPro Services",
          price: 28000,
          description: "Certified team, 2-day job with warranty",
        },
        {
          vendorName: "QuickFix Elevators",
          price: 32000,
          description: "Same-day service available",
        },
      ],
    },
    {
      id: "cj2",
      title: "Garden Landscaping",
      description:
        "Full garden redesign with new plants, pathways, and irrigation system",
      budget: 80000,
      openForBidding: true,
      postedDate: "18 Mar 2026",
      proposals: [],
    },
    {
      id: "cj3",
      title: "Security System Upgrade",
      description: "Install new CCTV cameras and access control at main gate",
      budget: 120000,
      openForBidding: false,
      postedDate: "20 Mar 2026",
      proposals: [
        {
          vendorName: "SecureTech India",
          price: 115000,
          description: "Hikvision cameras with cloud backup",
          accepted: true,
        },
      ],
    },
  ];
}

function saveCommunityJobs(list: CommunityJob[]) {
  localStorage.setItem(STORAGE_COMMUNITY_JOBS, JSON.stringify(list));
}

export function CommunityBiddingSection({
  isAdmin = false,
}: { isAdmin?: boolean }) {
  const [jobs, setJobs] = useState<CommunityJob[]>(loadCommunityJobs);
  const [proposalTarget, setProposalTarget] = useState<CommunityJob | null>(
    null,
  );
  const [proposal, setProposal] = useState({
    vendorName: "",
    price: "",
    description: "",
  });
  const [newJobOpen, setNewJobOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    budget: "",
    openForBidding: true,
  });

  const submitProposal = () => {
    if (
      !proposalTarget ||
      !proposal.vendorName ||
      !proposal.price ||
      !proposal.description
    ) {
      toast.error("Fill in all proposal fields");
      return;
    }
    setJobs((prev) => {
      const updated = prev.map((j) =>
        j.id === proposalTarget.id
          ? {
              ...j,
              proposals: [
                ...j.proposals,
                {
                  vendorName: proposal.vendorName,
                  price: Number(proposal.price),
                  description: proposal.description,
                },
              ],
            }
          : j,
      );
      saveCommunityJobs(updated);
      return updated;
    });
    toast.success("Proposal submitted successfully!");
    setProposalTarget(null);
    setProposal({ vendorName: "", price: "", description: "" });
  };

  const acceptProposal = (jobId: string, vendorName: string) => {
    setJobs((prev) => {
      const updated = prev.map((j) =>
        j.id === jobId
          ? {
              ...j,
              openForBidding: false,
              proposals: j.proposals.map((p) => ({
                ...p,
                accepted: p.vendorName === vendorName,
              })),
            }
          : j,
      );
      saveCommunityJobs(updated);
      return updated;
    });
    toast.success(`Proposal from ${vendorName} accepted!`);
  };

  const createJob = () => {
    if (!newJob.title || !newJob.description || !newJob.budget) {
      toast.error("Fill in all fields");
      return;
    }
    const j: CommunityJob = {
      id: `cj_${Date.now()}`,
      title: newJob.title,
      description: newJob.description,
      budget: Number(newJob.budget),
      openForBidding: newJob.openForBidding,
      postedDate: new Date().toLocaleDateString("en-IN"),
      proposals: [],
    };
    setJobs((prev) => {
      const updated = [j, ...prev];
      saveCommunityJobs(updated);
      return updated;
    });
    setNewJobOpen(false);
    setNewJob({ title: "", description: "", budget: "", openForBidding: true });
    toast.success("Job posted for bidding!");
  };

  return (
    <div className="space-y-4" data-ocid="community.bidding.panel">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-base">Vendor Bidding</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {isAdmin
              ? "Post maintenance jobs and review vendor proposals"
              : "Submit proposals for open jobs"}
          </p>
        </div>
        {isAdmin && (
          <Button
            size="sm"
            onClick={() => setNewJobOpen(true)}
            data-ocid="community.bidding.open_modal_button"
          >
            <Gavel size={12} className="mr-1.5" />
            Post Job
          </Button>
        )}
      </div>

      {jobs.length === 0 ? (
        <div
          className="text-center py-8 text-muted-foreground"
          data-ocid="community.bidding.empty_state"
        >
          <p className="text-sm">No jobs posted yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <Card
              key={job.id}
              className="border-border/60"
              data-ocid={`community.bidding.item.${i + 1}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-sm">{job.title}</CardTitle>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Posted {job.postedDate}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      className={`text-[9px] ${job.openForBidding ? "bg-green-500/15 text-green-700 border-green-400/30" : "bg-muted text-muted-foreground"}`}
                    >
                      {job.openForBidding ? "Open for Bids" : "Closed"}
                    </Badge>
                    <span className="text-xs font-medium text-primary">
                      Budget: ₹{job.budget.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-xs text-muted-foreground">
                  {job.description}
                </p>

                {job.proposals.length > 0 && (
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground mb-2">
                      {job.proposals.length} Proposal(s)
                    </div>
                    <div className="space-y-2">
                      {job.proposals.map((p) => (
                        <div
                          key={`${p.vendorName}-${p.price}`}
                          className={`flex items-start justify-between p-2.5 rounded-lg border text-xs ${
                            p.accepted
                              ? "border-green-400/50 bg-green-500/5"
                              : "border-border/50 bg-muted/30"
                          }`}
                        >
                          <div>
                            <div className="font-medium">{p.vendorName}</div>
                            <div className="text-muted-foreground mt-0.5">
                              {p.description}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0 ml-3">
                            <span className="font-bold text-primary">
                              ₹{p.price.toLocaleString("en-IN")}
                            </span>
                            {p.accepted ? (
                              <Badge className="text-[9px] bg-green-500/15 text-green-700 border-green-400/30">
                                <CheckCircle size={8} className="mr-0.5" />
                                Accepted
                              </Badge>
                            ) : isAdmin && job.openForBidding ? (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-5 text-[9px] px-1.5"
                                onClick={() =>
                                  acceptProposal(job.id, p.vendorName)
                                }
                                data-ocid="community.bidding.confirm_button"
                              >
                                Accept
                              </Button>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!isAdmin && job.openForBidding && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 text-xs"
                    onClick={() => setProposalTarget(job)}
                    data-ocid="community.bidding.primary_button"
                  >
                    <Gavel size={11} className="mr-1.5" />
                    Submit Proposal
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Submit Proposal Dialog */}
      <Dialog
        open={!!proposalTarget}
        onOpenChange={() => setProposalTarget(null)}
      >
        <DialogContent data-ocid="community.bidding.dialog">
          <DialogHeader>
            <DialogTitle>Submit Proposal — {proposalTarget?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Your Company / Name</Label>
              <Input
                value={proposal.vendorName}
                onChange={(e) =>
                  setProposal((p) => ({ ...p, vendorName: e.target.value }))
                }
                placeholder="e.g. ABC Services"
                data-ocid="community.bidding.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Your Price (INR)</Label>
              <Input
                type="number"
                value={proposal.price}
                onChange={(e) =>
                  setProposal((p) => ({ ...p, price: e.target.value }))
                }
                placeholder={`Under ₹${proposalTarget?.budget.toLocaleString("en-IN")}`}
                data-ocid="community.bidding.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Proposal Description</Label>
              <Textarea
                value={proposal.description}
                onChange={(e) =>
                  setProposal((p) => ({ ...p, description: e.target.value }))
                }
                rows={3}
                placeholder="Describe your approach and experience..."
                data-ocid="community.bidding.textarea"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setProposalTarget(null)}
              data-ocid="community.bidding.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={submitProposal}
              data-ocid="community.bidding.submit_button"
            >
              Submit Proposal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Post New Job Dialog (Admin) */}
      <Dialog open={newJobOpen} onOpenChange={setNewJobOpen}>
        <DialogContent data-ocid="community.bidding.modal">
          <DialogHeader>
            <DialogTitle>Post Job for Bidding</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Job Title</Label>
              <Input
                value={newJob.title}
                onChange={(e) =>
                  setNewJob((j) => ({ ...j, title: e.target.value }))
                }
                placeholder="e.g. Plumbing Repair"
                data-ocid="community.bidding.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Description</Label>
              <Textarea
                value={newJob.description}
                onChange={(e) =>
                  setNewJob((j) => ({ ...j, description: e.target.value }))
                }
                rows={3}
                placeholder="Describe the work required..."
                data-ocid="community.bidding.textarea"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Budget (INR)</Label>
              <Input
                type="number"
                value={newJob.budget}
                onChange={(e) =>
                  setNewJob((j) => ({ ...j, budget: e.target.value }))
                }
                placeholder="50000"
                data-ocid="community.bidding.input"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="openBid"
                checked={newJob.openForBidding}
                onChange={(e) =>
                  setNewJob((j) => ({ ...j, openForBidding: e.target.checked }))
                }
                className="w-4 h-4"
              />
              <Label htmlFor="openBid" className="text-xs cursor-pointer">
                Open for vendor bidding immediately
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setNewJobOpen(false)}
              data-ocid="community.bidding.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={createJob}
              data-ocid="community.bidding.submit_button"
            >
              Post Job
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
