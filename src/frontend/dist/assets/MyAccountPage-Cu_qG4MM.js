import { k as createLucideIcon, r as reactExports, j as jsxRuntimeExports, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, P as Package, B as Badge, I as Input, a as Button, u as ue } from "./index-DI_v_aLq.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-DU6YCjEl.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-Dm8sR2Wa.js";
import { D as DollarSign } from "./dollar-sign-lM-gSr84.js";
import { C as ClipboardList } from "./clipboard-list-DgaoZh1E.js";
import { T as TrendingUp } from "./trending-up-DALaL3BY.js";
import { S as ShoppingCart } from "./shopping-cart-B6X1WFNe.js";
import { A as ArrowUpRight } from "./arrow-up-right-B5ipSKjq.js";
import { B as Box } from "./box-JkNaVLXX.js";
import { S as SquarePen } from "./square-pen-BYn5TGc5.js";
import { T as Trash2 } from "./trash-2-BcMH_Wty.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
      key: "1piglc"
    }
  ],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1", key: "1env43" }]
];
const PiggyBank = createLucideIcon("piggy-bank", __iconNode);
const MOCK_ORDERS = [
  {
    id: "ORD-2024-001",
    product: "Organic Honey 500g",
    date: "12 Mar 2026",
    status: "Delivered",
    amount: "₹450"
  },
  {
    id: "ORD-2024-002",
    product: "Premium Yoga Mat",
    date: "10 Mar 2026",
    status: "In Transit",
    amount: "₹1,299"
  },
  {
    id: "ORD-2024-003",
    product: "Electric Kettle",
    date: "8 Mar 2026",
    status: "Processing",
    amount: "₹2,100"
  },
  {
    id: "ORD-2024-004",
    product: "Room Booking - Goa Resort",
    date: "5 Mar 2026",
    status: "Confirmed",
    amount: "₹8,500"
  },
  {
    id: "ORD-2024-005",
    product: "Laptop Stand",
    date: "2 Mar 2026",
    status: "Delivered",
    amount: "₹780"
  }
];
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Handmade Candles Set",
    category: "Home Decor",
    price: "₹699",
    stock: 24,
    status: "Active"
  },
  {
    id: 2,
    name: "Organic Face Cream",
    category: "Beauty",
    price: "₹549",
    stock: 12,
    status: "Active"
  },
  {
    id: 3,
    name: "Yoga Session (1hr)",
    category: "Service",
    price: "₹899",
    stock: null,
    status: "Active"
  },
  {
    id: 4,
    name: "Web Design Package",
    category: "Service",
    price: "₹15,000",
    stock: null,
    status: "Paused"
  }
];
const MOCK_INVENTORY = [
  {
    sku: "HC-001",
    name: "Handmade Candles Set",
    stock: 24,
    reorder: 5,
    purchasePrice: 320,
    sellPrice: 699
  },
  {
    sku: "OFC-002",
    name: "Organic Face Cream",
    stock: 12,
    reorder: 8,
    purchasePrice: 230,
    sellPrice: 549
  },
  {
    sku: "EK-003",
    name: "Electric Kettle",
    stock: 7,
    reorder: 10,
    purchasePrice: 1200,
    sellPrice: 2100
  },
  {
    sku: "LS-004",
    name: "Laptop Stand",
    stock: 31,
    reorder: 5,
    purchasePrice: 350,
    sellPrice: 780
  }
];
const STATUS_COLORS = {
  Delivered: "bg-green-500/10 text-green-600",
  "In Transit": "bg-blue-500/10 text-blue-600",
  Processing: "bg-yellow-500/10 text-yellow-600",
  Confirmed: "bg-purple-500/10 text-purple-600",
  Cancelled: "bg-red-500/10 text-red-600"
};
function MyAccountPage() {
  const [searchOrders, setSearchOrders] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto p-6 space-y-6", "data-ocid": "myaccount.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your orders, products, inventory and earnings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "dashboard", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1 bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dashboard", "data-ocid": "myaccount.dashboard.tab", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "orders", "data-ocid": "myaccount.orders.tab", children: "Orders & Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "products", "data-ocid": "myaccount.products.tab", children: "My Products & Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "inventory", "data-ocid": "myaccount.inventory.tab", children: "Inventory" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "dashboard", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
          {
            label: "Total Earnings",
            value: "₹48,350",
            icon: DollarSign,
            color: "text-green-600",
            bg: "bg-green-500/10",
            trend: "+12%"
          },
          {
            label: "Total Savings",
            value: "₹8,200",
            icon: PiggyBank,
            color: "text-blue-600",
            bg: "bg-blue-500/10",
            trend: "+5%"
          },
          {
            label: "Active Listings",
            value: "4",
            icon: Package,
            color: "text-purple-600",
            bg: "bg-purple-500/10",
            trend: ""
          },
          {
            label: "Pending Orders",
            value: "2",
            icon: ClipboardList,
            color: "text-orange-600",
            bg: "bg-orange-500/10",
            trend: ""
          }
        ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-2xl border-border shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground mt-1", children: stat.value }),
                stat.trend && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 flex items-center gap-1 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 11 }),
                  stat.trend,
                  " this month"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 17, className: stat.color })
                }
              )
            ] }) })
          },
          stat.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 15, className: "text-primary" }),
            "Recent Orders"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Amount" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: MOCK_ORDERS.slice(0, 3).map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `myaccount.orders.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono", children: order.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: order.product }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: order.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-[10px] ${STATUS_COLORS[order.status] || ""}`,
                      variant: "secondary",
                      children: order.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-right font-semibold", children: order.amount })
                ]
              },
              order.id
            )) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 15, className: "text-primary" }),
            "Earnings Overview"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-32", children: [28, 45, 38, 62, 55, 80, 72, 91, 68, 88, 76, 95].map(
              (v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-1 rounded-t-sm",
                  style: {
                    height: `${v}%`,
                    background: "oklch(0.65 0.25 335 / 0.7)"
                  }
                },
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ][i] ?? i
              )
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-2", children: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m }, m)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "orders", className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search orders...",
            value: searchOrders,
            onChange: (e) => setSearchOrders(e.target.value),
            className: "max-w-xs",
            "data-ocid": "myaccount.search_input"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Order ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Product / Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Amount" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: MOCK_ORDERS.filter(
            (o) => !searchOrders || o.product.toLowerCase().includes(searchOrders.toLowerCase()) || o.id.toLowerCase().includes(searchOrders.toLowerCase())
          ).map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `myaccount.order.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono text-primary", children: order.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: order.product }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: order.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] ${STATUS_COLORS[order.status] || ""}`,
                    variant: "secondary",
                    children: order.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-right font-semibold", children: order.amount })
              ]
            },
            order.id
          )) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: MOCK_PRODUCTS.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-2xl border-border shadow-sm",
          "data-ocid": `myaccount.product.card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: product.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-primary mt-1", children: product.price })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: `text-[10px] ${product.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`,
                  children: product.status
                }
              ),
              product.stock !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                "Stock: ",
                product.stock
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 w-7 p-0",
                    onClick: () => ue.info(`Editing ${product.name}`),
                    "data-ocid": `myaccount.product.edit_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { size: 12 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                    onClick: () => ue.success(`${product.name} removed`),
                    "data-ocid": `myaccount.product.delete_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                  }
                )
              ] })
            ] })
          ] })
        },
        product.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inventory", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display", children: "Product Inventory" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "myaccount.inventory.table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "SKU" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Stock Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Reorder Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Purchase Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Sell Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Margin %" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: MOCK_INVENTORY.map((item, i) => {
            const margin = Math.round(
              (item.sellPrice - item.purchasePrice) / item.sellPrice * 100
            );
            const lowStock = item.stock <= item.reorder;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `myaccount.inventory.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono", children: item.sku }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-medium", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: lowStock ? "text-red-500 font-semibold" : "",
                        children: item.stock
                      }
                    ),
                    lowStock && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "destructive",
                        className: "ml-2 text-[9px]",
                        children: "Low"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: item.reorder }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
                    "₹",
                    item.purchasePrice
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
                    "₹",
                    item.sellPrice
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600 font-semibold", children: [
                    margin,
                    "%"
                  ] }) })
                ]
              },
              item.sku
            );
          }) })
        ] }) })
      ] }) })
    ] })
  ] });
}
export {
  MyAccountPage as default
};
