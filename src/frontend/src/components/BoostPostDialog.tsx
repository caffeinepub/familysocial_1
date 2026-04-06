import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Rocket, Target, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PaymentModal } from "./PaymentModal";

// Duration-based pricing matrix
const PLAN_PRICING: Record<string, Record<number, number>> = {
  basic: { 1: 299, 2: 499, 4: 999 },
  standard: { 1: 799, 2: 1299, 4: 2499 },
  premium: { 1: 2499, 2: 3999, 4: 6999 },
};

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    period: "week",
    impressions: "~500 impressions",
    reach: "Local reach",
    color: "oklch(0.60 0.18 150)",
    icon: Zap,
  },
  {
    id: "standard",
    name: "Standard",
    period: "week",
    impressions: "~2,000 impressions",
    reach: "City-wide",
    color: "oklch(0.55 0.22 280)",
    icon: Target,
  },
  {
    id: "premium",
    name: "Premium",
    period: "week",
    impressions: "~10,000 impressions",
    reach: "Regional",
    color: "oklch(0.60 0.25 335)",
    icon: Rocket,
  },
];

const LOCATION_DATA: Record<string, Record<string, string[]>> = {
  India: {
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Laxmi Nagar", "Connaught Place"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Salem",
      "Tiruchirappalli",
    ],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Agra",
      "Varanasi",
      "Noida",
      "Ghaziabad",
    ],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
    Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
  },
  "Sri Lanka": {
    Western: ["Colombo", "Negombo"],
    Central: ["Kandy", "Nuwara Eliya"],
  },
  Bangladesh: {
    Dhaka: ["Dhaka City", "Narayanganj"],
    Chittagong: ["Chittagong City"],
  },
  Nepal: { Bagmati: ["Kathmandu", "Lalitpur"], Gandaki: ["Pokhara"] },
  Pakistan: {
    Punjab: ["Lahore", "Faisalabad"],
    Sindh: ["Karachi", "Hyderabad"],
  },
};

const AGE_GROUPS = ["18-25", "26-35", "36-50", "50+"];
const GENDERS = ["All", "Male", "Female"];
const LANGUAGES = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Kannada",
  "Marathi",
  "Bengali",
  "Gujarati",
];
const RELIGIONS = [
  "All",
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Jain",
  "Other",
];
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
  const [selectedCountry, setSelectedCountry] = useState<string>("India");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<string>("18-25");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Hindi");
  const [selectedReligion, setSelectedReligion] = useState<string>("All");
  const [boosted, setBoosted] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [promoImages, setPromoImages] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);

  const plan = PLANS.find((p) => p.id === selectedPlan)!;
  // Use pricing matrix
  const totalPrice = PLAN_PRICING[selectedPlan]?.[selectedDuration] ?? 299;

  const locationSummary = [
    selectedCountry,
    selectedState,
    selectedCity,
    selectedArea,
  ]
    .filter(Boolean)
    .join(" › ");

  function handlePay() {
    setPaymentOpen(true);
  }

  function handlePaySuccess() {
    setPaymentOpen(false);
    setBoosted(true);
    const key = "ic_boosted_posts";
    const existing: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    if (!existing.includes(postTitle)) {
      localStorage.setItem(key, JSON.stringify([...existing, postTitle]));
    }
    // Save full promo to queue for admin review
    try {
      const promo = {
        id: Date.now().toString(),
        postTitle,
        postType,
        plan: selectedPlan,
        amount: totalPrice,
        gateway: "Razorpay",
        txnId: `TXN${Date.now()}`,
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
        area: selectedArea,
        locationSummary,
        ageGroup: selectedAge,
        gender: selectedGender,
        language: selectedLanguage,
        religion: selectedReligion,
        duration: selectedDuration,
        durationLabel:
          DURATIONS.find((d) => d.weeks === selectedDuration)?.label ??
          "1 Week",
        status: "pending",
        timestamp: new Date().toISOString(),
        impressions: 0,
        images: promoImages,
        videoUrl,
        adContent: postTitle,
        aiModeration: {
          safe:
            !postTitle.toLowerCase().includes("adult") &&
            !postTitle.toLowerCase().includes("18+"),
          copyright: [
            "nike",
            "apple",
            "samsung",
            "coca-cola",
            "disney",
            "adidas",
            "amazon",
          ].some((brand) => postTitle.toLowerCase().includes(brand)),
          details: "AI scan pending",
        },
      };
      const existingQ = JSON.parse(
        localStorage.getItem("ic_promotion_queue") || "[]",
      );
      localStorage.setItem(
        "ic_promotion_queue",
        JSON.stringify([...existingQ, promo]),
      );
      window.dispatchEvent(new Event("storage"));
    } catch {
      // ignore localStorage errors
    }
    toast.success("Your post is now being promoted!", {
      description: `${plan.name} plan · ${plan.reach}`,
    });
    if (onBoostSuccess) onBoostSuccess();
  }

  function handleClose() {
    setBoosted(false);
    setPaymentOpen(false);
    setSelectedPlan("basic");
    setSelectedCountry("India");
    setSelectedState("");
    setSelectedCity("");
    setSelectedArea("");
    setSelectedDuration(1);
    setSelectedLanguage("Hindi");
    setSelectedReligion("All");
    setPromoImages([]);
    setVideoUrl("");
    setShowMatrix(false);
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

            {/* Pricing Matrix toggle */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Choose Plan
                </p>
                <button
                  type="button"
                  onClick={() => setShowMatrix((v) => !v)}
                  className="text-[10px] underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showMatrix ? "Hide" : "View"} pricing matrix
                </button>
              </div>

              {/* Pricing Matrix Table */}
              {showMatrix && (
                <div className="mb-3 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                          Plan
                        </th>
                        <th className="px-3 py-2 text-center font-semibold text-muted-foreground">
                          1 Week
                        </th>
                        <th className="px-3 py-2 text-center font-semibold text-muted-foreground">
                          2 Weeks
                        </th>
                        <th className="px-3 py-2 text-center font-semibold text-muted-foreground">
                          1 Month
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PLANS.map((p) => (
                        <tr
                          key={p.id}
                          className="border-t border-border/50"
                          style={{
                            background:
                              selectedPlan === p.id
                                ? `${p.color.replace(")", " / 0.06)")}`
                                : "transparent",
                          }}
                        >
                          <td
                            className="px-3 py-2 font-semibold"
                            style={{ color: p.color }}
                          >
                            {p.name}
                          </td>
                          {[1, 2, 4].map((w) => (
                            // biome-ignore lint/a11y/useKeyWithClickEvents: td in pricing matrix
                            <td
                              key={w}
                              className="px-3 py-2 text-center cursor-pointer hover:bg-muted/30 transition-colors"
                              style={{
                                fontWeight:
                                  selectedPlan === p.id &&
                                  selectedDuration === w
                                    ? 700
                                    : 400,
                                color:
                                  selectedPlan === p.id &&
                                  selectedDuration === w
                                    ? p.color
                                    : "oklch(var(--foreground))",
                              }}
                              onClick={() => {
                                setSelectedPlan(p.id);
                                setSelectedDuration(w);
                              }}
                            >
                              ₹{PLAN_PRICING[p.id][w].toLocaleString()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

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
                          ₹
                          {PLAN_PRICING[p.id][
                            selectedDuration
                          ].toLocaleString()}
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

            {/* Audience Targeting - Always visible */}
            <div className="space-y-3">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "oklch(0.55 0.22 280)" }}
              >
                🎯 Audience Targeting
              </p>

              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  📍 Location Targeting
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">
                      Country
                    </p>
                    <Select
                      value={selectedCountry}
                      onValueChange={(v) => {
                        setSelectedCountry(v);
                        setSelectedState("");
                        setSelectedCity("");
                        setSelectedArea("");
                      }}
                    >
                      <SelectTrigger
                        className="h-8 text-xs"
                        data-ocid="boost.country.select"
                      >
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(LOCATION_DATA).map((c) => (
                          <SelectItem key={c} value={c} className="text-xs">
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">
                      State / Province
                    </p>
                    <Select
                      value={selectedState}
                      onValueChange={(v) => {
                        setSelectedState(v);
                        setSelectedCity("");
                        setSelectedArea("");
                      }}
                      disabled={!selectedCountry}
                    >
                      <SelectTrigger
                        className="h-8 text-xs"
                        data-ocid="boost.state.select"
                      >
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(LOCATION_DATA[selectedCountry] || {}).map(
                          (s) => (
                            <SelectItem key={s} value={s} className="text-xs">
                              {s}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">
                      City
                    </p>
                    <Select
                      value={selectedCity}
                      onValueChange={(v) => {
                        setSelectedCity(v);
                        setSelectedArea("");
                      }}
                      disabled={!selectedState}
                    >
                      <SelectTrigger
                        className="h-8 text-xs"
                        data-ocid="boost.city.select"
                      >
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {(
                          LOCATION_DATA[selectedCountry]?.[selectedState] || []
                        ).map((c) => (
                          <SelectItem key={c} value={c} className="text-xs">
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">
                      Area / Pincode
                    </p>
                    <Input
                      className="h-8 text-xs"
                      placeholder="Area or pincode"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      data-ocid="boost.area.input"
                    />
                  </div>
                </div>
                {locationSummary && (
                  <p className="text-[10px] text-primary mt-1.5 font-medium">
                    📍 {locationSummary}
                  </p>
                )}
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
                  <p className="text-xs text-muted-foreground mb-1.5">Gender</p>
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
              <div>
                <p className="text-xs text-muted-foreground mb-1.5">Language</p>
                <div className="flex flex-wrap gap-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className="text-[11px] px-2 py-0.5 rounded-full border transition-all"
                      style={{
                        borderColor:
                          selectedLanguage === lang
                            ? "oklch(0.65 0.20 40)"
                            : "oklch(var(--border))",
                        background:
                          selectedLanguage === lang
                            ? "oklch(0.65 0.20 40 / 0.1)"
                            : "transparent",
                        color:
                          selectedLanguage === lang
                            ? "oklch(0.65 0.20 40)"
                            : "oklch(var(--muted-foreground))",
                      }}
                      data-ocid="boost.language.toggle"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1.5">
                  Religion / Culture
                </p>
                <div className="flex flex-wrap gap-1">
                  {RELIGIONS.map((rel) => (
                    <button
                      type="button"
                      key={rel}
                      onClick={() => setSelectedReligion(rel)}
                      className="text-[11px] px-2 py-0.5 rounded-full border transition-all"
                      style={{
                        borderColor:
                          selectedReligion === rel
                            ? "oklch(0.58 0.20 320)"
                            : "oklch(var(--border))",
                        background:
                          selectedReligion === rel
                            ? "oklch(0.58 0.20 320 / 0.1)"
                            : "transparent",
                        color:
                          selectedReligion === rel
                            ? "oklch(0.58 0.20 320)"
                            : "oklch(var(--muted-foreground))",
                      }}
                      data-ocid="boost.religion.toggle"
                    >
                      {rel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Promotion Media - Always visible */}
            <div className="space-y-3">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "oklch(0.55 0.22 280)" }}
              >
                📎 Promotion Media
              </p>
              <div>
                <Label className="text-xs text-muted-foreground mb-1.5 block">
                  Upload Images (max 3)
                </Label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="text-xs text-muted-foreground file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-medium file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/80 cursor-pointer"
                  data-ocid="boost.upload_button"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []).slice(0, 3);
                    const readers = files.map(
                      (file) =>
                        new Promise<string>((resolve) => {
                          const reader = new FileReader();
                          reader.onload = (ev) =>
                            resolve(ev.target?.result as string);
                          reader.readAsDataURL(file);
                        }),
                    );
                    Promise.all(readers).then((imgs) => setPromoImages(imgs));
                  }}
                />
                {promoImages.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {promoImages.map((img, i) => (
                      <div key={img.slice(0, 40)} className="relative">
                        <img
                          src={img}
                          alt={`promo-${i}`}
                          className="w-16 h-16 object-cover rounded-lg border border-border"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setPromoImages((prev) =>
                              prev.filter((_, idx) => idx !== i),
                            )
                          }
                          className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-white rounded-full text-[9px] flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <Label className="text-xs text-muted-foreground mb-1.5 block">
                  Video URL (YouTube / Vimeo)
                </Label>
                <input
                  type="text"
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full h-8 px-3 text-sm rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  data-ocid="boost.video.input"
                />
                {videoUrl && (
                  <div className="mt-2 p-2 rounded-lg bg-secondary/30 text-xs flex items-center gap-2">
                    <span>🎥</span>
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline truncate"
                    >
                      {videoUrl}
                    </a>
                  </div>
                )}
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
                onClick={handlePay}
                data-ocid="boost.submit_button"
                style={{ background: plan.color }}
              >
                <span className="flex items-center gap-2">
                  <Rocket size={14} /> Pay & Boost · ₹
                  {totalPrice.toLocaleString()}
                </span>
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center">
              Targeting: {selectedAge} · {selectedGender} · {selectedLanguage} ·{" "}
              {selectedReligion}
              {locationSummary ? ` · ${locationSummary}` : ""}
            </p>
          </div>
        )}
      </DialogContent>
      <PaymentModal
        open={paymentOpen}
        onCancel={() => setPaymentOpen(false)}
        onSuccess={handlePaySuccess}
        amount={totalPrice}
        title="Boost Post Payment"
      />
    </Dialog>
  );
}
