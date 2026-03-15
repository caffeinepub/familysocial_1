import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8" data-ocid="contact.page">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">
          Contact Us
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          We're here to help. Reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact info */}
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "support@indyacentral.com" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            {
              icon: MapPin,
              label: "Address",
              value: "Mumbai, Maharashtra, India",
            },
            {
              icon: MessageSquare,
              label: "Live Chat",
              value: "Available 9am-6pm IST",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 items-start">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={15} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <Card className="md:col-span-2 rounded-2xl border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-display">
              Send a Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Your Name *</Label>
                <Input
                  className="mt-1"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label className="text-xs">Email Address *</Label>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="rahul@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  data-ocid="contact.input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Phone (optional)</Label>
                <Input
                  className="mt-1"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Subject</Label>
                <Input
                  className="mt-1"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, subject: e.target.value }))
                  }
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Message *</Label>
              <Textarea
                className="mt-1 min-h-[120px]"
                placeholder="Describe your issue or question..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                data-ocid="contact.textarea"
              />
            </div>
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={submitting}
              data-ocid="contact.submit_button"
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
