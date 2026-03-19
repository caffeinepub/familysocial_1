# IndyaCentral

## Current State
- AdminPanelPage.tsx has Agent 19/20 panels but monitoring logs may not render visibly due to tab layout issues
- WhatsApp API, Promotions, Social Queue, Ride Management sections exist but are incomplete
- Rider Management lacks country/state/city rate cards, subscription plans, commission block limits, and rider registration with document upload
- BusinessPage fetches from `getFamilyTreeBusinesses()` utility but shows empty state in practice
- Shop page has Register Business CTA but not linked to family tree data
- BlogPage has a 'spiritual' tab but the core blog tabs (write, my-blogs, travel-blog, affiliate) are intact

## Requested Changes (Diff)

### Add
- Rider registration form: Aadhaar, PAN, driving license, vehicle registration book, vehicle no, phone, email, permit, self photo, license photo - with AI blur/visibility detection simulation and selfie-vs-license face match check sending approval/rejection to admin
- Rider subscription plans (Basic/Standard/Premium) with monthly fees
- Commission limit threshold per rider - auto-block when unpaid commission exceeds limit
- WhatsApp Business API full setup: Business Account ID, Phone Number ID, API token, webhook verification, message templates (create/edit/delete), broadcast scheduler, OTP config, test message send
- Promotions: paid plans before creating ad (Basic/Standard/Premium tiers), content/image AI moderation queue (approve/reject), regional targeting (city/state/country), WhatsApp promotion channel, ad payment flow
- Social Queue: Pinterest, Google Shopping, Google Events added alongside FB/Insta/YouTube/LinkedIn; paid promotion plans per network; schedule and post management
- Agent 19 monitoring: ensure live log feed is fully visible and scrollable with timestamps
- Agent 20 monitoring: same - live comic generation log visible
- Rider Management: country → state → city cascading rate card editor with per-km rates per vehicle type

### Modify
- BusinessPage: fix `getFamilyTreeBusinesses()` - ensure it reads from localStorage key used by FamilyTreePage when businesses are added; add fallback seed data if empty for demo; show all linked businesses in storefront
- ShopPage: Register Business and Delivery Partner forms pre-fill from family tree businesses (dropdown to select existing business)
- BlogPage: ensure spiritual stories is a tab alongside existing Write/My Blogs/Travel/Affiliate tabs - do not remove other tabs

### Remove
- Nothing removed

## Implementation Plan
1. Fix BusinessPage + ShopPage family tree business linking (check localStorage key name matches FamilyTreePage)
2. Expand AdminPanelPage Rider Management: registration form with document fields + AI check simulation, subscription plans, commission block threshold, cascading country/state/city rate cards
3. Rebuild WhatsApp API admin section: full 4-tab setup (Credentials, Templates, Broadcast, OTP)
4. Rebuild Promotions admin section: plan payment gate, content moderation queue, regional targeting, WhatsApp channel
5. Rebuild Social Queue: add Pinterest/Google Shopping/Google Events, paid promotion plans per network
6. Fix Agent 19/20 monitoring tabs: ensure log container has fixed height, overflow-y-auto, and updates are visible
7. Verify BlogPage has spiritual tab alongside all other blog tabs
