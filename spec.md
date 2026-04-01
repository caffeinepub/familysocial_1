# IndyaCentral

## Current State
- POS add product form has full fields (image, video, variants, addons, AI description, supplier). But edit dialog is minimal: only name, price, stock, description -- no image, variants, addons, category, etc.
- No separate global 'Add Service' form in POS; services fall back to the same add product dialog without service-specific fields.
- Dashboard reads `ic_user_orders` from localStorage once on component mount (not reactive). Orders placed in shop don't appear until user navigates away and back.
- Dashboard has no 'My Orders' dedicated tab; orders are buried inside the Overview tab.

## Requested Changes (Diff)

### Add
- Full edit dialog for products in POS: same fields as add dialog (images, video, variants with editable names/price/stock, addons, supplier, purchase price, AI description, category, moderation status)
- Full edit dialog for services in POS: service name, category, description, price, images, duration, service areas, addons
- `Add Service` button and dialog in POS with service-specific fields: name, category (Repair, Consulting, Cleaning, Healthcare, etc.), price, duration, service area/pincode, images, video link, description, addons
- Dashboard `My Orders` dedicated tab that listens to localStorage `storage` event and updates reactively
- Order detail expand/collapse in dashboard showing items, billing address, delivery status
- Order status badge with color coding: Placed (blue), Confirmed (yellow), Shipped (orange), Delivered (green), Cancelled (red)

### Modify
- POS edit product button should open a full-featured edit dialog (not the current minimal one)
- Dashboard tab list: add `My Orders` tab alongside Overview, Delivery Income, Affiliate
- DashboardPage: move orders table from Overview tab to the new My Orders tab; make it reactive with `useState` + `useEffect` with storage listener

### Remove
- The minimal edit dialog (4-field only) for products in POS -- replace with full edit dialog

## Implementation Plan
1. In `POSPage.tsx`: expand the edit product dialog to have same fields as add product dialog; add a separate Add Service dialog with service fields; add Edit button for services too
2. In `DashboardPage.tsx`: add `My Orders` TabsTrigger and TabsContent; move orders table there; use `useState` initialized from localStorage + `useEffect` with `window.addEventListener('storage', ...)` and also a custom `orderPlaced` event listener so it updates immediately after checkout
3. In `ShopPage.tsx`: after `doPlaceOrder`, dispatch `window.dispatchEvent(new Event('orderPlaced'))` so Dashboard can catch it in the same session
