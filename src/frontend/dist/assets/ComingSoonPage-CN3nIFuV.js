import { j as jsxRuntimeExports, B as Badge, a as Button } from "./index-DI_v_aLq.js";
const FEATURE_PREVIEWS = {
  Healthcare: [
    "Personal medical history & records",
    "Clinic & appointment management",
    "Prescription tracking",
    "Family health overview"
  ],
  "Real Estate": [
    "Property listings for rent and sale",
    "Pricing & commission tracking",
    "NOC & documentation handling",
    "Parking rental system"
  ],
  Education: [
    "Course & curriculum management",
    "Student & teacher records",
    "Multi-branch support",
    "Library & exam management"
  ],
  Travel: [
    "Travel package creation & booking",
    "Tour operator registration",
    "Hotel & transport management",
    "Group & customized tour planning"
  ],
  "Blog & Affiliate": [
    "Write & publish blog posts",
    "Affiliate product integration",
    "Commission tracking dashboard",
    "Referral & performance analytics"
  ]
};
function ComingSoonPage({ title, description, Icon }) {
  const features = FEATURE_PREVIEWS[title] || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-full flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6",
        style: { background: "oklch(var(--primary) / 0.1)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 36, className: "text-primary" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 font-label bg-accent/20 text-accent-foreground border-0", children: "Coming Soon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: description }),
    features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 text-left mb-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Planned Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-center gap-2.5 text-sm text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
            f
          ]
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "font-label", children: "Get Notified When Ready" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "We're building this module to complete the FamilySocial ecosystem." })
  ] }) });
}
export {
  ComingSoonPage as default
};
