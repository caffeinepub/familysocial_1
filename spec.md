# IndyaCentral

## Current State
- BoostPostDialog has a flat `REGIONS` array (8 hardcoded region names like "North India", "Maharashtra") with no hierarchy. Users cannot drill down by country, state, city, or pincode.
- `APPROVAL_SOURCES` in AdminPanelPage only covers 7 sources: Promotions, Rider, Business, Delivery, ONDC, Business Claims, Community. Missing: Jobs (recruiter/event/company), Healthcare advisors, Family Tree business links, School access requests, Real Estate listings, Travel bookings, Matrimony requests, Dating requests, Blog/content approvals.
- Business modules in `BusinessModulesFull.tsx` and `BusinessModulesExtra.tsx` have basic display and limited add forms. Missing: full inline edit, delete with confirmation, richer form fields (e.g. GST number, supplier details, vehicle RC, loan collateral), real-time save feedback, and per-module summary dashboard cards.

## Requested Changes (Diff)

### Add
- Hierarchical location targeting in BoostPostDialog: Country → State → City → Area/Pincode cascading dropdowns/selectors (pre-populated with India + major states + cities; also allow manual pincode entry)
- New APPROVAL_SOURCES entries for: Job Applications (`ic_job_applications`), Recruiter Profiles (`ic_recruiter_registrations`), Healthcare Advisor Registration (`ic_healthcare_registrations`), Family Tree Business Link (`ic_family_business_links`), School Access Requests (`ic_school_access_requests`), Real Estate Listing Approvals (`ic_realestate_listings`), Travel Package Requests (`ic_travel_requests`), Matrimony Profile Approval (`ic_matrimony_profiles`), Blog/Content Review (`ic_blog_posts`)
- Sample approval items for each new module source
- Advanced CRUD for all business modules: inline edit rows, delete with confirmation dialog, richer add dialogs, and live save toast

### Modify
- Replace flat `REGIONS` array in BoostPostDialog with a 4-level location picker (Country, State, City, Area/Pincode). Selected location builds a readable summary string shown in the targeting summary line.
- Admin Approval Center: add new module filter chips for all new sources; display module-specific detail fields (e.g. job title for job apps, school name for school access, property address for real estate)
- Business module panels: add Edit button per row opening a pre-filled dialog, Delete button with a confirmation toast, and real-time localStorage persistence per module

### Remove
- Nothing removed

## Implementation Plan
1. **BoostPostDialog.tsx** — Replace `REGIONS` with `LOCATION_DATA` (country/state/city/area hierarchy for India + SE Asia). Add cascading selectors: Country dropdown, State dropdown (filtered by country), City dropdown (filtered by state), Area/Pincode text input. Build a `selectedLocation` summary object. Show selected location as a compact breadcrumb badge in the targeting summary.
2. **AdminPanelPage.tsx** — Extend `APPROVAL_SOURCES` array with 9 new sources. Add matching `SAMPLE_APPROVALS` entries for each. In the ApprovalAgentTab render, show module-specific extra detail row (job title, school, address, etc.) by reading extra fields from the stored item.
3. **BusinessModulesFull.tsx** — For each module (Inventory, Assembly, Repair, Financial, Telecom, Retail, Vehicle, Lead/CRM, Software, Money Lending): add Edit dialog (pre-fill from row), Delete button with `confirm` guard, localStorage save/load per module, and summary stats auto-update on add/edit/delete.
4. **BusinessModulesExtra.tsx** — Same CRUD enhancements for Courier/Dispatch, Fuel Depot, Transport, Water, Food Delivery, Plumbing, Electrical, Mechanic, Sweeper, Garments modules.
