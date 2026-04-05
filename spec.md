# IndyaCentral

## Current State

Version 89 is deployed. The app is a modular super-platform with:
- BoostPostDialog component (`src/frontend/src/components/BoostPostDialog.tsx`) — already has image upload, video URL, audience targeting (region, age, gender, language, religion), and duration selector. However, some modules that have a Promote button do not show media upload or full targeting.
- HealthcarePage (`src/frontend/src/pages/HealthcarePage.tsx`) — has prescriptions, vitals, lab tests, appointments, and a FamilyHealthMember section. Currently, prescriptions/vitals/lab tests are stored without linking to a specific family member by name. Family members are a static internal list, not fetched from FamilyTreePage data.
- AdminPanelPage (`src/frontend/src/pages/AdminPanelPage.tsx`, ~17400 lines) — has an A4 Astro Advice tab (`agent-a4-wa`) with planets/horoscope/markets sub-tabs. No integration with PersonalFeedPage for horoscope delivery. No matrimony/business/friendship astro match section.
- CoworkerAssistant (`src/frontend/src/components/CoworkerAssistant.tsx`) — the "Friend Agent" chat widget. Has module-specific suggestions and mood modes but NO astro-specific tab for numerology, tarot, healings, remedies, or life-area advice.
- PersonalFeedPage (`src/frontend/src/pages/PersonalFeedPage.tsx`, ~697 lines) — personal draft feed page. No horoscope section.
- No Admin Monthly Plan management system.
- No Unified Approval Agent page in Admin Panel.

## Requested Changes (Diff)

### Add
- **BoostPostDialog**: Ensure ALL module boost buttons pass `postType` correctly and that media upload + full targeting is always visible (not gated by plan selection). Plans should show price **per duration** (e.g., Basic 1 Week ₹299 / 2 Weeks ₹499 / 1 Month ₹999 with per-duration pricing table).
- **HealthcarePage**: Family member selector (dropdown) on Prescriptions, Lab Tests, and Vitals add/edit dialogs. Family members fetched in real time from `localStorage.getItem('ic_family_members')` (same key used by FamilyTreePage). Show member name badge on each record card.
- **PersonalFeedPage**: Add a "🔮 Horoscope & Astro" section at the top showing today's horoscope for the user's zodiac sign (pulled from A4 agent data in localStorage), plus Astro Advice card (planet of the day, lucky color, lucky number, favorable time). This section auto-refreshes.
- **AdminPanelPage — A4 Astro Advice**: Add a new sub-tab "Astro Matches" showing matrimony matches (astrological compatibility score with matrimony profiles from localStorage), business compatibility matches (from business contacts), and friendship matches — each with a compatibility percentage and match reasoning. Admin can push these match suggestions to users' personal feeds.
- **CoworkerAssistant (Friend Agent)**: Add an "🔮 Astro" tab inside the chat widget panel with: Advice by Life Area (Career, Love, Personal, Family, Health, Luck, Education, Marriage), Numerology reading (from user's name/birthdate), Tarot card pull (3-card spread: Past/Present/Future), Healings & Remedies section, Favorable Time window for today, and a Q&A section.
- **Admin Panel — Monthly Plans (new tab `monthly-plans`)**: Admin can create plans (name, price, duration in months, modules included, agents included, max users, description). Plans list with edit/delete. Users can subscribe to plans (plan selection visible in user dashboard).
- **Admin Panel — Approval Agent (new tab `approval-agent`)**: Unified queue showing ALL pending approvals from all modules: business registrations, rider registrations, delivery partner approvals, promotion approvals, ONDC vendor registrations, community join requests, business claims, content moderation flagged items. Each row shows: type, submitter, date, module, action (Approve/Reject with reason). Filter by module, date, status. Badge count on tab.

### Modify
- **BoostPostDialog**: Duration-based pricing: each plan has separate prices for 1 week / 2 weeks / 1 month. Show a pricing matrix (plan x duration = price). Currently all durations just multiply base price — change to fixed pricing tiers.
- **HealthcarePage**: Prescriptions, Lab Tests (lab reports), Vitals readings — all now have a `memberName` field. Display member name badge on cards. Existing data stays (no breaking changes).
- **PersonalFeedPage**: Insert Horoscope widget at the top, above draft compose area.
- **AdminPanelPage**: A4 sub-tab gets a new "Astro Matches" tab. Overview tab shows new "Monthly Plans" and "Approvals" quick-access cards.

### Remove
- Nothing removed.

## Implementation Plan

1. **BoostPostDialog.tsx**:
   - Replace `totalPrice = plan.price * selectedDuration` with a `PLAN_PRICING` matrix: `{ basic: { 1: 299, 2: 499, 4: 999 }, standard: { 1: 799, 2: 1299, 4: 2499 }, premium: { 1: 2499, 2: 3999, 4: 6999 } }`
   - Add a duration pricing table display showing all tiers
   - Ensure media upload section is always visible (not hidden)
   - Ensure targeting section is always visible

2. **HealthcarePage.tsx**:
   - Add `useEffect` to load family members from `localStorage.getItem('ic_family_members')` on mount and listen for `familyMembersUpdated` storage events
   - Add `memberName` field to `Prescription`, `VitalReading`, `LabTest` interfaces
   - Add family member dropdown to Add Prescription, Add Vital, Add Lab Test dialogs
   - Show `memberName` badge on each record card row
   - Persist/load healthcare records with member name from localStorage

3. **PersonalFeedPage.tsx**:
   - Add `HoroscopeWidget` section at top: reads user's zodiac sign from localStorage profile, shows today's horoscope text, planet of the day, lucky color/number, favorable time
   - Data sourced from a static per-sign daily horoscope dataset (12 signs) + auto-refreshes daily

4. **AdminPanelPage.tsx — A4 Astro Matches sub-tab**:
   - Add `astro-matches` as a new TabsTrigger/TabsContent inside the A4 agent section
   - Show matrimony compatibility cards (12 signs x user's sign = compatibility score)
   - Business matches section (compatible signs for business partnerships)
   - Friendship matches section
   - "Push to Feed" button per match type to simulate pushing to personal feeds

5. **CoworkerAssistant.tsx — Astro Tab**:
   - Convert the bottom panel to have tabs: Chat | 🔮 Astro
   - Astro tab has sections: Life Area Selector (Career/Love/Personal/Family/Health/Luck/Education/Marriage) → shows advice text; Numerology (input name + birthdate → calculate life path number + reading); Tarot (3-card spread with Past/Present/Future cards + interpretations); Healings & Remedies (by selected area); Favorable Time (today's window); Q&A input

6. **AdminPanelPage.tsx — Monthly Plans tab**:
   - Add `monthly-plans` to the tab list with label `📅 Monthly Plans`
   - TabsContent: Create Plan form (name, price, duration, modules checkboxes, agents checkboxes, max users, description); Plans table with Edit/Delete; Active Subscribers count
   - Persist plans to `localStorage.getItem('ic_admin_plans')`

7. **AdminPanelPage.tsx — Approval Agent tab**:
   - Add `approval-agent` to the tab list with label `✅ Approvals`
   - TabsContent: Unified queue reading from multiple localStorage keys: `ic_promotion_queue` (status=pending), `ic_rider_registrations`, `ic_business_registrations`, `ic_delivery_registrations`, `ic_ondc_registrations`, `ic_business_claims`, `ic_community_join_requests`
   - Table with columns: Type, Name/Title, Module, Date, Status, Actions (Approve/Reject)
   - Filter by module and status
   - Badge count showing total pending
   - On Approve/Reject, updates respective localStorage key and shows toast
