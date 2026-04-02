import { k as createLucideIcon, r as reactExports, j as jsxRuntimeExports, R as Plane, x as Briefcase, a as Button, u as ue, T as Tabs, c as TabsList, d as TabsTrigger, aV as Bus, p as Car, e as TabsContent, o as TriangleAlert, D as Dialog, z as DialogTrigger, K as Plus, E as DialogContent, F as DialogHeader, G as DialogTitle, a9 as ScrollArea, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, J as DialogFooter, B as Badge, N as MapPin, l as Building2, t as Clock, q as Users, aT as ChevronUp, _ as ChevronDown, v as CircleCheck, $ as Switch, Z as Zap } from "./index-BUwiR49K.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-Bvlsyti_.js";
import { T as Textarea } from "./textarea-D4qg7eX8.js";
import { E as EventsTab } from "./EventsTab-BN8bXnA7.js";
import { Q as QuickAddBar } from "./QuickAddBar-DwEjBJyr.js";
import { C as Calendar } from "./calendar-fqFt5hj8.js";
import { N as Navigation } from "./navigation-oBIXZHAE.js";
import { T as Trash2 } from "./trash-2-B95Go7ao.js";
import { S as Star } from "./star-CsTg6-fC.js";
import { C as Crown } from "./crown-CUCYyq_W.js";
import "./share-2-CQg0iDeR.js";
import "./lock-CKM9ZCDR.js";
import "./globe-8-_IrNBg.js";
import "./checkbox-CbC1uGmv.js";
import "./settings-2-CXDp9rhM.js";
import "./upload-D4MfHBbE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
];
const Hotel = createLucideIcon("hotel", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
];
const Route = createLucideIcon("route", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
const MOCK_PACKAGES = [
  {
    id: 1,
    name: "Hunza Valley 7-Day Adventure",
    operator: "Northern Trails Co.",
    destinations: ["Lahore", "Islamabad", "Hunza", "Nagar"],
    duration: 7,
    price: 95e3,
    totalSeats: 20,
    availableSeats: 8,
    commission: 10,
    privacy: "Public",
    description: "Experience the breathtaking valleys of Hunza and Nagar with guided treks, local cuisine, and cultural immersion.",
    gradient: "from-violet-600 via-purple-600 to-indigo-700"
  },
  {
    id: 2,
    name: "Murree Weekend Getaway",
    operator: "Hill Escape Tours",
    destinations: ["Lahore", "Murree", "Bhurban"],
    duration: 3,
    price: 22e3,
    totalSeats: 15,
    availableSeats: 5,
    commission: 8,
    privacy: "Friends",
    description: "A refreshing 3-day escape to the cool pines of Murree with hotel stay and local sightseeing.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700"
  },
  {
    id: 3,
    name: "Maldives Honeymoon Special",
    operator: "Luxe Voyages Pvt.",
    destinations: ["Karachi", "Malé", "Baa Atoll"],
    duration: 7,
    price: 38e4,
    totalSeats: 10,
    availableSeats: 3,
    commission: 15,
    privacy: "Family",
    description: "Overwater bungalow, sunrise snorkeling, and private beach dinners crafted for couples.",
    gradient: "from-pink-500 via-rose-500 to-red-600"
  },
  {
    id: 4,
    name: "Fairy Meadows Trek",
    operator: "Peak Seekers",
    destinations: ["Islamabad", "Raikot", "Fairy Meadows"],
    duration: 5,
    price: 55e3,
    totalSeats: 12,
    availableSeats: 6,
    commission: 12,
    privacy: "Public",
    description: "Trek to the world's most beautiful meadow beneath Nanga Parbat with full camping gear provided.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500"
  },
  {
    id: 5,
    name: "Nathia Gali Family Tour",
    operator: "Family Journeys",
    destinations: ["Rawalpindi", "Nathia Gali", "Dunga Gali"],
    duration: 4,
    price: 35e3,
    totalSeats: 25,
    availableSeats: 12,
    commission: 7,
    privacy: "Public",
    description: "Kid-friendly forest trails, clean mountain air, and cozy family cottages in Nathia Gali.",
    gradient: "from-green-600 via-lime-600 to-emerald-600"
  },
  {
    id: 6,
    name: "Lahore to Islamabad Road Trip",
    operator: "Route 5 Travels",
    destinations: ["Lahore", "Kalar Kahar", "Islamabad"],
    duration: 2,
    price: 12e3,
    totalSeats: 8,
    availableSeats: 4,
    commission: 5,
    privacy: "Friends",
    description: "Scenic road trip on the motorway with stops at Kalar Kahar and Salt Range viewpoints.",
    gradient: "from-blue-600 via-indigo-600 to-violet-600"
  }
];
const MOCK_HOTELS = [
  {
    id: 1,
    name: "Pearl Continental Lahore",
    city: "Lahore",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 28e3,
    roomTypes: ["Standard", "Deluxe", "Suite"]
  },
  {
    id: 2,
    name: "Marriott Islamabad",
    city: "Islamabad",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 32e3,
    roomTypes: ["Standard", "Deluxe", "Suite"]
  },
  {
    id: 3,
    name: "Pearl Continental Karachi",
    city: "Karachi",
    stars: 5,
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym"],
    pricePerNight: 26e3,
    roomTypes: ["Standard", "Deluxe", "Suite"]
  },
  {
    id: 4,
    name: "Shangrila Resort Murree",
    city: "Murree",
    stars: 4,
    amenities: ["WiFi", "Parking", "Restaurant"],
    pricePerNight: 18e3,
    roomTypes: ["Standard", "Deluxe"]
  },
  {
    id: 5,
    name: "Serena Hotel Faisalabad",
    city: "Faisalabad",
    stars: 4,
    amenities: ["WiFi", "Pool", "Restaurant", "Gym"],
    pricePerNight: 15e3,
    roomTypes: ["Standard", "Deluxe", "Suite"]
  },
  {
    id: 6,
    name: "Eagle's Nest Hunza",
    city: "Hunza",
    stars: 3,
    amenities: ["WiFi", "Parking", "Restaurant"],
    pricePerNight: 8e3,
    roomTypes: ["Standard", "Deluxe"]
  }
];
const MOCK_TRANSPORT = [
  {
    id: 1,
    from: "Lahore",
    to: "Islamabad",
    type: "Bus",
    departureTime: "08:00 AM",
    availableSeats: 30,
    pricePerSeat: 1200,
    pricePerVehicle: 38e3
  },
  {
    id: 2,
    from: "Karachi",
    to: "Hyderabad",
    type: "Van",
    departureTime: "09:30 AM",
    availableSeats: 12,
    pricePerSeat: 600,
    pricePerVehicle: 8500
  },
  {
    id: 3,
    from: "Lahore",
    to: "Murree",
    type: "Coaster",
    departureTime: "07:00 AM",
    availableSeats: 22,
    pricePerSeat: 900,
    pricePerVehicle: 22e3
  },
  {
    id: 4,
    from: "Islamabad",
    to: "Hunza",
    type: "Van",
    departureTime: "05:00 AM",
    availableSeats: 10,
    pricePerSeat: 3500,
    pricePerVehicle: 45e3
  },
  {
    id: 5,
    from: "Lahore",
    to: "Karachi",
    type: "Bus",
    departureTime: "10:00 PM",
    availableSeats: 40,
    pricePerSeat: 4e3,
    pricePerVehicle: 18e4
  },
  {
    id: 6,
    from: "Faisalabad",
    to: "Lahore",
    type: "Car",
    departureTime: "11:00 AM",
    availableSeats: 4,
    pricePerSeat: 800,
    pricePerVehicle: 4500
  }
];
const MOCK_ITINERARIES = [
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
            type: "Transport"
          },
          {
            id: 2,
            time: "09:00 AM",
            name: "Arrive Islamabad",
            location: "BBIAP",
            type: "Transport"
          },
          {
            id: 3,
            time: "01:00 PM",
            name: "Lunch at Monal",
            location: "Margalla Hills",
            type: "Meal"
          }
        ],
        attachedHotelId: 2,
        attachedTransportId: 1
      },
      {
        day: 2,
        activities: [
          {
            id: 4,
            time: "05:00 AM",
            name: "Drive to Hunza via KKH",
            location: "Karakoram Highway",
            type: "Transport"
          },
          {
            id: 5,
            time: "06:00 PM",
            name: "Check-in Eagle's Nest",
            location: "Hunza",
            type: "Hotel"
          }
        ],
        attachedHotelId: 6,
        attachedTransportId: 4
      }
    ]
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
            type: "Transport"
          },
          {
            id: 2,
            time: "02:00 PM",
            name: "Mall Road Walk",
            location: "Mall Road, Murree",
            type: "Sightseeing"
          }
        ],
        attachedHotelId: 4,
        attachedTransportId: 3
      }
    ]
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
            type: "Sightseeing"
          },
          {
            id: 2,
            time: "01:00 PM",
            name: "Daman-e-Koh lunch",
            location: "Margalla Hills",
            type: "Meal"
          },
          {
            id: 3,
            time: "04:00 PM",
            name: "Lok Virsa Museum",
            location: "H9, Islamabad",
            type: "Sightseeing"
          }
        ],
        attachedHotelId: 2
      }
    ]
  }
];
const CITY_DISTANCES = {
  Lahore: {
    Islamabad: 375,
    Karachi: 1210,
    Faisalabad: 128,
    Multan: 340,
    Peshawar: 490,
    Murree: 390,
    Hunza: 1050,
    Hyderabad: 1280
  },
  Islamabad: {
    Lahore: 375,
    Karachi: 1430,
    Faisalabad: 280,
    Multan: 530,
    Peshawar: 175,
    Murree: 60,
    Hunza: 680,
    Hyderabad: 1480
  },
  Karachi: {
    Lahore: 1210,
    Islamabad: 1430,
    Faisalabad: 1120,
    Multan: 960,
    Peshawar: 1600,
    Hyderabad: 160
  },
  Faisalabad: {
    Lahore: 128,
    Islamabad: 280,
    Multan: 240
  },
  Multan: {
    Lahore: 340,
    Islamabad: 530,
    Faisalabad: 240,
    Karachi: 960
  },
  Peshawar: {
    Islamabad: 175,
    Lahore: 490
  },
  Murree: { Islamabad: 60, Lahore: 390 },
  Hunza: { Islamabad: 680, Lahore: 1050 },
  Hyderabad: { Karachi: 160, Lahore: 1280 }
};
const CAB_RATES = {
  Economy: 25,
  Comfort: 40,
  Premium: 65
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
  "Sialkot"
];
function formatCurrency(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
function getDistance(from, to) {
  var _a, _b;
  return ((_a = CITY_DISTANCES[from]) == null ? void 0 : _a[to]) ?? ((_b = CITY_DISTANCES[to]) == null ? void 0 : _b[from]) ?? null;
}
const STAR_POSITIONS = [1, 2, 3, 4, 5];
function StarRating({ stars }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: STAR_POSITIONS.map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      size: 12,
      className: pos <= stars ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"
    },
    pos
  )) });
}
function AmenityChip({ label }) {
  const iconMap = {
    WiFi: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { size: 10 }),
    Pool: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "🏊" }),
    Parking: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 10 }),
    Restaurant: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "🍽️" }),
    Gym: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary", children: [
    iconMap[label] ?? null,
    label
  ] });
}
function PrivacyBadge({ level }) {
  const styles = {
    Public: "bg-green-500/15 text-green-600 dark:text-green-400",
    Friends: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Family: "bg-violet-500/15 text-violet-500",
    Private: "bg-gray-500/15 text-gray-500"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `text-[10px] font-medium px-2 py-0.5 rounded-full ${styles[level]}`,
      children: level
    }
  );
}
function TransportIcon({ type }) {
  const icons = {
    Bus: /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 14 }),
    Van: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 14 }),
    Car: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 14 }),
    Coaster: /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 14 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: icons[type] });
}
function PackagesTab({
  hasBusiness,
  packages,
  onAddPackage
}) {
  const [bookTarget, setBookTarget] = reactExports.useState(null);
  const [bookCount, setBookCount] = reactExports.useState(1);
  const [bookDate, setBookDate] = reactExports.useState("");
  const [bookOpen, setBookOpen] = reactExports.useState(false);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    operator: "",
    destinations: "",
    duration: "7",
    price: "",
    totalSeats: "20",
    commission: "10",
    privacy: "Public",
    description: ""
  });
  const handleBook = () => {
    if (!bookDate) {
      ue.error("Please select a travel date.");
      return;
    }
    ue.success(
      `Booking confirmed for ${bookTarget == null ? void 0 : bookTarget.name}! ${formatCurrency(((bookTarget == null ? void 0 : bookTarget.price) ?? 0) * bookCount)} total.`
    );
    setBookOpen(false);
    setBookCount(1);
    setBookDate("");
  };
  const handleAdd = () => {
    if (!form.name || !form.price) {
      ue.error("Package name and price are required.");
      return;
    }
    onAddPackage({
      name: form.name,
      operator: form.operator || "My Travel Co.",
      destinations: form.destinations.split(",").map((d) => d.trim()).filter(Boolean),
      duration: Number(form.duration),
      price: Number(form.price),
      totalSeats: Number(form.totalSeats),
      availableSeats: Number(form.totalSeats),
      commission: Number(form.commission),
      privacy: form.privacy,
      description: form.description
    });
    setAddOpen(false);
    ue.success("Package listed successfully!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    !hasBusiness && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl border border-yellow-400/40 bg-yellow-500/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TriangleAlert,
        {
          size: 18,
          className: "text-yellow-500 shrink-0 mt-0.5"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: [
        "Link a business in your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Family Tree" }),
        " to create and list travel packages."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "Tour Packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          packages.length,
          " packages available"
        ] })
      ] }),
      hasBusiness && /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
          " Add Package"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Create Tour Package" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[60vh] pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Package Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: form.name,
                  onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                  placeholder: "e.g. Skardu 5-Day Trek"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Operator / Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: form.operator,
                  onChange: (e) => setForm((p) => ({ ...p, operator: e.target.value })),
                  placeholder: "Your travel company name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Destinations (comma-separated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: form.destinations,
                  onChange: (e) => setForm((p) => ({ ...p, destinations: e.target.value })),
                  placeholder: "Lahore, Skardu, Shigar"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Duration (days)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 1,
                    value: form.duration,
                    onChange: (e) => setForm((p) => ({ ...p, duration: e.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    value: form.price,
                    onChange: (e) => setForm((p) => ({ ...p, price: e.target.value })),
                    placeholder: "45000"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Total Seats" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 1,
                    value: form.totalSeats,
                    onChange: (e) => setForm((p) => ({ ...p, totalSeats: e.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Agent Commission (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    max: 50,
                    value: form.commission,
                    onChange: (e) => setForm((p) => ({ ...p, commission: e.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Privacy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.privacy,
                  onValueChange: (v) => setForm((p) => ({ ...p, privacy: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                      "Public",
                      "Friends",
                      "Family",
                      "Private"
                    ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l, children: l }, l)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: form.description,
                  onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                  rows: 3,
                  placeholder: "Tell travelers what makes this package special…"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setAddOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleAdd, children: "Create Package" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4", children: packages.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "overflow-hidden group hover:shadow-lg transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `h-28 bg-gradient-to-br ${pkg.gradient} relative flex items-end p-3`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyBadge, { level: pkg.privacy }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] font-bold bg-white/20 text-white border-0",
                    children: [
                      pkg.duration,
                      "D"
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground line-clamp-1", children: pkg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 10 }),
                " ",
                pkg.operator
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: pkg.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              pkg.destinations.slice(0, 3).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 8 }),
                    d
                  ]
                },
                d
              )),
              pkg.destinations.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: [
                "+",
                pkg.destinations.length - 3
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-base", children: formatCurrency(pkg.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-1", children: "/ person" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                pkg.availableSeats,
                " seats left"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                "Agent: ",
                pkg.commission,
                "% commission"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Dialog,
                {
                  open: bookOpen && (bookTarget == null ? void 0 : bookTarget.id) === pkg.id,
                  onOpenChange: (o) => {
                    setBookOpen(o);
                    if (o) setBookTarget(pkg);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs px-3", children: "Book Now" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Book Package" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: pkg.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Number of Travelers" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8",
                                onClick: () => setBookCount((c) => Math.max(1, c - 1)),
                                children: "-"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-bold", children: bookCount }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8",
                                onClick: () => setBookCount(
                                  (c) => Math.min(pkg.availableSeats, c + 1)
                                ),
                                children: "+"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              "(",
                              pkg.availableSeats,
                              " available)"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Travel Date" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "date",
                              value: bookDate,
                              onChange: (e) => setBookDate(e.target.value),
                              className: "mt-1"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-secondary/60 space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                            formatCurrency(pkg.price),
                            " × ",
                            bookCount
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: formatCurrency(pkg.price * bookCount) })
                        ] }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "outline",
                            onClick: () => setBookOpen(false),
                            children: "Cancel"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBook, children: "Confirm Booking" })
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      pkg.id
    )) })
  ] });
}
function HotelsTab({ hotels }) {
  const [cityFilter, setCityFilter] = reactExports.useState("");
  const [checkIn, setCheckIn] = reactExports.useState("");
  const [checkOut, setCheckOut] = reactExports.useState("");
  const [bookTarget, setBookTarget] = reactExports.useState(null);
  const [roomType, setRoomType] = reactExports.useState("Standard");
  const [bookOpen, setBookOpen] = reactExports.useState(false);
  const nights = checkIn && checkOut ? Math.max(
    0,
    Math.floor(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 864e5
    )
  ) : 1;
  const roomMultiplier = {
    Standard: 1,
    Deluxe: 1.4,
    Suite: 2.2
  };
  const filtered = hotels.filter(
    (h) => !cityFilter || h.city.toLowerCase().includes(cityFilter.toLowerCase())
  );
  const handleBook = () => {
    ue.success(
      `${roomType} room at ${bookTarget == null ? void 0 : bookTarget.name} booked for ${nights} night(s)! ${formatCurrency(Math.round(((bookTarget == null ? void 0 : bookTarget.pricePerNight) ?? 0) * (roomMultiplier[roomType] ?? 1) * nights))}`
    );
    setBookOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Search City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MapPin,
              {
                size: 14,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "pl-8",
                placeholder: "e.g. Lahore",
                value: cityFilter,
                onChange: (e) => setCityFilter(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Check-In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              className: "mt-1",
              value: checkIn,
              onChange: (e) => setCheckIn(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Check-Out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              className: "mt-1",
              value: checkOut,
              onChange: (e) => setCheckOut(e.target.value)
            }
          )
        ] })
      ] }),
      checkIn && checkOut && nights > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-semibold", children: [
          nights,
          " night(s)"
        ] }),
        " ",
        "selected"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4", children: [
      filtered.map((hotel) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: hotel.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
              hotel.city
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { stars: hotel.stars }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: hotel.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(AmenityChip, { label: a }, a)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: hotel.roomTypes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground",
              children: r
            },
            r
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: formatCurrency(hotel.pricePerNight) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                " ",
                "/ night"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Dialog,
              {
                open: bookOpen && (bookTarget == null ? void 0 : bookTarget.id) === hotel.id,
                onOpenChange: (o) => {
                  setBookOpen(o);
                  if (o) {
                    setBookTarget(hotel);
                    setRoomType("Standard");
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs px-3 gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { size: 12 }),
                    " Book Room"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
                      "Book Room – ",
                      hotel.name
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Room Type" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roomType, onValueChange: setRoomType, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: hotel.roomTypes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Check-In" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "date",
                              className: "mt-1",
                              value: checkIn,
                              onChange: (e) => setCheckIn(e.target.value)
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Check-Out" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "date",
                              className: "mt-1",
                              value: checkOut,
                              onChange: (e) => setCheckOut(e.target.value)
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-secondary/60 space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                          formatCurrency(
                            Math.round(
                              hotel.pricePerNight * (roomMultiplier[roomType] ?? 1)
                            )
                          ),
                          " ",
                          "× ",
                          nights,
                          " night(s)"
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency(
                            Math.round(
                              hotel.pricePerNight * (roomMultiplier[roomType] ?? 1) * nights
                            )
                          ) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          onClick: () => setBookOpen(false),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBook, children: "Confirm Booking" })
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }, hotel.id)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 32, className: "mx-auto mb-2 opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No hotels match your search." })
      ] })
    ] })
  ] });
}
function TransportTab({ routes }) {
  const [typeFilter, setTypeFilter] = reactExports.useState("All");
  const [bookTarget, setBookTarget] = reactExports.useState(null);
  const [bookMode, setBookMode] = reactExports.useState("seats");
  const [seatCount, setSeatCount] = reactExports.useState(1);
  const [travelDate, setTravelDate] = reactExports.useState("");
  const [pickup, setPickup] = reactExports.useState("");
  const [bookOpen, setBookOpen] = reactExports.useState(false);
  const filtered = routes.filter(
    (r) => typeFilter === "All" || r.type === typeFilter
  );
  const handleBook = () => {
    if (!travelDate) {
      ue.error("Please select a travel date.");
      return;
    }
    const total = bookMode === "seats" ? ((bookTarget == null ? void 0 : bookTarget.pricePerSeat) ?? 0) * seatCount : (bookTarget == null ? void 0 : bookTarget.pricePerVehicle) ?? 0;
    ue.success(
      `Transport booked: ${bookTarget == null ? void 0 : bookTarget.from} → ${bookTarget == null ? void 0 : bookTarget.to}. Total: ${formatCurrency(total)}`
    );
    setBookOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      ["All", "Bus", "Van", "Car", "Coaster"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setTypeFilter(t),
          className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${typeFilter === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`,
          children: t
        },
        t
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-muted-foreground", children: [
        filtered.length,
        " routes"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4", children: filtered.map((route) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransportIcon, { type: route.type }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: route.from }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Route,
              {
                size: 12,
                className: "text-muted-foreground shrink-0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: route.to })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] mt-0.5 h-4", children: route.type })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
          route.departureTime
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 10 }),
          route.availableSeats,
          " seats"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Per seat: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatCurrency(route.pricePerSeat) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Vehicle: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatCurrency(route.pricePerVehicle) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Dialog,
        {
          open: bookOpen && (bookTarget == null ? void 0 : bookTarget.id) === route.id,
          onOpenChange: (o) => {
            setBookOpen(o);
            if (o) {
              setBookTarget(route);
              setSeatCount(1);
              setBookMode("seats");
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full h-7 text-xs gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 12 }),
              " Book Transport"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Book Transport" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
                  route.from,
                  " → ",
                  route.to,
                  " · ",
                  route.type
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Booking Mode" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setBookMode("seats"),
                        className: `flex-1 py-2 rounded-lg text-xs font-medium border transition-colors ${bookMode === "seats" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`,
                        children: "Per Seat"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setBookMode("vehicle"),
                        className: `flex-1 py-2 rounded-lg text-xs font-medium border transition-colors ${bookMode === "vehicle" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`,
                        children: "Whole Vehicle"
                      }
                    )
                  ] })
                ] }),
                bookMode === "seats" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Number of Seats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "h-8 w-8",
                        onClick: () => setSeatCount((c) => Math.max(1, c - 1)),
                        children: "-"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-bold", children: seatCount }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "h-8 w-8",
                        onClick: () => setSeatCount(
                          (c) => Math.min(route.availableSeats, c + 1)
                        ),
                        children: "+"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Travel Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      className: "mt-1",
                      value: travelDate,
                      onChange: (e) => setTravelDate(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Pickup Point" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "mt-1",
                      placeholder: "e.g. Thokar Niaz Baig",
                      value: pickup,
                      onChange: (e) => setPickup(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-secondary/60 flex justify-between font-bold text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency(
                    bookMode === "seats" ? route.pricePerSeat * seatCount : route.pricePerVehicle
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setBookOpen(false),
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBook, children: "Confirm Booking" })
              ] })
            ] })
          ]
        }
      )
    ] }) }, route.id)) })
  ] });
}
function ItineraryTab({
  itineraries,
  hotels,
  transports,
  onSave
}) {
  const [builderOpen, setBuilderOpen] = reactExports.useState(false);
  const [bookTarget, setBookTarget] = reactExports.useState(null);
  const [bookConfirmOpen, setBookConfirmOpen] = reactExports.useState(false);
  const [expandedDays, setExpandedDays] = reactExports.useState({});
  const [title, setTitle] = reactExports.useState("");
  const [totalDays, setTotalDays] = reactExports.useState(3);
  const [dayPlans, setDayPlans] = reactExports.useState([]);
  const handleDaysChange = (n) => {
    setTotalDays(n);
    setDayPlans((prev) => {
      const next = Array.from(
        { length: n },
        (_, i) => prev[i] ?? { day: i + 1, activities: [] }
      );
      return next;
    });
  };
  const addActivity = (dayIdx) => {
    setDayPlans(
      (prev) => prev.map(
        (d, i) => i === dayIdx ? {
          ...d,
          activities: [
            ...d.activities,
            {
              id: Date.now(),
              time: "09:00 AM",
              name: "",
              location: "",
              type: "Sightseeing"
            }
          ]
        } : d
      )
    );
  };
  const updateActivity = (dayIdx, actIdx, updates) => {
    setDayPlans(
      (prev) => prev.map(
        (d, i) => i === dayIdx ? {
          ...d,
          activities: d.activities.map(
            (a, j) => j === actIdx ? { ...a, ...updates } : a
          )
        } : d
      )
    );
  };
  const removeActivity = (dayIdx, actIdx) => {
    setDayPlans(
      (prev) => prev.map(
        (d, i) => i === dayIdx ? { ...d, activities: d.activities.filter((_, j) => j !== actIdx) } : d
      )
    );
  };
  const updateDayAttachment = (dayIdx, field, value) => {
    setDayPlans(
      (prev) => prev.map((d, i) => i === dayIdx ? { ...d, [field]: value } : d)
    );
  };
  const handleSave = () => {
    if (!title.trim()) {
      ue.error("Please enter an itinerary title.");
      return;
    }
    onSave({
      id: Date.now(),
      title,
      days: totalDays,
      dayPlans
    });
    setBuilderOpen(false);
    setTitle("");
    setTotalDays(3);
    setDayPlans([]);
    ue.success("Itinerary saved!");
  };
  const handleBook = () => {
    ue.success(`Itinerary "${bookTarget == null ? void 0 : bookTarget.title}" booked successfully!`);
    setBookConfirmOpen(false);
  };
  const toggleDay = (day) => setExpandedDays((p) => ({ ...p, [day]: !p[day] }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Itineraries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          itineraries.length,
          " saved itineraries"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: builderOpen, onOpenChange: setBuilderOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-2",
            onClick: () => {
              handleDaysChange(3);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
              " Create Itinerary"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Build Your Itinerary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[65vh] pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Itinerary Title *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                    placeholder: "e.g. Hunza Valley Explorer",
                    className: "mt-1"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Total Days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 1,
                    max: 30,
                    value: totalDays,
                    onChange: (e) => handleDaysChange(
                      Math.min(30, Math.max(1, Number(e.target.value)))
                    ),
                    className: "mt-1"
                  }
                )
              ] })
            ] }),
            dayPlans.map((dayPlan, dayIdx) => {
              var _a, _b;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border border-border rounded-xl overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => toggleDay(dayPlan.day),
                        className: "w-full flex items-center justify-between p-3 bg-secondary/40 hover:bg-secondary/70 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
                            "Day ",
                            dayPlan.day
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              dayPlan.activities.length,
                              " activities"
                            ] }),
                            expandedDays[dayPlan.day] ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 })
                          ] })
                        ]
                      }
                    ),
                    expandedDays[dayPlan.day] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-3", children: [
                      dayPlan.activities.map((act, actIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "grid grid-cols-12 gap-2 items-center text-xs",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                className: "col-span-2 h-7 text-xs",
                                value: act.time,
                                onChange: (e) => updateActivity(dayIdx, actIdx, {
                                  time: e.target.value
                                }),
                                placeholder: "Time"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                className: "col-span-3 h-7 text-xs",
                                value: act.name,
                                onChange: (e) => updateActivity(dayIdx, actIdx, {
                                  name: e.target.value
                                }),
                                placeholder: "Activity name"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                className: "col-span-3 h-7 text-xs",
                                value: act.location,
                                onChange: (e) => updateActivity(dayIdx, actIdx, {
                                  location: e.target.value
                                }),
                                placeholder: "Location"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Select,
                              {
                                value: act.type,
                                onValueChange: (v) => updateActivity(dayIdx, actIdx, {
                                  type: v
                                }),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "col-span-3 h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                                    "Sightseeing",
                                    "Meal",
                                    "Transport",
                                    "Hotel",
                                    "Free Time"
                                  ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => removeActivity(dayIdx, actIdx),
                                className: "col-span-1 text-muted-foreground hover:text-destructive transition-colors flex justify-center",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                              }
                            )
                          ]
                        },
                        act.id
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "h-7 text-xs gap-1",
                          onClick: () => addActivity(dayIdx),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 10 }),
                            " Add Activity"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-border/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Attach Hotel" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Select,
                            {
                              value: ((_a = dayPlan.attachedHotelId) == null ? void 0 : _a.toString()) ?? "none",
                              onValueChange: (v) => updateDayAttachment(
                                dayIdx,
                                "attachedHotelId",
                                v === "none" ? void 0 : Number(v)
                              ),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                                  hotels.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    SelectItem,
                                    {
                                      value: h.id.toString(),
                                      children: h.name
                                    },
                                    h.id
                                  ))
                                ] })
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Attach Transport" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Select,
                            {
                              value: ((_b = dayPlan.attachedTransportId) == null ? void 0 : _b.toString()) ?? "none",
                              onValueChange: (v) => updateDayAttachment(
                                dayIdx,
                                "attachedTransportId",
                                v === "none" ? void 0 : Number(v)
                              ),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                                  transports.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    SelectItem,
                                    {
                                      value: t.id.toString(),
                                      children: [
                                        t.from,
                                        " → ",
                                        t.to,
                                        " (",
                                        t.type,
                                        ")"
                                      ]
                                    },
                                    t.id
                                  ))
                                ] })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ]
                },
                dayPlan.day
              );
            })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setBuilderOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, children: "Save Itinerary" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4", children: itineraries.map((it) => {
      const totalActivities = it.dayPlans.reduce(
        (s, d) => s + d.activities.length,
        0
      );
      const attachedHotels = it.dayPlans.filter((d) => d.attachedHotelId).map((d) => {
        var _a;
        return (_a = hotels.find((h) => h.id === d.attachedHotelId)) == null ? void 0 : _a.name;
      }).filter(Boolean);
      const attachedTransports = it.dayPlans.filter((d) => d.attachedTransportId).map((d) => transports.find((t) => t.id === d.attachedTransportId)).filter(Boolean).map((t) => `${t.from} → ${t.to}`);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              it.days,
              " days · ",
              totalActivities,
              " activities"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-primary shrink-0" })
        ] }),
        attachedHotels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: attachedHotels.slice(0, 2).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { size: 8 }),
              h
            ]
          },
          h
        )) }),
        attachedTransports.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: attachedTransports.slice(0, 2).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 8 }),
              t
            ]
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Dialog,
          {
            open: bookConfirmOpen && (bookTarget == null ? void 0 : bookTarget.id) === it.id,
            onOpenChange: (o) => {
              setBookConfirmOpen(o);
              if (o) setBookTarget(it);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full h-7 text-xs gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
                " Book Itinerary"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm Itinerary Booking" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: it.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Duration:" }),
                      " ",
                      it.days,
                      " days"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Activities:" }),
                      " ",
                      totalActivities
                    ] }),
                    attachedHotels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Hotels:" }),
                      " ",
                      attachedHotels.join(", ")
                    ] }),
                    attachedTransports.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Transport:" }),
                      " ",
                      attachedTransports.join(", ")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground bg-secondary/60 rounded-lg p-3", children: "Individual service pricing will be calculated and confirmed after booking." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: () => setBookConfirmOpen(false),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBook, children: "Confirm Booking" })
                ] })
              ] })
            ]
          }
        )
      ] }) }, it.id);
    }) })
  ] });
}
function CabTab({ itineraries }) {
  var _a;
  const [pickup, setPickup] = reactExports.useState("none-selected");
  const [dropoff, setDropoff] = reactExports.useState("none-selected");
  const [cabType, setCabType] = reactExports.useState("Economy");
  const [date, setDate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [attachItinerary, setAttachItinerary] = reactExports.useState(false);
  const [selectedItinerary, setSelectedItinerary] = reactExports.useState("none-selected");
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const distance = getDistance(
    pickup === "none-selected" ? "" : pickup,
    dropoff === "none-selected" ? "" : dropoff
  );
  const estimatedTotal = distance ? distance * CAB_RATES[cabType] : null;
  const cabCards = [
    {
      type: "Economy",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 20 }),
      desc: "Affordable everyday rides",
      color: "border-green-500/50 bg-green-500/5"
    },
    {
      type: "Comfort",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 20 }),
      desc: "Comfortable sedans & SUVs",
      color: "border-blue-500/50 bg-blue-500/5"
    },
    {
      type: "Premium",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 20 }),
      desc: "Luxury vehicles & VIP service",
      color: "border-yellow-500/50 bg-yellow-500/5"
    }
  ];
  const handleBook = () => {
    var _a2;
    const pickupCity = pickup === "none-selected" ? "" : pickup;
    const dropoffCity = dropoff === "none-selected" ? "" : dropoff;
    if (!pickupCity || !dropoffCity || !date || !time) {
      ue.error("Please fill in all required fields.");
      return;
    }
    const attachedName = attachItinerary && selectedItinerary && selectedItinerary !== "none-selected" ? (_a2 = itineraries.find((i) => i.id.toString() === selectedItinerary)) == null ? void 0 : _a2.title : null;
    ue.success(
      `${cabType} cab booked! ${pickup} → ${dropoff}${attachedName ? ` • Attached to "${attachedName}"` : ""}. ${estimatedTotal ? formatCurrency(estimatedTotal) : "Fare TBD"}`
    );
    setConfirmOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Cab Booking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Distance-based pricing across Pakistan cities" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Pick-up Location *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: pickup, onValueChange: setPickup, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select city" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PAKISTAN_CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Drop-off Location *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: dropoff, onValueChange: setDropoff, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select city" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PAKISTAN_CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] })
      ] }),
      pickup !== "none-selected" && dropoff !== "none-selected" && pickup !== dropoff && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex items-center gap-3 p-3 rounded-xl border ${distance ? "border-primary/30 bg-primary/5" : "border-muted bg-muted/40"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Route,
              {
                size: 16,
                className: distance ? "text-primary" : "text-muted-foreground"
              }
            ),
            distance ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Estimated distance:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-primary", children: [
                distance.toLocaleString(),
                " km"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Distance data not available for this route." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Choose Cab Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mt-2", children: cabCards.map(({ type, icon, desc, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setCabType(type),
            className: `p-3 rounded-xl border-2 transition-all text-left ${cabType === type ? `border-primary bg-primary/10 ${color}` : `border-border hover:border-border/80 ${color} opacity-60 hover:opacity-90`}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `mb-1.5 ${cabType === type ? "text-primary" : "text-muted-foreground"}`,
                  children: icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-xs font-bold ${cabType === type ? "text-foreground" : "text-muted-foreground"}`,
                  children: type
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: `text-xs font-semibold mt-1.5 ${cabType === type ? "text-primary" : "text-muted-foreground"}`,
                  children: [
                    formatCurrency(CAB_RATES[type]),
                    "/km"
                  ]
                }
              ),
              distance && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: `text-[10px] mt-0.5 font-bold ${cabType === type ? "text-primary" : "text-muted-foreground"}`,
                  children: [
                    "Est: ",
                    formatCurrency(distance * CAB_RATES[type])
                  ]
                }
              )
            ]
          },
          type
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              className: "mt-1",
              value: date,
              onChange: (e) => setDate(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Time *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "time",
              className: "mt-1",
              value: time,
              onChange: (e) => setTime(e.target.value)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: "attach-itinerary",
              checked: attachItinerary,
              onCheckedChange: setAttachItinerary
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "attach-itinerary", className: "cursor-pointer", children: "Attach to Itinerary" })
        ] }),
        attachItinerary && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: selectedItinerary,
            onValueChange: setSelectedItinerary,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select an itinerary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: itineraries.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: it.id.toString(), children: it.title }, it.id)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: confirmOpen, onOpenChange: setConfirmOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full gap-2", size: "lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 16 }),
          " Book Cab"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm Cab Booking" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
              {
                label: "Pickup",
                value: pickup === "none-selected" ? "—" : pickup || "—"
              },
              {
                label: "Dropoff",
                value: dropoff === "none-selected" ? "—" : dropoff || "—"
              },
              {
                label: "Distance",
                value: distance ? `${distance.toLocaleString()} km` : "—"
              },
              { label: "Cab Type", value: cabType },
              {
                label: "Rate",
                value: `${formatCurrency(CAB_RATES[cabType])}/km`
              },
              { label: "Date", value: date || "—" },
              { label: "Time", value: time || "—" },
              ...attachItinerary && selectedItinerary ? [
                {
                  label: "Itinerary",
                  value: ((_a = itineraries.find(
                    (i) => i.id.toString() === selectedItinerary
                  )) == null ? void 0 : _a.title) ?? "—"
                }
              ] : []
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimated Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: estimatedTotal ? formatCurrency(estimatedTotal) : "Fare TBD" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setConfirmOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleBook, children: "Confirm Booking" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function TravelPage() {
  const hasBusiness = true;
  const [packages, setPackages] = reactExports.useState(MOCK_PACKAGES);
  const [itineraries, setItineraries] = reactExports.useState(MOCK_ITINERARIES);
  const handleAddPackage = (pkg) => {
    const gradients = [
      "from-violet-600 via-purple-600 to-indigo-700",
      "from-emerald-600 via-teal-600 to-cyan-700",
      "from-pink-500 via-rose-500 to-red-600",
      "from-orange-500 via-amber-500 to-yellow-500"
    ];
    setPackages((p) => [
      ...p,
      {
        ...pkg,
        id: Date.now(),
        gradient: gradients[p.length % gradients.length]
      }
    ]);
  };
  const handleSaveItinerary = (it) => {
    setItineraries((prev) => [...prev, it]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6 space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
          style: { background: "oklch(0.55 0.22 280 / 0.15)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 20, style: { color: "oklch(0.55 0.22 280)" } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Travel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Packages · Hotels · Transport · Itineraries · Cabs" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border",
        style: {
          background: "oklch(0.55 0.18 240 / 0.06)",
          borderColor: "oklch(0.55 0.18 240 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14, style: { color: "oklch(0.55 0.18 240)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground font-medium", children: "Travel & Tour Jobs Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: "— tour guides, drivers, hotel staff & travel agents" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs font-label shrink-0",
              onClick: () => ue.info("Navigating to Jobs..."),
              children: "View Jobs"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddBar, { moduleName: "Travel" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "packages", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex-wrap h-auto gap-1 p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "packages", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 14 }),
          " Packages"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "hotels", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { size: 14 }),
          " Hotels"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "transport", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { size: 14 }),
          " Transport"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "itinerary", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
          " Itinerary"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "cab", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 14 }),
          " Cab Booking"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "events", className: "gap-1.5 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
          " Events"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "packages", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PackagesTab,
        {
          hasBusiness,
          packages,
          onAddPackage: handleAddPackage
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hotels", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelsTab, { hotels: MOCK_HOTELS }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "transport", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransportTab, { routes: MOCK_TRANSPORT }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "itinerary", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ItineraryTab,
        {
          itineraries,
          hotels: MOCK_HOTELS,
          transports: MOCK_TRANSPORT,
          onSave: handleSaveItinerary
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "cab", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CabTab, { itineraries }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsTab, { moduleName: "Travel", moduleColor: "oklch(0.48 0.12 200)" }) })
    ] })
  ] });
}
export {
  TravelPage as default
};
