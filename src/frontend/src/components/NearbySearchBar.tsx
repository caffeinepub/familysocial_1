import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const NEARBY_USERS = [
  { id: 1, name: "Priya Sharma", distance: "0.3 km", lastSeen: "2 days ago" },
  { id: 2, name: "Rahul Verma", distance: "0.7 km", lastSeen: "1 week ago" },
  { id: 3, name: "Anita Patel", distance: "1.2 km", lastSeen: "3 weeks ago" },
];

const NEARBY_ITEMS = [
  {
    id: 1,
    name: "Organic Vegetables",
    store: "Fresh Mart",
    price: "₹120",
    dist: "0.4 km",
  },
  {
    id: 2,
    name: "Home Cleaning Service",
    store: "CleanPro",
    price: "₹499",
    dist: "0.8 km",
  },
  {
    id: 3,
    name: "Electrician",
    store: "QuickFix",
    price: "₹350",
    dist: "1.1 km",
  },
];

export default function NearbySearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300"
      style={{ width: expanded ? "min(520px, 92vw)" : "min(280px, 80vw)" }}
      data-ocid="nearby.panel"
    >
      <div
        className="rounded-2xl border shadow-2xl overflow-hidden"
        style={{
          background: "oklch(var(--card))",
          borderColor: "oklch(var(--border))",
        }}
      >
        {/* Search input */}
        <div className="flex items-center gap-2 px-4 py-3">
          <MapPin size={15} className="text-primary shrink-0" />
          <Input
            placeholder="Search nearby..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setExpanded(true)}
            className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground/60"
            data-ocid="nearby.search_input"
          />
          <Search size={14} className="text-muted-foreground shrink-0" />
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="border-t border-border">
            {/* Nearby users */}
            <div className="px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                People Nearby This Month
              </p>
              <div className="space-y-2">
                {NEARBY_USERS.map((u) => (
                  <div key={u.id} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User size={12} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {u.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {u.distance} · last seen {u.lastSeen}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 text-[10px] px-2"
                        onClick={() =>
                          toast.success(`Connection request sent to ${u.name}`)
                        }
                        data-ocid="nearby.primary_button"
                      >
                        Keep
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => setExpanded(false)}
                        data-ocid="nearby.close_button"
                      >
                        <X size={10} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby products */}
            <div className="border-t border-border px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Available Nearby
              </p>
              <div className="space-y-1.5">
                {NEARBY_ITEMS.filter(
                  (i) =>
                    !query ||
                    i.name.toLowerCase().includes(query.toLowerCase()),
                ).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {item.store} · {item.dist}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] shrink-0">
                      {item.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
