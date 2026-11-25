# DPI Issue 005 — website launch checklist

This **draft** branch stages the November 2026 issue on DPI's GitHub Pages site. Do not merge until all release checks pass.

## Included in the branch
- `issue-005.html`: standalone reader-friendly issue landing page with SEO, social-sharing metadata, accessible layout, and links to the magazine and DPI Property Advisor.
- `index.html`: Issue 005 hero, latest-issue panel, archive entry, and homepage sharing metadata.
- `ar/index.html`, `fr/index.html`, `es/index.html`: archive discovery cards linking to the **English** edition (do not claim translations exist).
- `sitemap.xml`: Issue 005 entry.
- `13-assets/issue-005-cover.png`: the approved cover, unchanged.
- `13-assets/issue-005-social-preview.jpg`: 1200×630 sharing image.

## PDF release asset — verified
The approved `download/issue-005.pdf` has already been uploaded to the `main` branch by the publisher. Its Git blob SHA (`26f084e7dca85439ce1c4956aff53c0a7f49d906`) exactly matches the 10-page PDF in the approved website release package. Merging this PR preserves that existing PDF on `main`; no duplicate binary upload is necessary.

The public PDF URL was independently verified as accessible in a browser. Publication webpage and homepage visibility are finalized in this PR.

## Pre-launch QA
1. Check desktop and mobile at `/issue-005.html` and `/#latest` with no horizontal overflow or clipped text.
2. Confirm the cover matches the approved original; do not regenerate.
3. Check `/download/issue-005.pdf` loads and the 10-page PDF is clear.
4. Confirm `/13-assets/issue-005-cover.png` and `/13-assets/issue-005-social-preview.jpg` resolve.
5. Check homepage links, publications archive, and previous Issue 004.
6. Test social previews on LinkedIn, X, and WhatsApp after deployment.
7. Keep the existing consent-gated analytics behavior.
8. Only after verification, replace campaign homepage links with `https://dpi-os.com/issue-005.html`.

## Editorial guardrails
- 362 is a count of project records with a listed 2027 target finish year, **not** confirmed new homes.
- 303 of these records were reported less than halfway complete in the research extract.
- 22 / 32 / 31 are area-specific project counts, not unit totals.
- The 127 groups in Al Barsha South Fourth reflect rental comparisons, not 127 buildings or homes.
- Artwork shown for communities is illustrative, not photographic evidence.
- The report is independent educational research, not personalized advice.

**Status: Ready for release; PDF already present on `main`; retain Issue 004 archive and existing consent controls.**
