import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  Bus as BusIcon,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CITIES = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Jaipur",
  "Ahmedabad",
  "Surat",
  "Lucknow",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Chandigarh",
  "Kochi",
  "Coimbatore",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
];

const MOCK_BUSES = [
  {
    id: 1,
    operator: "VRL Travels",
    type: "AC Sleeper",
    dep: "21:00",
    arr: "07:30",
    duration: "10h 30m",
    seats: 18,
    price: 1299,
    rating: 4.5,
    layout: "sleeper",
  },
  {
    id: 2,
    operator: "RedBus Premium",
    type: "Volvo AC",
    dep: "22:00",
    arr: "08:00",
    duration: "10h",
    seats: 24,
    price: 1099,
    rating: 4.3,
    layout: "seater",
  },
  {
    id: 3,
    operator: "Orange Tours",
    type: "AC Semi-Sleeper",
    dep: "20:30",
    arr: "07:00",
    duration: "10h 30m",
    seats: 12,
    price: 999,
    rating: 4.1,
    layout: "seater",
  },
  {
    id: 4,
    operator: "SRS Travels",
    type: "Non-AC Seater",
    dep: "19:00",
    arr: "05:30",
    duration: "10h 30m",
    seats: 32,
    price: 649,
    rating: 3.9,
    layout: "seater",
  },
  {
    id: 5,
    operator: "Parveen Travels",
    type: "AC Sleeper",
    dep: "23:00",
    arr: "09:00",
    duration: "10h",
    seats: 8,
    price: 1499,
    rating: 4.7,
    layout: "sleeper",
  },
];

type BusOption = (typeof MOCK_BUSES)[0];

interface PassengerDetails {
  name: string;
  age: string;
  gender: string;
  idType: string;
  idNumber: string;
}

const SEAT_ROWS_SEATER = [
  ["1A", "1B", null, "1C", "1D"],
  ["2A", "2B", null, "2C", "2D"],
  ["3A", "3B", null, "3C", "3D"],
  ["4A", "4B", null, "4C", "4D"],
  ["5A", "5B", null, "5C", "5D"],
];

const SEAT_ROWS_SLEEPER = [
  ["L1", null, "U1"],
  ["L2", null, "U2"],
  ["L3", null, "U3"],
  ["L4", null, "U4"],
  ["L5", null, "U5"],
];

const BOOKED_SEATS = new Set(["1C", "3A", "2D", "U2", "L3"]);
const LADIES_SEATS = new Set(["5A", "5B"]);

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: step numbers are stable positional
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              i + 1 < current
                ? "bg-primary text-primary-foreground"
                : i + 1 === current
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {i + 1 < current ? <CheckCircle2 size={16} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div
              className={`h-0.5 w-8 transition-all ${i + 1 < current ? "bg-primary" : "bg-muted"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function BusBookingPage() {
  const [step, setStep] = useState(1);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [searching, setSearching] = useState(false);
  const [selectedBus, setSelectedBus] = useState<BusOption | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [passengers, setPassengers] = useState<PassengerDetails[]>([]);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleSearch = () => {
    if (!fromCity || !toCity || !journeyDate) {
      toast.error("Please fill in all search fields");
      return;
    }
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setStep(2);
    }, 1500);
  };

  const handleSelectBus = (bus: BusOption) => {
    setSelectedBus(bus);
    setSelectedSeats([]);
    setStep(3);
  };

  const toggleSeat = (seat: string) => {
    if (BOOKED_SEATS.has(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  const handleProceedToPassengers = () => {
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat");
      return;
    }
    setPassengers(
      selectedSeats.map(() => ({
        name: "",
        age: "",
        gender: "Male",
        idType: "Aadhaar",
        idNumber: "",
      })),
    );
    setStep(4);
  };

  const updatePassenger = (
    idx: number,
    field: keyof PassengerDetails,
    value: string,
  ) => {
    setPassengers((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)),
    );
  };

  const handleConfirmBooking = () => {
    const pnr = `IC-${Math.floor(100000 + Math.random() * 900000)}`;
    toast.success(`Booking confirmed! PNR: ${pnr}`, { duration: 5000 });
    setShowConfirmDialog(false);
    setStep(1);
    setFromCity("");
    setToCity("");
    setJourneyDate("");
    setSelectedBus(null);
    setSelectedSeats([]);
    setPassengers([]);
  };

  const baseFare = (selectedBus?.price || 0) * selectedSeats.length;
  const operatorCharges = Math.round(baseFare * 0.05);
  const serviceFee = 49;
  const gst = Math.round((baseFare + operatorCharges + serviceFee) * 0.05);
  const total = baseFare + operatorCharges + serviceFee + gst;

  const seatRows =
    selectedBus?.layout === "sleeper" ? SEAT_ROWS_SLEEPER : SEAT_ROWS_SEATER;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BusIcon size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Bus Booking</h2>
          <p className="text-xs text-muted-foreground">Powered by PaySprint</p>
        </div>
      </div>

      <StepIndicator current={step} total={5} />

      {/* Step 1: Search */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Search Buses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>From City</Label>
                <Select value={fromCity} onValueChange={setFromCity}>
                  <SelectTrigger data-ocid="bus.from_city_select">
                    <SelectValue placeholder="Select departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    {CITIES.filter((c) => c !== toCity).map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>To City</Label>
                <Select value={toCity} onValueChange={setToCity}>
                  <SelectTrigger data-ocid="bus.to_city_select">
                    <SelectValue placeholder="Select destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {CITIES.filter((c) => c !== fromCity).map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Journey Date</Label>
              <Input
                type="date"
                data-ocid="bus.date_input"
                value={journeyDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setJourneyDate(e.target.value)}
              />
            </div>
            <Button
              data-ocid="bus.search_button"
              className="w-full"
              onClick={handleSearch}
              disabled={searching}
            >
              {searching ? "Searching..." : "Search Buses"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Results */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-primary" />
              <span className="font-medium">{fromCity}</span>
              <ArrowRight size={14} />
              <span className="font-medium">{toCity}</span>
              <span className="text-muted-foreground">· {journeyDate}</span>
            </div>
            <Button variant="outline" size="sm" onClick={() => setStep(1)}>
              Modify
            </Button>
          </div>
          {searching ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-28 rounded-xl" />
              ))}
            </div>
          ) : (
            MOCK_BUSES.map((bus, idx) => (
              <Card
                key={bus.id}
                data-ocid={`bus.result.item.${idx + 1}`}
                className="hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          {bus.operator}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {bus.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-mono font-bold text-lg">
                          {bus.dep}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock size={12} />
                          <span className="text-xs">{bus.duration}</span>
                        </div>
                        <span className="font-mono font-bold text-lg">
                          {bus.arr}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users size={12} /> {bus.seats} seats
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" />{" "}
                          {bus.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                      <span className="text-xl font-bold text-primary">
                        ₹{bus.price}
                      </span>
                      <Button
                        size="sm"
                        data-ocid={`bus.result.select_button.${idx + 1}`}
                        onClick={() => handleSelectBus(bus)}
                      >
                        Select Seats
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Step 3: Seat Selection */}
      {step === 3 && selectedBus && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {selectedBus.operator} — Seat Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-wrap gap-4 text-xs">
              {[
                { color: "bg-emerald-500", label: "Available" },
                { color: "bg-primary", label: "Selected" },
                { color: "bg-muted-foreground/40", label: "Booked" },
                { color: "bg-pink-400", label: "Ladies Only" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-4 h-4 rounded ${l.color}`} />
                  <span className="text-muted-foreground">{l.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 max-w-xs mx-auto">
              {seatRows.map((row, rowIdx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: row positions are stable
                <div key={rowIdx} className="flex gap-2 justify-center">
                  {row.map((seat, seatIdx) =>
                    seat === null ? (
                      // biome-ignore lint/suspicious/noArrayIndexKey: spacer positions are stable
                      <div key={seatIdx} className="w-9 h-9" />
                    ) : (
                      <button
                        key={seat}
                        type="button"
                        data-ocid={`bus.seat.item.${rowIdx * 5 + seatIdx + 1}`}
                        disabled={BOOKED_SEATS.has(seat)}
                        onClick={() => toggleSeat(seat)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all border-2 ${
                          BOOKED_SEATS.has(seat)
                            ? "bg-muted-foreground/20 border-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                            : LADIES_SEATS.has(seat)
                              ? selectedSeats.includes(seat)
                                ? "bg-pink-500 border-pink-500 text-white"
                                : "bg-pink-100 border-pink-300 text-pink-700 hover:bg-pink-200"
                              : selectedSeats.includes(seat)
                                ? "bg-primary border-primary text-primary-foreground"
                                : "bg-emerald-100 border-emerald-400 text-emerald-700 hover:bg-emerald-200"
                        }`}
                      >
                        {seat}
                      </button>
                    ),
                  )}
                </div>
              ))}
            </div>

            {selectedSeats.length > 0 && (
              <div className="bg-muted/50 rounded-lg p-3 text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Selected seats:</span>{" "}
                  <span className="font-semibold">
                    {selectedSeats.join(", ")}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">Total fare:</span>{" "}
                  <span className="font-bold text-primary">
                    ₹{selectedBus.price * selectedSeats.length}
                  </span>
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button className="flex-1" onClick={handleProceedToPassengers}>
                Proceed to Passenger Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Passenger Details */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Passenger Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {passengers.map((p, idx) => (
              <div
                key={selectedSeats[idx]}
                className="border border-border rounded-lg p-4 space-y-4"
              >
                <p className="text-sm font-semibold text-primary">
                  Seat: {selectedSeats[idx]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label>Passenger Name</Label>
                    <Input
                      value={p.name}
                      onChange={(e) =>
                        updatePassenger(idx, "name", e.target.value)
                      }
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Age</Label>
                    <Input
                      type="number"
                      value={p.age}
                      onChange={(e) =>
                        updatePassenger(idx, "age", e.target.value)
                      }
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={p.gender}
                    onValueChange={(v) => updatePassenger(idx, "gender", v)}
                    className="flex gap-4"
                  >
                    {["Male", "Female", "Other"].map((g) => (
                      <div key={g} className="flex items-center gap-2">
                        <RadioGroupItem value={g} id={`gender-${idx}-${g}`} />
                        <Label
                          htmlFor={`gender-${idx}-${g}`}
                          className="cursor-pointer text-sm"
                        >
                          {g}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>ID Type</Label>
                    <Select
                      value={p.idType}
                      onValueChange={(v) => updatePassenger(idx, "idType", v)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Aadhaar", "PAN", "Passport", "Voter ID"].map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>ID Number</Label>
                    <Input
                      value={p.idNumber}
                      onChange={(e) =>
                        updatePassenger(idx, "idNumber", e.target.value)
                      }
                      placeholder="Enter ID number"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="border border-border rounded-lg p-4 space-y-3">
              <p className="text-sm font-semibold">Contact Information</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Mobile Number</Label>
                  <Input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile"
                    maxLength={10}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(3)}>
                Back
              </Button>
              <Button className="flex-1" onClick={() => setStep(5)}>
                Proceed to Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 5: Payment */}
      {step === 5 && selectedBus && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <BusIcon size={16} className="text-primary" />
                {fromCity} → {toCity}
              </div>
              <div className="text-muted-foreground text-xs">
                {journeyDate} · {selectedBus.operator} · {selectedBus.type}
              </div>
              <div className="text-xs">
                Seats:{" "}
                <span className="font-medium">{selectedSeats.join(", ")}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              {[
                {
                  label: `Base fare × ${selectedSeats.length}`,
                  value: `₹${baseFare}`,
                },
                { label: "Operator charges", value: `₹${operatorCharges}` },
                { label: "Service fee", value: `₹${serviceFee}` },
                { label: "GST (5%)", value: `₹${gst}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-muted-foreground"
                >
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-primary">₹{total}</span>
              </div>
            </div>

            <Button
              data-ocid="bus.confirm_button"
              className="w-full"
              onClick={() => setShowConfirmDialog(true)}
            >
              Confirm &amp; Pay ₹{total}
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent data-ocid="bus.confirm_dialog">
          <DialogHeader>
            <DialogTitle>Confirm Payment</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            You are about to pay <strong>₹{total}</strong> for{" "}
            {selectedSeats.length} seat(s) on {selectedBus?.operator}.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              data-ocid="bus.confirm_dialog.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmBooking}
              data-ocid="bus.confirm_dialog.confirm_button"
            >
              Confirm &amp; Pay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
