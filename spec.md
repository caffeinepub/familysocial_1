# IndyaCentral

## Current State
Business Page has tabs: My Businesses, Storefront, Tables, Vendor Orders, Courier Panel, HR & Payroll, and more. There is a global Notifications bell icon but no vendor-specific business alert center.

## Requested Changes (Diff)

### Add
- Business Alerts tab in Business Page with real-time polling (every 5 seconds)
- All module events trigger alerts: new orders (Shop/POS), order status changes, new reviews/ratings, new bids received, low inventory, promotion approved/rejected, new delivery requests, HR actions, community marketplace activity
- Sound alert toggle for incoming notifications
- Notification badge count on the Business Alerts tab trigger showing unread count
- Filter by alert type (All, Orders, Reviews, Bids, Inventory, Promotions, HR, Deliveries)
- Mark as read / Mark all as read
- Alert cards with icon, title, description, time ago, and a link/action button
- Auto-generates simulated live alerts from all modules every few seconds

### Modify
- BusinessPage tabs list: add 🔔 Business Alerts tab after Courier Panel

### Remove
- Nothing removed

## Implementation Plan
1. Add BusinessAlertsTab component inside BusinessPage.tsx with alert types, filter, sound toggle, mark-read logic
2. Seed with realistic alert data from all modules
3. Auto-poll interval that adds new alerts every 8-12 seconds
4. Unread badge on the tab trigger
5. Add tab trigger and TabsContent for business-alerts
