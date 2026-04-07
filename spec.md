# IndyaCentral

## Current State
The app builds and passes lint/typecheck/build. The draft is expired (app not loading). The Admin Panel has 19,567 lines and contains 25+ agent components. Most agents use `setInterval` + `Math.random()` to generate fake log entries and simulated stats. Settings (Payment Gateways, Promotions, WhatsApp API, Social Queue, Rider Management, Monthly Plans, Commission Config) use `localStorage` for persistence which is correct for this stack, but agent monitoring tabs show randomly generated fake data instead of reading real app data from shared localStorage stores.

## Requested Changes (Diff)

### Add
- Real data sources for all agent monitoring tabs: read from `localStorage` keys used by the actual app modules (ic_products, ic_orders, ic_businesses, ic_posts, ic_promos, ic_promotion_queue, ic_active_promos, ic_riders, ic_communities, ic_users, ic_family_businesses, icPaymentGateways, ic_admin_plans, ic_commission_config, ic_reviews)
- Live counters in agent monitoring that reflect actual counts from these stores
- Agent log entries that reference real entity names/IDs from the live stores (e.g. "Scanned product: [real product name]" instead of random nouns)
- Agent settings panels that write config to localStorage and are read back on mount

### Modify
- Agent 19 (Game Creator): monitoring logs should reference real products/posts from ic_products store
- Agent 20 (Comic Generator): monitoring logs should reference real posts from ic_posts/ic_social_posts
- Agent 21 (Spiritual): already reads from static stories array — keep as-is but add a "Total stories indexed" counter from localStorage
- Agent 22 (Module Tester): step-by-step tests should read real data from localStorage stores to determine pass/fail (e.g. if ic_products has items, "Product listing" test passes)
- Agent 23 (News Agent): logs should reference real user interest keywords from profile settings
- Agent 24 (Food Stock): logs should reference real food category products from ic_products
- Agent 25 (Content Shield): scan logs should reference real post content from ic_posts/ic_social_posts, not random keywords
- Agent 4 (Astro Advice): market data can stay as simulated (no real API) but label it clearly as "Simulated — connect real API in settings"
- Agent 11 (Business Discovery): discovered businesses list should persist to localStorage and be read back on mount
- Agent 13 (Monetize): course/quiz/certificate counts should persist to localStorage
- Approval Agent: reads from all real localStorage approval queues (ic_promotion_queue, ic_rider_registrations, ic_business_claims, ic_ondc_registrations, ic_community_joins)
- BizAnalytics: reads real order/commission/product data from localStorage stores
- Rider Management Active Riders: reads from ic_riders localStorage key
- Reviews tab: reads from ic_reviews localStorage key
- Payment Gateways: already uses localStorage — ensure save/load works correctly
- Monthly Plans: already uses localStorage — ensure save/load works correctly
- Social Queue: save platform toggles/API keys to localStorage on change
- WhatsApp API: save credentials/templates to localStorage on change
- Promotions: reads from ic_promotion_queue and ic_active_promos (already does)

### Remove
- Random fake log generation for agents that can reference real data
- Hardcoded fake stats that don't match what's actually in the app

## Implementation Plan
1. Create a shared `liveDataHelpers` utility (inline in AdminPanelPage or a small helper) to read from all localStorage keys and return typed counts/lists
2. Update each agent monitoring component to use real data counts in stat cards
3. Update agent log generators to interpolate real entity names from localStorage stores
4. Ensure all settings panels (WhatsApp API, Social Queue, Payment Gateways, Rider Management, Monthly Plans, Commission) correctly persist and reload from localStorage
5. Agent 22 Module Tester: base pass/fail on whether real data exists in each module's localStorage key
6. Approval Agent: pull from all real queues
7. BizAnalytics: compute totals from real order/product/commission data
8. Redeploy
