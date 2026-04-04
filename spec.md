# IndyaCentral

## Current State
- Version 88 deployed
- BoostPostDialog: saves to `ic_promotion_queue` after payment but missing image/video upload fields; status shows as "pending" but admin panel moderation queue only shows hardcoded items (not localStorage items)
- BusinessAlertsTab: has type filter pills (order/review/bid/inventory/promotion/delivery/hr/community) but no ONDC tab and no per-module tabs
- HealthcarePage: single "Add Reading" dialog for vitals (BP/pulse/glucose/weight) — no multi-disease tabwise recording
- BusinessPage: no dedicated Healthcare Advisor or Insurance Business category registration flow
- BusinessModulesFull/Extra: modules have tabs but some lack add/update/delete actions
- BusinessDiscoveryFeatures Agent11: simulates random discovery only, no Google Business search simulation

## Requested Changes (Diff)

### Add
- BoostPostDialog: image upload field (max 3 images) + video URL field with inline preview
- BoostPostDialog: on payment success, save full promo with image/video to queue
- Admin PromotionsQueue: load `ic_promotion_queue` from localStorage and show in pending approvals with image/video previews, AI moderation result (copyright check simulation), and approve/reject actions
- BusinessAlertsTab: add "ondc" alert type + ONDC tab showing ONDC order notifications; add module-specific sub-tabs (Shop, POS, Community, Healthcare, Delivery, HR, Admin)
- HealthcarePage: replace single vitals dialog with a tabbed "Add Reading" dialog supporting multiple disease categories: General Vitals, Diabetes, Hypertension, Heart, Thyroid, Kidney, Respiratory — each tab has disease-specific fields
- BusinessPage: add Healthcare Advisor and Insurance Agent as registerable business sub-types in the Storefront/Modules section
- Agent11BusinessDiscovery: add Google Business search simulation tab — user enters city/category, agent simulates fetching Google Business results and adds them to unclaimed listings

### Modify
- PromotionsQueue in AdminPanelPage: pending approvals tab must read from `ic_promotion_queue` localStorage (merged with hardcoded items), show image/video if present, show AI copyright moderation status
- BusinessAlertsTab: FILTER_TABS and AUTO_ALERTS extended with ONDC and module-specific entries
- All business modules (Inventory, Repair, Financial, etc.): verify add/update/delete buttons are present and functional

### Remove
- Nothing removed

## Implementation Plan
1. Update `BoostPostDialog.tsx`: add image upload (3 max, base64), video URL field, pass them into promo object saved to `ic_promotion_queue`
2. Update `AdminPanelPage.tsx` PromotionsQueue: merge localStorage queue with hardcoded modItems; show image thumbnails + video link; add AI copyright moderation field; approve action moves to active promos
3. Update `BusinessPage.tsx` BusinessAlertsTab: add `ondc` to AlertType; add ONDC seed alerts; add module tabs (Shop, POS, Community, Healthcare, Delivery, HR, Admin, ONDC); auto-generate ONDC alerts
4. Update `HealthcarePage.tsx`: replace Add Reading dialog with a tabbed multi-disease dialog (7 disease tabs, each with relevant fields); store per-disease readings in state
5. Update `BusinessPage.tsx` Storefront: add Healthcare Advisor and Insurance Agent business type options
6. Update `BusinessDiscoveryFeatures.tsx` Agent11: add a "Google Business Search" tab with city/category inputs and simulated results
