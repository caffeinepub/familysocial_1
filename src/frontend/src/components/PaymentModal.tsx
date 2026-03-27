import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Gateway = {
  id: string;
  name: string;
  color: string;
  bg: string;
  emoji: string;
};

const ALL_GATEWAYS: Gateway[] = [
  {
    id: "razorpay",
    name: "Razorpay",
    color: "#1a56db",
    bg: "#eff6ff",
    emoji: "💙",
  },
  { id: "paytm", name: "Paytm", color: "#0d6efd", bg: "#e8f4fd", emoji: "🔵" },
  { id: "payu", name: "PayU", color: "#198754", bg: "#ecfdf5", emoji: "💚" },
  {
    id: "stripe",
    name: "Stripe",
    color: "#6f42c1",
    bg: "#f3e8ff",
    emoji: "💜",
  },
];

function getEnabledGateways(): Gateway[] {
  try {
    const saved = JSON.parse(localStorage.getItem("icPaymentGateways") || "{}");
    const enabled = ALL_GATEWAYS.filter((g) => saved[g.id]?.enabled);
    return enabled.length > 0 ? enabled : ALL_GATEWAYS;
  } catch {
    return ALL_GATEWAYS;
  }
}

interface PaymentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  amount: number;
  currency?: string;
  title?: string;
}

export function PaymentModal({
  open,
  onCancel,
  onSuccess,
  amount,
  currency = "INR",
  title = "Complete Payment",
}: PaymentModalProps) {
  const gateways = getEnabledGateways();
  const [selected, setSelected] = useState(gateways[0]?.id ?? "razorpay");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handlePay() {
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 2000));
    setStatus("success");
    toast.success("Payment successful!", {
      description: `₹${amount.toLocaleString("en-IN")} paid via ${gateways.find((g) => g.id === selected)?.name}`,
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

  const selectedGateway =
    gateways.find((g) => g.id === selected) ?? gateways[0];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-sm rounded-2xl" data-ocid="payment.modal">
        <DialogHeader>
          <DialogTitle className="font-display">{title}</DialogTitle>
        </DialogHeader>

        {status === "success" ? (
          <div
            className="flex flex-col items-center gap-3 py-8"
            data-ocid="payment.success_state"
          >
            <CheckCircle2 size={56} style={{ color: "oklch(0.52 0.14 155)" }} />
            <p className="text-lg font-display font-bold text-foreground">
              Payment Successful!
            </p>
            <p className="text-sm text-muted-foreground">
              {currency} {amount.toLocaleString("en-IN")} paid via{" "}
              {selectedGateway?.name}
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Amount Display */}
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "oklch(0.55 0.22 280 / 0.08)" }}
            >
              <p className="text-xs text-muted-foreground mb-1">
                Amount to Pay
              </p>
              <p
                className="text-3xl font-display font-bold"
                style={{ color: "oklch(0.55 0.22 280)" }}
              >
                {currency === "INR" ? "₹" : currency}{" "}
                {amount.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Gateway Selection */}
            <div>
              <p className="text-xs font-label text-muted-foreground mb-2">
                Select Payment Gateway
              </p>
              <div className="grid grid-cols-2 gap-2">
                {gateways.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelected(g.id)}
                    className="flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all"
                    style={{
                      borderColor:
                        selected === g.id ? g.color : "oklch(var(--border))",
                      background: selected === g.id ? g.bg : "transparent",
                    }}
                    data-ocid="payment.gateway.select"
                  >
                    <span className="text-xl">{g.emoji}</span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: selected === g.id ? g.color : undefined }}
                    >
                      {g.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleClose}
                data-ocid="payment.cancel_button"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={handlePay}
                disabled={status === "loading"}
                data-ocid="payment.submit_button"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={14} />
                    Pay Now
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
