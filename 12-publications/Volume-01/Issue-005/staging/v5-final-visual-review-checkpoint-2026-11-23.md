# DPI Issue 005 — v5 final English visual review checkpoint
**Date:** 23 November 2026  
**Release target:** Thursday 26 November, 08:30 GST, conditional on explicit founder approval  
**Status:** ENGLISH VISUAL RELEASE CANDIDATE, UNPUBLISHED

## Design corrections approved as direction
The founder rejected v4 cover/opener misaligned typography and undersized `2027`. A new two-page visual treatment was generated with prominent gold `2027`, aligned DPI masthead and more disciplined editorial text and three-lens cards. The founder judged this direction better and asked to finalize it.

## Actual artifacts now created in this ChatGPT working session
- `DPI_Issue005_November_2026_Final_Review_v5.pdf`: ten-page A4 PDF. Pages 1 and 2 use the approved two **raster design compositions**, pages 3–10 preserve the v4 verified research layout and searchable text.
- `issue-005.html`: new responsive English standalone reader with an enlarged `2027` heading and the approved cover preview.
- `DPI_Issue005_Final_Review_v5.zip`: all English review assets, preview images, source artwork and test notes.
- `Issue005_v5_10Page_Contact_Sheet.jpg`: all ten pages, for founder review.

**Storage:** These are generated ChatGPT conversation artifacts, available through current-turn links and **not** yet committed as binary files to this branch. Do **not** deploy older GitHub PDF or web files while describing them as v5. Existing branch `v4` note records previous visual direction.

## QA results
- PDF: ten A4 pages; extracted word bounding boxes of pages 3–10 within page boundaries; required three area names and numerical anchors present. Cover/opening composition checked visually.
- English web: Chromium layout tested at widths **1440, 768, 390 and 320 pixels** using the exact HTML markup with local images embedded for browser testing. Zero horizontal overflow, PDF link present, cover loaded, no broken page anchors. Staging remains `noindex,nofollow,noarchive`.
- No data re-estimation was performed in visual production: previous filtered DLD evidence values were preserved.
- Limits: cover/opener raster text not fully accessible or ideal for offset-print reproduction; real Safari/WebKit QA still pending. Translated v3 editions have not yet been visually redesigned to v5 or proofread for release.

## Required release gates
1. Founder signoff of v5 PDF, English web and editorial figures.
2. Finish native Safari and multilingual AR/FR/ES visual+translation QA.
3. Stage exact binary assets and deploy only after authorized approval; verify PDF/archive/canonical/hreflang assets and turn off `noindex` only on approved public copies.
4. Newsletter/Metricool/social distribution remains opt-in and approval-gated.

**Editorial truth:** Three contrasting DLD areas are case studies, not a ranking of Dubai's demand centres. Rental contract starts are not net new households; recorded planned end dates are not delivered homes.
