# DPI Issue 005 — Source and Measurement Verification Register
**Opened:** 3 November 2026 | **Status:** Initial source schema VERIFIED; raw extracts NOT YET obtained, reconciled, or frozen.
**Research:** *Dubai 2027: The Demand Test*
**Window:** Formal data audit 9–12 November 2026 | **Publication target:** 26 November 2026.

## Official primary data checked
DLD public real-estate datasets: https://dubailand.gov.ae/en/open-data/real-estate-data/
Source inspected 3 Nov 2026. The interface separately lists Transactions, Rents, Project, Valuations, Land, Building and Unit. Its transaction table exposes dates, transaction type/subtype, registration type, area, property type/subtype, amount, transaction size, property size, rooms, master project/project and parties. Its rent table exposes registration/start/end, version, contract/annual amount, area, property type/subtype, rooms, unit count, project. Its project table exposes status, completed %, inspection and completion dates, unit counts and areas.

Digital Dubai population release, 30 Jul 2026: https://www.digitaldubai.ae/newsroom/news/dubai-digital-dubai%27s-population-tops-4.580-million-by-the-end-of-2025-recording-7.5-growth
Historical official population observation: 4.580m end-2025 (+7.5% YoY), NOT an estimate of housing unit absorption or end-2026 population.

## Formal measurement specification to adopt before calculation
| Research construct | Required input fields | Inclusion rule | Explicit caveat |
|---|---|---|---|
| Ready residential median sale AED/sqft | Transactions: date, transaction type/subtype, registration type, usage, property type, amount, size, rooms, area, project | Registered residential ready resales ONLY; one unambiguous valid unit transaction per case. Stable treatment of dubiously coded sales, gifts, bulk transactions and missing unit sizes. | Do not blend off-plan/initial developer sales with ready resales. |
| Off-plan activity | Transactions: same plus registration type | Report separately, matching a settled fixed date window and unit population | Cannot infer occupier/tenant uptake from off-plan registration. |
| Annual registered rent AED and per sqft | Rents: registration/start/end, version, amount, annual amount, area, type/subtype, rooms, project | Separate new contracts vs renewals only IF confirmed value meanings from DLD source documentation; dedupe contract revisions; normalize rental duration if needed. | Registration ≠ unique new household; renewal ≠ fresh unit absorption. |
| Completed stock | Project: project status, completed %, completion date, inspection date, total units, type/area; verify against Building/Unit | Count only defensibly identified completed projects with actual completion event before cutoff, separately from announced/planned stock. | Project status alone may be stale; completion dates and unit counts require reconciliation. |
| Planned supply | Project: status, unit count, expected date | Forecast scenario, not delivered unit claim; record original snapshot date. | Timelines change, schemes delayed/cancelled. |
| Population | Digital Dubai official population and methodology | Observed reporting period and unit (persons) | Population != households, occupancy or buyer demand. |

**Standard dataset freeze proposal:** For the Issue 005 analysis, compare identical periods (ideally 1 Jan–30 Sep 2025 versus 1 Jan–30 Sep 2026 for quarterly evidence, and a settled October-vs-October edition ONLY after frozen publication is available); label live/incomplete data separately. Preserve a frozen CSV/hash and source timestamps. If a later provider revises numbers, explain the revision instead of silently replacing.

## Red flags to resolve 9–12 Nov
1. Transaction record taxonomy: resale vs all sales, residential vs all property, villas vs apartments, single units vs building/bulk.
2. Price medians: repeat-sales/mix-adjusted indices are not interchangeable with simple median AED/sqft.
3. Rental table versions: contract renewal vs duplicate registration vs changed price or tenancy must be identified before a new-lease claim.
4. Project table: 'completed (%)' is a construction progress field, NOT a count of occupiable homes.
5. Project delivery timestamp vs original forecast, and area-name taxonomy across projects/rents/transactions.
6. Seasonality, sample size, new vs existing units, common-property versus exclusive area, and transaction amounts.
7. Confirm whether a credible direct vacancy/household-formation series exists. If not, model as scenarios and do not assert measured absorption.
8. Confirm unit conversion: 1 sqm = 10.7639 sqft; AED nominal; no unlabelled currency or basis switches.

## Audit deliverables due Thu 12 November
- Reproducible source register with file date, coverage dates, publisher, exclusions, revision policy.
- Period-specific filtered record counts and flagged removals (once raw DLD data is obtained).
- Non-misleading comparison charts and numeric consistency check.
- A justified evidence-ranked shortlist of three community catchments **only after data audit**, explicitly including reasons not to compare incompatible stock.
- Written unresolved limitations and decision whether to delay or narrow specific claims.

## Initial result at 3 November
**Verified:** Official site exposes separate data schemas needed for the conceptual research design, and published official end-2025 population figure exists.
**Not yet verified:** Complete raw DLD extracts, October closed monthly volume, rent renewal coding semantics, project-level confirmed completion counts, household formation or true vacancy.
**Editorial conclusion:** No defensible community winners, supply/demand balance estimates, price forecasts or absorption ratios should be published from this schema check alone.
