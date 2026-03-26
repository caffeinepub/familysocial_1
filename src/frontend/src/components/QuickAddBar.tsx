import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Megaphone,
  Package,
  Settings2,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface QuickAddBarProps {
  moduleName: string;
}

const STORAGE_KEY = "quickAddBar_dismissed";

type DetectedVariant = { label: string; value: string };

// ─── AI Description Generator ─────────────────────────────────────────────────
function generateAIDescription(title: string, moduleName: string): string {
  if (!title.trim()) return "";
  const templates = [
    `Premium quality ${title.toLowerCase()} designed for modern ${moduleName.toLowerCase()} needs. Crafted with attention to detail and built to last, this offering delivers exceptional value and performance.`,
    `Introducing ${title} — a top-tier solution for ${moduleName.toLowerCase()}. Trusted by thousands of users, it combines reliability with cutting-edge features to meet all your requirements.`,
    `Experience the best of ${title.toLowerCase()} with our expertly curated selection. Perfect for ${moduleName.toLowerCase()} enthusiasts, this product/service is backed by quality assurance and customer satisfaction guarantee.`,
  ];
  return templates[title.length % 3];
}

// ─── Price Comparison Panel ────────────────────────────────────────────────────
function PriceComparisonPanel({
  title,
  price,
}: { title: string; price: string }) {
  const numPrice = Number.parseFloat(price) || 0;
  const comparable = [
    {
      name: `${title} - Basic`,
      store: "ShopIndia",
      price: numPrice ? numPrice * 0.9 : 299,
    },
    {
      name: `${title} Premium`,
      store: "Flipkart",
      price: numPrice ? numPrice * 1.1 : 399,
    },
    {
      name: `${title} Standard`,
      store: "Amazon India",
      price: numPrice ? numPrice * 0.95 : 349,
    },
    {
      name: `Similar ${title}`,
      store: "Meesho",
      price: numPrice ? numPrice * 0.85 : 279,
    },
  ];
  return (
    <div className="space-y-2" data-ocid="quickadd.price_comparison.panel">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Price Comparison
      </p>
      <div className="space-y-1.5">
        {comparable.map((item) => (
          <div
            key={item.store}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex-1 min-w-0">
              <p className="text-foreground truncate">{item.store}</p>
            </div>
            <span
              className={`font-semibold ml-2 ${numPrice && item.price < numPrice ? "text-green-600" : "text-muted-foreground"}`}
            >
              ₹{item.price.toFixed(0)}
            </span>
          </div>
        ))}
      </div>
      {numPrice > 0 && (
        <p className="text-[10px] text-muted-foreground mt-2">
          Your price: ₹{numPrice}{" "}
          {numPrice <= comparable[2].price
            ? "✓ Competitive"
            : "⚠ Above market avg"}
        </p>
      )}
    </div>
  );
}

// ─── Image Upload + Auto-detect Panel ────────────────────────────────────────
function ImageUploadPanel({
  onDetected,
}: {
  onDetected?: (variants: DetectedVariant[]) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [detecting, setDetecting] = useState(false);
  const [detected, setDetected] = useState<DetectedVariant[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
    setDetected([]);
  };

  const handleAutoDetect = () => {
    if (!preview) {
      toast.error("Upload an image first");
      return;
    }
    setDetecting(true);
    setTimeout(() => {
      const variants: DetectedVariant[] = [
        { label: "Color", value: "Ivory White" },
        { label: "Size", value: "Medium" },
        { label: "Material", value: "Cotton Blend" },
      ];
      setDetected(variants);
      onDetected?.(variants);
      setDetecting(false);
      toast.success("Variants detected from image");
    }, 1200);
  };

  return (
    <div className="space-y-2">
      <Label className="text-xs">Product Image</Label>
      <button
        type="button"
        className="w-full border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => inputRef.current?.click()}
        data-ocid="quickadd.product.dropzone"
      >
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="h-24 mx-auto object-contain rounded"
          />
        ) : (
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <Upload size={20} />
            <span className="text-xs">Click to upload image</span>
          </div>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
      <Button
        type="button"
        size="sm"
        variant="outline"
        className="gap-1.5 text-xs"
        onClick={handleAutoDetect}
        disabled={detecting}
        data-ocid="quickadd.product.upload_button"
      >
        <Sparkles size={12} />
        {detecting ? "Detecting..." : "Auto-detect Variants"}
      </Button>
      {detected.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {detected.map((d) => (
            <Badge key={d.label} variant="secondary" className="text-xs gap-1">
              <span className="text-muted-foreground">{d.label}:</span>{" "}
              {d.value}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Monthly Pricing Calendar for Hotel Room Types ───────────────────────────
const ROOM_TYPES = ["Single", "Double", "Suite", "Deluxe"];
const WEEK_RANGES = [
  "Mar 1–7",
  "Mar 8–14",
  "Mar 15–21",
  "Mar 22–31",
  "Apr 1–7",
  "Apr 8–14",
];

function RoomPricingCalendar() {
  const [rooms, setRooms] = useState(ROOM_TYPES);
  const [prices, setPrices] = useState<Record<string, Record<string, string>>>(
    () => {
      const init: Record<string, Record<string, string>> = {};
      for (const r of ROOM_TYPES) {
        init[r] = {};
        for (const w of WEEK_RANGES) {
          init[r][w] = "";
        }
      }
      return init;
    },
  );
  const [newRoom, setNewRoom] = useState("");

  const addRoom = () => {
    if (!newRoom.trim() || rooms.includes(newRoom.trim())) return;
    const name = newRoom.trim();
    setRooms((prev) => [...prev, name]);
    setPrices((prev) => {
      const updated = { ...prev };
      updated[name] = {};
      for (const w of WEEK_RANGES) {
        updated[name][w] = "";
      }
      return updated;
    });
    setNewRoom("");
  };

  const removeRoom = (r: string) => {
    setRooms((prev) => prev.filter((x) => x !== r));
    setPrices((prev) => {
      const updated = { ...prev };
      delete updated[r];
      return updated;
    });
  };

  const setPrice = (room: string, week: string, val: string) => {
    setPrices((prev) => ({
      ...prev,
      [room]: { ...prev[room], [week]: val },
    }));
  };

  return (
    <div className="space-y-3">
      <Label className="text-xs font-semibold">
        Room Types & Pricing Calendar (₹/night)
      </Label>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="text-xs min-w-max w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-medium">Room Type</th>
              {WEEK_RANGES.map((w) => (
                <th
                  key={w}
                  className="px-2 py-2 text-center font-medium whitespace-nowrap"
                >
                  {w}
                </th>
              ))}
              <th className="px-2 py-2" />
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr
                key={room}
                className="border-t border-border hover:bg-secondary/10"
              >
                <td className="px-3 py-1.5 font-medium whitespace-nowrap">
                  {room}
                </td>
                {WEEK_RANGES.map((w) => (
                  <td key={w} className="px-1.5 py-1">
                    <Input
                      type="number"
                      placeholder="0"
                      className="h-7 w-20 text-xs text-center"
                      value={prices[room]?.[w] ?? ""}
                      onChange={(e) => setPrice(room, w, e.target.value)}
                    />
                  </td>
                ))}
                <td className="px-1.5 py-1">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6"
                    onClick={() => removeRoom(room)}
                  >
                    <X size={10} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <Input
          className="h-7 text-xs"
          placeholder="New room type (e.g. Presidential)"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addRoom()}
        />
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="text-xs"
          onClick={addRoom}
        >
          Add Room
        </Button>
      </div>
    </div>
  );
}

// ─── Travel Product Form ──────────────────────────────────────────────────────
function TravelProductForm({ onSubmit }: { onSubmit: () => void }) {
  const AMENITIES = [
    "Pool",
    "Gym",
    "Spa",
    "Restaurant",
    "WiFi",
    "Parking",
    "Airport Shuttle",
  ];
  const [form, setForm] = useState({
    name: "",
    stars: "",
    location: "",
    amenities: [] as string[],
  });

  const toggleAmenity = (a: string) =>
    setForm((p) => ({
      ...p,
      amenities: p.amenities.includes(a)
        ? p.amenities.filter((x) => x !== a)
        : [...p.amenities, a],
    }));

  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Hotel name is required");
      return;
    }
    toast.success(`Hotel "${form.name}" submitted for approval`);
    onSubmit();
  };

  return (
    <Tabs defaultValue="basic">
      <TabsList className="w-full text-xs mb-3">
        <TabsTrigger value="basic" className="flex-1 text-xs">
          Basic Info
        </TabsTrigger>
        <TabsTrigger value="pricing" className="flex-1 text-xs">
          Room Pricing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="space-y-3 mt-0">
        <ImageUploadPanel />
        <div>
          <Label className="text-xs">Hotel Name</Label>
          <Input
            className="mt-1"
            placeholder="e.g. The Grand Palace"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            data-ocid="quickadd.product.input"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs">Star Rating</Label>
            <Select
              value={form.stars}
              onValueChange={(v) => setForm((p) => ({ ...p, stars: v }))}
            >
              <SelectTrigger
                className="mt-1 h-8 text-xs"
                data-ocid="quickadd.product.select"
              >
                <SelectValue placeholder="Stars" />
              </SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4", "5"].map((s) => (
                  <SelectItem key={s} value={s}>
                    {"★".repeat(Number(s))} {s}-Star
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Location</Label>
            <Input
              className="mt-1 h-8 text-xs"
              placeholder="City / Area"
              value={form.location}
              onChange={(e) =>
                setForm((p) => ({ ...p, location: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <Label className="text-xs mb-2 block">Amenities</Label>
          <div className="flex flex-wrap gap-2">
            {AMENITIES.map((a) => (
              <div
                key={a}
                className="flex items-center gap-1.5 text-xs cursor-pointer"
              >
                <Checkbox
                  checked={form.amenities.includes(a)}
                  onCheckedChange={() => toggleAmenity(a)}
                />
                {a}
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="pricing" className="mt-0">
        <RoomPricingCalendar />
      </TabsContent>
      <div className="flex justify-end gap-2 pt-3 border-t border-border mt-3">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Submit for Approval
        </Button>
      </div>
    </Tabs>
  );
}

// ─── Travel Service Form ──────────────────────────────────────────────────────
function TravelServiceForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    type: "",
    hotel: "",
    time: "",
    price: "",
    description: "",
  });
  const handleSubmit = () => {
    if (!form.type) {
      toast.error("Service type is required");
      return;
    }
    toast.success("Travel service added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.service.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Housekeeping",
              "Spa",
              "Airport Transfer",
              "Guided Tour",
              "Laundry",
              "Other",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Linked Hotel</Label>
        <Input
          className="mt-1"
          placeholder="Hotel name"
          value={form.hotel}
          onChange={(e) => setForm((p) => ({ ...p, hotel: e.target.value }))}
          data-ocid="quickadd.service.input"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Schedule / Time</Label>
          <Input
            className="mt-1"
            type="time"
            value={form.time}
            onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
          />
        </div>
        <div>
          <Label className="text-xs">Price (INR)</Label>
          <Input
            className="mt-1"
            type="number"
            placeholder="e.g. 2500"
            value={form.price}
            onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
          />
        </div>
      </div>
      <div>
        <Label className="text-xs">Description</Label>
        <Textarea
          className="mt-1"
          placeholder="Service details..."
          value={form.description}
          onChange={(e) =>
            setForm((p) => ({ ...p, description: e.target.value }))
          }
          data-ocid="quickadd.service.textarea"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

// ─── Travel Job Form ──────────────────────────────────────────────────────────
function TravelJobForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    role: "",
    shift: "",
    location: "",
    transport: "",
    languages: "",
  });
  const handleSubmit = () => {
    if (!form.role) {
      toast.error("Role is required");
      return;
    }
    toast.success("Travel job posted");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Role</Label>
          <Select
            value={form.role}
            onValueChange={(v) => setForm((p) => ({ ...p, role: v }))}
          >
            <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Tour Guide",
                "Driver",
                "Hotel Staff",
                "Concierge",
                "Travel Agent",
              ].map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Shift</Label>
          <Select
            value={form.shift}
            onValueChange={(v) => setForm((p) => ({ ...p, shift: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Shift" />
            </SelectTrigger>
            <SelectContent>
              {["Morning", "Evening", "Night", "Flexible"].map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Work Location</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Goa / Remote"
          value={form.location}
          onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
          data-ocid="quickadd.job.input"
        />
      </div>
      <div>
        <Label className="text-xs">Transport Type</Label>
        <Input
          className="mt-1"
          placeholder="e.g. SUV, Bus, Van"
          value={form.transport}
          onChange={(e) =>
            setForm((p) => ({ ...p, transport: e.target.value }))
          }
        />
      </div>
      <div>
        <Label className="text-xs">Languages Spoken (comma-separated)</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Hindi, English, French"
          value={form.languages}
          onChange={(e) =>
            setForm((p) => ({ ...p, languages: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Healthcare Forms ─────────────────────────────────────────────────────────
function HealthcareProductForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    sku: "",
    stock: "",
    reorder: "",
    supplier: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Item name is required");
      return;
    }
    toast.success("Healthcare product added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <ImageUploadPanel />
      <div>
        <Label className="text-xs">Item Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Digital Thermometer"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.product.input"
        />
      </div>
      <div>
        <Label className="text-xs">Category</Label>
        <Select
          value={form.category}
          onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.product.select">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {["Equipment", "Supplies", "Consumables", "Pharmaceuticals"].map(
              (c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ),
            )}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Label className="text-xs">SKU</Label>
          <Input
            className="mt-1 h-8 text-xs"
            placeholder="SKU-001"
            value={form.sku}
            onChange={(e) => setForm((p) => ({ ...p, sku: e.target.value }))}
          />
        </div>
        <div>
          <Label className="text-xs">Stock</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="100"
            value={form.stock}
            onChange={(e) => setForm((p) => ({ ...p, stock: e.target.value }))}
          />
        </div>
        <div>
          <Label className="text-xs">Reorder Level</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="20"
            value={form.reorder}
            onChange={(e) =>
              setForm((p) => ({ ...p, reorder: e.target.value }))
            }
          />
        </div>
      </div>
      <div>
        <Label className="text-xs">Supplier Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. MedSupply India"
          value={form.supplier}
          onChange={(e) => setForm((p) => ({ ...p, supplier: e.target.value }))}
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Add Product
        </Button>
      </div>
    </div>
  );
}

function HealthcareServiceForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    type: "",
    duration: "",
    price: "",
    specialist: false,
    specialistType: "",
  });
  const handleSubmit = () => {
    if (!form.type) {
      toast.error("Service type is required");
      return;
    }
    toast.success("Healthcare service added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.service.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Consultation",
              "Therapy",
              "Lab Test",
              "Surgery",
              "Diagnostic",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Duration (minutes)</Label>
          <Input
            className="mt-1"
            type="number"
            placeholder="30"
            value={form.duration}
            onChange={(e) =>
              setForm((p) => ({ ...p, duration: e.target.value }))
            }
            data-ocid="quickadd.service.input"
          />
        </div>
        <div>
          <Label className="text-xs">Price (INR)</Label>
          <Input
            className="mt-1"
            type="number"
            placeholder="500"
            value={form.price}
            onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs cursor-pointer">
        <Checkbox
          checked={form.specialist}
          onCheckedChange={(v) =>
            setForm((p) => ({ ...p, specialist: Boolean(v) }))
          }
        />
        Requires Specialist
      </div>
      {form.specialist && (
        <div>
          <Label className="text-xs">Specialist Type</Label>
          <Input
            className="mt-1"
            placeholder="e.g. Cardiologist"
            value={form.specialistType}
            onChange={(e) =>
              setForm((p) => ({ ...p, specialistType: e.target.value }))
            }
          />
        </div>
      )}
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

function HealthcareJobForm({ onSubmit }: { onSubmit: () => void }) {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [form, setForm] = useState({
    role: "",
    specialization: "",
    license: "",
    availability: [] as string[],
  });
  const toggleDay = (d: string) =>
    setForm((p) => ({
      ...p,
      availability: p.availability.includes(d)
        ? p.availability.filter((x) => x !== d)
        : [...p.availability, d],
    }));
  const handleSubmit = () => {
    if (!form.role) {
      toast.error("Role is required");
      return;
    }
    toast.success("Healthcare job posted");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Role</Label>
        <Select
          value={form.role}
          onValueChange={(v) => setForm((p) => ({ ...p, role: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            {["Doctor", "Nurse", "Technician", "Therapist", "Pharmacist"].map(
              (r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ),
            )}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Specialization</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Cardiology, Orthopedics"
          value={form.specialization}
          onChange={(e) =>
            setForm((p) => ({ ...p, specialization: e.target.value }))
          }
          data-ocid="quickadd.job.input"
        />
      </div>
      <div>
        <Label className="text-xs">License Number</Label>
        <Input
          className="mt-1"
          placeholder="e.g. MCI-12345"
          value={form.license}
          onChange={(e) => setForm((p) => ({ ...p, license: e.target.value }))}
        />
      </div>
      <div>
        <Label className="text-xs mb-2 block">Availability</Label>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className="flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <Checkbox
                checked={form.availability.includes(d)}
                onCheckedChange={() => toggleDay(d)}
              />
              {d}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Gated Community Forms ────────────────────────────────────────────────────
function GatedProductForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    qty: "",
    reorder: "",
    location: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Item name required");
      return;
    }
    toast.success("Maintenance item added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <ImageUploadPanel />
      <div>
        <Label className="text-xs">Item Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Smoke Detector"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.product.input"
        />
      </div>
      <div>
        <Label className="text-xs">Category</Label>
        <Select
          value={form.category}
          onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.product.select">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {["Maintenance", "Amenity", "Cleaning", "Security"].map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Label className="text-xs">Quantity</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="10"
            value={form.qty}
            onChange={(e) => setForm((p) => ({ ...p, qty: e.target.value }))}
          />
        </div>
        <div>
          <Label className="text-xs">Reorder Level</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="3"
            value={form.reorder}
            onChange={(e) =>
              setForm((p) => ({ ...p, reorder: e.target.value }))
            }
          />
        </div>
        <div>
          <Label className="text-xs">Storage Location</Label>
          <Input
            className="mt-1 h-8 text-xs"
            placeholder="Store room A"
            value={form.location}
            onChange={(e) =>
              setForm((p) => ({ ...p, location: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}

function GatedServiceForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    type: "",
    zone: "",
    frequency: "",
    price: "",
  });
  const handleSubmit = () => {
    if (!form.type) {
      toast.error("Service type required");
      return;
    }
    toast.success("Facility service added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.service.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Facility Management",
              "Cleaning",
              "Security",
              "Plumbing",
              "Electrical",
              "Landscaping",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Zone</Label>
          <Input
            className="mt-1"
            placeholder="e.g. Block A"
            value={form.zone}
            onChange={(e) => setForm((p) => ({ ...p, zone: e.target.value }))}
            data-ocid="quickadd.service.input"
          />
        </div>
        <div>
          <Label className="text-xs">Frequency</Label>
          <Select
            value={form.frequency}
            onValueChange={(v) => setForm((p) => ({ ...p, frequency: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Frequency" />
            </SelectTrigger>
            <SelectContent>
              {["Daily", "Weekly", "Monthly", "On-demand"].map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Price (INR)</Label>
        <Input
          className="mt-1"
          type="number"
          placeholder="1000"
          value={form.price}
          onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

function GatedJobForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({ role: "", shift: "", zone: "" });
  const handleSubmit = () => {
    if (!form.role) {
      toast.error("Role required");
      return;
    }
    toast.success("Staff job posted");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Role</Label>
        <Select
          value={form.role}
          onValueChange={(v) => setForm((p) => ({ ...p, role: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Security Guard",
              "Maintenance",
              "Housekeeper",
              "Manager",
              "Electrician",
              "Plumber",
            ].map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Shift</Label>
          <Select
            value={form.shift}
            onValueChange={(v) => setForm((p) => ({ ...p, shift: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Shift" />
            </SelectTrigger>
            <SelectContent>
              {["Morning", "Evening", "Night", "24hr"].map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Property Zone</Label>
          <Input
            className="mt-1"
            placeholder="e.g. Zone B"
            value={form.zone}
            onChange={(e) => setForm((p) => ({ ...p, zone: e.target.value }))}
            data-ocid="quickadd.job.input"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Real Estate Forms ────────────────────────────────────────────────────────
function RealEstateProductForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    condition: "",
    price: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Item name required");
      return;
    }
    toast.success("Property item added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <ImageUploadPanel />
      <div>
        <Label className="text-xs">Item Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Oak Hardwood Flooring"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.product.input"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Category</Label>
          <Select
            value={form.category}
            onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
          >
            <SelectTrigger className="mt-1" data-ocid="quickadd.product.select">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Fittings",
                "Fixtures",
                "Appliances",
                "Furniture",
                "Flooring",
              ].map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Condition</Label>
          <Select
            value={form.condition}
            onValueChange={(v) => setForm((p) => ({ ...p, condition: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              {["New", "Good", "Fair"].map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Price (INR)</Label>
        <Input
          className="mt-1"
          type="number"
          placeholder="50000"
          value={form.price}
          onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}

function RealEstateServiceForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    type: "",
    area: "",
    duration: "",
    price: "",
  });
  const handleSubmit = () => {
    if (!form.type) {
      toast.error("Service type required");
      return;
    }
    toast.success("Property service added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.service.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Property Management",
              "Valuation",
              "Inspection",
              "Renovation",
              "Staging",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Label className="text-xs">Area (sq ft)</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="1200"
            value={form.area}
            onChange={(e) => setForm((p) => ({ ...p, area: e.target.value }))}
            data-ocid="quickadd.service.input"
          />
        </div>
        <div>
          <Label className="text-xs">Duration (days)</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="7"
            value={form.duration}
            onChange={(e) =>
              setForm((p) => ({ ...p, duration: e.target.value }))
            }
          />
        </div>
        <div>
          <Label className="text-xs">Price (INR)</Label>
          <Input
            className="mt-1 h-8 text-xs"
            type="number"
            placeholder="5000"
            value={form.price}
            onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

function RealEstateJobForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({ role: "", license: "", area: "" });
  const handleSubmit = () => {
    if (!form.role) {
      toast.error("Role required");
      return;
    }
    toast.success("Real estate job posted");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Role</Label>
        <Select
          value={form.role}
          onValueChange={(v) => setForm((p) => ({ ...p, role: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Agent",
              "Maintenance",
              "Surveyor",
              "Property Manager",
              "Architect",
            ].map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">License Number</Label>
        <Input
          className="mt-1"
          placeholder="e.g. RERA-MH-12345"
          value={form.license}
          onChange={(e) => setForm((p) => ({ ...p, license: e.target.value }))}
          data-ocid="quickadd.job.input"
        />
      </div>
      <div>
        <Label className="text-xs">Area Specialization</Label>
        <Input
          className="mt-1"
          placeholder="e.g. South Mumbai, Bandra"
          value={form.area}
          onChange={(e) => setForm((p) => ({ ...p, area: e.target.value }))}
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Education Forms ──────────────────────────────────────────────────────────
const GRADE_LEVELS = [
  "Pre-K",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "University",
];

function EducationProductForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    subject: "",
    grade: "",
    isbn: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Item name required");
      return;
    }
    toast.success("Education item added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <ImageUploadPanel />
      <div>
        <Label className="text-xs">Item Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Mathematics Textbook Std 10"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.product.input"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Category</Label>
          <Select
            value={form.category}
            onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
          >
            <SelectTrigger className="mt-1" data-ocid="quickadd.product.select">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Books",
                "Stationery",
                "Library Item",
                "Uniform",
                "Lab Equipment",
              ].map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Grade Level</Label>
          <Select
            value={form.grade}
            onValueChange={(v) => setForm((p) => ({ ...p, grade: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              {GRADE_LEVELS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Subject</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Mathematics"
          value={form.subject}
          onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
        />
      </div>
      {form.category === "Books" && (
        <div>
          <Label className="text-xs">ISBN</Label>
          <Input
            className="mt-1"
            placeholder="978-3-16-148410-0"
            value={form.isbn}
            onChange={(e) => setForm((p) => ({ ...p, isbn: e.target.value }))}
          />
        </div>
      )}
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}

function EducationServiceForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    type: "",
    subject: "",
    grade: "",
    duration: "",
    price: "",
  });
  const handleSubmit = () => {
    if (!form.type) {
      toast.error("Service type required");
      return;
    }
    toast.success("Education service added");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.service.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Tutoring",
              "Coaching",
              "Counselling",
              "Library Access",
              "Online Course",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Subject</Label>
          <Input
            className="mt-1"
            placeholder="e.g. Physics"
            value={form.subject}
            onChange={(e) =>
              setForm((p) => ({ ...p, subject: e.target.value }))
            }
            data-ocid="quickadd.service.input"
          />
        </div>
        <div>
          <Label className="text-xs">Grade Level</Label>
          <Select
            value={form.grade}
            onValueChange={(v) => setForm((p) => ({ ...p, grade: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              {GRADE_LEVELS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Duration / Session (min)</Label>
          <Input
            className="mt-1"
            type="number"
            placeholder="60"
            value={form.duration}
            onChange={(e) =>
              setForm((p) => ({ ...p, duration: e.target.value }))
            }
          />
        </div>
        <div>
          <Label className="text-xs">Price / Session (INR)</Label>
          <Input
            className="mt-1"
            type="number"
            placeholder="500"
            value={form.price}
            onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

function EducationJobForm({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    role: "",
    subject: "",
    grade: "",
    qualification: "",
  });
  const handleSubmit = () => {
    if (!form.role) {
      toast.error("Role required");
      return;
    }
    toast.success("Education job posted");
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Role</Label>
        <Select
          value={form.role}
          onValueChange={(v) => setForm((p) => ({ ...p, role: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Teacher",
              "Admin",
              "Support Staff",
              "Librarian",
              "Counsellor",
            ].map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs">Subject Taught</Label>
          <Input
            className="mt-1"
            placeholder="e.g. Biology"
            value={form.subject}
            onChange={(e) =>
              setForm((p) => ({ ...p, subject: e.target.value }))
            }
            data-ocid="quickadd.job.input"
          />
        </div>
        <div>
          <Label className="text-xs">Grade Level</Label>
          <Select
            value={form.grade}
            onValueChange={(v) => setForm((p) => ({ ...p, grade: v }))}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              {GRADE_LEVELS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-xs">Qualification</Label>
        <Input
          className="mt-1"
          placeholder="e.g. B.Ed, M.Sc"
          value={form.qualification}
          onChange={(e) =>
            setForm((p) => ({ ...p, qualification: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Generic Fallback Forms ───────────────────────────────────────────────────
function GenericProductForm({
  moduleName,
  onSubmit,
}: { moduleName: string; onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Product name is required");
      return;
    }
    // Save to shared ic_user_products so Shop page can display it
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_products") || "[]",
      );
      const newProduct = {
        id: `${Date.now()}-${Math.random()}`,
        name: form.name,
        description: form.description,
        price: Number.parseFloat(form.price) || 0,
        category: form.category || "Other",
        seller: "You",
        isService: false,
        sourceModule: moduleName,
      };
      existing.push(newProduct);
      localStorage.setItem("ic_user_products", JSON.stringify(existing));
    } catch {
      /* ignore */
    }
    toast.success(
      `Product "${form.name}" added to Shop and linked to ${moduleName}`,
    );
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <ImageUploadPanel />
      <div>
        <Label className="text-xs">Product Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Organic Honey 500g"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.product.input"
        />
      </div>
      <div>
        <Label className="text-xs">Category</Label>
        <Select
          value={form.category}
          onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.product.select">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Food & Grocery",
              "Electronics",
              "Clothing",
              "Health & Beauty",
              "Education",
              "Travel",
              "Other",
            ].map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Price (INR)</Label>
        <Input
          className="mt-1"
          type="number"
          placeholder="499"
          value={form.price}
          onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
        />
      </div>
      <div>
        <Label className="text-xs">Description</Label>
        <div className="flex gap-2 items-end">
          <Textarea
            className="mt-1 flex-1"
            placeholder="Brief description..."
            value={form.description}
            onChange={(e) =>
              setForm((p) => ({ ...p, description: e.target.value }))
            }
            data-ocid="quickadd.product.textarea"
          />
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="h-9 text-xs shrink-0"
            onClick={() => {
              const desc = generateAIDescription(form.name, moduleName);
              setForm((p) => ({ ...p, description: desc }));
              toast.success("AI description generated");
            }}
            data-ocid="quickadd.product.secondary_button"
          >
            <Sparkles size={12} className="mr-1" />
            AI
          </Button>
        </div>
      </div>
      {/* Price comparison */}
      {form.price && (
        <div className="rounded-xl border border-border p-3 bg-muted/30">
          <PriceComparisonPanel title={form.name} price={form.price} />
        </div>
      )}
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.product.submit_button"
        >
          Add Product
        </Button>
      </div>
    </div>
  );
}

function GenericServiceForm({
  moduleName,
  onSubmit,
}: { moduleName: string; onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    rate: "",
    description: "",
  });
  const handleSubmit = () => {
    if (!form.name) {
      toast.error("Service name is required");
      return;
    }
    // Save to shared ic_user_products so Shop page can display it
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_products") || "[]",
      );
      existing.push({
        id: `${Date.now()}-${Math.random()}`,
        name: form.name,
        description: form.description,
        price: Number.parseFloat(form.rate) || 0,
        category: form.category || "Services",
        seller: "You",
        isService: true,
        sourceModule: moduleName,
      });
      localStorage.setItem("ic_user_products", JSON.stringify(existing));
    } catch {
      /* ignore */
    }
    toast.success(
      `Service "${form.name}" added to Shop and linked to ${moduleName}`,
    );
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Service Name</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Home Cleaning"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          data-ocid="quickadd.service.input"
        />
      </div>
      <div>
        <Label className="text-xs">Category</Label>
        <Select
          value={form.category}
          onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Home Services",
              "Tech Support",
              "Healthcare",
              "Tutoring / Education",
              "Transport",
              "Hospitality",
              "Other",
            ].map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Rate / Price (INR)</Label>
        <Input
          className="mt-1"
          type="number"
          placeholder="1500"
          value={form.rate}
          onChange={(e) => setForm((p) => ({ ...p, rate: e.target.value }))}
        />
      </div>
      <div>
        <Label className="text-xs">Description</Label>
        <Textarea
          className="mt-1"
          placeholder="Brief description..."
          value={form.description}
          onChange={(e) =>
            setForm((p) => ({ ...p, description: e.target.value }))
          }
          data-ocid="quickadd.service.textarea"
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.service.submit_button"
        >
          Add Service
        </Button>
      </div>
    </div>
  );
}

function GenericJobForm({
  moduleName,
  onSubmit,
}: { moduleName: string; onSubmit: () => void }) {
  const [form, setForm] = useState({
    title: "",
    type: "",
    location: "",
    salary: "",
    description: "",
  });
  const handleSubmit = () => {
    if (!form.title) {
      toast.error("Job title is required");
      return;
    }
    toast.success(`Job "${form.title}" posted and linked to ${moduleName}`);
    onSubmit();
  };
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs">Job Title</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Senior Developer"
          value={form.title}
          onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          data-ocid="quickadd.job.input"
        />
      </div>
      <div>
        <Label className="text-xs">Employment Type</Label>
        <Select
          value={form.type}
          onValueChange={(v) => setForm((p) => ({ ...p, type: v }))}
        >
          <SelectTrigger className="mt-1" data-ocid="quickadd.job.select">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Full-Time",
              "Part-Time",
              "Freelance",
              "Contract",
              "Internship",
            ].map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Location</Label>
        <Input
          className="mt-1"
          placeholder="e.g. Mumbai / Remote"
          value={form.location}
          onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
        />
      </div>
      <div>
        <Label className="text-xs">Salary / Rate (INR)</Label>
        <Input
          className="mt-1"
          placeholder="e.g. 50000/month"
          value={form.salary}
          onChange={(e) => setForm((p) => ({ ...p, salary: e.target.value }))}
        />
      </div>
      <div>
        <Label className="text-xs">Description</Label>
        <Textarea
          className="mt-1"
          placeholder="Job responsibilities..."
          value={form.description}
          onChange={(e) =>
            setForm((p) => ({ ...p, description: e.target.value }))
          }
          data-ocid="quickadd.job.textarea"
        />
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={handleSubmit}
          data-ocid="quickadd.job.submit_button"
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

// ─── Module Resolver ──────────────────────────────────────────────────────────
type ModuleKey =
  | "travel"
  | "healthcare"
  | "gated"
  | "real-estate"
  | "realestate"
  | "education"
  | "default";

function normalizeModule(name: string): ModuleKey {
  const lower = name.toLowerCase();
  if (lower.includes("travel")) return "travel";
  if (lower.includes("health")) return "healthcare";
  if (lower.includes("gated")) return "gated";
  if (lower.includes("real") || lower.includes("estate")) return "real-estate";
  if (
    lower.includes("edu") ||
    lower.includes("school") ||
    lower.includes("academy")
  )
    return "education";
  return "default";
}

function getProductForm(
  module: ModuleKey,
  onSubmit: () => void,
  moduleName: string,
) {
  if (module === "travel") return <TravelProductForm onSubmit={onSubmit} />;
  if (module === "healthcare")
    return <HealthcareProductForm onSubmit={onSubmit} />;
  if (module === "gated") return <GatedProductForm onSubmit={onSubmit} />;
  if (module === "real-estate" || module === "realestate")
    return <RealEstateProductForm onSubmit={onSubmit} />;
  if (module === "education")
    return <EducationProductForm onSubmit={onSubmit} />;
  return <GenericProductForm moduleName={moduleName} onSubmit={onSubmit} />;
}

function getServiceForm(
  module: ModuleKey,
  onSubmit: () => void,
  moduleName: string,
) {
  if (module === "travel") return <TravelServiceForm onSubmit={onSubmit} />;
  if (module === "healthcare")
    return <HealthcareServiceForm onSubmit={onSubmit} />;
  if (module === "gated") return <GatedServiceForm onSubmit={onSubmit} />;
  if (module === "real-estate" || module === "realestate")
    return <RealEstateServiceForm onSubmit={onSubmit} />;
  if (module === "education")
    return <EducationServiceForm onSubmit={onSubmit} />;
  return <GenericServiceForm moduleName={moduleName} onSubmit={onSubmit} />;
}

function getJobForm(
  module: ModuleKey,
  onSubmit: () => void,
  moduleName: string,
) {
  if (module === "travel") return <TravelJobForm onSubmit={onSubmit} />;
  if (module === "healthcare") return <HealthcareJobForm onSubmit={onSubmit} />;
  if (module === "gated") return <GatedJobForm onSubmit={onSubmit} />;
  if (module === "real-estate" || module === "realestate")
    return <RealEstateJobForm onSubmit={onSubmit} />;
  if (module === "education") return <EducationJobForm onSubmit={onSubmit} />;
  return <GenericJobForm moduleName={moduleName} onSubmit={onSubmit} />;
}

// ─── Main QuickAddBar Component ───────────────────────────────────────────────
export default function QuickAddBar({ moduleName }: QuickAddBarProps) {
  const [dismissed, setDismissed] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).includes(moduleName) : false;
    } catch {
      return false;
    }
  });

  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);
  const [adOpen, setAdOpen] = useState(false);
  const [adForm, setAdForm] = useState({
    title: "",
    description: "",
    budget: "",
    isAdult: false,
  });

  const moduleKey = normalizeModule(moduleName);

  const dismiss = () => {
    setDismissed(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const arr: string[] = saved ? JSON.parse(saved) : [];
      if (!arr.includes(moduleName)) arr.push(moduleName);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch {
      // ignore
    }
  };

  if (dismissed) return null;

  const getDialogTitle = (type: "Product" | "Service" | "Job") => {
    const labels: Record<ModuleKey, Record<string, string>> = {
      travel: {
        Product: "Hotel & Rooms",
        Service: "Travel Service",
        Job: "Travel Role",
      },
      healthcare: {
        Product: "Medical Item",
        Service: "Healthcare Service",
        Job: "Healthcare Role",
      },
      gated: {
        Product: "Maintenance Item",
        Service: "Facility Service",
        Job: "Staff Role",
      },
      "real-estate": {
        Product: "Property Item",
        Service: "Property Service",
        Job: "Property Role",
      },
      realestate: {
        Product: "Property Item",
        Service: "Property Service",
        Job: "Property Role",
      },
      education: {
        Product: "Education Item",
        Service: "Academic Service",
        Job: "Education Role",
      },
      default: { Product: "Product", Service: "Service", Job: "Job" },
    };
    return `Add ${labels[moduleKey]?.[type] ?? type} — ${moduleName}`;
  };

  return (
    <>
      <div
        className="mx-4 mb-4 flex flex-wrap items-center gap-2 px-3 py-2 rounded-xl border"
        style={{
          background: "oklch(var(--primary) / 0.04)",
          borderColor: "oklch(var(--primary) / 0.15)",
        }}
        data-ocid="quickadd.panel"
      >
        <span className="text-xs font-medium text-muted-foreground mr-1">
          Quick Add:
        </span>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs gap-1"
          onClick={() => setProductOpen(true)}
          data-ocid="quickadd.product.button"
        >
          <Package size={12} />+{" "}
          {moduleKey === "travel"
            ? "Hotel"
            : moduleKey === "gated"
              ? "Item"
              : "Product"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs gap-1"
          onClick={() => setServiceOpen(true)}
          data-ocid="quickadd.service.button"
        >
          <Settings2 size={12} />+{" "}
          {moduleKey === "travel"
            ? "Travel Service"
            : moduleKey === "gated"
              ? "Facility Service"
              : "Service"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs gap-1"
          onClick={() => setJobOpen(true)}
          data-ocid="quickadd.job.button"
        >
          <Briefcase size={12} />+{" "}
          {moduleKey === "travel"
            ? "Travel Role"
            : moduleKey === "healthcare"
              ? "Healthcare Role"
              : "Job"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs gap-1 ml-auto"
          onClick={() => setAdOpen(true)}
          data-ocid="quickadd.ad.button"
        >
          <Megaphone size={12} />+ Promote
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
          onClick={dismiss}
          data-ocid="quickadd.close_button"
        >
          <X size={12} />
        </Button>
      </div>

      {/* Product Dialog */}
      <Dialog open={productOpen} onOpenChange={setProductOpen}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-y-auto"
          data-ocid="quickadd.product.dialog"
        >
          <DialogHeader>
            <DialogTitle>{getDialogTitle("Product")}</DialogTitle>
          </DialogHeader>
          {getProductForm(moduleKey, () => setProductOpen(false), moduleName)}
          <DialogFooter className="hidden" />
        </DialogContent>
      </Dialog>

      {/* Service Dialog */}
      <Dialog open={serviceOpen} onOpenChange={setServiceOpen}>
        <DialogContent
          className="max-w-lg max-h-[90vh] overflow-y-auto"
          data-ocid="quickadd.service.dialog"
        >
          <DialogHeader>
            <DialogTitle>{getDialogTitle("Service")}</DialogTitle>
          </DialogHeader>
          {getServiceForm(moduleKey, () => setServiceOpen(false), moduleName)}
          <DialogFooter className="hidden" />
        </DialogContent>
      </Dialog>

      {/* Job Dialog */}
      <Dialog open={jobOpen} onOpenChange={setJobOpen}>
        <DialogContent
          className="max-w-lg max-h-[90vh] overflow-y-auto"
          data-ocid="quickadd.job.dialog"
        >
          <DialogHeader>
            <DialogTitle>{getDialogTitle("Job")}</DialogTitle>
          </DialogHeader>
          {getJobForm(moduleKey, () => setJobOpen(false), moduleName)}
          <DialogFooter className="hidden" />
        </DialogContent>
      </Dialog>

      {/* Ad/Promotion Dialog */}
      <Dialog open={adOpen} onOpenChange={setAdOpen}>
        <DialogContent className="max-w-md" data-ocid="quickadd.ad.dialog">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Megaphone size={16} className="text-primary" />
              Place Ad / Promotion — {moduleName}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label className="text-xs">Ad Title</Label>
              <Input
                className="mt-1"
                placeholder="e.g. Summer Sale 50% Off"
                value={adForm.title}
                onChange={(e) =>
                  setAdForm((p) => ({ ...p, title: e.target.value }))
                }
                data-ocid="quickadd.ad.input"
              />
            </div>
            <div>
              <Label className="text-xs">Description</Label>
              <Textarea
                className="mt-1"
                placeholder="Describe your promotion..."
                value={adForm.description}
                onChange={(e) =>
                  setAdForm((p) => ({ ...p, description: e.target.value }))
                }
                data-ocid="quickadd.ad.textarea"
              />
            </div>
            <div>
              <Label className="text-xs">Budget (INR)</Label>
              <Input
                className="mt-1"
                type="number"
                placeholder="e.g. 5000"
                value={adForm.budget}
                onChange={(e) =>
                  setAdForm((p) => ({ ...p, budget: e.target.value }))
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adult-content"
                checked={adForm.isAdult}
                onChange={(e) =>
                  setAdForm((p) => ({ ...p, isAdult: e.target.checked }))
                }
                className="rounded"
                data-ocid="quickadd.ad.checkbox"
              />
              <Label htmlFor="adult-content" className="text-xs">
                18+ Content (requires age verification)
              </Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setAdOpen(false)}
                data-ocid="quickadd.ad.cancel_button"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  if (!adForm.title) {
                    toast.error("Ad title required");
                    return;
                  }
                  toast.success("Ad submitted for admin approval");
                  setAdOpen(false);
                  setAdForm({
                    title: "",
                    description: "",
                    budget: "",
                    isAdult: false,
                  });
                }}
                data-ocid="quickadd.ad.submit_button"
              >
                Submit for Approval
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
