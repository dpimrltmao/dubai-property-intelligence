# Issue 005 — Founder QA gate (v3)
**Date:** 22 Nov 2026 · **Public target:** Thu 26 Nov 2026, 08:30 GST · **Founder signoff:** Wed 25 Nov, 15:30 GST
**State:** UNPUBLISHED. Research branch source and review files only.

## Artifacts
- English editorial source: `issue-005-english-manuscript-v3.md`
- Native English PDF review proof: `DPI_Issue005_Founder_Proof_v3.pdf` (10 pages; vector layout; native PDF structure and cross-reference checks passed; not visually verified)
- Print-ready HTML backup: `issue-005-english-print-v3.html` (A4 ten-sheet layout; browser print QA pending)
- English responsive web source: `issue-005-editorial-v3.html`
- Arabic RTL, French and Spanish reader sources: `issue-005-ar-v3.html`, `issue-005-fr-v3.html`, `issue-005-es-v3.html`

## Verified in this turn
- [x] Reopened actual v3 manuscript and web-source revisions, using GitHub fetch.
- [x] English print source has 10 sheets, 9 story headings, 2 correctly scoped chart sections and no reader-facing internal chart-cue instructions.
- [x] English PDF has ten page objects, valid ASCII PDF syntax and xref offsets, EOF marker, and uses only sourced numerical figures from v3 editorial. **This is structural validation, not a visual render test.**
- [x] Arabic, French and Spanish HTML sources contain the same three area evidence tables and key counts, with the source and inference disclaimers; Arabic has lang=ar/dir=rtl.
- [x] Localized and English web sources carry `noindex,nofollow,noarchive`, are balanced in section/div tags and have no unapproved live-website route.
- [x] Wording: three DLD areas are contrasting cases, NOT Dubai's only housing-demand centres or investment rankings.
- [x] Wording: rental New starts do not establish new households; project target dates do not establish handovers; same project-name groups do not form an identical-unit rental index.

## Required before release
- [ ] Render every PDF page and compare text, positions, glyph coverage, chart labels and overflow against the approved manuscript. Do not treat PDF as final until visual proof is passed.
- [ ] Test HTML on desktop and mobile Safari, including Arabic RTL order, navigation, keyboard/focus, links and horizontal overflow.
- [ ] Proofread Arabic/French/Spanish with editorial attention to DLD field names, period definition, percentages, proper nouns and finance language.
- [ ] Confirm final DLD computation checksum and every displayed chart/table footnote against audit ledger; preserve 2025/2026 matched reporting windows.
- [ ] Verify public release paths, asset locations, homepage/archive cards, canonical/hreflang, PDF link and noindex removal ONLY on final publication copies.
- [ ] Final founder acceptance, explicit approval of site, newsletter and social publishing; ensure each platform post is independently approved.

## Release principle
If one translation fails QA, do not falsely present it as published. If a claim is not verified, omit or qualify that claim. Do not promise completed visual QA, live deployment or subscriber delivery until proven.
