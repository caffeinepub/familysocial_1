# IndyaCentral

## Current State
- BusinessPage has tabs: My Businesses (from Family Tree), Table Management, Live Orders, Multi-Branch Dashboard, Payment Setup, Delivery Setup, Commission Configuration
- ShopPage has a cart/checkout flow
- AdminPanelPage has various configuration tabs
- No QR code visiting card on Business Page
- No table QR code showing menu for customers
- No payment gateway integration (Razorpay, Paytm, PayU, Stripe)
- No admin panel for configuring payment gateway API keys

## Requested Changes (Diff)

### Add
1. **Business Visiting Card QR** on Business Page:
   - A styled digital visiting card per business showing: business name, owner name, location, online address/website URL, email, contact number
   - A QR code generated from this vCard data (encode as vCard string or JSON URL)
   - "Download" and "Share" buttons on the card
   - Displayed prominently in the business storefront/profile tab

2. **Table QR Code** on Business Page > Table Management:
   - Each table row gets a QR code button
   - Clicking shows a QR that encodes a URL like `?business=X&table=Y`
   - The QR, when scanned by customer, shows: business name, table number, assigned menu items/products, and an order form
   - A "Customer Table View" component that renders when table+business params are in URL

3. **Payment Gateway Config in Admin Panel** (new tab "Payment Gateways"):
   - 4 gateways: Razorpay, Paytm, PayU, Stripe
   - Each gateway card has: toggle (enable/disable), API Key, Secret Key, Merchant ID (where applicable), Test/Live mode toggle
   - Save button persists to localStorage
   - Active gateway shown with green badge

4. **Direct Payment Flow** in all modules and shop cart:
   - PaymentGateway selector component that reads enabled gateways from admin config
   - When user clicks "Pay Now" anywhere (Shop checkout, Boost Post, Promotions, Ride booking, etc.), show a payment modal with:
     - Amount displayed
     - Gateway selection (only enabled ones shown: Razorpay / Paytm / PayU / Stripe)
     - Simulated payment processing (loading → success/failure)
   - Replace all "Confirm Payment" / "Pay" buttons across modules with this unified PaymentModal

### Modify
- Business Page: Add QR visiting card section to the storefront/profile tab
- Business Page > Table Management: Add QR code column/button per table
- AdminPanelPage: Add "Payment Gateways" tab
- ShopPage checkout: Wire to unified payment modal with gateway selector
- All paid plan flows (Boost Post, Promotions, Ride booking, etc.): Use unified payment modal

### Remove
- Hardcoded "Payment confirmed" dialogs that don't show gateway selection

## Implementation Plan
1. Install `qrcode` npm package (or use `qrcode.react`) for QR generation - use `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ENCODED_DATA` as an img src to avoid npm dependency
2. Create `PaymentGatewayConfig` in localStorage (keys: razorpay, paytm, payu, stripe each with enabled, apiKey, secretKey, merchantId, mode)
3. Create reusable `PaymentModal` component
4. Add QR visiting card to BusinessPage storefront tab
5. Add table QR codes to Table Management tab
6. Add Payment Gateways tab to AdminPanelPage
7. Wire PaymentModal to ShopPage checkout, BoostPostDialog, and other paid flows
