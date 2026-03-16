# IndyaCentral

## Current State

Version 51 is live with: social feed (home), shop, jobs, community, gated community, education, healthcare, travel, real estate, family tree, timeline, geomap, POS (multi-module), business page, ride booking, transport/bus/recharge booking, admin panel with 20+ agents, WhatsApp settings, my account dashboard, onboarding modal.

Known issues:
- Agents 19 (Game Creator) and 20 (Comic Agent) show no live activity or outputs
- Admin panel: Social Queue, WhatsApp API, Promotions Queue, Rides Management tabs are static with no simulated activity
- Community module needs role-based access (Owner, Resident, Security, Visitor, Community Admin, Committee Member)
- Education module needs teacher course creation with AI question generation
- Footer links missing (About Us, Privacy Policy, Shipping Policy, Return & Exchange)
- Business page missing: festival AI image generator, URL-based storefront, file-to-product CSV upload
- Onboarding sequence needs guidance through: Family Tree → Business/Job → Community → Kids → Schools

## Requested Changes (Diff)

### Add
- **Community roles**: When joining a community, user selects role (Owner, Resident, Visitor, Security, Committee Member). Community Admin is assigned by creator.
  - Security role sees: Gate Entry/Exit tab, Maintenance Complaints tab, Shifts tab
  - Visitor role sees: Available Jobs tab, Apartment Directory (route to apartment)
  - Owner role: can add property/parking for rental, raise complaints, access marketplace
  - Community Admin: full access, post security jobs, post maintenance/services to marketplace, approve/reject visitors, create society committees with member due details, assign maintenance work
  - Committee: members join, see owner name and dues before joining
- **Education: Teacher Course Creator**: New "My Courses" tab for teachers with:
  - Create Course form: title, description (AI-generated from title), subject, grade level, curriculum upload
  - AI Question Generator: from course content, generates MCQ + subjective questions, teacher can edit/delete/add before publishing
  - Quiz result scorecard view: shows per-student results, teacher can modify scores
- **Footer**: Static footer bar on all pages with links: About Us, Privacy Policy, Shipping Policy, Return & Exchange Policy. Each opens a modal/page with editable placeholder content.
- **Business Page - Festival AI Posts**: New tab "AI Marketing" with festival image generator (select festival/occasion, enter brand name, generate branded offer image), schedule/push to customers
- **Business Page - CSV Product Import**: File upload tab for CSV+images ZIP to bulk-import products; admin moderation queue for imported items
- **Business Page - Storefront URL**: Input field for custom URL slug; preview of storefront page layout (About Us, Home, Products, Shipping Policy, Contact)
- **Agents Live Activity (19, 20)**:
  - Agent 19 (Game Creator): shows live "Generated Games" feed with game titles, genre, target age, difficulty -- auto-refreshes every 30s with new mock entries
  - Agent 20 (Comic Agent): shows daily comic strips (title, punchline, generated from mock user feed) -- auto-refreshes
  - All agents show "Last Run", "Items Processed", "Alerts Sent" counters that increment on a timer
- **Admin panel active tabs**: Social Queue, Promotions Queue, WhatsApp API, Rides Management show live-ish simulated data (rotating entries, counter increments) so they feel active
- **Onboarding sequence enhancement**: After login, guided steps prompt: 1) Add family members, 2) Add business or job history, 3) Join a community, 4) Add children (if applicable) → shows schools, 5) Link parent service/business. Each step has Skip and Continue.

### Modify
- Community page: add role selector on join modal; conditionally render tabs based on selected role
- Education page: add "My Courses" tab visible to users with Teacher role or above
- Admin panel agents section: add live activity simulation with useEffect + setInterval for agents 19, 20 and all agents' stats counters
- Business page: add AI Marketing tab, CSV Import tab, Storefront URL field in existing tabs
- App shell / layout: add footer bar component
- Onboarding modal: restructure steps to follow the family→business→community→kids sequence

### Remove
- Nothing removed

## Implementation Plan

1. Create `Footer.tsx` component with 5 links opening modals with policy placeholder text; add to AppShell below main content
2. Update `CommunityPage.tsx`: add role selection on join, conditional tab rendering per role (Security/Visitor/Owner/Admin/Committee tabs)
3. Update `EducationPage.tsx`: add "My Courses" tab with course creation form, AI question generator section, quiz scorecard view
4. Update `BusinessPage.tsx`: add AI Marketing tab (festival post generator), CSV Import tab, storefront URL field
5. Update `AdminPanelPage.tsx`: add useEffect/setInterval to agents 19 and 20 for live output feeds; add activity counters to all agent cards; animate Social Queue, Promotions, WhatsApp, Rides tabs with rotating entries
6. Update `OnboardingModal.tsx`: restructure 6 steps: Family → Business/Job → Community → Kids → Schools → Finish
