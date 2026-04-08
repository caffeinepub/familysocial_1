import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, ae as Bus, L as Label, l as Select, m as SelectTrigger, n as SelectValue, o as SelectContent, p as SelectItem, I as Input, B as Button, M as MapPin, aC as Skeleton, k as Badge, aa as Clock, U as Users, f as Star, w as Dialog, y as DialogContent, z as DialogHeader, A as DialogTitle, a6 as DialogFooter, u as ue, t as CircleCheck, ah as useControllableState, al as Primitive, am as composeEventHandlers, R as React, bc as Item, bd as createRovingFocusGroupScope, b6 as useDirection, be as Root, au as createContextScope, bf as cva, aw as cn, T as Tabs, a as TabsList, Z as Zap, b as TabsTrigger, d as TabsContent, H as Plane } from "./index-CTlHP6rz.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Cq_2D833.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-ZgVt5zbd.js";
import { A as ArrowRight } from "./arrow-right-OaSYDQUq.js";
import { S as Smartphone } from "./smartphone-CWPlkXMP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }]
];
const Construction = createLucideIcon("construction", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }]
];
const TramFront = createLucideIcon("tram-front", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
];
const TvMinimal = createLucideIcon("tv-minimal", __iconNode);
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
  "Vadodara"
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
    layout: "sleeper"
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
    layout: "seater"
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
    layout: "seater"
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
    layout: "seater"
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
    layout: "sleeper"
  }
];
const SEAT_ROWS_SEATER = [
  ["1A", "1B", null, "1C", "1D"],
  ["2A", "2B", null, "2C", "2D"],
  ["3A", "3B", null, "3C", "3D"],
  ["4A", "4B", null, "4C", "4D"],
  ["5A", "5B", null, "5C", "5D"]
];
const SEAT_ROWS_SLEEPER = [
  ["L1", null, "U1"],
  ["L2", null, "U2"],
  ["L3", null, "U3"],
  ["L4", null, "U4"],
  ["L5", null, "U5"]
];
const BOOKED_SEATS = /* @__PURE__ */ new Set(["1C", "3A", "2D", "U2", "L3"]);
const LADIES_SEATS = /* @__PURE__ */ new Set(["5A", "5B"]);
function StepIndicator({ current, total }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-6", children: Array.from({ length: total }).map((_, i) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: step numbers are stable positional
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i + 1 < current ? "bg-primary text-primary-foreground" : i + 1 === current ? "bg-primary text-primary-foreground ring-4 ring-primary/20" : "bg-muted text-muted-foreground"}`,
          children: i + 1 < current ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }) : i + 1
        }
      ),
      i < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-0.5 w-8 transition-all ${i + 1 < current ? "bg-primary" : "bg-muted"}`
        }
      )
    ] }, i)
  )) });
}
function BusBookingPage() {
  const [step, setStep] = reactExports.useState(1);
  const [fromCity, setFromCity] = reactExports.useState("");
  const [toCity, setToCity] = reactExports.useState("");
  const [journeyDate, setJourneyDate] = reactExports.useState("");
  const [searching, setSearching] = reactExports.useState(false);
  const [selectedBus, setSelectedBus] = reactExports.useState(null);
  const [selectedSeats, setSelectedSeats] = reactExports.useState([]);
  const [passengers, setPassengers] = reactExports.useState([]);
  const [email, setEmail] = reactExports.useState("");
  const [mobile, setMobile] = reactExports.useState("");
  const [showConfirmDialog, setShowConfirmDialog] = reactExports.useState(false);
  const handleSearch = () => {
    if (!fromCity || !toCity || !journeyDate) {
      ue.error("Please fill in all search fields");
      return;
    }
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setStep(2);
    }, 1500);
  };
  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
    setSelectedSeats([]);
    setStep(3);
  };
  const toggleSeat = (seat) => {
    if (BOOKED_SEATS.has(seat)) return;
    setSelectedSeats(
      (prev) => prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };
  const handleProceedToPassengers = () => {
    if (selectedSeats.length === 0) {
      ue.error("Please select at least one seat");
      return;
    }
    setPassengers(
      selectedSeats.map(() => ({
        name: "",
        age: "",
        gender: "Male",
        idType: "Aadhaar",
        idNumber: ""
      }))
    );
    setStep(4);
  };
  const updatePassenger = (idx, field, value) => {
    setPassengers(
      (prev) => prev.map((p, i) => i === idx ? { ...p, [field]: value } : p)
    );
  };
  const handleConfirmBooking = () => {
    const pnr = `IC-${Math.floor(1e5 + Math.random() * 9e5)}`;
    ue.success(`Booking confirmed! PNR: ${pnr}`, { duration: 5e3 });
    setShowConfirmDialog(false);
    setStep(1);
    setFromCity("");
    setToCity("");
    setJourneyDate("");
    setSelectedBus(null);
    setSelectedSeats([]);
    setPassengers([]);
  };
  const baseFare = ((selectedBus == null ? void 0 : selectedBus.price) || 0) * selectedSeats.length;
  const operatorCharges = Math.round(baseFare * 0.05);
  const serviceFee = 49;
  const gst = Math.round((baseFare + operatorCharges + serviceFee) * 0.05);
  const total = baseFare + operatorCharges + serviceFee + gst;
  const seatRows = (selectedBus == null ? void 0 : selectedBus.layout) === "sleeper" ? SEAT_ROWS_SLEEPER : SEAT_ROWS_SEATER;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto p-4 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 20, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Bus Booking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Powered by PaySprint" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { current: step, total: 5 }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Search Buses" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "From City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fromCity, onValueChange: setFromCity, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "bus.from_city_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select departure city" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CITIES.filter((c) => c !== toCity).map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: city, children: city }, city)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "To City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: toCity, onValueChange: setToCity, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "bus.to_city_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select destination city" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CITIES.filter((c) => c !== fromCity).map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: city, children: city }, city)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Journey Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              "data-ocid": "bus.date_input",
              value: journeyDate,
              min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
              onChange: (e) => setJourneyDate(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "bus.search_button",
            className: "w-full",
            onClick: handleSearch,
            disabled: searching,
            children: searching ? "Searching..." : "Search Buses"
          }
        )
      ] })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: fromCity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: toCity }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            journeyDate
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setStep(1), children: "Modify" })
      ] }),
      searching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 rounded-xl" }, i)) }) : MOCK_BUSES.map((bus, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          "data-ocid": `bus.result.item.${idx + 1}`,
          className: "hover:border-primary/50 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: bus.operator }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: bus.type })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-lg", children: bus.dep }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: bus.duration })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-lg", children: bus.arr })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
                  " ",
                  bus.seats,
                  " seats"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "text-yellow-500" }),
                  " ",
                  bus.rating
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center sm:items-end justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold text-primary", children: [
                "₹",
                bus.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": `bus.result.select_button.${idx + 1}`,
                  onClick: () => handleSelectBus(bus),
                  children: "Select Seats"
                }
              )
            ] })
          ] }) })
        },
        bus.id
      ))
    ] }),
    step === 3 && selectedBus && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base", children: [
        selectedBus.operator,
        " — Seat Selection"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 text-xs", children: [
          { color: "bg-emerald-500", label: "Available" },
          { color: "bg-primary", label: "Selected" },
          { color: "bg-muted-foreground/40", label: "Booked" },
          { color: "bg-pink-400", label: "Ladies Only" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded ${l.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.label })
        ] }, l.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-w-xs mx-auto", children: seatRows.map((row, rowIdx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: row positions are stable
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-center", children: row.map(
            (seat, seatIdx) => seat === null ? (
              // biome-ignore lint/suspicious/noArrayIndexKey: spacer positions are stable
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9" }, seatIdx)
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `bus.seat.item.${rowIdx * 5 + seatIdx + 1}`,
                disabled: BOOKED_SEATS.has(seat),
                onClick: () => toggleSeat(seat),
                className: `w-9 h-9 rounded-lg text-xs font-bold transition-all border-2 ${BOOKED_SEATS.has(seat) ? "bg-muted-foreground/20 border-muted-foreground/20 text-muted-foreground cursor-not-allowed" : LADIES_SEATS.has(seat) ? selectedSeats.includes(seat) ? "bg-pink-500 border-pink-500 text-white" : "bg-pink-100 border-pink-300 text-pink-700 hover:bg-pink-200" : selectedSeats.includes(seat) ? "bg-primary border-primary text-primary-foreground" : "bg-emerald-100 border-emerald-400 text-emerald-700 hover:bg-emerald-200"}`,
                children: seat
              },
              seat
            )
          ) }, rowIdx)
        )) }),
        selectedSeats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3 text-sm space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Selected seats:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: selectedSeats.join(", ") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total fare:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
              "₹",
              selectedBus.price * selectedSeats.length
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(2), children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1", onClick: handleProceedToPassengers, children: "Proceed to Passenger Details" })
        ] })
      ] })
    ] }),
    step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Passenger Details" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        passengers.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-lg p-4 space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-primary", children: [
                "Seat: ",
                selectedSeats[idx]
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Passenger Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: p.name,
                      onChange: (e) => updatePassenger(idx, "name", e.target.value),
                      placeholder: "Full name"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      value: p.age,
                      onChange: (e) => updatePassenger(idx, "age", e.target.value),
                      placeholder: "Age"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Gender" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RadioGroup,
                  {
                    value: p.gender,
                    onValueChange: (v) => updatePassenger(idx, "gender", v),
                    className: "flex gap-4",
                    children: ["Male", "Female", "Other"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: g, id: `gender-${idx}-${g}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: `gender-${idx}-${g}`,
                          className: "cursor-pointer text-sm",
                          children: g
                        }
                      )
                    ] }, g))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "ID Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: p.idType,
                      onValueChange: (v) => updatePassenger(idx, "idType", v),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Aadhaar", "PAN", "Passport", "Voter ID"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "ID Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: p.idNumber,
                      onChange: (e) => updatePassenger(idx, "idNumber", e.target.value),
                      placeholder: "Enter ID number"
                    }
                  )
                ] })
              ] })
            ]
          },
          selectedSeats[idx]
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "your@email.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "tel",
                  value: mobile,
                  onChange: (e) => setMobile(e.target.value),
                  placeholder: "10-digit mobile",
                  maxLength: 10
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(3), children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1", onClick: () => setStep(5), children: "Proceed to Payment" })
        ] })
      ] })
    ] }),
    step === 5 && selectedBus && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Payment Summary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 16, className: "text-primary" }),
            fromCity,
            " → ",
            toCity
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-xs", children: [
            journeyDate,
            " · ",
            selectedBus.operator,
            " · ",
            selectedBus.type
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            "Seats:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: selectedSeats.join(", ") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          [
            {
              label: `Base fare × ${selectedSeats.length}`,
              value: `₹${baseFare}`
            },
            { label: "Operator charges", value: `₹${operatorCharges}` },
            { label: "Service fee", value: `₹${serviceFee}` },
            { label: "GST (5%)", value: `₹${gst}` }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.value })
              ]
            },
            item.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2 flex justify-between font-bold text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "₹",
              total
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "bus.confirm_button",
            className: "w-full",
            onClick: () => setShowConfirmDialog(true),
            children: [
              "Confirm & Pay ₹",
              total
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showConfirmDialog, onOpenChange: setShowConfirmDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "bus.confirm_dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm Payment" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "You are about to pay ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "₹",
          total
        ] }),
        " for",
        " ",
        selectedSeats.length,
        " seat(s) on ",
        selectedBus == null ? void 0 : selectedBus.operator,
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowConfirmDialog(false),
            "data-ocid": "bus.confirm_dialog.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleConfirmBooking,
            "data-ocid": "bus.confirm_dialog.confirm_button",
            children: "Confirm & Pay"
          }
        )
      ] })
    ] }) })
  ] });
}
var NAME = "Toggle";
var Toggle = reactExports.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
  const [pressed, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed ?? false,
    caller: NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME;
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup$1 = React.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? "",
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: React.useMemo(() => value ? [value] : [], [value]),
      onItemActivate: setValue,
      onItemDeactivate: React.useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  const handleButtonActivate = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext$1, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupContext$1, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = React.useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root2 = ToggleGroup$1;
var Item2 = ToggleGroupItem$1;
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const ToggleGroupContext = reactExports.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      className: cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = reactExports.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      ),
      ...props,
      children
    }
  );
}
const OPERATORS = ["Airtel", "Jio", "Vi (Vodafone-Idea)", "BSNL", "MTNL"];
const CIRCLES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chennai",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "J&K",
  "Karnataka",
  "Kerala",
  "Kolkata",
  "Madhya Pradesh",
  "Maharashtra",
  "Mumbai",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "UP East",
  "UP West",
  "West Bengal"
];
const DTH_OPERATORS = [
  "Tata Play",
  "Airtel DTH",
  "Dish TV",
  "Videocon D2H",
  "Sun Direct"
];
const PLANS = {
  Jio: {
    Combo: [
      {
        amount: 179,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 299,
        validity: "28 days",
        benefits: "2GB/day + Unlimited calls"
      },
      {
        amount: 399,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 599,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls"
      },
      {
        amount: 999,
        validity: "365 days",
        benefits: "2GB/day + Unlimited calls"
      }
    ],
    Data: [
      { amount: 51, validity: "28 days", benefits: "6GB data top-up" },
      { amount: 91, validity: "28 days", benefits: "12GB data top-up" },
      { amount: 151, validity: "28 days", benefits: "25GB data top-up" }
    ],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
      { amount: 20, validity: "NA", benefits: "₹20 full talktime" },
      { amount: 50, validity: "NA", benefits: "₹50 full talktime" }
    ],
    "Top-up": [
      { amount: 10, validity: "NA", benefits: "₹10 balance" },
      { amount: 50, validity: "NA", benefits: "₹50 balance" },
      { amount: 100, validity: "NA", benefits: "₹100 balance" }
    ],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }]
  },
  Airtel: {
    Combo: [
      {
        amount: 155,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls"
      },
      {
        amount: 265,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 359,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 479,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls"
      },
      {
        amount: 839,
        validity: "365 days",
        benefits: "1.5GB/day + Unlimited calls"
      }
    ],
    Data: [
      { amount: 48, validity: "28 days", benefits: "3GB data top-up" },
      { amount: 98, validity: "28 days", benefits: "10GB data top-up" }
    ],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
      { amount: 100, validity: "NA", benefits: "₹100 full talktime" }
    ],
    "Top-up": [
      { amount: 50, validity: "NA", benefits: "₹50 balance" },
      { amount: 200, validity: "NA", benefits: "₹200 balance" }
    ],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }]
  },
  "Vi (Vodafone-Idea)": {
    Combo: [
      {
        amount: 149,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls"
      },
      {
        amount: 269,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 349,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls"
      },
      {
        amount: 469,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls"
      }
    ],
    Data: [{ amount: 57, validity: "28 days", benefits: "3GB data top-up" }],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" }
    ],
    "Top-up": [{ amount: 100, validity: "NA", benefits: "₹100 balance" }],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }]
  },
  BSNL: {
    Combo: [
      {
        amount: 107,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls"
      },
      {
        amount: 197,
        validity: "56 days",
        benefits: "1GB/day + Unlimited calls"
      },
      {
        amount: 397,
        validity: "90 days",
        benefits: "1.5GB/day + Unlimited calls"
      }
    ],
    Data: [],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" }
    ],
    "Top-up": [{ amount: 50, validity: "NA", benefits: "₹50 balance" }],
    SMS: []
  },
  MTNL: {
    Combo: [
      { amount: 200, validity: "28 days", benefits: "1.5GB/day + Calls" }
    ],
    Data: [],
    "Full Talktime": [],
    "Top-up": [],
    SMS: []
  }
};
const PLAN_TYPES = ["Top-up", "Full Talktime", "Data", "Combo", "SMS"];
function ComingSoonTab({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 gap-3 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Construction, { size: 24, className: "text-muted-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
      label,
      " — Coming Soon"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This recharge category will be available soon." })
  ] });
}
function MobileTab() {
  const [mobile, setMobile] = reactExports.useState("");
  const [operator, setOperator] = reactExports.useState("Jio");
  const [circle, setCircle] = reactExports.useState("Delhi");
  const [rechargeType, setRechargeType] = reactExports.useState("prepaid");
  const [planType, setPlanType] = reactExports.useState("Combo");
  const [confirmPlan, setConfirmPlan] = reactExports.useState(null);
  const handleRecharge = (plan) => {
    if (!mobile || mobile.length !== 10) {
      ue.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setConfirmPlan(plan);
  };
  const handleConfirm = () => {
    const txnId = `TXN${Date.now().toString().slice(-8)}`;
    ue.success(`Recharge successful! Transaction ID: ${txnId}`, {
      duration: 5e3
    });
    setConfirmPlan(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "recharge.mobile_input",
            type: "tel",
            maxLength: 10,
            value: mobile,
            onChange: (e) => setMobile(e.target.value.replace(/\D/g, "")),
            placeholder: "Enter 10-digit mobile number"
          }
        ),
        mobile.length === 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600", children: [
          "Auto-detected: ",
          operator
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Operator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: operator, onValueChange: setOperator, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "recharge.operator_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OPERATORS.map((op) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: op, children: op }, op)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Circle (State)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: circle, onValueChange: setCircle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "recharge.circle_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CIRCLES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Recharge Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ToggleGroup,
          {
            type: "single",
            value: rechargeType,
            onValueChange: (v) => v && setRechargeType(v),
            className: "justify-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "prepaid", className: "text-sm", children: "Prepaid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "postpaid", className: "text-sm", children: "Postpaid" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "Browse Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          value: planType,
          onValueChange: (v) => setPlanType(v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "mb-4 flex-wrap h-auto gap-1", children: PLAN_TYPES.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: pt, className: "text-xs", children: pt }, pt)) }),
            PLAN_TYPES.map((pt) => {
              var _a, _b;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: pt, children: (((_a = PLANS[operator]) == null ? void 0 : _a[pt]) || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center py-6", children: [
                "No ",
                pt,
                " plans available for ",
                operator
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: (((_b = PLANS[operator]) == null ? void 0 : _b[pt]) || []).map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  "data-ocid": `recharge.plan.item.${plan.amount}`,
                  className: "hover:border-primary/50 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-primary", children: [
                        "₹",
                        plan.amount
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: plan.validity })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: plan.benefits }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "w-full",
                        "data-ocid": "recharge.plan.recharge_button.1",
                        onClick: () => handleRecharge(plan),
                        children: "Recharge"
                      }
                    )
                  ] })
                },
                `${plan.amount}-${plan.validity}`
              )) }) }, pt);
            })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!confirmPlan, onOpenChange: () => setConfirmPlan(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "recharge.confirm_dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm Recharge" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Mobile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: mobile })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Operator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: operator })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Circle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: circle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: confirmPlan == null ? void 0 : confirmPlan.benefits })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Validity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: confirmPlan == null ? void 0 : confirmPlan.validity })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
            "₹",
            confirmPlan == null ? void 0 : confirmPlan.amount
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setConfirmPlan(null),
            "data-ocid": "recharge.confirm_dialog.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleConfirm, "data-ocid": "recharge.confirm_button", children: "Confirm Recharge" })
      ] })
    ] }) })
  ] });
}
function DthTab() {
  const [customerId, setCustomerId] = reactExports.useState("");
  const [operator, setOperator] = reactExports.useState("Tata Play");
  const [amount, setAmount] = reactExports.useState("");
  const handleRecharge = () => {
    if (!customerId || !amount) {
      ue.error("Please fill in all DTH recharge details");
      return;
    }
    const txnId = `DTH${Date.now().toString().slice(-8)}`;
    ue.success(`DTH Recharge successful! TXN: ${txnId}`, { duration: 4e3 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Customer ID / Subscriber ID" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: customerId,
          onChange: (e) => setCustomerId(e.target.value),
          placeholder: "Enter your DTH Customer ID"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "DTH Operator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: operator, onValueChange: setOperator, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DTH_OPERATORS.map((op) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: op, children: op }, op)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Recharge Amount (₹)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          value: amount,
          onChange: (e) => setAmount(e.target.value),
          placeholder: "Enter amount"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", onClick: handleRecharge, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TvMinimal, { size: 16, className: "mr-2" }),
      " Recharge DTH"
    ] })
  ] });
}
function RechargeBookingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto p-4 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 20, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Recharge & Bill Pay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Powered by PaySprint" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "mobile", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "flex-wrap h-auto gap-1 mb-4", children: [
        { value: "mobile", label: "Mobile", icon: Smartphone },
        { value: "dth", label: "DTH", icon: TvMinimal },
        { value: "electricity", label: "Electricity", icon: Zap },
        { value: "gas", label: "Gas", icon: Construction },
        { value: "water", label: "Water", icon: Construction }
      ].map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value, className: "gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 }),
        " ",
        label
      ] }, value)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "mobile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DthTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "electricity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonTab, { label: "Electricity Bill Payment" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "gas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonTab, { label: "Gas Bill Payment" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "water", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonTab, { label: "Water Bill Payment" }) })
    ] })
  ] });
}
const COMING_SOON_SERVICES = [
  {
    icon: TramFront,
    label: "Train Booking",
    desc: "Book IRCTC trains via PaySprint API",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Plane,
    label: "Flight Booking",
    desc: "Domestic & international flights",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];
function TransportBookingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "px-6 py-8",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.15), oklch(0.65 0.25 335 / 0.1))"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Transport & Recharge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Book tickets and recharge — all powered by PaySprint" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-4 flex-wrap", children: COMING_SOON_SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 bg-background/80 rounded-xl px-3 py-2 border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 14, className: s.color })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: s.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: s.desc })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[9px] ml-1", children: "Soon" })
              ]
            },
            s.label
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "bus", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "bus",
            "data-ocid": "transport.bus_tab",
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 15 }),
              " Bus Booking"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "recharge",
            "data-ocid": "transport.recharge_tab",
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 15 }),
              " Recharge"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "bus", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusBookingPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "recharge", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RechargeBookingPage, {}) })
    ] }) })
  ] });
}
export {
  TransportBookingPage as default
};
