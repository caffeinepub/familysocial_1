import { k as createLucideIcon, r as reactExports, j as jsxRuntimeExports, O as MapPin, L as Label, I as Input, a as Button, u as ue } from "./index-rERScDjL.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-D5kflLWB.js";
import { T as Textarea } from "./textarea-Bz9aO1gw.js";
import { P as Phone } from "./phone-C8qWieaC.js";
import { M as MessageSquare } from "./message-square-Dn0T4iQa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
function ContactUsPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      ue.error("Please fill in name, email and message");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      ue.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-8", "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "We're here to help. Reach out anytime." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
        { icon: Mail, label: "Email", value: "support@indyacentral.com" },
        { icon: Phone, label: "Phone", value: "+91 98765 43210" },
        {
          icon: MapPin,
          label: "Address",
          value: "Mumbai, Maharashtra, India"
        },
        {
          icon: MessageSquare,
          label: "Live Chat",
          value: "Available 9am-6pm IST"
        }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 15, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.value })
        ] })
      ] }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "md:col-span-2 rounded-2xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display", children: "Send a Message" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Your Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "Rahul Sharma",
                  value: form.name,
                  onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                  "data-ocid": "contact.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  type: "email",
                  placeholder: "rahul@example.com",
                  value: form.email,
                  onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                  "data-ocid": "contact.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "+91 98765 43210",
                  value: form.phone,
                  onChange: (e) => setForm((p) => ({ ...p, phone: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "How can we help?",
                  value: form.subject,
                  onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value }))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                className: "mt-1 min-h-[120px]",
                placeholder: "Describe your issue or question...",
                value: form.message,
                onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
                "data-ocid": "contact.textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full",
              onClick: handleSubmit,
              disabled: submitting,
              "data-ocid": "contact.submit_button",
              children: submitting ? "Sending..." : "Send Message"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactUsPage as default
};
