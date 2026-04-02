import { j as jsxRuntimeExports, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, r as reactExports, L as Label, $ as Switch, u as ue, I as Input, a as Button, a9 as ScrollArea, B as Badge } from "./index-BKSOHxCA.js";
import { C as Card, b as CardContent } from "./card-B5HK9w9e.js";
const PARTNERS = [
  {
    id: "porter",
    label: "Porter",
    emoji: "🟠",
    tagline: "Intra-city logistics, up to 1000 kg",
    vehicles: ["Bike", "Tata Ace", "Pickup Truck", "3-Wheeler"],
    baseFare: "49",
    perKm: "12",
    perKg: "2",
    color: "oklch(0.65 0.22 55)"
  },
  {
    id: "rapido",
    label: "Rapido",
    emoji: "🟡",
    tagline: "Instant small parcel delivery via bike",
    vehicles: ["Bike"],
    baseFare: "29",
    perKm: "8",
    perKg: "0",
    color: "oklch(0.72 0.20 75)"
  },
  {
    id: "uber",
    label: "Uber Direct",
    emoji: "⚫",
    tagline: "Documents, food & packages via Uber network",
    vehicles: ["Bike", "Car", "Van"],
    baseFare: "55",
    perKm: "15",
    perKg: "3",
    color: "oklch(0.30 0.02 0)"
  },
  {
    id: "jugnoo",
    label: "Jugnoo",
    emoji: "🟢",
    tagline: "Auto/delivery, strong in Tier-2/3 cities, multi-drop",
    vehicles: ["Auto", "Bike", "Car"],
    baseFare: "35",
    perKm: "10",
    perKg: "1.5",
    color: "oklch(0.52 0.18 145)"
  }
];
const STATUS_COLORS = {
  "Pickup Pending": "bg-yellow-100 text-yellow-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700"
};
function SummaryCard({
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold mt-0.5", children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: sub })
  ] }) });
}
function AdminPartnerTab({ partner }) {
  const [enabled, setEnabled] = reactExports.useState(true);
  const [apiKey, setApiKey] = reactExports.useState("");
  const [secret, setSecret] = reactExports.useState("");
  const [merchantId, setMerchantId] = reactExports.useState("");
  const [webhook, setWebhook] = reactExports.useState("");
  const [baseFare, setBaseFare] = reactExports.useState(partner.baseFare);
  const [perKm, setPerKm] = reactExports.useState(partner.perKm);
  const [perKg, setPerKg] = reactExports.useState(partner.perKg);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-base", children: [
          partner.emoji,
          " ",
          partner.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: partner.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: enabled ? "Enabled" : "Disabled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: enabled,
            onCheckedChange: (v) => {
              setEnabled(v);
              ue.success(`${partner.label} ${v ? "enabled" : "disabled"}`);
            },
            "data-ocid": `dp.${partner.id}.toggle`
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "password",
            placeholder: "Enter API key",
            value: apiKey,
            onChange: (e) => setApiKey(e.target.value),
            className: "mt-1",
            "data-ocid": `dp.${partner.id}.input`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Secret Key" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "password",
            placeholder: "Enter secret",
            value: secret,
            onChange: (e) => setSecret(e.target.value),
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Merchant ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Merchant ID",
            value: merchantId,
            onChange: (e) => setMerchantId(e.target.value),
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Webhook URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "https://your-server.com/webhook",
            value: webhook,
            onChange: (e) => setWebhook(e.target.value),
            className: "mt-1"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "Rate Configuration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Base Fare (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: baseFare,
              onChange: (e) => setBaseFare(e.target.value),
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per km (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: perKm,
              onChange: (e) => setPerKm(e.target.value),
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per kg (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: perKg,
              onChange: (e) => setPerKg(e.target.value),
              className: "mt-1"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
        "Vehicles: ",
        partner.vehicles.join(", ")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full",
        onClick: () => ue.success(`${partner.label} configuration saved`),
        "data-ocid": `dp.${partner.id}.save_button`,
        children: "Save Configuration"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Total Orders",
            value: String(Math.floor(Math.random() * 500) + 100)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Total Cost",
            value: `₹${Math.floor(Math.random() * 50) + 10}K`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Avg Delivery Time", value: "38 min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Success Rate", value: "96.2%" })
      ] })
    ] })
  ] });
}
function BusinessPartnerTab({ partner }) {
  const [pickup, setPickup] = reactExports.useState("");
  const [drop, setDrop] = reactExports.useState("");
  const [weight, setWeight] = reactExports.useState("");
  const [dims, setDims] = reactExports.useState("");
  const [deliveries, setDeliveries] = reactExports.useState([
    {
      id: `${partner.id.toUpperCase()}-001`,
      partner: partner.label,
      pickup: "Shop A, Sector 18",
      drop: "Customer B, Model Town",
      status: "In Transit",
      eta: "25 min",
      track: "#TRK8821"
    },
    {
      id: `${partner.id.toUpperCase()}-002`,
      partner: partner.label,
      pickup: "Warehouse C, Phase 2",
      drop: "Office D, Connaught Place",
      status: "Pickup Pending",
      eta: "45 min",
      track: "#TRK8822"
    }
  ]);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setDeliveries(
        (d) => d.map((del) => {
          if (del.status === "In Transit" && Math.random() > 0.7)
            return { ...del, status: "Delivered", eta: "Done" };
          if (del.status === "Pickup Pending" && Math.random() > 0.6)
            return { ...del, status: "In Transit" };
          return del;
        })
      );
    }, 15e3);
    return () => clearInterval(id);
  }, []);
  const estCost = pickup && drop && weight ? `₹${Math.round(Number(partner.baseFare) + 5 * Number(partner.perKm) + Number(weight) * Number(partner.perKg))}` : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
        partner.emoji,
        " ",
        partner.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: partner.tagline })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pickup Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Pickup location",
            value: pickup,
            onChange: (e) => setPickup(e.target.value),
            className: "mt-1",
            "data-ocid": `dp.${partner.id}.input`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Drop Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Drop location",
            value: drop,
            onChange: (e) => setDrop(e.target.value),
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Package weight",
            value: weight,
            onChange: (e) => setWeight(e.target.value),
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Dimensions (L×W×H cm)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "30×20×15",
            value: dims,
            onChange: (e) => setDims(e.target.value),
            className: "mt-1"
          }
        )
      ] })
    ] }),
    estCost && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted px-4 py-2 text-sm", children: [
      "Estimated cost: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: estCost }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-2", children: [
        "(base ₹",
        partner.baseFare,
        " + distance + weight)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "w-full",
        disabled: !pickup || !drop,
        onClick: () => {
          const newDel = {
            id: `${partner.id.toUpperCase()}-${String(deliveries.length + 1).padStart(3, "0")}`,
            partner: partner.label,
            pickup,
            drop,
            status: "Pickup Pending",
            eta: "~45 min",
            track: `#TRK${Math.floor(Math.random() * 9e3) + 1e3}`
          };
          setDeliveries((d) => [newDel, ...d]);
          setPickup("");
          setDrop("");
          setWeight("");
          setDims("");
          ue.success(`${partner.label} delivery booked!`);
        },
        "data-ocid": `dp.${partner.id}.primary_button`,
        children: [
          "🚚 Book Delivery via ",
          partner.label
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "Active Deliveries" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-52", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["ID", "Pickup", "Drop", "Status", "ETA", "Tracking"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-2", children: h }, h)
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: deliveries.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2 font-mono text-xs", children: d.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-xs truncate max-w-[80px]", children: d.pickup }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-xs truncate max-w-[80px]", children: d.drop }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: `text-[9px] px-1 ${STATUS_COLORS[d.status] ?? "bg-gray-100 text-gray-600"}`,
              children: d.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-xs", children: d.eta }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-xs font-mono", children: d.track })
        ] }, d.id)) })
      ] }) })
    ] })
  ] });
}
function DeliveryPartnersPanel({
  mode
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "🚚 Delivery Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: mode === "admin" ? "Configure API credentials and rate cards for each delivery partner" : "Book deliveries and track active shipments via your preferred partner" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "porter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "flex-wrap gap-1", children: PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: p.id, "data-ocid": `dp.${p.id}.tab`, children: [
        p.emoji,
        " ",
        p.label
      ] }, p.id)) }),
      PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: p.id, className: "mt-4", children: mode === "admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPartnerTab, { partner: p }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPartnerTab, { partner: p }) }, p.id))
    ] })
  ] });
}
export {
  DeliveryPartnersPanel as D
};
