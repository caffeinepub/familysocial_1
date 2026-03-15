import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Construction, Smartphone, Tv2, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const OPERATORS = ["Airtel", "Jio", "Vi (Vodafone-Idea)", "BSNL", "MTNL"];
const CIRCLES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chennai",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "J&K",
  "Karnataka",
  "Kerala",
  "Kolkata",
  "Madhya Pradesh",
  "Maharashtra",
  "Mumbai",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "UP East",
  "UP West",
  "West Bengal",
];

const DTH_OPERATORS = [
  "Tata Play",
  "Airtel DTH",
  "Dish TV",
  "Videocon D2H",
  "Sun Direct",
];

const PLANS: Record<
  string,
  Record<string, { amount: number; validity: string; benefits: string }[]>
> = {
  Jio: {
    Combo: [
      {
        amount: 179,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 299,
        validity: "28 days",
        benefits: "2GB/day + Unlimited calls",
      },
      {
        amount: 399,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 599,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls",
      },
      {
        amount: 999,
        validity: "365 days",
        benefits: "2GB/day + Unlimited calls",
      },
    ],
    Data: [
      { amount: 51, validity: "28 days", benefits: "6GB data top-up" },
      { amount: 91, validity: "28 days", benefits: "12GB data top-up" },
      { amount: 151, validity: "28 days", benefits: "25GB data top-up" },
    ],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
      { amount: 20, validity: "NA", benefits: "₹20 full talktime" },
      { amount: 50, validity: "NA", benefits: "₹50 full talktime" },
    ],
    "Top-up": [
      { amount: 10, validity: "NA", benefits: "₹10 balance" },
      { amount: 50, validity: "NA", benefits: "₹50 balance" },
      { amount: 100, validity: "NA", benefits: "₹100 balance" },
    ],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }],
  },
  Airtel: {
    Combo: [
      {
        amount: 155,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls",
      },
      {
        amount: 265,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 359,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 479,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls",
      },
      {
        amount: 839,
        validity: "365 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
    ],
    Data: [
      { amount: 48, validity: "28 days", benefits: "3GB data top-up" },
      { amount: 98, validity: "28 days", benefits: "10GB data top-up" },
    ],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
      { amount: 100, validity: "NA", benefits: "₹100 full talktime" },
    ],
    "Top-up": [
      { amount: 50, validity: "NA", benefits: "₹50 balance" },
      { amount: 200, validity: "NA", benefits: "₹200 balance" },
    ],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }],
  },
  "Vi (Vodafone-Idea)": {
    Combo: [
      {
        amount: 149,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls",
      },
      {
        amount: 269,
        validity: "28 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 349,
        validity: "84 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
      {
        amount: 469,
        validity: "84 days",
        benefits: "2GB/day + Unlimited calls",
      },
    ],
    Data: [{ amount: 57, validity: "28 days", benefits: "3GB data top-up" }],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
    ],
    "Top-up": [{ amount: 100, validity: "NA", benefits: "₹100 balance" }],
    SMS: [{ amount: 36, validity: "28 days", benefits: "3600 SMS" }],
  },
  BSNL: {
    Combo: [
      {
        amount: 107,
        validity: "28 days",
        benefits: "1GB/day + Unlimited calls",
      },
      {
        amount: 197,
        validity: "56 days",
        benefits: "1GB/day + Unlimited calls",
      },
      {
        amount: 397,
        validity: "90 days",
        benefits: "1.5GB/day + Unlimited calls",
      },
    ],
    Data: [],
    "Full Talktime": [
      { amount: 10, validity: "NA", benefits: "₹10 full talktime" },
    ],
    "Top-up": [{ amount: 50, validity: "NA", benefits: "₹50 balance" }],
    SMS: [],
  },
  MTNL: {
    Combo: [
      { amount: 200, validity: "28 days", benefits: "1.5GB/day + Calls" },
    ],
    Data: [],
    "Full Talktime": [],
    "Top-up": [],
    SMS: [],
  },
};

const PLAN_TYPES = ["Top-up", "Full Talktime", "Data", "Combo", "SMS"] as const;
type PlanType = (typeof PLAN_TYPES)[number];

interface SelectedPlan {
  amount: number;
  validity: string;
  benefits: string;
}

function ComingSoonTab({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
        <Construction size={24} className="text-muted-foreground" />
      </div>
      <p className="font-semibold text-foreground">{label} — Coming Soon</p>
      <p className="text-sm text-muted-foreground">
        This recharge category will be available soon.
      </p>
    </div>
  );
}

function MobileTab() {
  const [mobile, setMobile] = useState("");
  const [operator, setOperator] = useState("Jio");
  const [circle, setCircle] = useState("Delhi");
  const [rechargeType, setRechargeType] = useState("prepaid");
  const [planType, setPlanType] = useState<PlanType>("Combo");
  const [confirmPlan, setConfirmPlan] = useState<SelectedPlan | null>(null);

  const handleRecharge = (plan: SelectedPlan) => {
    if (!mobile || mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setConfirmPlan(plan);
  };

  const handleConfirm = () => {
    const txnId = `TXN${Date.now().toString().slice(-8)}`;
    toast.success(`Recharge successful! Transaction ID: ${txnId}`, {
      duration: 5000,
    });
    setConfirmPlan(null);
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Mobile Number</Label>
          <Input
            data-ocid="recharge.mobile_input"
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 10-digit mobile number"
          />
          {mobile.length === 10 && (
            <p className="text-xs text-emerald-600">
              Auto-detected: {operator}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label>Operator</Label>
          <Select value={operator} onValueChange={setOperator}>
            <SelectTrigger data-ocid="recharge.operator_select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {OPERATORS.map((op) => (
                <SelectItem key={op} value={op}>
                  {op}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Circle (State)</Label>
          <Select value={circle} onValueChange={setCircle}>
            <SelectTrigger data-ocid="recharge.circle_select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CIRCLES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Recharge Type</Label>
          <ToggleGroup
            type="single"
            value={rechargeType}
            onValueChange={(v) => v && setRechargeType(v)}
            className="justify-start"
          >
            <ToggleGroupItem value="prepaid" className="text-sm">
              Prepaid
            </ToggleGroupItem>
            <ToggleGroupItem value="postpaid" className="text-sm">
              Postpaid
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-3">Browse Plans</p>
        <Tabs
          value={planType}
          onValueChange={(v) => setPlanType(v as PlanType)}
        >
          <TabsList className="mb-4 flex-wrap h-auto gap-1">
            {PLAN_TYPES.map((pt) => (
              <TabsTrigger key={pt} value={pt} className="text-xs">
                {pt}
              </TabsTrigger>
            ))}
          </TabsList>
          {PLAN_TYPES.map((pt) => (
            <TabsContent key={pt} value={pt}>
              {(PLANS[operator]?.[pt] || []).length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">
                  No {pt} plans available for {operator}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(PLANS[operator]?.[pt] || []).map((plan) => (
                    <Card
                      key={`${plan.amount}-${plan.validity}`}
                      data-ocid={`recharge.plan.item.${plan.amount}`}
                      className="hover:border-primary/50 transition-colors"
                    >
                      <CardContent className="p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <span className="text-2xl font-bold text-primary">
                            ₹{plan.amount}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {plan.validity}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {plan.benefits}
                        </p>
                        <Button
                          size="sm"
                          className="w-full"
                          data-ocid="recharge.plan.recharge_button.1"
                          onClick={() => handleRecharge(plan)}
                        >
                          Recharge
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={!!confirmPlan} onOpenChange={() => setConfirmPlan(null)}>
        <DialogContent data-ocid="recharge.confirm_dialog">
          <DialogHeader>
            <DialogTitle>Confirm Recharge</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div className="bg-muted/50 rounded-lg p-3 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mobile</span>
                <span className="font-medium">{mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Operator</span>
                <span className="font-medium">{operator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Circle</span>
                <span className="font-medium">{circle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-medium">{confirmPlan?.benefits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Validity</span>
                <span className="font-medium">{confirmPlan?.validity}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Amount</span>
                <span className="text-primary">₹{confirmPlan?.amount}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setConfirmPlan(null)}
              data-ocid="recharge.confirm_dialog.cancel_button"
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm} data-ocid="recharge.confirm_button">
              Confirm Recharge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DthTab() {
  const [customerId, setCustomerId] = useState("");
  const [operator, setOperator] = useState("Tata Play");
  const [amount, setAmount] = useState("");

  const handleRecharge = () => {
    if (!customerId || !amount) {
      toast.error("Please fill in all DTH recharge details");
      return;
    }
    const txnId = `DTH${Date.now().toString().slice(-8)}`;
    toast.success(`DTH Recharge successful! TXN: ${txnId}`, { duration: 4000 });
  };

  return (
    <div className="space-y-4 max-w-md">
      <div className="space-y-1.5">
        <Label>Customer ID / Subscriber ID</Label>
        <Input
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          placeholder="Enter your DTH Customer ID"
        />
      </div>
      <div className="space-y-1.5">
        <Label>DTH Operator</Label>
        <Select value={operator} onValueChange={setOperator}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DTH_OPERATORS.map((op) => (
              <SelectItem key={op} value={op}>
                {op}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>Recharge Amount (₹)</Label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <Button className="w-full" onClick={handleRecharge}>
        <Tv2 size={16} className="mr-2" /> Recharge DTH
      </Button>
    </div>
  );
}

export default function RechargeBookingPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Smartphone size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Recharge &amp; Bill Pay
          </h2>
          <p className="text-xs text-muted-foreground">Powered by PaySprint</p>
        </div>
      </div>

      <Tabs defaultValue="mobile">
        <TabsList className="flex-wrap h-auto gap-1 mb-4">
          {[
            { value: "mobile", label: "Mobile", icon: Smartphone },
            { value: "dth", label: "DTH", icon: Tv2 },
            { value: "electricity", label: "Electricity", icon: Zap },
            { value: "gas", label: "Gas", icon: Construction },
            { value: "water", label: "Water", icon: Construction },
          ].map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value} className="gap-1.5">
              <Icon size={14} /> {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="mobile">
          <MobileTab />
        </TabsContent>
        <TabsContent value="dth">
          <DthTab />
        </TabsContent>
        <TabsContent value="electricity">
          <ComingSoonTab label="Electricity Bill Payment" />
        </TabsContent>
        <TabsContent value="gas">
          <ComingSoonTab label="Gas Bill Payment" />
        </TabsContent>
        <TabsContent value="water">
          <ComingSoonTab label="Water Bill Payment" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
