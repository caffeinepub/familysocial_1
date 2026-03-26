import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Rocket, Target, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    period: "week",
    impressions: "~500 impressions",
    reach: "Local reach",
    color: "oklch(0.60 0.18 150)",
    icon: Zap,
  },
  {
    id: "standard",
    name: "Standard",
    price: 799,
    period: "week",
    impressions: "~2,000 impressions",
    reach: "City-wide",
    color: "oklch(0.55 0.22 280)",
    icon: Target,
  },
  {
    id: "premium",
    name: "Premium",
    price: 2499,
    period: "week",
    impressions: "~10,000 impressions",
    reach: "Regional",
    color: "oklch(0.60 0.25 335)",
    icon: Rocket,
  },
];

const REGIONS = [
  "North India",
  "South India",
  "Maharashtra",
  "West Bengal",
  "Gujarat",
  "Karnataka",
  "Tamil Nadu",
  "Delhi NCR",
];

const AGE_GROUPS = ["18-25", "26-35", "36-50", "50+"];
const GENDERS = ["All", "Male", "Female"];
const DURATIONS = [
  { label: "1 Week", weeks: 1 },
  { label: "2 Weeks", weeks: 2 },
  { label: "1 Month", weeks: 4 },
];

interface BoostPostDialogProps {
  open: boolean;
  onClose: () => void;
  postTitle: string;
  postType: "post" | "product" | "job" | "listing" | "blog";
  onBoostSuccess?: () => void;
}

export default function BoostPostDialog({
  open,
  onClose,
  postTitle,
  postType,
  onBoostSuccess,
}: BoostPostDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("basic");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string>("18-25");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [boosted, setBoosted] = useState(false);
  const [paying, setPaying] = useState(false);

  const plan = PLANS.find((p) => p.id === selectedPlan)!;
  const totalPrice = plan.price * selectedDuration;
  const showTargeting = selectedPlan !== "basic";

  function toggleRegion(r: string) {
    setSelectedRegions((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r],
    );
  }

  async function handlePay() {
    setPaying(true);
    await new Promise((res) => setTimeout(res, 1200));
    setPaying(false);
    setBoosted(true);
    // Save to localStorage
    const key = "ic_boosted_posts";
    const existing: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    if (!existing.includes(postTitle)) {
      localStorage.setItem(key, JSON.stringify([...existing, postTitle]));
    }
    toast.success("Your post is now being promoted!", {
      description: `${plan.name} plan · ${plan.reach}`,
    });
    if (onBoostSuccess) onBoostSuccess();
  }

  function handleClose() {
    setBoosted(false);
    setPaying(false);
    setSelectedPlan("basic");
    setSelectedRegions([]);
    setSelectedDuration(1);
    onClose();
  }

  const typeLabel =
    postType === "post"
      ? "post"
      : postType === "product"
        ? "product"
        : postType === "job"
          ? "job listing"
          : postType === "blog"
            ? "blog"
            : "listing";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="boost.dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base font-display">
            <Rocket size={18} className="text-primary" />
            Boost {typeLabel}
          </DialogTitle>
        </DialogHeader>

        {boosted ? (
          <div
            className="flex flex-col items-center gap-4 py-8"
            data-ocid="boost.success_state"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
            >
              <CheckCircle2
                size={32}
                style={{ color: "oklch(0.55 0.22 280)" }}
              />
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-foreground text-lg">
                Promotion Live!
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Your {typeLabel} is now being promoted
              </p>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "oklch(0.65 0.20 85 / 0.15)",
                color: "oklch(0.55 0.18 85)",
              }}
            >
              <Rocket size={14} /> Promoted
            </div>
            <Button
              onClick={handleClose}
              className="mt-2"
              data-ocid="boost.close_button"
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Post title preview */}
            <div
              className="px-3 py-2 rounded-lg text-sm text-muted-foreground border border-border"
              style={{ background: "oklch(var(--muted))" }}
            >
              <span className="font-semibold text-foreground">
                {typeLabel}:{" "}
              </span>
              <span className="line-clamp-1">{postTitle}</span>
            </div>

            {/* Plan Selection */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Choose Plan
              </p>
              <div className="grid grid-cols-3 gap-2">
                {PLANS.map((p) => {
                  const Icon = p.icon;
                  const isSelected = selectedPlan === p.id;
                  return (
                    <Card
                      key={p.id}
                      className="cursor-pointer transition-all border-2"
                      style={{
                        borderColor: isSelected
                          ? p.color
                          : "oklch(var(--border))",
                        background: isSelected
                          ? `${p.color.replace(")", " / 0.08)")}`
                          : "oklch(var(--card))",
                      }}
                      onClick={() => setSelectedPlan(p.id)}
                      data-ocid="boost.plan.card"
                    >
                      <CardContent className="p-3 text-center">
                        <Icon
                          size={18}
                          className="mx-auto mb-1"
                          style={{ color: p.color }}
                        />
                        <p
                          className="font-label font-bold text-xs"
                          style={{ color: isSelected ? p.color : undefined }}
                        >
                          {p.name}
                        </p>
                        <p className="text-[11px] font-bold text-foreground mt-0.5">
                          ₹{p.price}/{p.period}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {p.reach}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {p.impressions}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Audience Targeting (Standard/Premium only) */}
            {showTargeting && (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Audience Targeting
                </p>

                <div>
                  <p className="text-xs text-muted-foreground mb-1.5">
                    Regions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {REGIONS.map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => toggleRegion(r)}
                        className="text-[11px] px-2.5 py-1 rounded-full border transition-all"
                        style={{
                          borderColor: selectedRegions.includes(r)
                            ? "oklch(0.55 0.22 280)"
                            : "oklch(var(--border))",
                          background: selectedRegions.includes(r)
                            ? "oklch(0.55 0.22 280 / 0.12)"
                            : "transparent",
                          color: selectedRegions.includes(r)
                            ? "oklch(0.55 0.22 280)"
                            : "oklch(var(--muted-foreground))",
                        }}
                        data-ocid="boost.region.toggle"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1.5">
                      Age Group
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {AGE_GROUPS.map((a) => (
                        <button
                          type="button"
                          key={a}
                          onClick={() => setSelectedAge(a)}
                          className="text-[11px] px-2 py-0.5 rounded-full border transition-all"
                          style={{
                            borderColor:
                              selectedAge === a
                                ? "oklch(0.60 0.25 335)"
                                : "oklch(var(--border))",
                            background:
                              selectedAge === a
                                ? "oklch(0.60 0.25 335 / 0.1)"
                                : "transparent",
                            color:
                              selectedAge === a
                                ? "oklch(0.60 0.25 335)"
                                : "oklch(var(--muted-foreground))",
                          }}
                          data-ocid="boost.age.toggle"
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1.5">
                      Gender
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {GENDERS.map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setSelectedGender(g)}
                          className="text-[11px] px-2 py-0.5 rounded-full border transition-all"
                          style={{
                            borderColor:
                              selectedGender === g
                                ? "oklch(0.60 0.18 150)"
                                : "oklch(var(--border))",
                            background:
                              selectedGender === g
                                ? "oklch(0.60 0.18 150 / 0.1)"
                                : "transparent",
                            color:
                              selectedGender === g
                                ? "oklch(0.60 0.18 150)"
                                : "oklch(var(--muted-foreground))",
                          }}
                          data-ocid="boost.gender.toggle"
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Duration */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Duration
              </p>
              <div className="flex gap-2">
                {DURATIONS.map((d) => (
                  <button
                    type="button"
                    key={d.weeks}
                    onClick={() => setSelectedDuration(d.weeks)}
                    className="flex-1 py-2 rounded-lg border text-xs font-semibold transition-all"
                    style={{
                      borderColor:
                        selectedDuration === d.weeks
                          ? plan.color
                          : "oklch(var(--border))",
                      background:
                        selectedDuration === d.weeks
                          ? `${plan.color.replace(")", " / 0.1)")}`
                          : "transparent",
                      color:
                        selectedDuration === d.weeks
                          ? plan.color
                          : "oklch(var(--muted-foreground))",
                    }}
                    data-ocid="boost.duration.toggle"
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Total + Pay */}
            <div
              className="flex items-center justify-between p-3 rounded-xl border border-border"
              style={{ background: "oklch(var(--muted) / 0.5)" }}
            >
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-xl font-display font-bold text-foreground">
                  ₹{totalPrice.toLocaleString()}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {plan.name} ·{" "}
                  {selectedDuration === 1
                    ? "1 Week"
                    : selectedDuration === 2
                      ? "2 Weeks"
                      : "1 Month"}
                </p>
              </div>
              <Badge
                variant="secondary"
                className="text-[10px]"
                style={{ background: `${plan.color}18`, color: plan.color }}
              >
                {plan.reach}
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleClose}
                data-ocid="boost.cancel_button"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 font-label font-semibold"
                disabled={paying}
                onClick={handlePay}
                data-ocid="boost.submit_button"
                style={{ background: plan.color }}
              >
                {paying ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Rocket size={14} /> Pay & Boost · ₹
                    {totalPrice.toLocaleString()}
                  </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
