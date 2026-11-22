# DPI Issue 005 — Project supply audit, 22 November 2026
Status: project CSV parsed and initial checks complete; rental and refreshed transaction row audits outstanding. Internal research, not publication-ready.
Source: DLD project CSV supplied by publisher, projects_2026-11-01_18-17-23_0001.csv; snapshot load date 2026-11-01 on all 3,474 rows. Source file URL: https://drive.google.com/file/d/1Su1SIGPvzY4UkGB-Wu0Tqop8hHfK_5tj/view
Method: retrieve readable CSV through authenticated Drive connector, parse quoted fields including escaped quotes/newlines, validate row widths and project_id uniqueness; group exact project_status values and project_end_date year, inspect numeric percent_completed.

## Result
38 fields; 3,474 data records, all with expected row width; 3,474 unique nonblank project IDs, zero duplicate IDs; no numeric construction percentages outside 0–100 among populated fields.

| Source project_status | Records |
|---|---:|
| FINISHED | 1684 |
| ACTIVE | 1237 |
| NOT_STARTED | 314 |
| PENDING | 227 |
| CONDITIONAL_ACTIVATING | 11 |
| FRIEZED | 1 |

Of active projects, 164 lack project_end_date; 246 have a recorded project_end_date before the 1 November snapshot (87 scheduled before 2026). Neither proves a verified contractual delay: project status and recorded schedule may lag actual site conditions or reflect revisions. Seven finished projects lack completion_date. 107 active projects have neither positive no_of_units nor positive no_of_villas; four active projects have both positive. Avoid automatically summing these fields as homes before verifying classification, usage and overlap. 169 finished projects have neither positive count.

## Active projects grouped by recorded end year
| Year | Active records | no_of_units sum | no_of_villas sum |
|---|---:|---:|---:|
| 2026 | 238 | 59394 | 2245 |
| 2027 | 362 | 80115 | 5524 |
| 2028 | 264 | 68747 | 9951 |
| 2029 | 104 | 33984 | 2584 |
| 2030 | 16 | 12313 | 0 |
| 2031 | 2 | 2743 | 0 |
| Missing date | 164 | 51939 | 3772 |

Earlier scheduled years omitted from this table, but still included in active total. Both columns are raw field sums, not confirmed residential supply or forecast deliveries.

## 2027 construction progress test
For the 362 records with ACTIVE status and project_end_date in 2027, 303 (83.7%) have recorded percent_completed below 50; 15 (4.1%) at least 75; remaining 44 (12.2%) at 50 to less than 75. These are unweighted counts of projects, not percentages of units, not predictions of delay. Progress can change, and projects vary in scale, schedules and property usage.
Potential original editorial chart: show recorded progress bands with a transparent date and denominator, only after further field and coverage checks.

## Geographic screening (not a community ranking)
Leading areas by raw no_of_units sum among active records scheduled for 2027: Madinat Al Mataar (22 projects; 9,109 units field), Wadi Al Safa 5 (32; 7,696), Al Barsha South Fourth (31; 7,304). Raw registry areas are not necessarily marketing-community boundaries. Do not describe these as actual future residential deliveries; the extract includes multiple types and current status/recorded dates only. Match DLD area_id and verified usage definitions with sales and rental data before selecting cases.

## Remaining data gates
All 13 files in the publisher's DPI Datasets folder were retrieved via the Drive connector: 11 rental ZIP parts numbered 0001–0011 dated 20 November, one refreshed transactions ZIP and one project CSV. The local processing environment returned errors before the ZIPs could be scanned in this turn. Their integrity, coverage, duplicate/renewal semantics, and new transaction cutoff remain unverified. Earlier 10 November transaction audit is a separate extract, not proof of the refreshed one.
Next: scan all rental archives, check schemas, identifiers, date coverage, contract version semantics, classification and rental normalization; rerun sales audit on refreshed export; compare matched DLD area identifiers and fixed complete time periods; validate usage and unit fields on projects. No absorption, vacancy or community resilience claims before these checks.
No website changes or release approval in this step.
