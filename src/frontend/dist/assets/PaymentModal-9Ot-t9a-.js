import { r as reactExports, j as jsxRuntimeExports, D as Dialog, E as DialogContent, F as DialogHeader, G as DialogTitle, v as CircleCheck, a as Button, aj as LoaderCircle, u as ue } from "./index-BlytXoNc.js";
import { C as CreditCard } from "./credit-card-D6Ww3pYY.js";
const ALL_GATEWAYS = [
  {
    id: "razorpay",
    name: "Razorpay",
    color: "#1a56db",
    bg: "#eff6ff",
    emoji: "💙"
  },
  { id: "paytm", name: "Paytm", color: "#0d6efd", bg: "#e8f4fd", emoji: "🔵" },
  { id: "payu", name: "PayU", color: "#198754", bg: "#ecfdf5", emoji: "💚" },
  {
    id: "stripe",
    name: "Stripe",
    color: "#6f42c1",
    bg: "#f3e8ff",
    emoji: "💜"
  }
];
function getEnabledGateways() {
  try {
    const saved = JSON.parse(localStorage.getItem("icPaymentGateways") || "{}");
    const enabled = ALL_GATEWAYS.filter((g) => {
      var _a;
      return (_a = saved[g.id]) == null ? void 0 : _a.enabled;
    });
    return enabled.length > 0 ? enabled : ALL_GATEWAYS;
  } catch {
    return ALL_GATEWAYS;
  }
}
function PaymentModal({
  open,
  onCancel,
  onSuccess,
  amount,
  currency = "INR",
  title = "Complete Payment"
}) {
  var _a;
  const gateways = getEnabledGateways();
  const [selected, setSelected] = reactExports.useState(((_a = gateways[0]) == null ? void 0 : _a.id) ?? "razorpay");
  const [status, setStatus] = reactExports.useState("idle");
  async function handlePay() {
    var _a2;
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 2e3));
    setStatus("success");
    ue.success("Payment successful!", {
      description: `₹${amount.toLocaleString("en-IN")} paid via ${(_a2 = gateways.find((g) => g.id === selected)) == null ? void 0 : _a2.name}`
    });
    await new Promise((res) => setTimeout(res, 800));
    setStatus("idle");
    onSuccess();
  }
  function handleClose() {
    if (status === "loading") return;
    setStatus("idle");
    onCancel();
  }
  const selectedGateway = gateways.find((g) => g.id === selected) ?? gateways[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm rounded-2xl", "data-ocid": "payment.modal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: title }) }),
    status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-3 py-8",
        "data-ocid": "payment.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 56, style: { color: "oklch(0.52 0.14 155)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground", children: "Payment Successful!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            currency,
            " ",
            amount.toLocaleString("en-IN"),
            " paid via",
            " ",
            selectedGateway == null ? void 0 : selectedGateway.name
          ] })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl p-4 text-center",
          style: { background: "oklch(0.55 0.22 280 / 0.08)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Amount to Pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-3xl font-display font-bold",
                style: { color: "oklch(0.55 0.22 280)" },
                children: [
                  currency === "INR" ? "₹" : currency,
                  " ",
                  amount.toLocaleString("en-IN")
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-muted-foreground mb-2", children: "Select Payment Gateway" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: gateways.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelected(g.id),
            className: "flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all",
            style: {
              borderColor: selected === g.id ? g.color : "oklch(var(--border))",
              background: selected === g.id ? g.bg : "transparent"
            },
            "data-ocid": "payment.gateway.select",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: g.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-bold",
                  style: { color: selected === g.id ? g.color : void 0 },
                  children: g.name
                }
              )
            ]
          },
          g.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "flex-1",
            onClick: handleClose,
            "data-ocid": "payment.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "flex-1 gap-2",
            onClick: handlePay,
            disabled: status === "loading",
            "data-ocid": "payment.submit_button",
            children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 14, className: "animate-spin" }),
              "Processing..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 14 }),
              "Pay Now"
            ] })
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  PaymentModal as P
};
