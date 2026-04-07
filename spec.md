# IndyaCentral

## Current State
The app has a floating NearbySearchBar with Products, Places, People, and Face tabs. It supports image search via category selection. The WhatsApp chatbot script in Admin Panel handles search/buy/sell/image commands. The NotificationsPanel shows per-module notifications. Business Alerts tab in Business Page shows vendor-facing alerts.

## Requested Changes (Diff)

### Add
- **Vendor Match Broadcast**: When a user posts an image or searches a keyword (without "avoid" keywords active), the system matches the query against vendor business categories AND product/service keywords, then sends a notification to each matched vendor's Business Alerts feed: "A user is looking for [keyword] — tap to approach them"
- **User Approach Notifications**: After vendors are notified, the user receives back-notifications listing which businesses want to approach them, with Accept/Decline actions. Only triggers for users with Public or Restricted privacy settings
- **Privacy toggle**: Users can enable/disable "Allow vendors to approach me" in Settings or the search bar
- **WhatsApp chatbot vendor-match command**: Add `approach [keyword]` and `vendors [keyword]` commands to the chatbot script — bot finds matching vendors and replies with a list; vendor also gets a WhatsApp notification if their number is registered

### Modify
- **NearbySearchBar**: On search submit (Enter or image category selected), trigger vendor match broadcast if user is logged in and not private. Show a small toast confirming vendors were notified
- **WhatsAppChatbotScript**: Add vendor-match command handlers and image-based vendor search to the Node.js script code
- **NotificationsPanel**: Vendor approach requests show as a new "Approach" module type with Accept/Decline inline buttons

### Remove
- Nothing removed

## Implementation Plan
1. Create `vendorMatchStore.ts` — shared store that holds vendor approach requests (vendor→user and user←vendor), with localStorage persistence
2. Update `NearbySearchBar.tsx` — on search submit/image category select, call `broadcastToVendors(query, avoidList)` from the store; show toast; add a privacy toggle button in the bar
3. Update `NotificationsPanel.tsx` — handle new `Approach` notification type with Accept/Decline buttons that call `respondToApproach(id, accepted)`
4. Update `AdminPanelPage.tsx` (WhatsAppChatbotScript) — add `approach [keyword]` and `vendors [keyword]` command handlers to the Node.js script code block
5. Business Alerts tab in BusinessPage already auto-refreshes — the vendorMatchStore will push approach events there automatically
