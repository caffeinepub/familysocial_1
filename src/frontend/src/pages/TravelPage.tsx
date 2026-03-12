import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  Bus,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Crown,
  Edit3,
  Hotel,
  MapPin,
  Navigation,
  Plane,
  Plus,
  Route,
  Star,
  Trash2,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";
import { useCurrency } from "../contexts/CurrencyContext";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type PrivacyLevel = "Private" | "Friends" | "Family" | "Public";
type CabType = "Economy" | "Comfort" | "Premium";
type TransportType = "Bus" | "Van" | "Car" | "Coaster";
type ActivityType =
  | "Sightseeing"
  | "Meal"
  | "Transport"
  | "Hotel"
  | "Free Time";

interface TourPackage {
  id: number;
  name: string;
  operator: string;
  destinations: string[];
  duration: number;
  price: number;
  totalSeats: number;
  availableSeats: number;
  commission: number;
  privacy: PrivacyLevel;
  description: string;
  gradient: string;
}

interface HotelEntry {
  id: number;
  name: string;
  city: string;
  stars: number;
  amenities: string[];
  pricePerNight: number;
  roomTypes: string[];
}

interface TransportRoute {
  id: number;
  from: string;
  to: string;
  type: TransportType;
  departureTime: string;
  availableSeats: number;
  pricePerSeat: number;
  pricePerVehicle: number;
}

interface Activity {
  id: number;
  time: string;
  name: string;
  location: string;
  type: ActivityType;
}

interface ItineraryDay {
  day: number;
  activities: Activity[];
  attachedHotelId?: number;
  attachedTransportId?: number;
}

interface Itinerary {
  id: number;
  title: string;
  days: number;
  dayPlans: ItineraryDay[];
}

// ─────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────
const MOCK_PACKAGES: TourPackage[] = [
  {
    id: 1,
    name: "Hunza Valley 7-Day Adventure",
    operator: "Northern Trails Co.",
    destinations: ["Lahore", "Islamabad", "Hunza", "Nagar"],
    duration: 7,
    price: 95000,
    totalSeats: 20,
    availableSeats: 8,
    commission: 10,
    privacy: "Public",
    description:
      "Experience the breathtaking valleys of Hunza and Nagar with guided treks, local cuisine, and cultural immersion.",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Murree Weekend Getaway",
    operator: "Hill Escape Tours",
    destinations: ["Lahore", "Murree", "Bhurban"],
    duration: 3,
    price: 22000,
    totalSeats: 15,
    availableSeats: 5,
    commission: 8,
    privacy: "Friends",
    description:
      "A refreshing 3-day escape to the cool pines of Murree with hotel stay and local sightseeing.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
  },
  {
    id: 3,
    name: "Maldives Honeymoon Special",
    operator: "Luxe Voyages Pvt.",
    destinations: ["Karachi", "Malé", "Baa Atoll"],
    duration: 7,
    price: 380000,
    totalSeats: 10,
    availableSeats: 3,
    commission: 15,
    privacy: "Family",
    description:
      "Overwater bungalow, sunrise snorkeling, and private beach dinners crafted for couples.",
    gradient: "from-pink-500 via-rose-500 to-red-600",
  },
  {
    id: 4,
    name: "Fairy Meadows Trek",
    operator: "Peak Seekers",
    destinations: ["Islamabad", "Raikot", "Fairy Meadows"],
    duration: 5,
    price: 55000,
    totalSeats: 12,
    availableSeats: 6,
    commission: 12,
    privacy: "Public",
    description:
      "Trek to the world's most beautiful meadow beneath Nanga Parbat with full camping gear provided.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: 5,
    name: "Nathia Gali Family Tour",
    operator: "Family Journeys",
    destinations: ["Rawalpindi", "Nathia Gali", "Dunga Gali"],
    duration: 4,
    price: 35000,
    totalSeats: 25,
    availableSeats: 12,
    commission: 7,
    privacy: "Public",
    description:
      "Kid-friendly forest trails, clean mountain air, and cozy family cottages in Nathia Gali.",
    gradient: "from-green-600 via-lime-600 to-emerald-600",
  },
  {
    id: 6,
    name: "Lahore to Islamabad Road Trip",
    operator: "Route 5 Travels",
    destinations: ["Lahore", "Kalar Kahar", "Islamabad"],
    duration: 2,
    price: 12000,
    totalSeats: 8,
    availableSeats: 4,
    commission: 5,
    privacy: "Friends",
    description:
      "Scenic road trip on the motorway with stops at Kalar Kahar and Salt Range viewpoints.",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
  },
];

const MOCK_HOTELS: HotelEntry[] = [
  {
    id: 1,
    name: "Pearl Continental Lahore",
    city: "Lahore",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 28000,
    roomTypes: ["Standard", "Deluxe", "Suite"],
  },
  {
    id: 2,
    name: "Marriott Islamabad",
    city: "Islamabad",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 32000,
    roomTypes: ["Standard", "Deluxe", "Suite"],
  },
  {
    id: 3,
    name: "Pearl Continental Karachi",
    city: "Karachi",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 26000,
    roomTypes: ["Standard", "Deluxe", "Suite"],
  },
  {
    id: 4,
    name: "Shangrila Resort Murree",
    city: "Murree",
    stars: 4,
    amenities: ["WiFi", "Parking", "Restaurant"],
    pricePerNight: 18000,
    roomTypes: ["Standard", "Deluxe"],
  },
  {
    id: 5,
    name: "Serena Hotel Faisalabad",
    city: "Faisalabad",
    stars: 4,
    amenities: ["WiFi", "Pool", "Restaurant", "Gym"],
    pricePerNight: 15000,
    roomTypes: ["Standard", "Deluxe", "Suite"],
  },
  {
    id: 6,
    name: "Eagle's Nest Hunza",
    city: "Hunza",
    stars: 3,
    amenities: ["WiFi", "Parking", "Restaurant"],
    pricePerNight: 8000,
    roomTypes: ["Standard", "Deluxe"],
  },
];

const MOCK_TRANSPORT: TransportRoute[] = [
  {
    id: 1,
    from: "Lahore",
    to: "Islamabad",
    type: "Bus",
    departureTime: "08:00 AM",
    availableSeats: 30,
    pricePerSeat: 1200,
    pricePerVehicle: 38000,
  },
  {
    id: 2,
    from: "Karachi",
    to: "Hyderabad",
    type: "Van",
    departureTime: "09:30 AM",
    availableSeats: 12,
    pricePerSeat: 600,
    pricePerVehicle: 8500,
  },
  {
    id: 3,
    from: "Lahore",
    to: "Murree",
    type: "Coaster",
    departureTime: "07:00 AM",
    availableSeats: 22,
    pricePerSeat: 900,
    pricePerVehicle: 22000,
  },
  {
    id: 4,
    from: "Islamabad",
    to: "Hunza",
    type: "Van",
    departureTime: "05:00 AM",
    availableSeats: 10,
    pricePerSeat: 3500,
    pricePerVehicle: 45000,
  },
  {
    id: 5,
    from: "Lahore",
    to: "Karachi",
    type: "Bus",
    departureTime: "10:00 PM",
    availableSeats: 40,
    pricePerSeat: 4000,
    pricePerVehicle: 180000,
  },
  {
    id: 6,
    from: "Faisalabad",
    to: "Lahore",
    type: "Car",
    departureTime: "11:00 AM",
    availableSeats: 4,
    pricePerSeat: 800,
    pricePerVehicle: 4500,
  },
];

const MOCK_ITINERARIES: Itinerary[] = [
  {
    id: 1,
    title: "Hunza Valley 7-Day Explorer",
    days: 7,
    dayPlans: [
      {
        day: 1,
        activities: [
          {
            id: 1,
            time: "06:00 AM",
            name: "Depart from Lahore",
            location: "Lahore Airport",
            type: "Transport",
          },
          {
            id: 2,
            time: "09:00 AM",
            name: "Arrive Islamabad",
            location: "BBIAP",
            type: "Transport",
          },
          {
            id: 3,
            time: "01:00 PM",
            name: "Lunch at Monal",
            location: "Margalla Hills",
            type: "Meal",
          },
        ],
        attachedHotelId: 2,
        attachedTransportId: 1,
      },
      {
        day: 2,
        activities: [
          {
            id: 4,
            time: "05:00 AM",
            name: "Drive to Hunza via KKH",
            location: "Karakoram Highway",
            type: "Transport",
          },
          {
            id: 5,
            time: "06:00 PM",
            name: "Check-in Eagle's Nest",
            location: "Hunza",
            type: "Hotel",
          },
        ],
        attachedHotelId: 6,
        attachedTransportId: 4,
      },
    ],
  },
  {
    id: 2,
    title: "Murree Family Weekend",
    days: 3,
    dayPlans: [
      {
        day: 1,
        activities: [
          {
            id: 1,
            time: "08:00 AM",
            name: "Drive to Murree",
            location: "Lahore → Murree",
            type: "Transport",
          },
          {
            id: 2,
            time: "02:00 PM",
            name: "Mall Road Walk",
            location: "Mall Road, Murree",
            type: "Sightseeing",
          },
        ],
        attachedHotelId: 4,
        attachedTransportId: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Islamabad City Break",
    days: 2,
    dayPlans: [
      {
        day: 1,
        activities: [
          {
            id: 1,
            time: "10:00 AM",
            name: "Faisal Mosque",
            location: "Islamabad",
            type: "Sightseeing",
          },
          {
            id: 2,
            time: "01:00 PM",
            name: "Daman-e-Koh lunch",
            location: "Margalla Hills",
            type: "Meal",
          },
          {
            id: 3,
            time: "04:00 PM",
            name: "Lok Virsa Museum",
            location: "H9, Islamabad",
            type: "Sightseeing",
          },
        ],
        attachedHotelId: 2,
      },
    ],
  },
];

// City distance lookup table (km)
const CITY_DISTANCES: Record<string, Record<string, number>> = {
  Lahore: {
    Islamabad: 375,
    Karachi: 1210,
    Faisalabad: 128,
    Multan: 340,
    Peshawar: 490,
    Murree: 390,
    Hunza: 1050,
    Hyderabad: 1280,
  },
  Islamabad: {
    Lahore: 375,
    Karachi: 1430,
    Faisalabad: 280,
    Multan: 530,
    Peshawar: 175,
    Murree: 60,
    Hunza: 680,
    Hyderabad: 1480,
  },
  Karachi: {
    Lahore: 1210,
    Islamabad: 1430,
    Faisalabad: 1120,
    Multan: 960,
    Peshawar: 1600,
    Hyderabad: 160,
  },
  Faisalabad: {
    Lahore: 128,
    Islamabad: 280,
    Multan: 240,
  },
  Multan: {
    Lahore: 340,
    Islamabad: 530,
    Faisalabad: 240,
    Karachi: 960,
  },
  Peshawar: {
    Islamabad: 175,
    Lahore: 490,
  },
  Murree: { Islamabad: 60, Lahore: 390 },
  Hunza: { Islamabad: 680, Lahore: 1050 },
  Hyderabad: { Karachi: 160, Lahore: 1280 },
};

const CAB_RATES: Record<CabType, number> = {
  Economy: 25,
  Comfort: 40,
  Premium: 65,
};

const PAKISTAN_CITIES = [
  "Lahore",
  "Islamabad",
  "Karachi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Murree",
  "Hunza",
  "Hyderabad",
  "Rawalpindi",
  "Quetta",
  "Sialkot",
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function getDistance(from: string, to: string): number | null {
  return CITY_DISTANCES[from]?.[to] ?? CITY_DISTANCES[to]?.[from] ?? null;
}

const STAR_POSITIONS = [1, 2, 3, 4, 5] as const;

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_POSITIONS.map((pos) => (
        <Star
          key={pos}
          size={12}
          className={
            pos <= stars
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

function AmenityChip({ label }: { label: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    WiFi: <Wifi size={10} />,
    Pool: <span className="text-[10px]">🏊</span>,
    Parking: <Car size={10} />,
    Restaurant: <span className="text-[10px]">🍽️</span>,
    Gym: <Zap size={10} />,
  };
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary">
      {iconMap[label] ?? null}
      {label}
    </span>
  );
}

function PrivacyBadge({ level }: { level: PrivacyLevel }) {
  const styles: Record<PrivacyLevel, string> = {
    Public: "bg-green-500/15 text-green-600 dark:text-green-400",
    Friends: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Family: "bg-violet-500/15 text-violet-500",
    Private: "bg-gray-500/15 text-gray-500",
  };
  return (
    <span
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles[level]}`}
    >
      {level}
    </span>
  );
}

function TransportIcon({ type }: { type: TransportType }) {
  const icons: Record<TransportType, React.ReactNode> = {
    Bus: <Bus size={14} />,
    Van: <Car size={14} />,
    Car: <Car size={14} />,
    Coaster: <Bus size={14} />,
  };
  return <>{icons[type]}</>;
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

// Packages Tab
function PackagesTab({
  hasBusiness,
  packages,
  onAddPackage,
}: {
  hasBusiness: boolean;
  packages: TourPackage[];
  onAddPackage: (pkg: Omit<TourPackage, "id" | "gradient">) => void;
}) {
  const [bookTarget, setBookTarget] = useState<TourPackage | null>(null);
  const [bookCount, setBookCount] = useState(1);
  const [bookDate, setBookDate] = useState("");
  const [bookOpen, setBookOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    operator: "",
    destinations: "",
    duration: "7",
    price: "",
    totalSeats: "20",
    commission: "10",
    privacy: "Public" as PrivacyLevel,
    description: "",
  });

  const handleBook = () => {
    if (!bookDate) {
      toast.error("Please select a travel date.");
      return;
    }
    toast.success(
      `Booking confirmed for ${bookTarget?.name}! ${formatCurrency((bookTarget?.price ?? 0) * bookCount)} total.`,
    );
    setBookOpen(false);
    setBookCount(1);
    setBookDate("");
  };

  const handleAdd = () => {
    if (!form.name || !form.price) {
      toast.error("Package name and price are required.");
      return;
    }
    onAddPackage({
      name: form.name,
      operator: form.operator || "My Travel Co.",
      destinations: form.destinations
        .split(",")
        .map((d) => d.trim())
        .filter(Boolean),
      duration: Number(form.duration),
      price: Number(form.price),
      totalSeats: Number(form.totalSeats),
      availableSeats: Number(form.totalSeats),
      commission: Number(form.commission),
      privacy: form.privacy,
      description: form.description,
    });
    setAddOpen(false);
    toast.success("Package listed successfully!");
  };

  return (
    <div className="space-y-5">
      {/* Business gate banner */}
      {!hasBusiness && (
        <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-400/40 bg-yellow-500/10">
          <AlertTriangle
            size={18}
            className="text-yellow-500 shrink-0 mt-0.5"
          />
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Link a business in your <strong>Family Tree</strong> to create and
            list travel packages.
          </p>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-display font-bold text-foreground">
            Tour Packages
          </h2>
          <p className="text-xs text-muted-foreground">
            {packages.length} packages available
          </p>
        </div>
        {hasBusiness && (
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2">
                <Plus size={14} /> Add Package
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Tour Package</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-3">
                <div className="space-y-4 py-1">
                  <div>
                    <Label>Package Name *</Label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="e.g. Skardu 5-Day Trek"
                    />
                  </div>
                  <div>
                    <Label>Operator / Company</Label>
                    <Input
                      value={form.operator}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, operator: e.target.value }))
                      }
                      placeholder="Your travel company name"
                    />
                  </div>
                  <div>
                    <Label>Destinations (comma-separated)</Label>
                    <Input
                      value={form.destinations}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, destinations: e.target.value }))
                      }
                      placeholder="Lahore, Skardu, Shigar"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Duration (days)</Label>
                      <Input
                        type="number"
                        min={1}
                        value={form.duration}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, duration: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Price</Label>
                      <Input
                        type="number"
                        min={0}
                        value={form.price}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, price: e.target.value }))
                        }
                        placeholder="45000"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Total Seats</Label>
                      <Input
                        type="number"
                        min={1}
                        value={form.totalSeats}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, totalSeats: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Agent Commission (%)</Label>
                      <Input
                        type="number"
                        min={0}
                        max={50}
                        value={form.commission}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, commission: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Privacy</Label>
                    <Select
                      value={form.privacy}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, privacy: v as PrivacyLevel }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(
                          [
                            "Public",
                            "Friends",
                            "Family",
                            "Private",
                          ] as PrivacyLevel[]
                        ).map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, description: e.target.value }))
                      }
                      rows={3}
                      placeholder="Tell travelers what makes this package special…"
                    />
                  </div>
                </div>
              </ScrollArea>
              <DialogFooter>
                <Button variant="outline" onClick={() => setAddOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAdd}>Create Package</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className="overflow-hidden group hover:shadow-lg transition-shadow"
          >
            {/* Gradient banner */}
            <div
              className={`h-28 bg-gradient-to-br ${pkg.gradient} relative flex items-end p-3`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <PrivacyBadge level={pkg.privacy} />
              </div>
              <div className="absolute top-3 right-3 z-10">
                <Badge
                  variant="secondary"
                  className="text-[10px] font-bold bg-white/20 text-white border-0"
                >
                  {pkg.duration}D
                </Badge>
              </div>
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-display font-bold text-sm text-foreground line-clamp-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Briefcase size={10} /> {pkg.operator}
                </p>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {pkg.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {pkg.destinations.slice(0, 3).map((d) => (
                  <span
                    key={d}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1"
                  >
                    <MapPin size={8} />
                    {d}
                  </span>
                ))}
                {pkg.destinations.length > 3 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    +{pkg.destinations.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-primary font-bold text-base">
                    {formatCurrency(pkg.price)}
                  </span>
                  <span className="text-muted-foreground ml-1">/ person</span>
                </div>
                <span className="text-muted-foreground">
                  {pkg.availableSeats} seats left
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">
                  Agent: {pkg.commission}% commission
                </span>
                <Dialog
                  open={bookOpen && bookTarget?.id === pkg.id}
                  onOpenChange={(o) => {
                    setBookOpen(o);
                    if (o) setBookTarget(pkg);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-7 text-xs px-3">
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Book Package</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-2">
                      <p className="text-sm font-medium">{pkg.name}</p>
                      <div>
                        <Label>Number of Travelers</Label>
                        <div className="flex items-center gap-3 mt-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setBookCount((c) => Math.max(1, c - 1))
                            }
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-bold">
                            {bookCount}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setBookCount((c) =>
                                Math.min(pkg.availableSeats, c + 1),
                              )
                            }
                          >
                            +
                          </Button>
                          <span className="text-xs text-muted-foreground">
                            ({pkg.availableSeats} available)
                          </span>
                        </div>
                      </div>
                      <div>
                        <Label>Travel Date</Label>
                        <Input
                          type="date"
                          value={bookDate}
                          onChange={(e) => setBookDate(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/60 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {formatCurrency(pkg.price)} × {bookCount}
                          </span>
                          <span className="font-bold text-primary">
                            {formatCurrency(pkg.price * bookCount)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setBookOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleBook}>Confirm Booking</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Hotels Tab
function HotelsTab({ hotels }: { hotels: HotelEntry[] }) {
  const [cityFilter, setCityFilter] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookTarget, setBookTarget] = useState<HotelEntry | null>(null);
  const [roomType, setRoomType] = useState("Standard");
  const [bookOpen, setBookOpen] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.floor(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              86400000,
          ),
        )
      : 1;

  const roomMultiplier: Record<string, number> = {
    Standard: 1,
    Deluxe: 1.4,
    Suite: 2.2,
  };

  const filtered = hotels.filter(
    (h) =>
      !cityFilter || h.city.toLowerCase().includes(cityFilter.toLowerCase()),
  );

  const handleBook = () => {
    toast.success(
      `${roomType} room at ${bookTarget?.name} booked for ${nights} night(s)! ${formatCurrency(Math.round((bookTarget?.pricePerNight ?? 0) * (roomMultiplier[roomType] ?? 1) * nights))}`,
    );
    setBookOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <Label className="text-xs">Search City</Label>
              <div className="relative mt-1">
                <MapPin
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  className="pl-8"
                  placeholder="e.g. Lahore"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Check-In</Label>
              <Input
                type="date"
                className="mt-1"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-xs">Check-Out</Label>
              <Input
                type="date"
                className="mt-1"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          {checkIn && checkOut && nights > 0 && (
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-primary font-semibold">
                {nights} night(s)
              </span>{" "}
              selected
            </p>
          )}
        </CardContent>
      </Card>

      {/* Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((hotel) => (
          <Card key={hotel.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-sm font-display">
                    {hotel.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin size={10} />
                    {hotel.city}
                  </p>
                </div>
                <div className="shrink-0">
                  <StarRating stars={hotel.stars} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {hotel.amenities.map((a) => (
                  <AmenityChip key={a} label={a} />
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {hotel.roomTypes.map((r) => (
                  <span
                    key={r}
                    className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary font-bold">
                    {formatCurrency(hotel.pricePerNight)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {" "}
                    / night
                  </span>
                </div>
                <Dialog
                  open={bookOpen && bookTarget?.id === hotel.id}
                  onOpenChange={(o) => {
                    setBookOpen(o);
                    if (o) {
                      setBookTarget(hotel);
                      setRoomType("Standard");
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-7 text-xs px-3 gap-1">
                      <Hotel size={12} /> Book Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Book Room – {hotel.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-2">
                      <div>
                        <Label>Room Type</Label>
                        <Select value={roomType} onValueChange={setRoomType}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {hotel.roomTypes.map((r) => (
                              <SelectItem key={r} value={r}>
                                {r}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Check-In</Label>
                          <Input
                            type="date"
                            className="mt-1"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Check-Out</Label>
                          <Input
                            type="date"
                            className="mt-1"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/60 space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            {formatCurrency(
                              Math.round(
                                hotel.pricePerNight *
                                  (roomMultiplier[roomType] ?? 1),
                              ),
                            )}{" "}
                            × {nights} night(s)
                          </span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span className="text-primary">
                            {formatCurrency(
                              Math.round(
                                hotel.pricePerNight *
                                  (roomMultiplier[roomType] ?? 1) *
                                  nights,
                              ),
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setBookOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleBook}>Confirm Booking</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <Building2 size={32} className="mx-auto mb-2 opacity-30" />
            <p className="text-sm">No hotels match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Transport Tab
function TransportTab({ routes }: { routes: TransportRoute[] }) {
  const [typeFilter, setTypeFilter] = useState<"All" | TransportType>("All");
  const [bookTarget, setBookTarget] = useState<TransportRoute | null>(null);
  const [bookMode, setBookMode] = useState<"seats" | "vehicle">("seats");
  const [seatCount, setSeatCount] = useState(1);
  const [travelDate, setTravelDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [bookOpen, setBookOpen] = useState(false);

  const filtered = routes.filter(
    (r) => typeFilter === "All" || r.type === typeFilter,
  );

  const handleBook = () => {
    if (!travelDate) {
      toast.error("Please select a travel date.");
      return;
    }
    const total =
      bookMode === "seats"
        ? (bookTarget?.pricePerSeat ?? 0) * seatCount
        : (bookTarget?.pricePerVehicle ?? 0);
    toast.success(
      `Transport booked: ${bookTarget?.from} → ${bookTarget?.to}. Total: ${formatCurrency(total)}`,
    );
    setBookOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Filter chips */}
      <div className="flex items-center gap-2 flex-wrap">
        {(["All", "Bus", "Van", "Car", "Coaster"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTypeFilter(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              typeFilter === t
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {t}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted-foreground">
          {filtered.length} routes
        </span>
      </div>

      {/* Route cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((route) => (
          <Card key={route.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 space-y-3">
              {/* Route header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <TransportIcon type={route.type} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    <span className="truncate">{route.from}</span>
                    <Route
                      size={12}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="truncate">{route.to}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] mt-0.5 h-4">
                    {route.type}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {route.departureTime}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={10} />
                  {route.availableSeats} seats
                </span>
              </div>
              <div className="flex gap-3 text-xs">
                <div>
                  <span className="text-muted-foreground">Per seat: </span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(route.pricePerSeat)}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Vehicle: </span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(route.pricePerVehicle)}
                  </span>
                </div>
              </div>
              <Dialog
                open={bookOpen && bookTarget?.id === route.id}
                onOpenChange={(o) => {
                  setBookOpen(o);
                  if (o) {
                    setBookTarget(route);
                    setSeatCount(1);
                    setBookMode("seats");
                  }
                }}
              >
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full h-7 text-xs gap-1">
                    <Navigation size={12} /> Book Transport
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Book Transport</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-2">
                    <p className="text-sm font-medium">
                      {route.from} → {route.to} · {route.type}
                    </p>
                    <div>
                      <Label>Booking Mode</Label>
                      <div className="flex gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setBookMode("seats")}
                          className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-colors ${bookMode === "seats" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
                        >
                          Per Seat
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookMode("vehicle")}
                          className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-colors ${bookMode === "vehicle" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
                        >
                          Whole Vehicle
                        </button>
                      </div>
                    </div>
                    {bookMode === "seats" && (
                      <div>
                        <Label>Number of Seats</Label>
                        <div className="flex items-center gap-3 mt-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setSeatCount((c) => Math.max(1, c - 1))
                            }
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-bold">
                            {seatCount}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setSeatCount((c) =>
                                Math.min(route.availableSeats, c + 1),
                              )
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    )}
                    <div>
                      <Label>Travel Date</Label>
                      <Input
                        type="date"
                        className="mt-1"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Pickup Point</Label>
                      <Input
                        className="mt-1"
                        placeholder="e.g. Thokar Niaz Baig"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                      />
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/60 flex justify-between font-bold text-sm">
                      <span>Total</span>
                      <span className="text-primary">
                        {formatCurrency(
                          bookMode === "seats"
                            ? route.pricePerSeat * seatCount
                            : route.pricePerVehicle,
                        )}
                      </span>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setBookOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleBook}>Confirm Booking</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Itinerary Builder
// ─────────────────────────────────────────────
function ItineraryTab({
  itineraries,
  hotels,
  transports,
  onSave,
}: {
  itineraries: Itinerary[];
  hotels: HotelEntry[];
  transports: TransportRoute[];
  onSave: (it: Itinerary) => void;
}) {
  const [builderOpen, setBuilderOpen] = useState(false);
  const [bookTarget, setBookTarget] = useState<Itinerary | null>(null);
  const [bookConfirmOpen, setBookConfirmOpen] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({});

  const [title, setTitle] = useState("");
  const [totalDays, setTotalDays] = useState(3);
  const [dayPlans, setDayPlans] = useState<ItineraryDay[]>([]);

  // sync dayPlans when totalDays changes
  const handleDaysChange = (n: number) => {
    setTotalDays(n);
    setDayPlans((prev) => {
      const next = Array.from(
        { length: n },
        (_, i) => prev[i] ?? { day: i + 1, activities: [] },
      );
      return next;
    });
  };

  const addActivity = (dayIdx: number) => {
    setDayPlans((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? {
              ...d,
              activities: [
                ...d.activities,
                {
                  id: Date.now(),
                  time: "09:00 AM",
                  name: "",
                  location: "",
                  type: "Sightseeing" as ActivityType,
                },
              ],
            }
          : d,
      ),
    );
  };

  const updateActivity = (
    dayIdx: number,
    actIdx: number,
    updates: Partial<Activity>,
  ) => {
    setDayPlans((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? {
              ...d,
              activities: d.activities.map((a, j) =>
                j === actIdx ? { ...a, ...updates } : a,
              ),
            }
          : d,
      ),
    );
  };

  const removeActivity = (dayIdx: number, actIdx: number) => {
    setDayPlans((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? { ...d, activities: d.activities.filter((_, j) => j !== actIdx) }
          : d,
      ),
    );
  };

  const updateDayAttachment = (
    dayIdx: number,
    field: "attachedHotelId" | "attachedTransportId",
    value: number | undefined,
  ) => {
    setDayPlans((prev) =>
      prev.map((d, i) => (i === dayIdx ? { ...d, [field]: value } : d)),
    );
  };

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Please enter an itinerary title.");
      return;
    }
    onSave({
      id: Date.now(),
      title,
      days: totalDays,
      dayPlans,
    });
    setBuilderOpen(false);
    setTitle("");
    setTotalDays(3);
    setDayPlans([]);
    toast.success("Itinerary saved!");
  };

  const handleBook = () => {
    toast.success(`Itinerary "${bookTarget?.title}" booked successfully!`);
    setBookConfirmOpen(false);
  };

  const toggleDay = (day: number) =>
    setExpandedDays((p) => ({ ...p, [day]: !p[day] }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-display font-bold">Itineraries</h2>
          <p className="text-xs text-muted-foreground">
            {itineraries.length} saved itineraries
          </p>
        </div>
        <Dialog open={builderOpen} onOpenChange={setBuilderOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="gap-2"
              onClick={() => {
                handleDaysChange(3);
              }}
            >
              <Plus size={14} /> Create Itinerary
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl w-full">
            <DialogHeader>
              <DialogTitle>Build Your Itinerary</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[65vh] pr-3">
              <div className="space-y-5 py-1">
                {/* Title + days */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <Label>Itinerary Title *</Label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Hunza Valley Explorer"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Total Days</Label>
                    <Input
                      type="number"
                      min={1}
                      max={30}
                      value={totalDays}
                      onChange={(e) =>
                        handleDaysChange(
                          Math.min(30, Math.max(1, Number(e.target.value))),
                        )
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Day accordions */}
                {dayPlans.map((dayPlan, dayIdx) => (
                  <div
                    key={dayPlan.day}
                    className="border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDay(dayPlan.day)}
                      className="w-full flex items-center justify-between p-3 bg-secondary/40 hover:bg-secondary/70 transition-colors"
                    >
                      <span className="text-sm font-semibold">
                        Day {dayPlan.day}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {dayPlan.activities.length} activities
                        </span>
                        {expandedDays[dayPlan.day] ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </div>
                    </button>
                    {expandedDays[dayPlan.day] && (
                      <div className="p-3 space-y-3">
                        {/* Activities */}
                        {dayPlan.activities.map((act, actIdx) => (
                          <div
                            key={act.id}
                            className="grid grid-cols-12 gap-2 items-center text-xs"
                          >
                            <Input
                              className="col-span-2 h-7 text-xs"
                              value={act.time}
                              onChange={(e) =>
                                updateActivity(dayIdx, actIdx, {
                                  time: e.target.value,
                                })
                              }
                              placeholder="Time"
                            />
                            <Input
                              className="col-span-3 h-7 text-xs"
                              value={act.name}
                              onChange={(e) =>
                                updateActivity(dayIdx, actIdx, {
                                  name: e.target.value,
                                })
                              }
                              placeholder="Activity name"
                            />
                            <Input
                              className="col-span-3 h-7 text-xs"
                              value={act.location}
                              onChange={(e) =>
                                updateActivity(dayIdx, actIdx, {
                                  location: e.target.value,
                                })
                              }
                              placeholder="Location"
                            />
                            <Select
                              value={act.type}
                              onValueChange={(v) =>
                                updateActivity(dayIdx, actIdx, {
                                  type: v as ActivityType,
                                })
                              }
                            >
                              <SelectTrigger className="col-span-3 h-7 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {(
                                  [
                                    "Sightseeing",
                                    "Meal",
                                    "Transport",
                                    "Hotel",
                                    "Free Time",
                                  ] as ActivityType[]
                                ).map((t) => (
                                  <SelectItem key={t} value={t}>
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <button
                              type="button"
                              onClick={() => removeActivity(dayIdx, actIdx)}
                              className="col-span-1 text-muted-foreground hover:text-destructive transition-colors flex justify-center"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs gap-1"
                          onClick={() => addActivity(dayIdx)}
                        >
                          <Plus size={10} /> Add Activity
                        </Button>

                        {/* Attachments */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                          <div>
                            <Label className="text-xs">Attach Hotel</Label>
                            <Select
                              value={
                                dayPlan.attachedHotelId?.toString() ?? "none"
                              }
                              onValueChange={(v) =>
                                updateDayAttachment(
                                  dayIdx,
                                  "attachedHotelId",
                                  v === "none" ? undefined : Number(v),
                                )
                              }
                            >
                              <SelectTrigger className="mt-1 h-7 text-xs">
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                {hotels.map((h) => (
                                  <SelectItem
                                    key={h.id}
                                    value={h.id.toString()}
                                  >
                                    {h.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-xs">Attach Transport</Label>
                            <Select
                              value={
                                dayPlan.attachedTransportId?.toString() ??
                                "none"
                              }
                              onValueChange={(v) =>
                                updateDayAttachment(
                                  dayIdx,
                                  "attachedTransportId",
                                  v === "none" ? undefined : Number(v),
                                )
                              }
                            >
                              <SelectTrigger className="mt-1 h-7 text-xs">
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                {transports.map((t) => (
                                  <SelectItem
                                    key={t.id}
                                    value={t.id.toString()}
                                  >
                                    {t.from} → {t.to} ({t.type})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button variant="outline" onClick={() => setBuilderOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Itinerary</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Itinerary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {itineraries.map((it) => {
          const totalActivities = it.dayPlans.reduce(
            (s, d) => s + d.activities.length,
            0,
          );
          const attachedHotels = it.dayPlans
            .filter((d) => d.attachedHotelId)
            .map((d) => hotels.find((h) => h.id === d.attachedHotelId)?.name)
            .filter(Boolean);
          const attachedTransports = it.dayPlans
            .filter((d) => d.attachedTransportId)
            .map((d) => transports.find((t) => t.id === d.attachedTransportId))
            .filter(Boolean)
            .map((t) => `${t!.from} → ${t!.to}`);

          return (
            <Card key={it.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-sm">
                      {it.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {it.days} days · {totalActivities} activities
                    </p>
                  </div>
                  <Calendar size={18} className="text-primary shrink-0" />
                </div>
                {attachedHotels.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {attachedHotels.slice(0, 2).map((h) => (
                      <span
                        key={h}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-1"
                      >
                        <Hotel size={8} />
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                {attachedTransports.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {attachedTransports.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center gap-1"
                      >
                        <Bus size={8} />
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <Dialog
                  open={bookConfirmOpen && bookTarget?.id === it.id}
                  onOpenChange={(o) => {
                    setBookConfirmOpen(o);
                    if (o) setBookTarget(it);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button size="sm" className="w-full h-7 text-xs gap-1">
                      <CheckCircle2 size={12} /> Book Itinerary
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Confirm Itinerary Booking</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 py-2">
                      <p className="text-sm font-semibold">{it.title}</p>
                      <div className="space-y-1.5 text-xs text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">
                            Duration:
                          </span>{" "}
                          {it.days} days
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Activities:
                          </span>{" "}
                          {totalActivities}
                        </p>
                        {attachedHotels.length > 0 && (
                          <p>
                            <span className="font-medium text-foreground">
                              Hotels:
                            </span>{" "}
                            {attachedHotels.join(", ")}
                          </p>
                        )}
                        {attachedTransports.length > 0 && (
                          <p>
                            <span className="font-medium text-foreground">
                              Transport:
                            </span>{" "}
                            {attachedTransports.join(", ")}
                          </p>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground bg-secondary/60 rounded-lg p-3">
                        Individual service pricing will be calculated and
                        confirmed after booking.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setBookConfirmOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleBook}>Confirm Booking</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Cab Booking Tab
// ─────────────────────────────────────────────
function CabTab({ itineraries }: { itineraries: Itinerary[] }) {
  const [pickup, setPickup] = useState<string>("none-selected");
  const [dropoff, setDropoff] = useState<string>("none-selected");
  const [cabType, setCabType] = useState<CabType>("Economy");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [attachItinerary, setAttachItinerary] = useState(false);
  const [selectedItinerary, setSelectedItinerary] =
    useState<string>("none-selected");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const distance = getDistance(
    pickup === "none-selected" ? "" : pickup,
    dropoff === "none-selected" ? "" : dropoff,
  );
  const estimatedTotal = distance ? distance * CAB_RATES[cabType] : null;

  const cabCards: {
    type: CabType;
    icon: React.ReactNode;
    desc: string;
    color: string;
  }[] = [
    {
      type: "Economy",
      icon: <Car size={20} />,
      desc: "Affordable everyday rides",
      color: "border-green-500/50 bg-green-500/5",
    },
    {
      type: "Comfort",
      icon: <Navigation size={20} />,
      desc: "Comfortable sedans & SUVs",
      color: "border-blue-500/50 bg-blue-500/5",
    },
    {
      type: "Premium",
      icon: <Crown size={20} />,
      desc: "Luxury vehicles & VIP service",
      color: "border-yellow-500/50 bg-yellow-500/5",
    },
  ];

  const handleBook = () => {
    const pickupCity = pickup === "none-selected" ? "" : pickup;
    const dropoffCity = dropoff === "none-selected" ? "" : dropoff;
    if (!pickupCity || !dropoffCity || !date || !time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const attachedName =
      attachItinerary &&
      selectedItinerary &&
      selectedItinerary !== "none-selected"
        ? itineraries.find((i) => i.id.toString() === selectedItinerary)?.title
        : null;
    toast.success(
      `${cabType} cab booked! ${pickup} → ${dropoff}${attachedName ? ` • Attached to "${attachedName}"` : ""}. ${estimatedTotal ? formatCurrency(estimatedTotal) : "Fare TBD"}`,
    );
    setConfirmOpen(false);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h2 className="text-lg font-display font-bold">Cab Booking</h2>
        <p className="text-xs text-muted-foreground">
          Distance-based pricing across Pakistan cities
        </p>
      </div>

      <Card>
        <CardContent className="p-5 space-y-5">
          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Pick-up Location *</Label>
              <Select value={pickup} onValueChange={setPickup}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {PAKISTAN_CITIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Drop-off Location *</Label>
              <Select value={dropoff} onValueChange={setDropoff}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {PAKISTAN_CITIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Distance indicator */}
          {pickup !== "none-selected" &&
            dropoff !== "none-selected" &&
            pickup !== dropoff && (
              <div
                className={`flex items-center gap-3 p-3 rounded-xl border ${distance ? "border-primary/30 bg-primary/5" : "border-muted bg-muted/40"}`}
              >
                <Route
                  size={16}
                  className={
                    distance ? "text-primary" : "text-muted-foreground"
                  }
                />
                {distance ? (
                  <span className="text-sm">
                    Estimated distance:{" "}
                    <strong className="text-primary">
                      {distance.toLocaleString()} km
                    </strong>
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Distance data not available for this route.
                  </span>
                )}
              </div>
            )}

          {/* Cab type selector */}
          <div>
            <Label>Choose Cab Type</Label>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {cabCards.map(({ type, icon, desc, color }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCabType(type)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    cabType === type
                      ? `border-primary bg-primary/10 ${color}`
                      : `border-border hover:border-border/80 ${color} opacity-60 hover:opacity-90`
                  }`}
                >
                  <div
                    className={`mb-1.5 ${cabType === type ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {icon}
                  </div>
                  <p
                    className={`text-xs font-bold ${cabType === type ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {type}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {desc}
                  </p>
                  <p
                    className={`text-xs font-semibold mt-1.5 ${cabType === type ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {formatCurrency(CAB_RATES[type])}/km
                  </p>
                  {distance && (
                    <p
                      className={`text-[10px] mt-0.5 font-bold ${cabType === type ? "text-primary" : "text-muted-foreground"}`}
                    >
                      Est: {formatCurrency(distance * CAB_RATES[type])}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Date *</Label>
              <Input
                type="date"
                className="mt-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <Label>Time *</Label>
              <Input
                type="time"
                className="mt-1"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          {/* Attach to itinerary */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Switch
                id="attach-itinerary"
                checked={attachItinerary}
                onCheckedChange={setAttachItinerary}
              />
              <Label htmlFor="attach-itinerary" className="cursor-pointer">
                Attach to Itinerary
              </Label>
            </div>
            {attachItinerary && (
              <Select
                value={selectedItinerary}
                onValueChange={setSelectedItinerary}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an itinerary" />
                </SelectTrigger>
                <SelectContent>
                  {itineraries.map((it) => (
                    <SelectItem key={it.id} value={it.id.toString()}>
                      {it.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {/* Book button */}
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button className="w-full gap-2" size="lg">
                <Car size={16} /> Book Cab
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Confirm Cab Booking</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-2 text-sm">
                <div className="space-y-2">
                  {[
                    {
                      label: "Pickup",
                      value: pickup === "none-selected" ? "—" : pickup || "—",
                    },
                    {
                      label: "Dropoff",
                      value: dropoff === "none-selected" ? "—" : dropoff || "—",
                    },
                    {
                      label: "Distance",
                      value: distance ? `${distance.toLocaleString()} km` : "—",
                    },
                    { label: "Cab Type", value: cabType },
                    {
                      label: "Rate",
                      value: `${formatCurrency(CAB_RATES[cabType])}/km`,
                    },
                    { label: "Date", value: date || "—" },
                    { label: "Time", value: time || "—" },
                    ...(attachItinerary && selectedItinerary
                      ? [
                          {
                            label: "Itinerary",
                            value:
                              itineraries.find(
                                (i) => i.id.toString() === selectedItinerary,
                              )?.title ?? "—",
                          },
                        ]
                      : []),
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-bold">
                  <span>Estimated Total</span>
                  <span className="text-primary">
                    {estimatedTotal
                      ? formatCurrency(estimatedTotal)
                      : "Fare TBD"}
                  </span>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleBook}>Confirm Booking</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main TravelPage
// ─────────────────────────────────────────────
export default function TravelPage() {
  // Mock: user has a business linked in Family Tree
  const hasBusiness = true;

  const [packages, setPackages] = useState<TourPackage[]>(MOCK_PACKAGES);
  const [itineraries, setItineraries] = useState<Itinerary[]>(MOCK_ITINERARIES);

  const handleAddPackage = (pkg: Omit<TourPackage, "id" | "gradient">) => {
    const gradients = [
      "from-violet-600 via-purple-600 to-indigo-700",
      "from-emerald-600 via-teal-600 to-cyan-700",
      "from-pink-500 via-rose-500 to-red-600",
      "from-orange-500 via-amber-500 to-yellow-500",
    ];
    setPackages((p) => [
      ...p,
      {
        ...pkg,
        id: Date.now(),
        gradient: gradients[p.length % gradients.length],
      },
    ]);
  };

  const handleSaveItinerary = (it: Itinerary) => {
    setItineraries((prev) => [...prev, it]);
  };

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
        >
          <Plane size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
        </div>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Travel
          </h1>
          <p className="text-sm text-muted-foreground">
            Packages · Hotels · Transport · Itineraries · Cabs
          </p>
        </div>
      </div>

      {/* Jobs banner */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border"
        style={{
          background: "oklch(0.55 0.18 240 / 0.06)",
          borderColor: "oklch(0.55 0.18 240 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <Briefcase size={14} style={{ color: "oklch(0.55 0.18 240)" }} />
          <span className="text-xs font-label text-foreground font-medium">
            Travel &amp; Tour Jobs Available
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            — tour guides, drivers, hotel staff &amp; travel agents
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

      {/* Tabs */}
      <QuickAddBar moduleName="Travel" />

      <Tabs defaultValue="packages">
        <TabsList className="flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="packages" className="gap-1.5 text-xs sm:text-sm">
            <Plane size={14} /> Packages
          </TabsTrigger>
          <TabsTrigger value="hotels" className="gap-1.5 text-xs sm:text-sm">
            <Hotel size={14} /> Hotels
          </TabsTrigger>
          <TabsTrigger value="transport" className="gap-1.5 text-xs sm:text-sm">
            <Bus size={14} /> Transport
          </TabsTrigger>
          <TabsTrigger value="itinerary" className="gap-1.5 text-xs sm:text-sm">
            <Calendar size={14} /> Itinerary
          </TabsTrigger>
          <TabsTrigger value="cab" className="gap-1.5 text-xs sm:text-sm">
            <Car size={14} /> Cab Booking
          </TabsTrigger>
          <TabsTrigger value="events" className="gap-1.5 text-xs sm:text-sm">
            <Calendar size={14} /> Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="packages" className="mt-5">
          <PackagesTab
            hasBusiness={hasBusiness}
            packages={packages}
            onAddPackage={handleAddPackage}
          />
        </TabsContent>

        <TabsContent value="hotels" className="mt-5">
          <HotelsTab hotels={MOCK_HOTELS} />
        </TabsContent>

        <TabsContent value="transport" className="mt-5">
          <TransportTab routes={MOCK_TRANSPORT} />
        </TabsContent>

        <TabsContent value="itinerary" className="mt-5">
          <ItineraryTab
            itineraries={itineraries}
            hotels={MOCK_HOTELS}
            transports={MOCK_TRANSPORT}
            onSave={handleSaveItinerary}
          />
        </TabsContent>

        <TabsContent value="cab" className="mt-5">
          <CabTab itineraries={itineraries} />
        </TabsContent>

        <TabsContent value="events" className="mt-5">
          <EventsTab moduleName="Travel" moduleColor="oklch(0.48 0.12 200)" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
