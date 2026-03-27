import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bike,
  Car,
  Clock,
  MapPin,
  Navigation,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PaymentModal } from "../components/PaymentModal";

const VEHICLE_TYPES = [
  {
    id: "taxi",
    label: "Taxi / Car",
    icon: Car,
    baseFare: 50,
    perKm: 12,
    color: "text-yellow-500",
  },
  {
    id: "bike",
    label: "Bike",
    icon: Bike,
    baseFare: 25,
    perKm: 6,
    color: "text-green-500",
  },
  {
    id: "auto",
    label: "Auto Rickshaw",
    icon: Truck,
    baseFare: 30,
    perKm: 8,
    color: "text-blue-500",
  },
];

const MY_RIDES = [
  {
    id: "RD-001",
    from: "Bandra West",
    to: "Andheri East",
    vehicle: "Taxi",
    fare: "₹180",
    date: "12 Mar 2026",
    status: "Completed",
    rating: 5,
  },
  {
    id: "RD-002",
    from: "Juhu",
    to: "Powai",
    vehicle: "Bike",
    fare: "₹95",
    date: "10 Mar 2026",
    status: "Completed",
    rating: 4,
  },
  {
    id: "RD-003",
    from: "Dadar",
    to: "Churchgate",
    vehicle: "Auto",
    fare: "₹130",
    date: "8 Mar 2026",
    status: "Cancelled",
    rating: null,
  },
];

const SHARED_ROUTES = [
  {
    id: 1,
    route: "Bandra ↔ BKC",
    seats: 3,
    available: 2,
    price: "₹60",
    departs: "08:00 AM",
  },
  {
    id: 2,
    route: "Andheri ↔ Nariman Point",
    seats: 4,
    available: 1,
    price: "₹80",
    departs: "09:00 AM",
  },
  {
    id: 3,
    route: "Thane ↔ Bandra",
    seats: 3,
    available: 3,
    price: "₹120",
    departs: "07:30 AM",
  },
];

export default function RideBookingPage() {
  // Load rate cards from localStorage (set by admin)
  const savedRates = (() => {
    try {
      const raw = localStorage.getItem("ride-rate-cards");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const RATE_CARDS = {
    taxi: {
      baseFare: savedRates?.taxi?.baseFare ?? 50,
      perKm: savedRates?.taxi?.perKm ?? 15,
      surgeMult: savedRates?.taxi?.surgeMult ?? 1.0,
    },
    bike: {
      baseFare: savedRates?.bike?.baseFare ?? 20,
      perKm: savedRates?.bike?.perKm ?? 8,
      surgeMult: savedRates?.bike?.surgeMult ?? 1.0,
    },
    auto: {
      baseFare: savedRates?.auto?.baseFare ?? 30,
      perKm: savedRates?.auto?.perKm ?? 10,
      surgeMult: savedRates?.auto?.surgeMult ?? 1.0,
    },
  };
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [vehicle, setVehicle] = useState("taxi");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [estimatedDist, setEstimatedDist] = useState(7.5);

  const selectedVehicle = VEHICLE_TYPES.find((v) => v.id === vehicle);
  const rateCard =
    RATE_CARDS[vehicle as keyof typeof RATE_CARDS] ?? RATE_CARDS.taxi;
  const estimatedFare =
    (rateCard.baseFare + rateCard.perKm * estimatedDist) * rateCard.surgeMult;

  const handleBookNow = () => {
    if (!from || !to) {
      toast.error("Please enter pickup and drop locations");
      return;
    }
    setPaymentOpen(true);
  };

  const handleRidePaySuccess = () => {
    setPaymentOpen(false);
    toast.success("Ride booked! Driver will arrive in ~4 minutes.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6" data-ocid="rides.page">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">
          Ride Booking
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Book a taxi, bike ride, or auto at fixed transparent rates.
        </p>
      </div>

      <Tabs defaultValue="book">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50">
          <TabsTrigger value="book" data-ocid="rides.book.tab">
            Book Ride
          </TabsTrigger>
          <TabsTrigger value="shared" data-ocid="rides.shared.tab">
            Shared Ride
          </TabsTrigger>
          <TabsTrigger value="my-rides" data-ocid="rides.my_rides.tab">
            My Rides
          </TabsTrigger>
          <TabsTrigger value="rates" data-ocid="rides.rates.tab">
            Rate Cards
          </TabsTrigger>
        </TabsList>

        {/* Book Ride */}
        <TabsContent value="book" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-display">
                  Where to?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs">Pickup Location</Label>
                  <div className="relative mt-1">
                    <MapPin
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500"
                    />
                    <Input
                      className="pl-9"
                      placeholder="Enter pickup point"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      data-ocid="rides.from.input"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Drop Location</Label>
                  <div className="relative mt-1">
                    <Navigation
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500"
                    />
                    <Input
                      className="pl-9"
                      placeholder="Enter destination"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      data-ocid="rides.to.input"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-xs">
                    Estimated Distance: {estimatedDist} km
                  </Label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={estimatedDist}
                    onChange={(e) => setEstimatedDist(Number(e.target.value))}
                    className="w-full mt-2 accent-primary"
                    data-ocid="rides.distance.input"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
                    <span>1 km</span>
                    <span>30 km</span>
                  </div>
                </div>

                <div>
                  <Label className="text-xs">Vehicle Type</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {VEHICLE_TYPES.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicle(v.id)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${
                          vehicle === v.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-muted/50"
                        }`}
                        data-ocid={`rides.vehicle.${v.id}.toggle`}
                      >
                        <v.icon size={20} className={v.color} />
                        <span className="text-[10px] font-label font-medium">
                          {v.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fare estimate */}
            <Card className="rounded-2xl border-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-display">
                  Fare Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Vehicle</span>
                    <span className="font-medium">
                      {selectedVehicle?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base Fare</span>
                    <span>₹{selectedVehicle?.baseFare}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Distance (~{estimatedDist} km)
                    </span>
                    <span>
                      ₹
                      {selectedVehicle
                        ? (selectedVehicle.perKm * estimatedDist).toFixed(0)
                        : 0}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold border-t border-border pt-2 mt-2">
                    <span>Estimated Total</span>
                    <span className="text-primary">
                      ₹{estimatedFare.toFixed(0)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl">
                  <Clock size={12} />
                  <span>Estimated arrival: 4–6 minutes</span>
                </div>
                <Button
                  className="w-full"
                  onClick={handleBookNow}
                  data-ocid="rides.book.primary_button"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Shared Ride */}
        <TabsContent value="shared" className="mt-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Join a scheduled shared ride at a fixed low price.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHARED_ROUTES.map((route, i) => (
                <Card
                  key={route.id}
                  className="rounded-2xl border-border shadow-sm"
                  data-ocid={`rides.shared.card.${i + 1}`}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-primary" />
                      <p className="text-sm font-semibold">{route.route}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Departs</p>
                        <p className="font-medium">{route.departs}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Seats Left</p>
                        <p
                          className={`font-medium ${route.available <= 1 ? "text-red-500" : "text-green-600"}`}
                        >
                          {route.available}/{route.seats}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold text-primary">
                        {route.price}
                      </p>
                      <Button
                        size="sm"
                        className="h-8 text-xs"
                        onClick={() => toast.success("Seat booked!")}
                        data-ocid={`rides.shared.primary_button.${i + 1}`}
                      >
                        Book Seat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* My Rides */}
        <TabsContent value="my-rides" className="mt-6">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-0">
              <Table data-ocid="rides.history.table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Ride ID</TableHead>
                    <TableHead className="text-xs">From → To</TableHead>
                    <TableHead className="text-xs">Vehicle</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs">Fare</TableHead>
                    <TableHead className="text-xs">Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MY_RIDES.map((ride, i) => (
                    <TableRow
                      key={ride.id}
                      data-ocid={`rides.history.row.${i + 1}`}
                    >
                      <TableCell className="text-xs font-mono text-primary">
                        {ride.id}
                      </TableCell>
                      <TableCell className="text-xs">
                        {ride.from} → {ride.to}
                      </TableCell>
                      <TableCell className="text-xs">{ride.vehicle}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {ride.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`text-[10px] ${ride.status === "Completed" ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`}
                        >
                          {ride.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs font-semibold">
                        {ride.fare}
                      </TableCell>
                      <TableCell className="text-xs">
                        {ride.rating ? (
                          <span className="flex items-center gap-1">
                            <Star
                              size={10}
                              className="text-yellow-400 fill-yellow-400"
                            />
                            {ride.rating}
                          </span>
                        ) : (
                          "—"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rate Cards */}
        <TabsContent value="rates" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VEHICLE_TYPES.map((v, i) => (
              <Card
                key={v.id}
                className="rounded-2xl border-border shadow-sm"
                data-ocid={`rides.rate.card.${i + 1}`}
              >
                <CardContent className="p-5 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <v.icon size={22} className={v.color} />
                  </div>
                  <p className="text-base font-display font-bold">{v.label}</p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Base Fare</span>
                      <span className="font-semibold">₹{v.baseFare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Per KM</span>
                      <span className="font-semibold">₹{v.perKm}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Est. 5km fare
                      </span>
                      <span className="font-bold text-primary">
                        ₹{v.baseFare + v.perKm * 5}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <PaymentModal
        open={paymentOpen}
        onCancel={() => setPaymentOpen(false)}
        onSuccess={handleRidePaySuccess}
        amount={Math.round(estimatedFare)}
        title="Confirm & Pay for Ride"
      />
    </div>
  );
}
