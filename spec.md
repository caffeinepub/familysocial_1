# IndyaCentral

## Current State
BusinessPage has a `BizModulesTab` that lists 20+ business modules. Modules like Courier, Fuel, Transport, Water, Food/Parcel, Plumbing, Electrical, Mechanic, Sweeper, Garments have full panel components in `BusinessModulesExtra.tsx`. However the following modules fall back to a generic placeholder with just a text input and a switch:
- Inventory & Material Management
- Assembly/Manufacturing
- Repair & Service Center
- Financial Management
- Telecom Management
- Retail Shop Management
- Vehicle Sale/Purchase
- Lead Generation / CRM
- Software Project Management
- Money Lending

No delivery partner integrations (Porter, Rapido, Uber, Jugnoo) exist anywhere in the app.

## Requested Changes (Diff)

### Add
- Full configuration panels for all 10 placeholder business modules, each with relevant tabs (e.g. Inventory has: Stock, Purchase Orders, Suppliers, Reports)
- `BusinessModulesFull.tsx` component file with all 10 module panels
- `DeliveryPartnersPanel.tsx` component: Porter, Rapido, Uber, Jugnoo integration setup with API key config, rate display, order dispatch, and status tracking
- Delivery Partners tab in Business Page (under delivery/logistics businesses)
- Delivery Partners admin setup section in Admin Panel (under a new "Delivery Partners" tab)
- Real-time feel: all module data tables auto-refresh every 10-15s with simulated live updates (new orders, stock changes, status updates)

### Modify
- `BusinessPage.tsx` `BizModulePanel` function: replace generic placeholder for the 10 modules with new full panel components from `BusinessModulesFull.tsx`
- `BusinessPage.tsx`: add "Delivery Partners" tab visible for logistics/delivery businesses
- `AdminPanelPage.tsx`: add "Delivery Partners" tab with per-platform config

### Remove
- Generic placeholder fallback for the 10 named modules

## Implementation Plan
1. Create `src/frontend/src/components/BusinessModulesFull.tsx` with 10 full module panels:
   - `InventoryModule`: Stock table (item, qty, unit, reorder level, last updated), Add Stock dialog, Purchase Orders tab, Suppliers tab, low-stock alerts badge
   - `AssemblyModule`: BOM (Bill of Materials) list, Production Orders, Work-in-Progress tracker, Finished Goods
   - `RepairServiceModule`: Job Cards (device, issue, status, technician), Parts Used, Customer History, Warranty Tracker
   - `FinancialModule`: P&L summary cards, Transactions ledger, Invoices, Tax Reports, Bank Reconciliation
   - `TelecomModule`: SIM/Connection inventory, Plan Management, Customer accounts, Usage reports, Recharge tracker
   - `RetailShopModule`: Point-of-Sale quick bill, Daily Sales summary, Cash register, Customer loyalty
   - `VehicleModule`: Vehicle listings (make, model, year, price, status), Test Drive bookings, Sale records, Purchase history
   - `LeadCRMModule`: Lead pipeline (New→Contacted→Qualified→Closed), Follow-up scheduler, Contact notes, Conversion stats
   - `SoftwareProjectModule`: Projects list, Sprint board (To Do/In Progress/Done), Time logs, Client billing
   - `MoneyLendingModule`: Loan accounts, EMI schedule, Payment history, Overdue alerts, Recovery notes
2. Create `src/frontend/src/components/DeliveryPartnersPanel.tsx`:
   - Tabs: Porter | Rapido | Uber | Jugnoo
   - Per partner: API credentials form (API Key, Secret, Merchant ID), Service toggle (enabled/disabled), Rate display (fetched/simulated), Dispatch Order dialog (pickup, drop, weight/size), Active Deliveries table with status
   - Admin view: per-partner analytics (orders dispatched, avg cost, success rate)
3. Update `BusinessPage.tsx`:
   - Import and wire all 10 modules in `BizModulePanel`
   - Add "🚚 Delivery Partners" tab in the Business Page tabs for delivery/logistics businesses
4. Update `AdminPanelPage.tsx`:
   - Add "🚚 Delivery Partners" tab with the same `DeliveryPartnersPanel` component showing admin config view
5. All data tables use `useEffect` with `setInterval` (10-15s) to simulate real-time updates
