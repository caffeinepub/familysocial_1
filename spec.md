# FamilySocial

## Current State

FamilySocial is a full-stack ICP app with Motoko backend and React + TypeScript frontend. It has 21 page modules (Family Tree, Social Feed, Geomap, Personal Feed, Community, Gated Community, Products & Services, POS, Jobs, Healthcare, Real Estate, Education, Travel, Blog & Affiliate, Matrimony, Dating, Admin Panel, Dashboard, Settings). The Admin Panel currently has 5 agents (Moderation, Performance, API Sync, Evolution, Legal). Admin Panel is visible to all users; there is no admin-only gate on the sidebar. Backend provides `isCallerAdmin()` and `assignCallerUserRole()` but they are not wired to the UI for role persistence or sidebar gating.

## Requested Changes (Diff)

### Add

- **Admin Panel sidebar gate**: Show "Admin Panel" sidebar link only when `isCallerAdmin()` returns true. Single super-admin rule: no other user can be promoted to admin from within the app. The admin role is first-user / backend-controlled only.
- **Admin Panel — connect user management to backend**: Role changes in the All Modules > Users tab call `assignCallerUserRole` on the backend and `getCallerUserRole` is checked on app load to determine admin status.
- **Agent 6 — Security & Vulnerability Scanner**: Dedicated tab in Admin Panel. Scans text inputs for SQL injection patterns, XSS attempts, and suspicious payloads. Daily vulnerability log. Real-time alert badge. Auto-block on repeated injection attempts. Dashboard shows threat count by type and severity.
- **Agent 7 — AI Image Manager**: Dedicated tab in Admin Panel. Auto-generates placeholder/descriptive images for modules where user has not uploaded any image. Analytics dashboard showing daily/weekly/monthly/yearly image upload stats per module. Image library browser. "Auto-fill missing images" toggle per module.
- **Agent 8 — SEO Agent**: Dedicated tab in Admin Panel. Metadata management panel (title, description, keywords per module/page). Open Graph tags editor. Sitemap status. Google Shopping feed preview (products with schema.org markup). Keyword performance tracking (simulated). Schema.org structured data status per module.
- **Agent 9 — Social Sharing & Google Shopping**: Dedicated tab in Admin Panel. Feed posts get share link with preview card (title, image, excerpt). Social share buttons: copy link, WhatsApp, Twitter/X, Facebook (open in new tab), Pinterest. Google Shopping product feed status. "Connect Account" UI stubs for Instagram, YouTube, Facebook, Pinterest (no real OAuth). Share analytics (simulated clicks per platform).
- **Agent 10 — Co-worker AI Assistant**: A floating co-worker button (distinct from the support chat) in the bottom-right area. Slide-in panel with a conversational AI assistant that understands user context (current module, recent activity), suggests next actions, sends reminders, adapts tone based on simulated mood detection (calm, busy, creative). Has memory of last 5 interactions shown in history tab.
- **Agent 11 — Fake User Generator**: Dedicated tab in Admin Panel. Admin sets daily fake-user creation limit (slider 1–50). Start/Stop toggle. Shows generated users with names, modules they are active in, posts/interactions count. Full reset button. Fake users appear in suggestions panel and social feed.
- **Agent 12 — WhatsApp Daily Updates**: Dedicated tab in Admin Panel. User subscription management (phone, categories). Generates wa.me pre-filled links for daily digests. Admin "Send Today's Update" builds a message from latest platform activity. Subscriber count and category breakdown chart.
- **Agent 13 — Monetization Opportunities**: Dedicated tab in Admin Panel. Analyzes user activity patterns per module. Generates monetization suggestions (e.g., premium listings, featured posts, subscription tiers). Each suggestion has approve/defer/reject. Revenue potential estimator. Implemented suggestion tracking.
- **Agent 14 — Content Moderation (Nudity & Sensitivity)**: Dedicated tab in Admin Panel. Moderation queue for flagged posts/images (simulated flags). Severity levels: nudity, violence, hate speech, spam. Auto-warning system: 1st flag = warning, 2nd = restriction, 3rd = escalation. Admin approve/remove/warn actions. Daily moderation stats.
- **Agent 15 — Analytics Dashboard**: Dedicated tab in Admin Panel. Total users, DAU/WAU/MAU. Per-module engagement (bar chart). User demographics: age-wise and location-wise interest. Trending modules/features. New feature demand from surveys. Timeline of platform growth.
- **Agent 16 — Tips & Onboarding Assistant**: Shows contextual tips to users based on the current page. Tips panel accessible from a "?" help icon in the header. Tips per module: how to use features, how to avoid getting blocked, purpose of each module. Dismissible, with "Don't show again" per tip.
- **Agent Factory (Meta-Agent)**: Dedicated tab in Admin Panel labeled "Agent Factory". Form: Name, Description, Purpose, Target Modules (multi-select), Run Frequency (real-time / daily / weekly / quarterly). Creates a new agent panel card with: status toggle, log view, settings editor, module integration checkboxes. Each created agent is isolated — editing one does not affect others. Agent Factory log shows all created agents with creation date and creator.
- **Agents inter-communication**: Overview tab in Admin Panel shows an "Agent Network" view with arrows indicating which agents feed data to others (Agent 5 → Agent 4, Agent 1 → Agent 6, Agent 3 → Agent 7, Agent 14 → Agent 1, Agent 8 → Agent 9, Agent 13 → Agent 4, Agent 15 → Agent 13, Agent 16 → Agent 4).

### Modify

- **AppShell**: Import and use `isCallerAdmin` hook. Conditionally render "Admin Panel" nav item based on admin status. Update agent count in Admin Panel subtitle to "16 active agents".
- **Admin Panel tabs**: Add 10 new agent tabs (Agent 6 through Agent 16 + Agent Factory). Update overview stats to reflect 16 agents. Update agent status list in overview.
- **Admin Panel — All Modules — Users tab**: Wire role change dropdown to `assignCallerUserRole` backend call. Show "Super Admin only" badge next to admin role — no user can be set to admin from UI (admin assignment is read-only, only backend-controlled). Other role changes (user ↔ guest) are allowed.
- **Header**: Add a "?" tips icon that opens the Agent 16 tips panel for the current page.

### Remove

- Nothing removed.

## Implementation Plan

1. Update `AppShell.tsx`:
   - Add `useIsCallerAdmin` hook call (using existing `isCallerAdmin` backend method via react-query)
   - Filter NAV_ITEMS to hide "admin-panel" item unless admin
   - Add "?" tips button to header

2. Create `hooks/useAdminStatus.ts` — wraps `isCallerAdmin()` backend call with react-query

3. Expand `AdminPanelPage.tsx` with 10 new agent tabs + Agent Factory tab:
   - Agent 6: Security Scanner (threat log, SQL/XSS detection patterns, auto-block log, severity chart)
   - Agent 7: Image Manager (module image analytics, auto-fill toggle, image library grid, daily/weekly/monthly/yearly charts)
   - Agent 8: SEO Agent (metadata editor per module, OG tags, sitemap status, Google Shopping feed, schema.org status)
   - Agent 9: Social Sharing (share link generator, social platform buttons, Google Shopping feed, connect account stubs, share analytics)
   - Agent 10: Co-worker Assistant (floating button separate from support chat, slide-in panel, contextual suggestions, mood detection, interaction history)
   - Agent 11: Fake User Generator (limit slider, start/stop, generated users table, full reset)
   - Agent 12: WhatsApp Updates (subscriber table, category breakdown, wa.me link generator, daily digest builder)
   - Agent 13: Monetization (activity patterns chart, suggestion cards with approve/defer/reject, revenue estimator)
   - Agent 14: Content Moderation (moderation queue, severity filters, auto-warning log, daily stats)
   - Agent 15: Analytics (total users, DAU/WAU/MAU, per-module engagement, age/location demographics, trending, feature demand)
   - Agent 16: Tips panel (tips per module, dismissible, accessible via "?" header icon)
   - Agent Factory: create agent form, agent cards grid, inter-agent network diagram
   - Update Overview tab: agent count to 16, add all new agents to status list, add Agent Network diagram

4. Update `AppShell.tsx` to wire Agent 16 tips via "?" button and Agent 10 co-worker floating button.

5. Wire All Modules > Users tab to call `assignCallerUserRole` for role changes (user ↔ guest only).
