# IndyaCentral

## Current State
- POS exists as a standalone sidebar page (`POSPage.tsx`)
- BusinessPage has tabs: Storefront, Table Management, Live Orders, Multi-Branch Dashboard, Payment Setup, Delivery Setup, Commission Config
- AdminPanelPage has agents 6-23, but Shutdown Post agent does not exist
- WhatsApp API tab exists in Admin Panel with credentials/templates/broadcast/OTP config
- Search is basic text-based; no image search
- Privacy settings exist per user

## Requested Changes (Diff)

### Add
- **Shutdown Post Agent (Agent 24)** in Admin Panel: keyword blocklist editor, auto-hide posts matching keywords, optional notify-author, runs on interval every 30s, admin sees flagged posts queue with approve/restore option
- **WhatsApp Business API Chatbot Script**: a dedicated page/tab showing the complete webhook script (Node.js/Express) for WhatsApp Business API integration -- handles incoming messages, routes to IndyaCentral multi-vendor catalog search, allows buy/sell via webhook response, includes setup instructions, copy-to-clipboard for each code block, env vars template
- **Image-Based Search**: camera/file upload icon in search bar; simulates visual search by letting user pick a category from uploaded image; respects user privacy settings (private users excluded from results)
- **POS tab inside Business Page**: full POS functionality embedded as a tab in BusinessPage, linked to the selected business -- products/services/events/promotions all scoped to that business

### Modify
- **Sidebar**: Remove POS from left navigation menu
- **BusinessPage**: Add "POS" tab that renders the full POS interface scoped to the selected business
- **Search bar**: Add image upload/camera button; add privacy filter
- **Admin Panel**: Add Agent 24 (Shutdown Agent) tab with keyword config, monitoring, flagged posts queue

### Remove
- POS entry from sidebar navigation (App.tsx routing stays, but nav item removed so it's only accessible via Business Page)

## Implementation Plan
1. In `App.tsx` remove POS from the sidebar nav items; keep the route for direct access
2. In `BusinessPage.tsx` add a "POS" tab that imports and renders POSPage content (or inline POS component) scoped to business context
3. In `AdminPanelPage.tsx` add Agent 24 (Shutdown Post Agent): keyword editor, running status badge, live flagged posts log, flagged posts queue with restore/confirm-shutdown actions
4. Add a `WhatsAppChatbotPage.tsx` (or modal/tab in Admin > WhatsApp API) showing: full Node.js webhook script with WhatsApp Business API, multi-vendor product search handler, buy/sell order flow, env vars, setup guide -- all with copy buttons
5. Extend search bar (in `SocialFeedPage.tsx` or shared header) with image upload icon; on image select, show category picker; filter results by privacy settings
6. Validate and deploy
