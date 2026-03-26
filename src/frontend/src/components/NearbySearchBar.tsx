import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Ban,
  MapPin,
  Package,
  Search,
  Store,
  User,
  UserCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const NEARBY_USERS = [
  {
    id: 1,
    name: "Priya Sharma",
    distance: "0.3 km",
    lastSeen: "2 days ago",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    distance: "0.7 km",
    lastSeen: "1 week ago",
    avatar: "RV",
  },
  {
    id: 3,
    name: "Anita Patel",
    distance: "1.2 km",
    lastSeen: "3 weeks ago",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Vikram Singh",
    distance: "0.9 km",
    lastSeen: "5 days ago",
    avatar: "VS",
  },
];

const NEARBY_PRODUCTS = [
  {
    id: 1,
    name: "Organic Vegetables",
    store: "Fresh Mart",
    price: "₹120",
    dist: "0.4 km",
    category: "Grocery",
  },
  {
    id: 2,
    name: "Home Cleaning Service",
    store: "CleanPro",
    price: "₹499",
    dist: "0.8 km",
    category: "Service",
  },
  {
    id: 3,
    name: "Electrician",
    store: "QuickFix",
    price: "₹350",
    dist: "1.1 km",
    category: "Service",
  },
  {
    id: 4,
    name: "Basmati Rice 5kg",
    store: "Sharma General",
    price: "₹280",
    dist: "0.6 km",
    category: "Grocery",
  },
  {
    id: 5,
    name: "Birthday Cake",
    store: "Sweet Bakes",
    price: "₹650",
    dist: "1.5 km",
    category: "Food",
  },
];

const NEARBY_PLACES = [
  {
    id: 1,
    name: "City Park",
    type: "Park",
    dist: "0.5 km",
    icon: "🌳",
  },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    type: "Restaurant",
    dist: "0.7 km",
    icon: "🍽️",
  },
  {
    id: 3,
    name: "Sunrise Market",
    type: "Market",
    dist: "1.0 km",
    icon: "🛒",
  },
  {
    id: 4,
    name: "City Hospital",
    type: "Healthcare",
    dist: "1.3 km",
    icon: "🏥",
  },
  {
    id: 5,
    name: "Lotus Temple",
    type: "Temple",
    dist: "0.9 km",
    icon: "🛕",
  },
];

export default function NearbySearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("products");
  const [avoidedPeople, setAvoidedPeople] = useState<number[]>([]);
  const [avoidedPlaces, setAvoidedPlaces] = useState<number[]>([]);
  const [keptPeople, setKeptPeople] = useState<number[]>([]);
  const [softNudgeCount, setSoftNudgeCount] = useState(0);
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

  const q = query.toLowerCase();

  const filteredProducts = NEARBY_PRODUCTS.filter(
    (p) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.store.toLowerCase().includes(q),
  );

  const filteredPlaces = NEARBY_PLACES.filter(
    (p) =>
      !avoidedPlaces.includes(p.id) &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)),
  );

  const filteredPeople = NEARBY_USERS.filter(
    (u) =>
      !avoidedPeople.includes(u.id) && (!q || u.name.toLowerCase().includes(q)),
  );

  function handleAvoidPerson(id: number, name: string) {
    setAvoidedPeople((prev) => [...prev, id]);
    setSoftNudgeCount((c) => c + 1);
    toast.info(`${name} hidden from suggestions`);
  }

  function handleAvoidPlace(id: number, name: string) {
    setAvoidedPlaces((prev) => [...prev, id]);
    toast.info(`"${name}" removed from suggestions`);
  }

  function handleKeepPerson(id: number, name: string) {
    setKeptPeople((prev) => [...prev, id]);
    toast.success(`Connection request sent to ${name}`);
  }

  return (
    <div
      ref={ref}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300"
      style={{ width: expanded ? "min(540px, 94vw)" : "min(280px, 80vw)" }}
      data-ocid="nearby.panel"
    >
      <div
        className="rounded-2xl border shadow-2xl overflow-hidden"
        style={{
          background: "oklch(var(--card))",
          borderColor: expanded
            ? "oklch(0.55 0.22 280 / 0.4)"
            : "oklch(var(--border))",
          transition: "border-color 0.2s",
        }}
      >
        {/* Search pill */}
        <div className="flex items-center gap-2 px-4 py-3">
          <MapPin size={14} className="text-primary shrink-0" />
          <Input
            placeholder={
              expanded
                ? "Search products, places, people..."
                : "Search nearby..."
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setExpanded(true)}
            className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground/60"
            data-ocid="nearby.search_input"
          />
          {expanded ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 shrink-0"
              onClick={() => {
                setExpanded(false);
                setQuery("");
              }}
              data-ocid="nearby.close_button"
            >
              <X size={13} />
            </Button>
          ) : (
            <Search size={13} className="text-muted-foreground shrink-0" />
          )}
        </div>

        {/* Expanded tabs */}
        {expanded && (
          <div
            className="border-t"
            style={{ borderColor: "oklch(var(--border))" }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList
                className="w-full rounded-none border-b bg-transparent px-2 h-9"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <TabsTrigger
                  value="products"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.products.tab"
                >
                  <Package size={11} className="mr-1" />
                  Products
                  {filteredProducts.length > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.15)",
                        color: "oklch(0.55 0.22 280)",
                      }}
                    >
                      {filteredProducts.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="places"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.places.tab"
                >
                  <Store size={11} className="mr-1" />
                  Places
                  {filteredPlaces.length > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.60 0.20 190 / 0.15)",
                        color: "oklch(0.50 0.18 190)",
                      }}
                    >
                      {filteredPlaces.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="people"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.people.tab"
                >
                  <User size={11} className="mr-1" />
                  People
                  {filteredPeople.length + softNudgeCount > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.62 0.20 150 / 0.15)",
                        color: "oklch(0.50 0.18 150)",
                      }}
                    >
                      {filteredPeople.length + softNudgeCount}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              {/* Products/Services Tab */}
              <TabsContent value="products" className="m-0">
                <div className="px-4 py-3 max-h-64 overflow-y-auto">
                  {filteredProducts.length === 0 ? (
                    <p className="text-xs text-muted-foreground text-center py-4">
                      No products nearby
                    </p>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                        <MapPin size={9} /> Near you
                      </p>
                      {filteredProducts.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {item.store} · {item.dist}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <Badge variant="secondary" className="text-[10px]">
                              {item.price}
                            </Badge>
                            <Badge
                              className="text-[10px] px-1.5"
                              style={{
                                background: "oklch(0.55 0.22 280 / 0.1)",
                                color: "oklch(0.55 0.22 280)",
                              }}
                            >
                              {item.dist}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Places Tab */}
              <TabsContent value="places" className="m-0">
                <div className="px-4 py-3 max-h-64 overflow-y-auto">
                  {filteredPlaces.length === 0 ? (
                    <p className="text-xs text-muted-foreground text-center py-4">
                      No places to show
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {filteredPlaces.map((place) => (
                        <div key={place.id} className="flex items-center gap-2">
                          <span className="text-base shrink-0">
                            {place.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {place.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {place.type} · {place.dist}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive shrink-0"
                            title={`Avoid ${place.name}`}
                            onClick={() =>
                              handleAvoidPlace(place.id, place.name)
                            }
                            data-ocid="nearby.place.delete_button"
                          >
                            <Ban size={11} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* People Tab */}
              <TabsContent value="people" className="m-0">
                <div className="px-4 py-3 max-h-64 overflow-y-auto">
                  <p className="text-[10px] text-muted-foreground mb-3">
                    People nearby in the last month
                  </p>
                  <div className="space-y-2">
                    {filteredPeople.map((u) => (
                      <div key={u.id} className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                          style={{
                            background: "oklch(0.55 0.22 280 / 0.12)",
                            color: "oklch(0.55 0.22 280)",
                          }}
                        >
                          {u.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">
                            {u.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {u.distance} · last seen {u.lastSeen}
                          </p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          {keptPeople.includes(u.id) ? (
                            <Badge
                              className="text-[10px] px-2 h-6"
                              style={{
                                background: "oklch(0.60 0.18 150 / 0.15)",
                                color: "oklch(0.50 0.16 150)",
                              }}
                            >
                              <UserCheck size={9} className="mr-1" /> Kept
                            </Badge>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 text-[10px] px-2"
                              onClick={() => handleKeepPerson(u.id, u.name)}
                              data-ocid="nearby.person.primary_button"
                            >
                              Keep
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                            title={`Avoid ${u.name}`}
                            onClick={() => handleAvoidPerson(u.id, u.name)}
                            data-ocid="nearby.person.delete_button"
                          >
                            <X size={10} />
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* Soft nudge for avoided people */}
                    {softNudgeCount > 0 && (
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-muted-foreground mt-1"
                        style={{
                          background: "oklch(0.55 0.22 280 / 0.05)",
                          border: "1px dashed oklch(0.55 0.22 280 / 0.2)",
                        }}
                      >
                        <User size={12} className="text-primary shrink-0" />
                        Someone nearby you may know
                      </div>
                    )}

                    {filteredPeople.length === 0 && softNudgeCount === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-3">
                        No people nearby
                      </p>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
