---
version: 1
slug: "components-guaresult-tsx"
primary_target: "components/GuaResult.tsx"
related_targets: ["components/VibeCard.tsx","components/TraditionalCard.tsx"]
---

# Results (reading screen)

Scope: the result state of `pages/index.tsx` rendered by `components/GuaResult.tsx` and its children (compact header, mode toggle, copy button, vibe and classic readings, changing-line info). Inherits the world in DESIGN.md; no new identity.
Visitor mode: Read. The visitor wants to understand what the hexagram says about the question they asked, in vibes or classic mode, and maybe copy it to share.
Constraints (user answers 2026-10-16): drop the pink/blue theme toggle; lead with their question + the vibe; classic shift shown side by side (original → changed) with changing lines marked in gold. Coins and gold rules per DESIGN.md. Copy unchanged; emoji used as section icons go away (labels carry the sections).

## Direction contract

THESIS: The reading answers the question the visitor asked: their words, then one big vibe line, then the reasoning. Refuses the card-stack-with-emoji-badges layout.

OWN-WORLD: Inherited from DESIGN.md, softened per user (2026-10-16): paper ground, ink text, no black fills (active toggle and new-reading pill in stone-deep), one sage stone block per screen carrying soft rounded hexagram lines in moss (#3b4a35); changing lines drawn in gold with a bronze edge like the coins; plain (unquoted) labels on this screen; flat.

STORY: The visitor rereads their question, gets the vibe in one line, sees the hexagram it came from, then reads real talk and the move (or, in classic, both hexagrams and their judgments).

FIRST VIEWPORT (390x844, vibes): page header only (the compact row was removed because it repeated the wordmark; "new reading" is a full-width sage pill at the end of the reading); a small row with the vibes/classic segmented toggle and copy; the "I asked" label over the question in ink-soft; the vibe line at display size ("your vibe today" is a visually hidden heading prefix, not a kicker); the stone block with the hexagram right, caption bottom-left, one edge sparkle top-left. Classic: same top, then one stone block with the two hexagrams side by side and an arrow, names under each.

FORM: world seed:5f2efcc7e66113de. No surface roll was run: skipped because the user's three answers fixed the structure; disclosed to the user.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
