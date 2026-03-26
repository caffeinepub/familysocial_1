# IndyaCentral

## Current State
- Delivery partner registration in Shop calls `saveFamilyTreeBusiness` but seed data in `getFamilyTreeBusinesses` always merges and hides user-registered delivery businesses in some views.
- No unified review/rating system across modules; admin has no central review management.
- No global like/best/vote feature on products, services, businesses, and promotions.
- Posts in most modules (Shop, POS, Jobs, Community, Business, etc.) do not display relative timestamps (hours/days ago).

## Requested Changes (Diff)

### Add
- `formatTimeAgo(date: Date | string | number): string` utility function in utils/
- Global `ReviewModal` component: star rating (1-5) + optional custom text comment, usable across all modules
- Admin Panel > Reviews tab: category-wise breakdown, all user reviews, approve/reject
- `LikeVoteBar` component: thumbs up (like), ⭐ best, vote up/down buttons for product/service/business/promotion cards
- `createdAt` timestamp field added to products in the global store, and displayed as relative time on all cards

### Modify
- `familyTreeState.ts`: remove seed businesses from the merged output so only user-registered businesses appear (seed data was causing confusion)
- Business Page storefront to show delivery partner businesses clearly
- All module cards (Shop, POS, Jobs, Community, RealEstate, Travel) to display `X hours/days ago` on each post
- Shop product cards to show LikeVoteBar and ReviewModal trigger
- Business cards to show star rating, review count, LikeVoteBar

### Remove
- Seed businesses from `getFamilyTreeBusinesses` default output (keep only if user has zero registered businesses, show a helpful empty state instead)

## Implementation Plan
1. Add `formatTimeAgo` util to `src/utils/timeUtils.ts`
2. Update `familyTreeState.ts` to NOT merge seed businesses by default; show empty state in Business Page
3. Create `ReviewModal.tsx` component with star rating + custom comment
4. Create `LikeVoteBar.tsx` component with like, best, and upvote/downvote
5. Add `createdAt` to global product store and show time-ago on Shop and POS cards
6. Wire ReviewModal and LikeVoteBar into Shop product cards and Business storefront cards
7. Add Admin Reviews tab in AdminPanelPage with category-wise review listing and approve/reject
8. Add relative timestamps to Jobs, Community, RealEstate, Travel, and other module cards
