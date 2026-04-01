import { k as createLucideIcon, r as reactExports, p as Car, j as jsxRuntimeExports, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, L as Label, N as MapPin, I as Input, t as Clock, a as Button, q as Users, u as ue, B as Badge } from "./index-DQm1FmJn.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-DLVGxgo7.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CjbhWZKd.js";
import { P as PaymentModal } from "./PaymentModal-CdSmoLbZ.js";
import { T as Truck } from "./truck-D7gfzCNv.js";
import { N as Navigation } from "./navigation-B5Zl5U1d.js";
import { S as Star } from "./star-C_hI7p9O.js";
import "./credit-card-CpxBp-1g.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
];
const Bike = createLucideIcon("bike", __iconNode);
const VEHICLE_TYPES = [
  {
    id: "taxi",
    label: "Taxi / Car",
    icon: Car,
    baseFare: 50,
    perKm: 12,
    color: "text-yellow-500"
  },
  {
    id: "bike",
    label: "Bike",
    icon: Bike,
    baseFare: 25,
    perKm: 6,
    color: "text-green-500"
  },
  {
    id: "auto",
    label: "Auto Rickshaw",
    icon: Truck,
    baseFare: 30,
    perKm: 8,
    color: "text-blue-500"
  }
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
    rating: 5
  },
  {
    id: "RD-002",
    from: "Juhu",
    to: "Powai",
    vehicle: "Bike",
    fare: "₹95",
    date: "10 Mar 2026",
    status: "Completed",
    rating: 4
  },
  {
    id: "RD-003",
    from: "Dadar",
    to: "Churchgate",
    vehicle: "Auto",
    fare: "₹130",
    date: "8 Mar 2026",
    status: "Cancelled",
    rating: null
  }
];
const SHARED_ROUTES = [
  {
    id: 1,
    route: "Bandra ↔ BKC",
    seats: 3,
    available: 2,
    price: "₹60",
    departs: "08:00 AM"
  },
  {
    id: 2,
    route: "Andheri ↔ Nariman Point",
    seats: 4,
    available: 1,
    price: "₹80",
    departs: "09:00 AM"
  },
  {
    id: 3,
    route: "Thane ↔ Bandra",
    seats: 3,
    available: 3,
    price: "₹120",
    departs: "07:30 AM"
  }
];
function RideBookingPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
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
      baseFare: ((_a = savedRates == null ? void 0 : savedRates.taxi) == null ? void 0 : _a.baseFare) ?? 50,
      perKm: ((_b = savedRates == null ? void 0 : savedRates.taxi) == null ? void 0 : _b.perKm) ?? 15,
      surgeMult: ((_c = savedRates == null ? void 0 : savedRates.taxi) == null ? void 0 : _c.surgeMult) ?? 1
    },
    bike: {
      baseFare: ((_d = savedRates == null ? void 0 : savedRates.bike) == null ? void 0 : _d.baseFare) ?? 20,
      perKm: ((_e = savedRates == null ? void 0 : savedRates.bike) == null ? void 0 : _e.perKm) ?? 8,
      surgeMult: ((_f = savedRates == null ? void 0 : savedRates.bike) == null ? void 0 : _f.surgeMult) ?? 1
    },
    auto: {
      baseFare: ((_g = savedRates == null ? void 0 : savedRates.auto) == null ? void 0 : _g.baseFare) ?? 30,
      perKm: ((_h = savedRates == null ? void 0 : savedRates.auto) == null ? void 0 : _h.perKm) ?? 10,
      surgeMult: ((_i = savedRates == null ? void 0 : savedRates.auto) == null ? void 0 : _i.surgeMult) ?? 1
    }
  };
  const [from, setFrom] = reactExports.useState("");
  const [to, setTo] = reactExports.useState("");
  const [vehicle, setVehicle] = reactExports.useState("taxi");
  const [paymentOpen, setPaymentOpen] = reactExports.useState(false);
  const [estimatedDist, setEstimatedDist] = reactExports.useState(7.5);
  const selectedVehicle = VEHICLE_TYPES.find((v) => v.id === vehicle);
  const rateCard = RATE_CARDS[vehicle] ?? RATE_CARDS.taxi;
  const estimatedFare = (rateCard.baseFare + rateCard.perKm * estimatedDist) * rateCard.surgeMult;
  const handleBookNow = () => {
    if (!from || !to) {
      ue.error("Please enter pickup and drop locations");
      return;
    }
    setPaymentOpen(true);
  };
  const handleRidePaySuccess = () => {
    setPaymentOpen(false);
    ue.success("Ride booked! Driver will arrive in ~4 minutes.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-6", "data-ocid": "rides.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Ride Booking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Book a taxi, bike ride, or auto at fixed transparent rates." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "book", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1 bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "book", "data-ocid": "rides.book.tab", children: "Book Ride" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "shared", "data-ocid": "rides.shared.tab", children: "Shared Ride" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "my-rides", "data-ocid": "rides.my_rides.tab", children: "My Rides" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rates", "data-ocid": "rides.rates.tab", children: "Rate Cards" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "book", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display", children: "Where to?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pickup Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MapPin,
                  {
                    size: 14,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-green-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "pl-9",
                    placeholder: "Enter pickup point",
                    value: from,
                    onChange: (e) => setFrom(e.target.value),
                    "data-ocid": "rides.from.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Drop Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Navigation,
                  {
                    size: 14,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-red-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "pl-9",
                    placeholder: "Enter destination",
                    value: to,
                    onChange: (e) => setTo(e.target.value),
                    "data-ocid": "rides.to.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
                "Estimated Distance: ",
                estimatedDist,
                " km"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: "1",
                  max: "30",
                  step: "0.5",
                  value: estimatedDist,
                  onChange: (e) => setEstimatedDist(Number(e.target.value)),
                  className: "w-full mt-2 accent-primary",
                  "data-ocid": "rides.distance.input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1 km" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "30 km" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Vehicle Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-2", children: VEHICLE_TYPES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setVehicle(v.id),
                  className: `flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${vehicle === v.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"}`,
                  "data-ocid": `rides.vehicle.${v.id}.toggle`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { size: 20, className: v.color }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label font-medium", children: v.label })
                  ]
                },
                v.id
              )) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display", children: "Fare Estimate" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Vehicle" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: selectedVehicle == null ? void 0 : selectedVehicle.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Base Fare" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  selectedVehicle == null ? void 0 : selectedVehicle.baseFare
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "Distance (~",
                  estimatedDist,
                  " km)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  selectedVehicle ? (selectedVehicle.perKm * estimatedDist).toFixed(0) : 0
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-bold border-t border-border pt-2 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimated Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                  "₹",
                  estimatedFare.toFixed(0)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimated arrival: 4–6 minutes" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full",
                onClick: handleBookNow,
                "data-ocid": "rides.book.primary_button",
                children: "Book Now"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "shared", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Join a scheduled shared ride at a fixed low price." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: SHARED_ROUTES.map((route, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-2xl border-border shadow-sm",
            "data-ocid": `rides.shared.card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: route.route })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Departs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: route.departs })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Seats Left" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: `font-medium ${route.available <= 1 ? "text-red-500" : "text-green-600"}`,
                      children: [
                        route.available,
                        "/",
                        route.seats
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-primary", children: route.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-8 text-xs",
                    onClick: () => ue.success("Seat booked!"),
                    "data-ocid": `rides.shared.primary_button.${i + 1}`,
                    children: "Book Seat"
                  }
                )
              ] })
            ] })
          },
          route.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "my-rides", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "rides.history.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Ride ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "From → To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Vehicle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Fare" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Rating" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: MY_RIDES.map((ride, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `rides.history.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono text-primary", children: ride.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
                ride.from,
                " → ",
                ride.to
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: ride.vehicle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: ride.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: `text-[10px] ${ride.status === "Completed" ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`,
                  children: ride.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-semibold", children: ride.fare }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: ride.rating ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 10,
                    className: "text-yellow-400 fill-yellow-400"
                  }
                ),
                ride.rating
              ] }) : "—" })
            ]
          },
          ride.id
        )) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "rates", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: VEHICLE_TYPES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-2xl border-border shadow-sm",
          "data-ocid": `rides.rate.card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { size: 22, className: v.color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-display font-bold", children: v.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Base Fare" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "₹",
                  v.baseFare
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Per KM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "₹",
                  v.perKm
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Est. 5km fare" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                  "₹",
                  v.baseFare + v.perKm * 5
                ] })
              ] })
            ] })
          ] })
        },
        v.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentModal,
      {
        open: paymentOpen,
        onCancel: () => setPaymentOpen(false),
        onSuccess: handleRidePaySuccess,
        amount: Math.round(estimatedFare),
        title: "Confirm & Pay for Ride"
      }
    )
  ] });
}
export {
  RideBookingPage as default
};
