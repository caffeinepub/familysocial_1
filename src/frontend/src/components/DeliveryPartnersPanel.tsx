import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

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
    color: "oklch(0.65 0.22 55)",
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
    color: "oklch(0.72 0.20 75)",
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
    color: "oklch(0.30 0.02 0)",
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
    color: "oklch(0.52 0.18 145)",
  },
];

const STATUS_COLORS: Record<string, string> = {
  "Pickup Pending": "bg-yellow-100 text-yellow-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

function SummaryCard({
  label,
  value,
  sub,
}: { label: string; value: string; sub?: string }) {
  return (
    <Card className="flex-1">
      <CardContent className="p-3">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-xl font-bold mt-0.5">{value}</p>
        {sub && <p className="text-[10px] text-muted-foreground">{sub}</p>}
      </CardContent>
    </Card>
  );
}

function AdminPartnerTab({ partner }: { partner: (typeof PARTNERS)[0] }) {
  const [enabled, setEnabled] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [secret, setSecret] = useState("");
  const [merchantId, setMerchantId] = useState("");
  const [webhook, setWebhook] = useState("");
  const [baseFare, setBaseFare] = useState(partner.baseFare);
  const [perKm, setPerKm] = useState(partner.perKm);
  const [perKg, setPerKg] = useState(partner.perKg);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-base">
            {partner.emoji} {partner.label}
          </p>
          <p className="text-xs text-muted-foreground">{partner.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          <Label className="text-sm">{enabled ? "Enabled" : "Disabled"}</Label>
          <Switch
            checked={enabled}
            onCheckedChange={(v) => {
              setEnabled(v);
              toast.success(`${partner.label} ${v ? "enabled" : "disabled"}`);
            }}
            data-ocid={`dp.${partner.id}.toggle`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">API Key</Label>
          <Input
            type="password"
            placeholder="Enter API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="mt-1"
            data-ocid={`dp.${partner.id}.input`}
          />
        </div>
        <div>
          <Label className="text-xs">Secret Key</Label>
          <Input
            type="password"
            placeholder="Enter secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs">Merchant ID</Label>
          <Input
            placeholder="Merchant ID"
            value={merchantId}
            onChange={(e) => setMerchantId(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs">Webhook URL</Label>
          <Input
            placeholder="https://your-server.com/webhook"
            value={webhook}
            onChange={(e) => setWebhook(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">Rate Configuration</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">Base Fare (₹)</Label>
            <Input
              value={baseFare}
              onChange={(e) => setBaseFare(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs">Per km (₹)</Label>
            <Input
              value={perKm}
              onChange={(e) => setPerKm(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs">Per kg (₹)</Label>
            <Input
              value={perKg}
              onChange={(e) => setPerKg(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Vehicles: {partner.vehicles.join(", ")}
        </p>
      </div>

      <Button
        className="w-full"
        onClick={() => toast.success(`${partner.label} configuration saved`)}
        data-ocid={`dp.${partner.id}.save_button`}
      >
        Save Configuration
      </Button>

      <div>
        <p className="text-sm font-semibold mb-2">Analytics</p>
        <div className="flex flex-wrap gap-3">
          <SummaryCard
            label="Total Orders"
            value={String(Math.floor(Math.random() * 500) + 100)}
          />
          <SummaryCard
            label="Total Cost"
            value={`₹${Math.floor(Math.random() * 50) + 10}K`}
          />
          <SummaryCard label="Avg Delivery Time" value="38 min" />
          <SummaryCard label="Success Rate" value="96.2%" />
        </div>
      </div>
    </div>
  );
}

function BusinessPartnerTab({ partner }: { partner: (typeof PARTNERS)[0] }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [weight, setWeight] = useState("");
  const [dims, setDims] = useState("");
  const [deliveries, setDeliveries] = useState([
    {
      id: `${partner.id.toUpperCase()}-001`,
      partner: partner.label,
      pickup: "Shop A, Sector 18",
      drop: "Customer B, Model Town",
      status: "In Transit",
      eta: "25 min",
      track: "#TRK8821",
    },
    {
      id: `${partner.id.toUpperCase()}-002`,
      partner: partner.label,
      pickup: "Warehouse C, Phase 2",
      drop: "Office D, Connaught Place",
      status: "Pickup Pending",
      eta: "45 min",
      track: "#TRK8822",
    },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setDeliveries((d) =>
        d.map((del) => {
          if (del.status === "In Transit" && Math.random() > 0.7)
            return { ...del, status: "Delivered", eta: "Done" };
          if (del.status === "Pickup Pending" && Math.random() > 0.6)
            return { ...del, status: "In Transit" };
          return del;
        }),
      );
    }, 15000);
    return () => clearInterval(id);
  }, []);

  const estCost =
    pickup && drop && weight
      ? `₹${Math.round(Number(partner.baseFare) + 5 * Number(partner.perKm) + Number(weight) * Number(partner.perKg))}`
      : null;

  return (
    <div className="space-y-5">
      <div>
        <p className="font-semibold">
          {partner.emoji} {partner.label}
        </p>
        <p className="text-xs text-muted-foreground">{partner.tagline}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Pickup Address</Label>
          <Input
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="mt-1"
            data-ocid={`dp.${partner.id}.input`}
          />
        </div>
        <div>
          <Label className="text-xs">Drop Address</Label>
          <Input
            placeholder="Drop location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs">Weight (kg)</Label>
          <Input
            placeholder="Package weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs">Dimensions (L×W×H cm)</Label>
          <Input
            placeholder="30×20×15"
            value={dims}
            onChange={(e) => setDims(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {estCost && (
        <div className="rounded-md bg-muted px-4 py-2 text-sm">
          Estimated cost: <span className="font-bold text-lg">{estCost}</span>
          <span className="text-xs text-muted-foreground ml-2">
            (base ₹{partner.baseFare} + distance + weight)
          </span>
        </div>
      )}

      <Button
        className="w-full"
        disabled={!pickup || !drop}
        onClick={() => {
          const newDel = {
            id: `${partner.id.toUpperCase()}-${String(deliveries.length + 1).padStart(3, "0")}`,
            partner: partner.label,
            pickup,
            drop,
            status: "Pickup Pending",
            eta: "~45 min",
            track: `#TRK${Math.floor(Math.random() * 9000) + 1000}`,
          };
          setDeliveries((d) => [newDel, ...d]);
          setPickup("");
          setDrop("");
          setWeight("");
          setDims("");
          toast.success(`${partner.label} delivery booked!`);
        }}
        data-ocid={`dp.${partner.id}.primary_button`}
      >
        🚚 Book Delivery via {partner.label}
      </Button>

      <div>
        <p className="text-sm font-semibold mb-2">Active Deliveries</p>
        <ScrollArea className="h-52">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["ID", "Pickup", "Drop", "Status", "ETA", "Tracking"].map(
                  (h) => (
                    <th key={h} className="text-left py-1 pr-2">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {deliveries.map((d) => (
                <tr key={d.id} className="border-b last:border-0">
                  <td className="py-1.5 pr-2 font-mono text-xs">{d.id}</td>
                  <td className="pr-2 text-xs truncate max-w-[80px]">
                    {d.pickup}
                  </td>
                  <td className="pr-2 text-xs truncate max-w-[80px]">
                    {d.drop}
                  </td>
                  <td className="pr-2">
                    <Badge
                      className={`text-[9px] px-1 ${STATUS_COLORS[d.status] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {d.status}
                    </Badge>
                  </td>
                  <td className="pr-2 text-xs">{d.eta}</td>
                  <td className="text-xs font-mono">{d.track}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </div>
  );
}

export function DeliveryPartnersPanel({
  mode,
}: { mode: "admin" | "business" }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold">🚚 Delivery Partners</h2>
        <p className="text-xs text-muted-foreground">
          {mode === "admin"
            ? "Configure API credentials and rate cards for each delivery partner"
            : "Book deliveries and track active shipments via your preferred partner"}
        </p>
      </div>
      <Tabs defaultValue="porter">
        <TabsList className="flex-wrap gap-1">
          {PARTNERS.map((p) => (
            <TabsTrigger key={p.id} value={p.id} data-ocid={`dp.${p.id}.tab`}>
              {p.emoji} {p.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {PARTNERS.map((p) => (
          <TabsContent key={p.id} value={p.id} className="mt-4">
            {mode === "admin" ? (
              <AdminPartnerTab partner={p} />
            ) : (
              <BusinessPartnerTab partner={p} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
