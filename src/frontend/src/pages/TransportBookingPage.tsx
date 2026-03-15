import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bus, Plane, Smartphone, Train } from "lucide-react";
import BusBookingPage from "./BusBookingPage";
import RechargeBookingPage from "./RechargeBookingPage";

const COMING_SOON_SERVICES = [
  {
    icon: Train,
    label: "Train Booking",
    desc: "Book IRCTC trains via PaySprint API",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Plane,
    label: "Flight Booking",
    desc: "Domestic & international flights",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function TransportBookingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div
        className="px-6 py-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.15), oklch(0.65 0.25 335 / 0.1))",
        }}
      >
        <h1 className="text-2xl font-bold text-foreground">
          Transport & Recharge
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Book tickets and recharge — all powered by PaySprint
        </p>

        {/* Coming soon quick links */}
        <div className="flex gap-3 mt-4 flex-wrap">
          {COMING_SOON_SERVICES.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-background/80 rounded-xl px-3 py-2 border border-border"
            >
              <div
                className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`}
              >
                <s.icon size={14} className={s.color} />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  {s.label}
                </p>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </div>
              <Badge variant="secondary" className="text-[9px] ml-1">
                Soon
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Main tabs */}
      <div className="p-4 max-w-4xl mx-auto">
        <Tabs defaultValue="bus">
          <TabsList className="mb-4">
            <TabsTrigger
              value="bus"
              data-ocid="transport.bus_tab"
              className="gap-2"
            >
              <Bus size={15} /> Bus Booking
            </TabsTrigger>
            <TabsTrigger
              value="recharge"
              data-ocid="transport.recharge_tab"
              className="gap-2"
            >
              <Smartphone size={15} /> Recharge
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bus">
            <BusBookingPage />
          </TabsContent>
          <TabsContent value="recharge">
            <RechargeBookingPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
