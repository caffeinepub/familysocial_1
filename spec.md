# IndyaCentral

## Current State
Business Page has a Modules tab with ~10 category-based modules (Inventory, Assembly, Repair, Financial, Telecom, Retail, Vehicle, Lead Gen, Software, Money Lending). Order tracking shows basic status badges in Dashboard.

## Requested Changes (Diff)

### Add
- New business modules in Business Page → Modules tab:
  - Courier & Dispatch Management (shipment tracking, dispatch board, route planning, POD)
  - Fuel Depot Management (Petrol, LPG, PNG, LNG, Diesel, CNG, Hydrogen, EV Charging, Solar, Coal — stock levels, pricing, dispensing logs)
  - Transport Business (fleet management, trip logs, vehicle assignment)
  - Water Delivery System (bottle/tanker orders, route, delivery schedule)
  - Food & Parcel Delivery (order intake, rider assignment, delivery tracking)
  - Plumbing Services (job cards, material usage, billing)
  - Electrical Services (job cards, inspection, billing)
  - Electrician (same as electrical but field-worker focused)
  - Mechanic Shop (vehicle job cards, parts inventory, service history)
  - Sweeper/Cleaning Services (schedule, area assignment, attendance)
  - Retail Shop Management (enhanced — sales, stock, supplier, POS billing)
  - Garments (size/color inventory, tailor orders, fabric stock)
- Complete Order Lifecycle in Shop/Dashboard:
  - Order Placed → Vendor Notified (in-app notification to vendor) → Vendor Approves/Rejects → Assigned to Courier → Courier Dispatched → In Transit → Out for Delivery → Delivered/Failed
  - Vendor dashboard panel to view incoming orders and approve/reject
  - Courier/dispatch panel to accept and update shipment status
  - Customer sees full live status timeline in Dashboard → My Orders
  - In-app notifications at each stage

### Modify
- Business Page Modules tab: expand module grid with new modules, grouped by category
- Dashboard My Orders tab: show full order lifecycle timeline per order
- Notification system: fire notifications to vendor and courier at each stage

### Remove
- Nothing removed

## Implementation Plan
1. Add 12 new business module cards to BusinessPage Modules tab, each with a detail panel/dialog when enabled
2. Build CourierDispatchModule component (shipment list, dispatch board, status updates)
3. Build FuelDepotModule component (fuel types, stock levels, pricing, dispense log)
4. Build remaining service modules as lightweight panels (Transport, Water Delivery, Food/Parcel, Plumbing, Electrical, Mechanic, Sweeper, Retail enhanced, Garments)
5. Upgrade order lifecycle in Shop checkout → save with full status pipeline
6. Add Vendor Orders panel (accessible from Business Page) to approve/reject orders
7. Add Courier Dispatch panel to update shipment status
8. Update Dashboard My Orders to show animated status timeline
9. Wire in-app notifications at each order stage
