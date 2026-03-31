# IndyaCentral

## Current State
The app builds successfully (typecheck, lint, build all pass). Runtime crashes occur after v79 changes. User reports:
1. Live data (add/edit/save) not working -- forms submit but data doesn't persist or UI doesn't update
2. V79 changes are causing crashes -- specifically: Agent22ModuleTester, EvolutionA4Agent (Astro Advice), NearbySearchBar FaceSearch, and shop checkout order saving

Key data flows:
- Products: `globalProductsState.ts` via localStorage key `ic_global_products`
- Family businesses: `familyTreeState.ts` via localStorage key `ic_family_businesses`
- Admin status: `useAdminStatus.ts` via localStorage key `ic-admin-claimed`
- All state dispatches custom DOM events (`globalProductsUpdated`, `familyBusinessUpdated`) to sync across components

## Requested Changes (Diff)

### Add
- Nothing new -- purely fixes

### Modify
- Fix runtime crashes from v79 changes (AdminPanelPage Agent22, AstroAdvice tabs, NearbySearchBar FaceSearch)
- Ensure all add/edit/save flows actually persist to localStorage and refresh the UI
- Ensure POSPage product add form saves correctly and product list re-renders
- Ensure FamilyTreePage business save dispatches `familyBusinessUpdated` and BusinessPage picks it up
- Ensure ShopPage cart checkout saves to `ic_user_orders` localStorage and Dashboard shows orders
- Ensure AdminPanelPage tabs (WhatsApp, Rider Management, Promotions, Social Queue, Agent 19/20) are not nested inside wrong TabsContent blocks

### Remove
- Any code that could cause runtime undefined/null crashes (e.g. missing .length checks, accessing props on undefined)

## Implementation Plan
1. Run a detailed review of v79 changed files: AdminPanelPage.tsx (Agent22, AstroAdvice, BizAnalytics), NearbySearchBar.tsx (FaceSearch), ShopPage.tsx (checkout), DashboardPage.tsx (orders)
2. Fix any runtime issues found -- guard undefined accesses, fix useEffect cleanup, fix any missing state initialization
3. Ensure all data entry forms (POS add product, Business Page add branch, Family Tree add business) trigger proper localStorage saves and event dispatches
4. Validate the fix with build
