# IndyaCentral

## Current State
- MyAccountPage has Dashboard, Orders, Products, Inventory tabs
- BoostPostDialog has plans, audience targeting (Standard/Premium only), duration, payment
- AdminPanelPage Promotions section shows hardcoded moderation queue, plans, active promos — no payment details per promotion
- Promotions saved to localStorage as a list of post titles only
- No visiting card feature exists

## Requested Changes (Diff)

### Add
- Personal Visiting Card tab in MyAccountPage with name, photo upload, designation, phone, email, website, social links (Instagram, LinkedIn, Twitter, WhatsApp), QR code, and download/share
- Promotions saved to localStorage with full payment details: amount, plan, gateway used, transaction ID, demographic targeting, module/post type
- Admin Promotions queue reads from localStorage and shows payment receipt per pending promotion
- Approved promotions saved to localStorage and injected inline (every 5th item) into relevant module feeds (Shop, Social Feed, Jobs, Blog)
- Demographic targeting (age, gender, region, religion/culture) available for ALL boost plans (not just Standard/Premium)

### Modify
- BoostPostDialog: show demographic targeting for Basic plan too; on payment success, save full promo object to localStorage `ic_promotion_queue`
- AdminPanelPage PromotionsQueue: read pending promos from localStorage `ic_promotion_queue`, show payment details per row, on approve move to `ic_active_promos`
- ShopPage, SocialFeedPage, JobsPage: inject approved promotion cards inline in feed every 5 items

### Remove
- Nothing removed

## Implementation Plan
1. Update BoostPostDialog to save full promotion object (title, type, plan, amount, gateway, txnId, demographics, module, timestamp) to localStorage `ic_promotion_queue` on payment success
2. Add Visiting Card tab to MyAccountPage
3. Update PromotionsQueue in AdminPanelPage to read `ic_promotion_queue` from localStorage, show payment details, allow approve/reject that moves items to `ic_active_promos`
4. Create a shared `getActivePromos()` helper that reads `ic_active_promos` and injects promos into feed arrays
5. Update ShopPage, SocialFeedPage to inject promoted cards every 5 items
