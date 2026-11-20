# RFA Atlas

A standalone static study app for Chapters 1–3, hosted publicly with Sites.

## Local preview

From this directory, run `python3 -m http.server 8765 --bind 127.0.0.1 --directory dist`, then open http://127.0.0.1:8765.

Run `node verify.mjs` after content edits. Run `node refresh-assets.mjs` before previewing or packaging to refresh asset versions for returning visitors.

## Content and review state

- `dist/data.js` contains cards, proof sketches, graph relationships, and source metadata.
- `dist/lectures.js` contains current lecture titles and section headings only.
- Current personal lecture transcriptions determine the `current` coverage label. Chapter 3 is still in progress through 28 October 2026.
- Full archived Chapter 3 (Di Francesco 2025–2026, pages 57–93) is represented. Additional material carries the `ahead` coverage label and an exact archive reference. `chapter3-coverage-audit.json` maps numbered archive items and exercise methods to cards. App navigation section numbers differ from archive section numbers.
- Intuition, examples and proof sketches are AI-authored study explanations. Source errors and added proof routes are noted on the relevant cards.
- The updated oral-question list (received 5 November 2026, five pages) contains 87 questions: Chapter 1 has 22 regular + 6 long-form; Chapter 2 has 9 + 5; Chapter 3 has 24 + 21. The source asks students to choose 1, 1, and 5 long-form questions respectively. `oralExam` stores exact regular/LF identifiers and direct card mappings. Amber highlights and badges identify matching cards; card backs show the prompts and link companion cards for multi-card questions. The sidebar filters all oral, regular, or long-form questions; the same choice constrains random cards and the right-arrow shortcut in both chapter and all-notes scopes. Exam relevance does not change lecture-coverage labels.
- Each card shows its verified lecture dates as plain text. Archive-only cards say that no lecture date is recorded; no local-note links are shown.
- Reviewed status is saved in localStorage under the original `rfa-atlas-chapter-1-v1` key. Existing `known` and `again` marks also count as reviewed. No sign-in is required; marks stay in that browser and are removed when its site data is cleared. They do not sync across devices.
- Full lecture notes, PDFs, local paths, and Obsidian links are not published.

`.openai/hosting.json` binds the existing Sites project. Publish with the Sites workflow helper, using an exact pushed source commit and the static `dist` archive.
