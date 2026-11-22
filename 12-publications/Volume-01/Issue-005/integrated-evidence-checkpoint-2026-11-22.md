# DPI Issue 005 — First integrated evidence checkpoint
**Date:** 22 November 2026 · **Status:** internal research, NOT approved for publication
**Working title:** *Dubai 2027: The Demand Test*
**Release target:** Thursday 26 November 2026, 08:30 GST, restored by founder on 22 November; conditional on source/methodology QA and explicit publisher sign-off.
**Source inventory:** DLD transaction ZIP snapshot 20 Nov 2026; 11 DLD rental CSV ZIP parts snapshot 20 Nov 2026; DLD project CSV 1 Nov 2026. Source folder: https://drive.google.com/drive/folders/147TFtHg_fRMidY8PPRogqBspndC66v4C

## Validation result
- All **10,745,998** rental source rows streamed across 11 parts. Of these, **989,471 unique contracts** passed an explicit analytical filter for Jan–Oct 2025 or Jan–Oct 2026: residential Unit Flat/Studio or Villa Villa/Complex Villas; one property, line 1; standard 300–430 day term; annual rent AED 5,000–2,000,000. No repeated IDs **within this final cohort**. The source data DOES include multi-property/duplicated contract lines, correctly excluded here. Dates mean contract **start** dates, not necessarily registration/occupancy dates.
- All **1,822,024** transaction source rows streamed; **261,410** qualified sale registrations in matching Jan–Oct windows after residential/unit/classification, sensible amount and area, implied per-square-foot price and ID checks. Distinguish off-plan from Existing; Existing is NOT automatically resale-only. Our narrower comparative sales measure requires **Existing Properties + procedure 'Sell'**.
- DLD project file: **3,474** rows, 38 fields, and **362** active project records with a recorded 2027 end date. **303** of these are below 50% recorded construction progress. Project counts, unit fields and projected end dates are NOT verified completed, habitable or occupied residential units.
- **29 DLD areas** satisfy an initial screen for meaningful samples in each rental/sale comparison and at least one 2027-active project. This is NOT an investment ranking.

## Three contrasting evidence cases (2026 Jan–Oct versus 2025 Jan–Oct)
| DLD area | New one-property rental contract starts | New 1BR apartment annual-rent median | Existing-category Sell apartment transactions | Existing-category Sell apartment median AED/ft² | Active projects end-date 2027 |
|---|---|---|---|---|---:|
| Madinat Al Mataar ID 462 | 4,182 -> 3,283 (-21.5%) | AED58,000 -> 57,000 (-1.7%) | 664 -> 584 (-12.0%) | 1,005.5 -> 1,085.8 (+8.0%) | 22 |
| Wadi Al Safa 5 ID 467 | 4,105 -> 4,255 (+3.7%) | AED55,000 -> 55,000 (0%) | 864 -> 415 (-52.0%) | 829.5 -> 823.2 (-0.8%) | 32 |
| Al Barsha South Fourth ID 441 | 14,703 -> 15,513 (+5.5%) | AED73,000 -> 70,000 (-4.1%) | 3,965 -> 2,932 (-26.1%) | 1,245.6 -> 1,254.9 (+0.7%) | 31 |

These are **registered source metrics for differing populations**, not measured net absorption or causality. Registration lag, unit/building mix, geography, contract duration filters and source snapshot dates mean interpretation needs further checking. No building-level matched comparison yet. Avoid using the above as purchase advice.

## Next methodological gates
1. Retest sales counts and price changes using a more mature Jan–Sep 2025 vs Jan–Sep 2026 window and DLD registration/procedure definitions.
2. Calculate like-building and similar-size 1BR apartment rents for source project names with adequate samples, and compare their trend to the area medians.
3. Validate source project status and residential-use unit totals; separate scheduled end date from verified delivery.
4. Finalize whether these three DLD areas (not marketing-community names) form the strongest contrast; check sample counts, geography and alternative explanations.
5. Produce audit-linked charts, write full editorial manuscript, QA multilingual editions, and obtain explicit founder signoff. No public website/newsletter/social publication before signoff.

## Reproducibility
Detailed local analysis outputs and methodology code were generated as a downloadable evidence pack in the current ChatGPT conversation. This GitHub branch contains only a bounded research summary and no raw DLD records. Source field definitions and filtering steps must be retained when replicating or publishing estimates.

**Editorial boundary:** Population, contract starts, sale registrations and forecast projects cannot be combined into a measured Dubai housing-absorption rate without independent household, delivery and occupancy validation.
