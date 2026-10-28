# DPI Issue 004 — Web Design Audit (28 Oct 2026)
Status: PREMIUM WEB REDESIGN STAGED — NOT DEPLOYED
Publisher: MR.LTMAO

## User-reported problem
Screenshots from Safari show Issue 004 reading like a plain article: one dark hero with ghost text behind, six long text-only sections, and the homepage hero featuring a flat statistics panel. The PDF itself has approved premium editorial artwork.

## Root cause verified against `main`
- `issue-001.html`, `issue-002.html`, `issue-003.html` are built around the existing `/style.css` section/card/hero design system.
- `issue-004.html` uses a separate 2.7 KB inline CSS design with zero data cards or chart visuals and one plain paragraph per section.
- Its hero background uses `issue-004-cover.png`, which includes readable title typography. The live hero places HTML text on top of this artwork, creating visibly overlapping ghost text.
- Homepage `index.html` contains a basic Issue 004 statistics hero-card, although it uses the premium cover in the lower Latest Intelligence section.

## Changes staged in this branch
1. `issue-004.html` new cinematic magazine-cover hero with the actual cover as a separate object. Uses the existing text-free skyline background, preventing the repeated-title/ghosting problem.
2. Dedicated evidence panels for Savills and ValuStrat, distinct Al Furjan split-stat section, same-window ready-resale community cards, hypothetical investment-yield illustration, five-question buyer checklist, scheduled-supply context, clear conclusion and linked methodology.
3. Keeps numeric definitions, dated 19 October historical snapshot, references, and pre-financing caveat; retains original full publication link and four-language navigation.
4. `index.html` changes only the Issue 004 right-side hero card to a premium magazine cover feature, retaining the homepage navigation, analytics sections, publications archive and other site elements unchanged.
5. No new binary assets: uses `13-assets/issue-004-cover.png` and existing `13-assets/dpi-hero-skyline.png`.

## QA completed
- New standalone design rendered in Chromium at 1440 px desktop and 390 px mobile; no horizontal overflow.
- Main interactive links and anchor targets checked at source level.
- Live `main` branch unchanged.
- Safari/WebKit rendering has not been tested on the local runtime.

## Remaining before deployment
- Publisher approval of visual direction.
- Live Safari and mobile QA in deployment preview environment.
- Audit cover asset for the lingering tiny `EDITORIAL REVIEW PROOF` tag, which is also present in current published cover and may need a separate approved asset fix.
- Confirm GA4/Metricool measurement and that issue downloads/links and language switcher still function after deployment.
- Consider localized visual refresh in Arabic, French and Spanish once English passes approval.

## Approved source scopes retained
- Savills Q3 2026: ~34,500 residential transactions; −4% QoQ.
- ValuStrat September 2026: −4.5% YoY, −0.1% MoM residential values index.
- Historical Al Furjan, 19 Oct 2026: +14.2% all built-home registrations, −7.0% ready resale; different populations.
- Frozen Sep ready median: Dubai Science Park AED 1,375/ft² (−9.7% YoY); Al Furjan AED 1,144 (−5.4%); Al Kifaf AED 1,947 (−5.3%).
- Discount math: 6.50% / 6.84% / 6.00%, illustrative before finance and acquisition.
- >525,000 homes are scheduled for 2027–2030, not certified completions.

**Do not merge into live `main` until visual review and deployment QA.**


## Color consistency revision — 28 October 2026 evening
- Review screenshot identified a premium-style inconsistency: ivory Al Furjan section against the navy site.
- Unified **all English Issue 004 sections** under DPI color tokens: midnight navy #071624, champagne gold #D9B46D, ivory text #F6F2E9. Teal and coral reserved for positive/negative numeric signals.
- Replaced both ivory backgrounds (Al Furjan comparison and five-question checklist) and white cards with dark, dimensionally lit panels.
- Fixed dark labels, annotations, caveats, note surfaces and editorial text contrast.
- Set mobile site navigation non-sticky to avoid overlapping long article sections when reading.
- Aligned web section labels with the approved PDF page numbers (02–08; notably **04 / The Headline Illusion**).
- Locally rendered Chromium desktop 1440px and mobile 390px. No horizontal overflow; both key redesigned sections visually inspected.
- English redesign and homepage feature remain on **design/issue-004-premium-web-20261028**, not deployed. Public homepage and localized pages are unchanged pending publisher sign-off.
- A Safari review on the actual staging/live site remains necessary before calling browser QA complete.
