import { k as createLucideIcon, r as reactExports, Z as Zap, j as jsxRuntimeExports, D as Dialog, E as DialogContent, F as DialogHeader, G as DialogTitle, v as CircleCheck, a as Button, B as Badge, u as ue } from "./index-C1f4DgoI.js";
import { C as Card, b as CardContent } from "./card-Be0g9iNH.js";
import { P as PaymentModal } from "./PaymentModal-D_-oBETu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    period: "week",
    impressions: "~500 impressions",
    reach: "Local reach",
    color: "oklch(0.60 0.18 150)",
    icon: Zap
  },
  {
    id: "standard",
    name: "Standard",
    price: 799,
    period: "week",
    impressions: "~2,000 impressions",
    reach: "City-wide",
    color: "oklch(0.55 0.22 280)",
    icon: Target
  },
  {
    id: "premium",
    name: "Premium",
    price: 2499,
    period: "week",
    impressions: "~10,000 impressions",
    reach: "Regional",
    color: "oklch(0.60 0.25 335)",
    icon: Rocket
  }
];
const REGIONS = [
  "North India",
  "South India",
  "Maharashtra",
  "West Bengal",
  "Gujarat",
  "Karnataka",
  "Tamil Nadu",
  "Delhi NCR"
];
const AGE_GROUPS = ["18-25", "26-35", "36-50", "50+"];
const GENDERS = ["All", "Male", "Female"];
const DURATIONS = [
  { label: "1 Week", weeks: 1 },
  { label: "2 Weeks", weeks: 2 },
  { label: "1 Month", weeks: 4 }
];
function BoostPostDialog({
  open,
  onClose,
  postTitle,
  postType,
  onBoostSuccess
}) {
  const [selectedPlan, setSelectedPlan] = reactExports.useState("basic");
  const [selectedRegions, setSelectedRegions] = reactExports.useState([]);
  const [selectedAge, setSelectedAge] = reactExports.useState("18-25");
  const [selectedGender, setSelectedGender] = reactExports.useState("All");
  const [selectedDuration, setSelectedDuration] = reactExports.useState(1);
  const [boosted, setBoosted] = reactExports.useState(false);
  const [paymentOpen, setPaymentOpen] = reactExports.useState(false);
  const plan = PLANS.find((p) => p.id === selectedPlan);
  const totalPrice = plan.price * selectedDuration;
  const showTargeting = selectedPlan !== "basic";
  function toggleRegion(r) {
    setSelectedRegions(
      (prev) => prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    );
  }
  function handlePay() {
    setPaymentOpen(true);
  }
  function handlePaySuccess() {
    setPaymentOpen(false);
    setBoosted(true);
    const key = "ic_boosted_posts";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    if (!existing.includes(postTitle)) {
      localStorage.setItem(key, JSON.stringify([...existing, postTitle]));
    }
    ue.success("Your post is now being promoted!", {
      description: `${plan.name} plan · ${plan.reach}`
    });
    if (onBoostSuccess) onBoostSuccess();
  }
  function handleClose() {
    setBoosted(false);
    setPaymentOpen(false);
    setSelectedPlan("basic");
    setSelectedRegions([]);
    setSelectedDuration(1);
    onClose();
  }
  const typeLabel = postType === "post" ? "post" : postType === "product" ? "product" : postType === "job" ? "job listing" : postType === "blog" ? "blog" : "listing";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: handleClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-lg max-h-[90vh] overflow-y-auto",
        "data-ocid": "boost.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-base font-display", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 18, className: "text-primary" }),
            "Boost ",
            typeLabel
          ] }) }),
          boosted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-4 py-8",
              "data-ocid": "boost.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-full flex items-center justify-center",
                    style: { background: "oklch(0.55 0.22 280 / 0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        size: 32,
                        style: { color: "oklch(0.55 0.22 280)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg", children: "Promotion Live!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    "Your ",
                    typeLabel,
                    " is now being promoted"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold",
                    style: {
                      background: "oklch(0.65 0.20 85 / 0.15)",
                      color: "oklch(0.55 0.18 85)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 14 }),
                      " Promoted"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: handleClose,
                    className: "mt-2",
                    "data-ocid": "boost.close_button",
                    children: "Done"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-3 py-2 rounded-lg text-sm text-muted-foreground border border-border",
                style: { background: "oklch(var(--muted))" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                    typeLabel,
                    ":",
                    " "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: postTitle })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Choose Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: PLANS.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedPlan === p.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Card,
                  {
                    className: "cursor-pointer transition-all border-2",
                    style: {
                      borderColor: isSelected ? p.color : "oklch(var(--border))",
                      background: isSelected ? `${p.color.replace(")", " / 0.08)")}` : "oklch(var(--card))"
                    },
                    onClick: () => setSelectedPlan(p.id),
                    "data-ocid": "boost.plan.card",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          size: 18,
                          className: "mx-auto mb-1",
                          style: { color: p.color }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-label font-bold text-xs",
                          style: { color: isSelected ? p.color : void 0 },
                          children: p.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-bold text-foreground mt-0.5", children: [
                        "₹",
                        p.price,
                        "/",
                        p.period
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: p.reach }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: p.impressions })
                    ] })
                  },
                  p.id
                );
              }) })
            ] }),
            showTargeting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Audience Targeting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: "Regions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: REGIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleRegion(r),
                    className: "text-[11px] px-2.5 py-1 rounded-full border transition-all",
                    style: {
                      borderColor: selectedRegions.includes(r) ? "oklch(0.55 0.22 280)" : "oklch(var(--border))",
                      background: selectedRegions.includes(r) ? "oklch(0.55 0.22 280 / 0.12)" : "transparent",
                      color: selectedRegions.includes(r) ? "oklch(0.55 0.22 280)" : "oklch(var(--muted-foreground))"
                    },
                    "data-ocid": "boost.region.toggle",
                    children: r
                  },
                  r
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: "Age Group" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: AGE_GROUPS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedAge(a),
                      className: "text-[11px] px-2 py-0.5 rounded-full border transition-all",
                      style: {
                        borderColor: selectedAge === a ? "oklch(0.60 0.25 335)" : "oklch(var(--border))",
                        background: selectedAge === a ? "oklch(0.60 0.25 335 / 0.1)" : "transparent",
                        color: selectedAge === a ? "oklch(0.60 0.25 335)" : "oklch(var(--muted-foreground))"
                      },
                      "data-ocid": "boost.age.toggle",
                      children: a
                    },
                    a
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: "Gender" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: GENDERS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedGender(g),
                      className: "text-[11px] px-2 py-0.5 rounded-full border transition-all",
                      style: {
                        borderColor: selectedGender === g ? "oklch(0.60 0.18 150)" : "oklch(var(--border))",
                        background: selectedGender === g ? "oklch(0.60 0.18 150 / 0.1)" : "transparent",
                        color: selectedGender === g ? "oklch(0.60 0.18 150)" : "oklch(var(--muted-foreground))"
                      },
                      "data-ocid": "boost.gender.toggle",
                      children: g
                    },
                    g
                  )) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: DURATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedDuration(d.weeks),
                  className: "flex-1 py-2 rounded-lg border text-xs font-semibold transition-all",
                  style: {
                    borderColor: selectedDuration === d.weeks ? plan.color : "oklch(var(--border))",
                    background: selectedDuration === d.weeks ? `${plan.color.replace(")", " / 0.1)")}` : "transparent",
                    color: selectedDuration === d.weeks ? plan.color : "oklch(var(--muted-foreground))"
                  },
                  "data-ocid": "boost.duration.toggle",
                  children: d.label
                },
                d.weeks
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between p-3 rounded-xl border border-border",
                style: { background: "oklch(var(--muted) / 0.5)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-display font-bold text-foreground", children: [
                      "₹",
                      totalPrice.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                      plan.name,
                      " ·",
                      " ",
                      selectedDuration === 1 ? "1 Week" : selectedDuration === 2 ? "2 Weeks" : "1 Month"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "text-[10px]",
                      style: { background: `${plan.color}18`, color: plan.color },
                      children: plan.reach
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "flex-1",
                  onClick: handleClose,
                  "data-ocid": "boost.cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "flex-1 font-label font-semibold",
                  onClick: handlePay,
                  "data-ocid": "boost.submit_button",
                  style: { background: plan.color },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 14 }),
                    " Pay & Boost · ₹",
                    totalPrice.toLocaleString()
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentModal,
      {
        open: paymentOpen,
        onCancel: () => setPaymentOpen(false),
        onSuccess: handlePaySuccess,
        amount: totalPrice,
        title: "Boost Post Payment"
      }
    )
  ] });
}
export {
  BoostPostDialog as B
};
