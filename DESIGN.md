---
name: Vibe Check
description: ancient wisdom, modern vibes. A calm, modern-zen I Ching coin reading with one playful move.
colors:
  paper: "#f4f5f1"
  paper-bright: "#fbfbf8"
  stone: "#a9b8a0"
  stone-deep: "#5f7357"
  stone-deeper: "#50624a"
  moss: "#3b4a35"
  terra: "#9a4a32"
  ink: "#1e211e"
  ink-lifted: "#323832"
  ink-soft: "#4a514a"
  gold: "#c9a23a"
  bronze: "#8a6420"
  bronze-rim: "#7a5a1e"
  line: "rgba(30, 33, 30, 0.14)"
  placeholder: "#646a64"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 12vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  display-desktop:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  display-zh:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 10vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  display-zh-desktop:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "5rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 9.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline-classic:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 8vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  plate-name:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  plate-name-pair:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  plate-number:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
  plate-number-pair:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
  body-lead:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  reading:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
  small:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  none: "0px"
  block: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 5vw, 40px)"
  column: "640px"
  xs: "4px"
  sm: "14px"
  md: "28px"
  lg: "36px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "60px"
  button-primary-hover:
    backgroundColor: "{colors.ink-lifted}"
  button-stone:
    backgroundColor: "{colors.stone-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "60px"
  button-stone-hover:
    backgroundColor: "{colors.stone-deeper}"
  button-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.75rem"
    height: "40px"
  button-chip-hover:
    backgroundColor: "{colors.paper-bright}"
  button-language:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "3.5rem"
    height: "40px"
  button-copy:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    width: "9rem"
    height: "44px"
  toggle-segment:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "5.75rem"
    height: "38px"
  toggle-segment-active:
    backgroundColor: "{colors.stone-deep}"
    textColor: "{colors.paper}"
  input-question:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  stone-block:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.block}"
    padding: "14px 16px"
  hexagram-plate:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.moss}"
    rounded: "{rounded.block}"
    padding: "24px 20px 20px"
  cast-record-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "7px 0"
  cast-coin:
    rounded: "{rounded.pill}"
    size: "26px"
  cast-bar:
    rounded: "{rounded.block}"
    height: "4px"
---

# Design System: Vibe Check

## Overview

**Creative North Star: "The Soapstone and the Spark"**

A calm, modern-zen product where nothing competes with the question, and then with the answer. Cool paper ground, near-black ink, one solid block of sage soapstone per screen, and a handful of soft-gold four-point sparkles: the system's single playful move. The app is two screens, ask and then read. On the reading screen the soapstone becomes a plate that draws its hexagram line by line in soft moss as the reading casts itself, and the six real throws behind it are kept folded underneath, drawn as small cast cash coins. Everything else is quiet, flat, and typographic. The world deliberately sidesteps the category's mystic purple and starfields, and equally the beige spa-zen opposite.

Density is low and single-column. One grotesk family carries the whole voice, set lowercase and heavy at display sizes, matching the product's playful lowercase copy in English and 中文 alike. Depth comes from solid color and weight; the only shadows are the warm cast shadow under the coins and one gold halo on the landing's throw sparkle. The landing's ink pill is the one black fill; on the reading, filled controls soften to deep stone. The header, content, and footer share one left edge inside a narrow column, so the page reads as one straight stack on a phone and a centered stack on desktop.

**Key Characteristics:**
- Cool paper white ground, ink text, one sage stone block per screen.
- Soft-gold drawn sparkles as the only ornament, and every ✨ in copy rendered as that same drawn mark.
- One grotesk family (Schibsted Grotesk, with Noto Sans SC for 中文), lowercase, 800 weight for display.
- Two screens, ask then reading; a fresh reading casts itself once, drawing the hexagram bottom-up before the words arrive.
- One ink pill on the landing; stone-deep fills on the reading screen.
- Hexagrams in soft rounded moss lines on the sage plate; changing lines in coin gold.
- Deep terracotta as a rare accent for classic gua names and the shift notice.
- Flat surfaces; the coins' warm cast shadow and the throw sparkle's halo are the only shadows.
- One shared left edge for header, content, and footer, and controls that never shift when the language changes.

## Colors

A restrained cool-neutral palette with one mineral green family, a warm gold that belongs to the sparkles and coins, and one deep terracotta accent.

### Primary
- **Sage Soapstone** (stone): the one solid block per screen: the landing's fact block, or the hexagram plate on results. Also the text-selection and scrollbar color. Ink on stone is 7.8:1.
- **Deep Soapstone** (stone-deep): the filled control color after the throw: the active mode segment and the "share" pill, both with paper text (4.7:1). It also opens the cast bar gradient. It stands in for the legacy `--primary` / `--secondary` bridge tokens.
- **Deeper Soapstone** (stone-deeper): hover fill for the stone-deep pill.
- **Moss** (moss): the hexagram's line color and the plate caption text, on stone only (4.5:1). It is the ink of the plate, not a general text color.

### Secondary
- **Deep Terracotta** (terra): an accent only. It colors the classic reading's gua names, the "energy shift detected" notice, the changing rows in the cast record, and the final stop of the cast bar gradient. On paper it reads at 5.6:1; on sage it falls to 2.9:1.

### Tertiary
- **Soft Gold** (gold): sparkles, the coin face, the changing lines, and the middle stop of the cast bar. It is decorative and low-contrast against paper (about 2.2:1), so it never carries text.
- **Bronze** (bronze): the dark end of the coin face shading and the 1.5px edge on gold changing lines, so a gold line holds its shape on sage.
- **Bronze Rim** (bronze-rim): the coin's outer rim, inner ring, and square-hole frame.

### Neutral
- **Cool Paper** (paper): page ground, the text color on filled pills, and the fill of the coin's square hole.
- **Bright Paper** (paper-bright): the hover wash on hairline chips, the copy button, and inactive mode segments.
- **Ink** (ink): all primary text, the landing throw button fill, the question underline, and the focus outline.
- **Lifted Ink** (ink-lifted): hover fill for the ink pill. It is a small lift, not a color change.
- **Soft Ink** (ink-soft): subtitle, tagline, footer, the "I asked" label and quoted question, reading metadata, and the cast record's line labels and throw count (7.5:1 on paper).
- **Hairline** (line): 1px borders on header chips, the mode toggle, the copy button, the rule above each classic reading, and the rule that opens the cast record. Rows inside the record are split by a fainter hairline at 6% ink.
- **Muted Ink** (placeholder): the question field's placeholder only, a step lighter than soft ink so typed text clearly outranks it while staying legible (5.1:1 on paper).

### Named Rules
**The Gold Is Ornament Rule.** Gold appears on sparkles, coins, and changing lines only (plus its stop inside the cast bar gradient). It is never text, and never a fill, border, or background on UI chrome.

**The Bronze Coin Rule.** The coins are always cast gold and bronze (a radial face from #f0d27a through gold to bronze, a bronze-rim edge, a paper square hole, and a #5e4313 inscription), never a palette color (user-pinned).

**The Terracotta Accent Rule.** Terracotta is a text and gradient accent on paper only: classic gua names, the shift notice, changing rows in the cast record, the end of the cast bar. It is never a fill, and never text on sage.

**The One Ink Pill Rule.** The landing's "throw coins" pill is the product's only black fill. On the reading screen, filled controls use stone-deep.

**The One Stone Rule.** A screen gets at most one sage stone block. The stone is a slab of material, not a card style to repeat; a classic reading's two hexagrams share one plate.

## Typography

**Display Font:** Schibsted Grotesk (loaded through next/font as `--font-sans`, weights 400/500/700/800)
**Body Font:** Schibsted Grotesk for Latin, with Noto Sans SC (next/font as `--font-cjk`, weights 400 to 900, swap) for 中文 glyphs, then PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui
**Label/Mono Font:** none distinct

**Character:** A single contemporary grotesk does all the work. The 800-weight display is set tight and lowercase so the question itself becomes the image, and the regular weights stay plain and readable. Noto Sans SC is chained behind it so 中文 sits in a matching sans at the same weights rather than whatever the OS supplies.

### Hierarchy
- **Display** (800, clamp(2.75rem, 12vw, 4.75rem), 6rem at 769px and above, line-height 0.95, -0.035em, balanced wrap): the one question headline per screen. In 中文 it drops to clamp(2.25rem, 10vw, 4.75rem) (5rem on desktop) so the headline holds one line, and both languages reserve two lines of height.
- **Headline** (800, clamp(2.125rem, 9.5vw, 3.5rem), 1, -0.03em, balanced wrap): the vibe line on the results screen.
- **Headline Classic** (800, clamp(1.875rem, 8vw, 2.5rem), 1.05, -0.03em, terra): the gua name heading each classic reading.
- **Title** (800, 1.25rem, -0.02em): the lowercase "vibe check" wordmark.
- **Plate Name** (800, 1.375rem, 1.1, -0.02em, moss): hexagram names on the stone plate; 1.125rem in the desktop pair. Below it, the number and label line (Plate Number) runs at 0.875rem (0.8125rem in the pair), 500 with tabular figures and a 700 label.
- **Body Lead** (400, 1.0625rem, 1.5): the hero subtitle (ink-soft, max 38ch, pretty wrap), the question field, and the quoted question on results (max 60ch).
- **Reading** (400, 1.0625rem, 1.6 for vibes and 1.7 for classic judgments, max 62ch, pretty wrap): the reading text.
- **Body** (500, 0.9375rem): the fact strip on the stone block, mode and copy buttons (700), the cast record rows (tabular figures), and the shift notice. The desktop tagline uses the same size at 400 in soft ink.
- **Label** (700, 1rem, 1.4): section labels ("the move", the classical judgment), the cast record's "how it was cast" title, and the landing's quoted question label.
- **Small** (400 to 700, 0.875rem): footer text, header chip labels, the cast record's "6 throws" count (ink-soft), and the "I asked" label (700, ink-soft).

### Named Rules
**The Lowercase Voice Rule.** Display, wordmark, labels, and buttons stay lowercase in both languages. English copy is written lowercase; under `:lang(zh)` the app container applies `text-transform: lowercase` so Latin words inside 中文 strings follow. No uppercase and no uppercase tracking.

**The One Quote Rule.** The landing's "ask the universe" label is the system's one quoted label: bold and wrapped in curly quotes, as though the visitor is saying it. Labels on the results screen are plain.

**The Language Truth Rule.** `html lang` follows the selected language (`en` or `zh-CN`) so the browser picks CJK glyphs and line breaking correctly.

## Layout

The layout is a single centered column with a 640px max width and a fluid gutter of clamp(16px, 5vw, 40px), shared by the header, main content, and footer so all three align on one left edge. All content is left-aligned. The page is a full-height flex column, and the footer sits at the bottom.

The vertical rhythm is loose and runs in steps of about 14, 28, 36, and 48px. On the landing, the stone block sits 28px below the header (40px on desktop), the hero 32px below the block, the question 36px below the hero, and the throw button 28px below the question. The stone block's height is clamp(116px, 19vh, 176px) on mobile and a fixed 132px on desktop. On the reading, the mode toggle sits alone at the top, 32px above the question, the question 28px above the reading, the cast record 16px below the plate, the shift notice 14px below the cast record and 36px above the readings, classic readings sit 40px apart, the share-and-copy row follows 44px below, and "new reading" (or "ask your own" on a shared link) closes the page 12px under it. A shared link shows a terracotta "a friend shared their reading" line instead of the question.

There is one breakpoint, at 769px. Above it, the tagline appears beside the wordmark, the display steps up, the throw button shrinks from full width to its content width (280px minimum), and the share row and closing button cap at 420px wide. The classic pair stacks on phones and sits side by side above it (see Hexagram Plate). The phone layout is primary: the headline, field, and throw button all fit in the first 390x844 viewport.

**The No-Shift Rule.** Switching EN and 中文, or vibes and classic, never moves the layout. The language button, mode segments, and copy button are fixed width; the headline, plate names, and shift notice reserve their tallest version's height.

## Elevation & Depth

The system is flat. Depth comes from solid color: the ink pill, stone-deep pills, and sage plates stand on paper through value contrast. The intentional overlap is the large gold sparkle, which sits 18px above a stone block's top edge so the ornament breaks the slab's outline. Two shadows exist, each tied to one object, and neither is used for UI elevation.

### Shadow Vocabulary
- **Coin cast** (`box-shadow: 0 2px 4px rgba(154, 74, 50, 0.22)`): the warm terracotta shadow under each 26px coin in the cast record, like gold under warm light. Coins only.
- **Spark halo** (`filter: drop-shadow(0 0 5px rgba(201, 162, 58, 0.8))`): the warm glow on the throw button's sparkle. It is the one sanctioned halo.

### Named Rules
**The Flat Slab Rule.** Surfaces are solid fills on paper. When something needs emphasis, it gets ink, stone, or weight, not a shadow.

**The One Halo Rule.** The throw-coins sparkle is the only glowing thing in the product. No other sparkle, button, or surface glows.

## Shapes

The form language has three corner values, each tied to a role. Stone blocks and plates have barely softened corners (4px), so they read as cut slabs. Buttons, chips, and the mode toggle are full pills (999px). The question field has no box at all: a bare 2px ink underline with no radius.

Three drawn forms recur. The sparkle is a four-point star with concave sides, one SVG path in a 24px viewBox. Hexagram lines are fully rounded bars (6 units tall, rx 3, 10-unit gaps, a 16-unit break in yin lines, on a 100-unit width), so the figure reads soft rather than ruled. The coin is a round cash coin with a square hole cut through to paper. While a reading casts, a 4px bar runs flush along the plate's bottom edge, rounding only the plate's bottom-left corner (0 0 0 4px).

## Components

### Buttons
Confident and soft-edged: pills only.
- **Shape:** full pill (999px).
- **Primary (throw coins, landing only):** ink fill, paper text, 1.25rem at weight 700, -0.01em tracking, minimum 60px tall, 2rem side padding. Full width on mobile, auto width (280px minimum) on desktop. An 18px gold sparkle with the spark halo follows the label, with a 0.75rem gap.
- **Hover / Focus:** the fill lifts to ink-lifted, and the sparkle turns 90deg and scales to 1.15 over 0.5s on the ease-out curve. Pressed, the button scales to 0.98. Focus uses the global 2px ink outline at 3px offset.
- **Stone pill (share):** 52px tall, 1.0625rem 700, stone-deep with paper text and an 18px share icon; it fills the row beside the copy button. Opens the native share sheet with the vibes message and link (never the question); where sharing isn't available it copies them and says "copied!". Hover stone-deeper, pressed 0.98.
- **Hairline pill (new reading):** 52px, full width, transparent with a hairline border and ink text; hover paper-bright with an ink border.
- **Ink pill (ask your own):** closes a shared reading. The throw button's pill (60px, ink, paper text) with its haloed gold sparkle.
- **Header chips (language, boba):** transparent fill, 1px hairline border, ink text at 0.875rem, 40px tall. The language button is fixed at 3.5rem wide (700 label); the boba chip carries an 18px drawn cup icon whose pearls are cut out in paper. Hover washes to paper-bright with an ink border.
- **Copy button:** a hairline pill beside share, fixed 9rem wide and 52px tall. In vibes mode it copies the same message as share; in classic it copies the detailed reading (question, both hexagrams, changing lines). It has a 16px inline SVG copy icon (a check once copied) and a 0.9375rem 700 label. Below 360px it goes icon-only at 44px square beside share; the label stays for screen readers. Where the browser has no share sheet (desktop, or a page that isn't https), the share pill is hidden and copy fills the row, always labelled, so two buttons never do the same thing.

### Chips (mode toggle)
- **Style:** a hairline pill track with 3px padding holding two pill segments, each fixed at 5.75rem wide and 38px tall, 0.9375rem at 700.
- **State:** the active segment fills stone-deep with paper text; inactive segments are transparent ink and wash to paper-bright on hover.

### Inputs / Fields
- **Style:** an underline-only textarea with a transparent background, 2px ink bottom border, and no radius, at least 88px tall. Text is Body Lead, and the placeholder is a muted ink (#646a64).
- **Label:** the landing's one quoted label sits directly above the field with a 4px gap.
- **Focus:** the native outline is removed and a second 2px ink rule is drawn under the border (box-shadow 0 2px 0 ink), which thickens the underline to 4px.

### Navigation
- **Style:** a single header row on every screen. The lowercase wordmark sits on the left with no sparkle, and the tagline appears after a middle dot on desktop only. The boba and language chips sit on the right with a 0.5rem gap and 18px vertical padding.

### Stone Block (signature)
A solid sage slab (stone fill, 4px radius, 14px/16px padding) that carries the landing's fact strip in its bottom-left corner: Body at weight 500, with trailing middle-dot separators. Two gold sparkles sit at the top right: a 36px sparkle breaking the top edge and a 16px sparkle inside the block. They twinkle in on load (from scale 0.2 and -60deg rotation, over 0.9s, staggered 0.15s and 0.35s), with fill-mode `backwards` rather than `both`, so the finished sparkle drops its transform and no composited layer is held over the slab (a held layer showed white seams). When the visitor throws, they flare (scaling to 1.5 and turning 45deg, then fading out over 0.45s).

### Hexagram Plate (signature)
The reading screen's stone block (stone fill, 4px radius, 24px/20px/20px padding, moss text).
- **Single (vibes):** the hexagram fills the right side at clamp(120px, 38vw, 176px) wide, with the name and number captioned bottom-left. One 36px edge-breaking sparkle sits at the top left.
- **Pair (classic):** original then changed, joined by a 24px arrow. On phones the figures stack, each a 120px drawing on the right with its caption to the left, and the arrow points down, centered under the drawings. From 769px they sit side by side in a 120px / 1fr / 120px grid, the arrow centered on the drawing's height, names wrapping under each drawing within its width. Captions reserve three lines (3.3em) so the plate height stays constant across languages. No sparkle.
- **Lines:** all moss, except changing lines, which are gold with a 1.5px bronze edge and appear only on the changed hexagram in classic mode. The original hexagram and the vibes plate are always all moss.
- **Casting:** on a fresh reading the first hexagram draws its lines bottom-up, each rising 6px and fading in over 0.5s, 0.38s apart. Meanwhile the cast bar (4px, a stone-deep to gold (55%) to terra gradient) fills along the plate's bottom edge over 2.5s and fades away at the end. Captions, the arrow, and the changed hexagram arrive with the rest of the reading.

### Cast Record (signature)
The six real throws behind the hexagram, kept as a disclosure directly under the plate in both modes, folded by default.
- **Summary:** a 44px row opened by a hairline rule: "how it was cast" in Label on the left, "6 throws" in Small soft ink with an 18px chevron on the right that turns 180deg when open.
- **Rows:** top line first, as the hexagram reads on the page. Each row is a 4.5rem / auto / 1fr grid with 12px gaps and 7px vertical padding, split by the fainter hairline, in Body: "line N" in soft ink, the three real coins (26px cash coins, 4px apart, with the coin cast shadow), then "sum · kind" (old yin, young yang, young yin, old yang; 老阴, 少阳, 少阴, 老阳 in 中文). A changing line's text turns bold terra and adds "· changes" (变).

### Readings
- **Vibe:** the vibe line at Headline size (its "your vibe today" heading prefix is visually hidden), then one short unlabeled line in Body Lead (1.0625rem, 1.55) 10px below it and 28px above the plate, then the cast record, then "the move" as a plain label over Reading text. Copy follows `lib/data/vibes/VOICE.md`.
- **Classic:** after the plate and the cast record, a shift notice (Body in ink-soft; "energy shift detected" in bold terra, or "stable energy" in bold ink), then one reading per hexagram: a hairline rule, 28px of space, the gua name in Headline Classic terra, a soft-ink meta line, and the classical judgment.
- **Asked:** the "I asked" Small label over the visitor's question in Body Lead soft ink, unquoted.

### Coins (signature)
Drawn SVG cash coins carrying the coin cast shadow, shown only in the cast record (26px). Heads shows 乾隆通寶 read top, bottom, right, left in a Songti serif; tails is plain. They show the reading's real throws and never animate.

### Sparkle (signature)
A four-point star in gold, drawn with `currentColor`. A screen gets at most three decorative sparkles: two on the landing's stone block plus one on the throw button, or one on the vibes plate. Separately, every ✨ in the copy is replaced inline with the same drawn mark at text size (0.85em, 0.15em side margins), so the brand's emoji voice is kept but drawn in the house style.

### Motion
Interface transitions use the ease-out curve cubic-bezier(0.16, 1, 0.3, 1), with 0.2s for color changes and 0.5s for the sparkle turn. The reading screen enters on the same curve over 0.8s.

A fresh reading casts itself once, about 3.3s in all: the lines draw bottom-up (0.38s apart, the last landing near 2.4s), the cast bar fills over 2.5s, and at 2.5s everything else on the reading (vibe line, captions, changed hexagram, cast record, shift notice, readings, share row, closing button) fades up 8px over 0.6s. Switching vibes and classic afterwards does not replay it. Under `prefers-reduced-motion`, the sparkle entrance, flare, and turn, the screen entry, and the whole cast sequence are removed, and the cast bar is not shown.

## Do's and Don'ts

### Do:
- **Do** keep the header, content, and footer on one left edge inside the 640px column with the shared gutter.
- **Do** keep gold to sparkles, coins, and changing lines, with at most three decorative sparkles per screen.
- **Do** render every ✨ in copy as the inline drawn sparkle, and keep the playful lowercase copy and its emoji voice intact.
- **Do** set the display at 800 weight, lowercase, with tight leading (0.95) and tight tracking (-0.035em).
- **Do** keep the voice lowercase in both languages, with `text-transform: lowercase` under `:lang(zh)` and `html lang` set from the selected language.
- **Do** use the ink pill (999px, paper text) for the landing's throw button only, and stone-deep for filled controls on the reading screen.
- **Do** draw hexagram lines as soft rounded moss bars on the sage plate, with gold, bronze-edged changing lines only on the changed hexagram in classic mode.
- **Do** keep toggles and the copy button fixed width, and reserve text height, so switching EN and 中文 never shifts the layout.
- **Do** let a fresh reading cast itself once (lines bottom-up, cast bar, then the reading at 2.5s), and never replay it on a mode switch.
- **Do** keep the real throws in the folded cast record under the plate, top line first, with changing rows in bold terra.
- **Do** honor reduced motion by making sparkles static and skipping the cast sequence.

### Don't:
- **Don't** use glass, backdrop blur, or glow beyond the one spark halo, and don't use box-shadows for elevation; the coin cast shadow is the only box-shadow.
- **Don't** use gradients outside the coin face and the cast bar.
- **Don't** reintroduce mystic purple, cyan, pink, or starfield imagery, and don't drift into beige spa-zen.
- **Don't** use terracotta as a fill or as text on sage (2.9:1).
- **Don't** put black fills on the reading screen.
- **Don't** set any text in gold.
- **Don't** wrap results-screen labels in quotes; the landing's "ask the universe" is the one quoted label.
- **Don't** use emoji or icon-font glyphs as UI icons. Icons are inline SVG in currentColor.
- **Don't** put a sparkle on the wordmark.
- **Don't** use more than one stone block per screen.
