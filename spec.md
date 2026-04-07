# IndyaCentral

## Current State
- Business modules (Assembly, Telecom, Retail, Vehicle, Lead CRM, Software, Money Lending) exist in `BusinessModulesFull.tsx` but have read-only tables — no Add/Edit/Delete functionality or localStorage persistence
- MatrimonyPage has Browse Matches, Requests, and Shortlisted tabs only. There is no Astro Advice / Best Match tab. Profile setup questionnaire collects data but match suggestions do not run astro-based analysis. There is no question/answer output section.
- Auto-refresh `setInterval` calls run on every component mount with no cleanup optimization; all modules re-render on every tick regardless of visibility.

## Requested Changes (Diff)

### Add
- Full CRUD (Add / Edit / Delete dialogs) to AssemblyModule, TelecomModule, RetailShopModule, VehicleModule, LeadCRMModule, SoftwareProjectModule, MoneyLendingModule
- localStorage persistence for all business module data (keyed per module)
- Matrimony: new "Astro Matches" tab with:
  - Top-5 best match cards ranked by combined compatibility score (profile score + astro horoscope score)
  - Per-match astro advice card: ruling planet, Guna Milan score (out of 36), nakshatra compatibility, favorable date suggestion, and a 2-line astro recommendation text
- Matrimony: Questionnaire tab that shows a multi-step Q&A wizard (preferences for age, caste, location, income, lifestyle) and after submit displays a filtered results panel with matched profiles and astro notes
- Performance: wrap expensive list renders in `React.memo`; use `useCallback` for handlers inside auto-refresh loops; increase all module auto-refresh intervals to ≥20s to reduce thrashing

### Modify
- `BusinessModulesFull.tsx`: add Add/Edit/Delete dialog + `useEffect` localStorage read/write to each of the 7 remaining modules
- `MatrimonyPage.tsx`: add `AstroMatchesTab` component and `QuestionnaireTab` component; add tabs to the main Tabs component

### Remove
- Nothing removed

## Implementation Plan
1. **BusinessModulesFull.tsx** — For each of the 7 modules, add:
   - `useEffect` that loads initial data from `localStorage.getItem('biz_<module>')` on mount and saves on every state change
   - An "Add" button in the table header that opens a `Dialog` form with appropriate fields
   - Pencil/Trash icons per row for Edit (pre-filled dialog) and Delete (with confirm toast)
   - Increase setInterval durations from 12s → 25s across all modules
2. **MatrimonyPage.tsx** — Add:
   - `AstroMatchesTab`: calculates a combined score = `profile.compatibilityScore * 0.6 + horoScore * 0.4`, sorts top 5, shows a card per match with astro advice (Guna Milan, nakshatra, ruling planet, favorable day)
   - `QuestionnaireTab`: 5-step wizard (Age Range, Caste Preference, Location, Income, Lifestyle/Horoscope filter), on submit shows filtered profiles with an astro advice blurb per result
   - Wire both tabs into the existing `<Tabs>` in MatrimonyPage
3. **Performance micro-optimisations** — wrap `MatchCard`, `SummaryCard`, and module row renders in `React.memo`; use `useCallback` on frequently re-created handlers
