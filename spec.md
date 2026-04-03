# IndyaCentral

## Current State
- BoostPostDialog exists with region, age group, and gender targeting UI fields already present in the component code
- However the targeting section may not always be visible/functional when launched from all modules
- Admin Panel PromotionsQueue has an "Audience Targeting" tab that references demographics
- Business Page has tabs: My Businesses, Storefront, Tables, Orders, Branches, Payments, AI Marketing, POS Products, CSV Import, Discover/Claim, Biz Modules, Vendor Orders, Courier Panel, Delivery Partners, HR & Payroll, Business Alerts
- No ONDC (Open Network for Digital Commerce) framework exists anywhere in the app
- Notifications system exists (NotificationsPanel component)

## Requested Changes (Diff)

### Add
- **ONDC Network framework** — step-by-step setup wizard in both Admin Panel and Business Page
  - Admin Panel: New "ONDC Network" tab with setup steps (Register on ONDC registry → Configure network participant credentials → Set catalog sync → Enable buyer app integration → Go Live)
  - Business Page: New "ONDC" tab with vendor registration form (GSTIN, PAN, business type, product categories, bank details, ONDC participant ID), catalog sync status, and order management
  - ONDC order flow: buyer searches → seller listed on ONDC → order placed → seller notified → seller confirms/cancels → buyer notified of status change
  - ONDC notifications: when user places ONDC order → vendor notified; when vendor cancels → user notified with cancellation reason
  - ONDC status tracking in user Dashboard orders (ONDC badge on ONDC orders)

### Modify
- **BoostPostDialog** — ensure demographic targeting (Age Group, Gender, Religion/Culture, Language) fields are always visible for ALL plan levels (Basic, Standard, Premium), not gated. Currently the section exists but may be conditionally hidden or missing in some contexts. Make all targeting fields (region, age, gender, religion/culture, language) fully visible and functional for every plan.
- **Admin Panel PromotionsQueue Audience Targeting tab** — ensure the tab renders correctly and shows demographic breakdown of pending promotions (age group, gender, region, language, religion/culture filters on the approvals queue)

### Remove
- Nothing removed

## Implementation Plan

1. **Fix BoostPostDialog targeting visibility**
   - Remove any conditional rendering that hides age/gender/demographic fields
   - Add "Religion/Culture" and "Language" as additional targeting options (to match admin panel capabilities)
   - Ensure the full targeting section is always shown for all plan types
   - Show a targeting summary chip in the "Total" section before payment

2. **Admin Panel PromotionsQueue — Audience Targeting tab fix**
   - Ensure the Audience Targeting tab in PromotionsQueue correctly shows incoming promotions with their demographic data
   - Add demographic filters (age group, gender, region, language, religion/culture) to the pending approvals queue so admin can filter by targeting criteria
   - Show demographic targeting summary on each promotion card in the moderation queue

3. **ONDC Setup in Admin Panel**
   - New TabsTrigger + TabsContent `value="ondc-network"` in AdminPanelPage
   - Component: `ONDCAdminSetup` with 5-step wizard:
     - Step 1: Register on ONDC Registry (GSTIN, business name, contact, BAP/BPP role selection)
     - Step 2: Network Participant Credentials (subscriber ID, subscriber URL, encryption public key, signing public key)
     - Step 3: Catalog Sync (categories mapping, product sync schedule, test catalog push button)
     - Step 4: Buyer App Integration (supported buyer apps list: Paytm, PhonePe, ONDC reference app, enable/disable toggles)
     - Step 5: Go Live (pre-launch checklist, activate on ONDC network button, status indicator)
   - Show current ONDC connection status (Offline / Sandbox / Live) badge

4. **Business Page ONDC Vendor Tab**
   - New TabsTrigger + TabsContent `value="ondc"` in BusinessPage
   - Component: `ONDCVendorPanel` with tabs:
     - **Registration** — vendor details form (GSTIN, PAN, business category, bank account, FSSAI if food, ONDC participant ID field)
     - **Catalog** — product catalog sync status table (product name, ONDC status: Synced/Pending/Error, last sync time, manual sync button per product)
     - **ONDC Orders** — incoming orders from ONDC network with Accept/Reject/Cancel actions, order details, buyer info
     - **Settings** — delivery SLA, cancellation policy, return policy for ONDC compliance
   - When vendor rejects/cancels an order: save to notification queue with buyer's name and reason → show in user's NotificationsPanel

5. **ONDC User Purchase Flow**
   - In ShopPage: add "ONDC Network" filter badge on products that are ONDC-registered vendors
   - When user places order on an ONDC-listed product: mark order with `source: 'ondc'` in localStorage order queue
   - In Dashboard > My Orders: show ONDC badge on ONDC-sourced orders
   - Notification to vendor (BusinessPage > ONDC Orders tab) when order placed
   - Notification to user (NotificationsPanel) when vendor accepts, ships, or cancels ONDC order
