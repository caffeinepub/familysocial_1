# IndyaCentral

## Current State
- EducationPage has a `SchoolDirectoryView` showing school cards. The "Create School/Academy" button is buried inside `AdminView` (School Admin sub-role), not visible from the main Directory tab.
- GatedCommunityPage has a `ParkingPropertyTab` with a basic Bid dialog that shows a text input and places a toast. Bids are not tracked, no bid management, no accept/reject, no winner notification.
- NotificationsPanel is a static component with hardcoded sample data. No external way to inject new notifications.
- General UI has room for improved visual polish: spacing, empty states, card hover states, action clarity.

## Requested Changes (Diff)

### Add
- "Create School" button directly in the `SchoolDirectoryView` header (alongside the search input)
- Full bid management system in `ParkingPropertyTab`:
  - `BidEntry` type: id, itemId, itemName, bidder, amount, timestamp, status (Pending/Accepted/Rejected)
  - State: `bids: BidEntry[]` in ParkingPropertyTab
  - "View Bids" button on each property and parking slot (visible to owner/admin)
  - Bids panel dialog showing all bids for an item with Accept/Reject actions
  - When a bid is accepted: mark bid as Accepted, others as Rejected, fire a toast notification AND inject a winner notification into NotificationsPanel via a global notification store
- `useNotificationStore` simple module (localStorage-backed array) at `src/frontend/src/stores/notificationStore.ts` — exposes `addNotification(n)` and `getNotifications()` so any module can push notifications
- NotificationsPanel reads from the store (merged with sample data) so bid-won notifications appear

### Modify
- `SchoolDirectoryView`: Add "+ Create School" button in the header row (opens same Create School dialog extracted from AdminView, or a simpler inline dialog)
- `ParkingPropertyTab`: Replace simple bid dialog with full bid flow (place bid → track in state → owner views bids → accept/reject → winner notified)
- `NotificationsPanel`: Accept optional `extraNotifications` prop from store and merge with sample list
- AppShell: Pass store notifications to NotificationsPanel
- General UI polish: improve card hover states (`hover:shadow-md transition-shadow`), improve empty state messaging, ensure consistent button sizing and spacing across pages

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/stores/notificationStore.ts` — simple localStorage-backed notification store with `addNotification`, `getNotifications`, `clearNotifications`
2. Update `NotificationsPanel.tsx` — accept and merge store notifications, add GatedCommunity to MODULE_COLORS/ICONS
3. Update `AppShell.tsx` — read from notification store on mount and pass to NotificationsPanel
4. Update `EducationPage.tsx` — add Create School button/dialog to `SchoolDirectoryView` header
5. Update `GatedCommunityPage.tsx` — add bid tracking state, View Bids dialog, accept/reject logic, winner notification via store
6. UI polish pass — improve card hover states, spacing density, button consistency across major pages
