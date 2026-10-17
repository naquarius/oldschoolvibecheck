---
version: 1
slug: "pages-index-tsx"
primary_target: "pages/index.tsx"
related_targets: []
---

# Landing (question screen)

Scope: the landing / question state of `pages/index.tsx` (header, hero, question box, throw button, footer). The coin-throw and result states are a later round; they only inherit tokens for now.
Visitor mode: Persuade. Visitor: a curious newcomer or bilingual user on a phone with a real question. Action: type a question (optional) and throw coins.
Constraints: lowercase playful voice, EN/中文 parity, static export, mobile-first. Copy unchanged.

## Direction contract

THESIS: Calm, modern-zen page where nothing competes with the question; the one playful move is a few soft-gold sparkles. Refuses the category default of mystic purple/stars and the predictable opposite of beige spa-zen.

OWN-WORLD: Cool paper white ground (#F4F5F1), ink near-black (#1E211E), one sage soapstone block (#A9B8A0), soft-gold four-point sparkles (#C9A23A): max three decorative sparkles per screen (two on the block, one on the throw button), plus every ✨ written in the copy rendered as the same drawn gold sparkle at text size. One grotesk family, lowercase, heavy weight for display. Quoted labels. No gradients, glass, glow, emoji icons, or red. Header, content and footer share one left edge.

STORY: The visitor sees one big question, understands it's 3 coins and an I Ching reading, types, and throws.

FIRST VIEWPORT (390x844): top row: lowercase wordmark left (no sparkle); boba + language toggle right. Below: a full-width sage block carrying "3 coins · instant results · ancient wisdom" bottom-left and two gold sparkles top-right. Then the huge lowercase headline "what's your vibe today?", one line of subtitle, the quoted "ask the universe" label over an underline-only question field, and a full-width ink pill "throw coins" with a gold sparkle, all above the fold.
Signature interaction: sparkles twinkle in once on load (staggered); hovering or pressing the throw button turns its sparkle; throwing makes the block's sparkles flare. Reduced motion: static.

FORM: user-steered fusion: round-2 assigned direction (Seal Chop, position 6 of my grounded list) palette on the Quote-Tag Streetwear form, then steered to lowercase, no red, gold sparkles. seed:5f2efcc7e66113de

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
