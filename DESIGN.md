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
typography:
  display:
    fontFamily: "Schibsted Grotesk, Noto Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 12vw, 4.75rem)"
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
---

# Design System: Vibe Check

## Overview

**Creative North Star: "The Soapstone and the Spark"**

A calm, modern-zen product where nothing competes with the question, and then with the answer. Cool paper ground, near-black ink, one solid block of sage soapstone per screen, and a handful of soft-gold four-point sparkles: the system's single playful move. On the reading screens the soapstone becomes a plate carrying the hexagram in soft moss lines, and the thrown coins are drawn as real cast cash coins. Everything else is quiet, flat, and typographic. The world deliberately sidesteps the category's mystic purple and starfields, and equally the beige spa-zen opposite.

Density is low and single-column. One grotesk family carries the whole voice, set lowercase and heavy at display sizes, matching the product's playful lowercase copy in English and 中文 alike. Depth comes from solid color and weight; the only shadows are the warm cast shadow under the coins and one gold halo on the landing's throw sparkle. The landing's ink pill is the one black fill; after the throw, filled controls soften to deep stone. The header, content, and footer share one left edge inside a narrow column, so the page reads as one straight stack on a phone and a centered stack on desktop.

**Key Characteristics:**
- Cool paper white ground, ink text, one sage stone block per screen.
- Soft-gold drawn sparkles as the only ornament, and every ✨ in copy rendered as that same drawn mark.
- One grotesk family (Schibsted Grotesk, with Noto Sans SC for 中文), lowercase, 800 weight for display.
- One ink pill on the landing; stone-deep fills on the toss and results screens.
- Hexagrams in soft rounded moss lines on the sage plate; changing lines in coin gold.
- Deep terracotta as a rare accent for classic gua names and the shift notice.
- Flat surfaces; the coins' warm cast shadow and the throw sparkle's halo are the only shadows.
- One shared left edge for header, content, and footer, and controls that never shift when the language changes.

## Colors

A restrained cool-neutral palette with one mineral green family, a warm gold that belongs to the sparkles and coins, and one deep terracotta accent.

### Primary
- **Sage Soapstone** (stone): the one solid block per screen: the landing's fact block, or the hexagram plate on results. Also the text-selection and scrollbar color. Ink on stone is 7.8:1.
- **Deep Soapstone** (stone-deep): the filled control color after the throw: the active mode segment and the "new reading" pill, both with paper text (4.7:1). It also opens the toss bar gradient. It stands in for the legacy `--primary` / `--secondary` bridge tokens.
- **Deeper Soapstone** (stone-deeper): hover fill for the stone-deep pill.
- **Moss** (moss): the hexagram's line color and the plate caption text, on stone only (4.5:1). It is the ink of the plate, not a general text color.

### Secondary
- **Deep Terracotta** (terra): an accent only. It colors the classic reading's gua names, the "energy shift detected" notice, and the final stop of the toss bar gradient. On paper it reads at 5.6:1; on sage it falls to 2.9:1.

### Tertiary
- **Soft Gold** (gold): sparkles, the coin face, the changing lines, and the middle stop of the toss bar. It is decorative and low-contrast against paper (about 2.2:1), so it never carries text.
- **Bronze** (bronze): the dark end of the coin face shading and the 1.5px edge on gold changing lines, so a gold line holds its shape on sage.
- **Bronze Rim** (bronze-rim): the coin's outer rim, inner ring, and square-hole frame.

### Neutral
- **Cool Paper** (paper): page ground, the text color on filled pills, and the fill of the coin's square hole.
- **Bright Paper** (paper-bright): the hover wash on hairline chips, the copy button, and inactive mode segments.
- **Ink** (ink): all primary text, the landing throw button fill, the question underline, and the focus outline.
- **Lifted Ink** (ink-lifted): hover fill for the ink pill. It is a small lift, not a color change.
- **Soft Ink** (ink-soft): subtitle, tagline, footer, the "I asked" label and quoted question, and reading metadata (7.5:1 on paper).
- **Hairline** (line): 1px borders on header chips, the mode toggle, the copy button, and the rule above each classic reading.

### Named Rules
**The Gold Is Ornament Rule.** Gold appears on sparkles, coins, and changing lines only (plus its stop inside the toss bar gradient). It is never text, and never a fill, border, or background on UI chrome.

**The Bronze Coin Rule.** The coins are always cast gold and bronze (a radial face from #f0d27a through gold to bronze, a bronze-rim edge, a paper square hole, and a #5e4313 inscription), never a palette color (user-pinned).

**The Terracotta Accent Rule.** Terracotta is a text and gradient accent on paper only: classic gua names, the shift notice, the end of the toss bar. It is never a fill, and never text on sage.

**The One Ink Pill Rule.** The landing's "throw coins" pill is the product's only black fill. On the toss and results screens, filled controls use stone-deep.

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
- **Title** (800, 1.25rem, -0.02em): the lowercase "vibe check" wordmark. The throwing state title reuses it at 1.75rem.
- **Plate Name** (800, 1.375rem, 1.1, -0.02em, moss): hexagram names on the stone plate; 1.125rem in the desktop pair. Below it, the number and label line runs at 0.875rem (0.8125rem in the pair), 500 with tabular figures and a 700 label.
- **Body Lead** (400, 1.0625rem, 1.5): the hero subtitle (ink-soft, max 38ch, pretty wrap), the question field, and the quoted question on results (max 60ch).
- **Reading** (400, 1.0625rem, 1.6 for vibes and 1.7 for classic judgments, max 62ch, pretty wrap): the reading text.
- **Body** (500, 0.9375rem): the fact strip on the stone block, mode and copy buttons (700), coin face labels (700), and the shift notice. The desktop tagline uses the same size at 400 in soft ink.
- **Label** (700, 1rem, 1.4): section labels ("real talk", "the move", the classical judgment) and the landing's quoted question label.
- **Small** (400 to 700, 0.875rem): footer text, header chip labels, and the "I asked" label (700, ink-soft).

### Named Rules
**The Lowercase Voice Rule.** Display, wordmark, labels, and buttons stay lowercase in both languages. English copy is written lowercase; under `:lang(zh)` the app container applies `text-transform: lowercase` so Latin words inside 中文 strings follow. No uppercase and no uppercase tracking.

**The One Quote Rule.** The landing's "ask the universe" label is the system's one quoted label: bold and wrapped in curly quotes, as though the visitor is saying it. Labels on the results screen are plain.

**The Language Truth Rule.** `html lang` follows the selected language (`en` or `zh-CN`) so the browser picks CJK glyphs and line breaking correctly.

## Layout

The layout is a single centered column with a 640px max width and a fluid gutter of clamp(16px, 5vw, 40px), shared by the header, main content, and footer so all three align on one left edge. Content is left-aligned except the toss screen, which centers its coins and message. The page is a full-height flex column, and the footer sits at the bottom.

The vertical rhythm is loose and runs in steps of about 14, 28, 36, and 48px. On the landing, the stone block sits 28px below the header (40px on desktop), the hero 32px below the block, the question 36px below the hero, and the throw button 28px below the question. The stone block's height is clamp(116px, 19vh, 176px) on mobile and a fixed 132px on desktop. On results, the toggle-and-copy row sits 32px above the question, the question 28px above the reading, the shift notice 14px below the plate and 36px above the readings, classic readings sit 40px apart, and "new reading" closes the page 48px below.

There is one breakpoint, at 769px. Above it, the tagline appears beside the wordmark, the display steps up, the throw button shrinks from full width to its content width (280px minimum), and "new reading" shrinks from full width to left-aligned (240px minimum). The classic pair stacks on phones and sits side by side above it (see Hexagram Plate). The phone layout is primary: the headline, field, and throw button all fit in the first 390x844 viewport.

**The No-Shift Rule.** Switching EN and 中文, or vibes and classic, never moves the layout. The language button, mode segments, and copy button are fixed width; the headline, plate names, and shift notice reserve their tallest version's height.

## Elevation & Depth

The system is flat. Depth comes from solid color: the ink pill, stone-deep pills, and sage plates stand on paper through value contrast. The intentional overlap is the large gold sparkle, which sits 18px above a stone block's top edge so the ornament breaks the slab's outline. Two shadows exist, each tied to one object, and neither is used for UI elevation.

### Shadow Vocabulary
- **Coin cast** (`box-shadow: 0 10px 22px rgba(154, 74, 50, 0.28), 0 3px 6px rgba(122, 90, 30, 0.22)`): the warm bronze-terracotta shadow under each thrown coin, like gold under warm light. Coins only.
- **Spark halo** (`filter: drop-shadow(0 0 5px rgba(201, 162, 58, 0.8))`): the warm glow on the throw button's sparkle. It is the one sanctioned halo.

### Named Rules
**The Flat Slab Rule.** Surfaces are solid fills on paper. When something needs emphasis, it gets ink, stone, or weight, not a shadow.

**The One Halo Rule.** The throw-coins sparkle is the only glowing thing in the product. No other sparkle, button, or surface glows.

## Shapes

The form language has three corner values, each tied to a role. Stone blocks and plates have barely softened corners (4px), so they read as cut slabs. Buttons, chips, and the mode toggle are full pills (999px). The question field has no box at all: a bare 2px ink underline with no radius.

Three drawn forms recur. The sparkle is a four-point star with concave sides, one SVG path in a 24px viewBox. Hexagram lines are fully rounded bars (6 units tall, rx 3, 10-unit gaps, a 16-unit break in yin lines, on a 100-unit width), so the figure reads soft rather than ruled. The coin is a round cash coin with a square hole cut through to paper.

## Components

### Buttons
Confident and soft-edged: pills only.
- **Shape:** full pill (999px).
- **Primary (throw coins, landing only):** ink fill, paper text, 1.25rem at weight 700, -0.01em tracking, minimum 60px tall, 2rem side padding. Full width on mobile, auto width (280px minimum) on desktop. An 18px gold sparkle with the spark halo follows the label, with a 0.75rem gap.
- **Hover / Focus:** the fill lifts to ink-lifted, and the sparkle turns 90deg and scales to 1.15 over 0.5s on the ease-out curve. Pressed, the button scales to 0.98. Focus uses the global 2px ink outline at 3px offset.
- **Stone pill (new reading):** the same pill size and type in stone-deep with paper text, no sparkle; hover stone-deeper, pressed 0.98. Full width on phones, left-aligned at 240px minimum on desktop.
- **Header chips (language, boba):** transparent fill, 1px hairline border, ink text at 0.875rem, 40px tall. The language button is fixed at 3.5rem wide (700 label); the boba chip carries an 18px drawn cup icon whose pearls are cut out in paper. Hover washes to paper-bright with an ink border.
- **Copy button:** a hairline pill, fixed 9rem wide and 44px tall, with a 16px inline SVG copy icon (a check once copied) and a 0.9375rem 700 label. Below 360px it goes icon-only at 44px square; the label stays for screen readers.

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
A solid sage slab (stone fill, 4px radius, 14px/16px padding) that carries the landing's fact strip in its bottom-left corner: Body at weight 500, with trailing middle-dot separators. Two gold sparkles sit at the top right: a 36px sparkle breaking the top edge and a 16px sparkle inside the block. They twinkle in on load (from scale 0.2 and -60deg rotation, over 0.9s, staggered 0.15s and 0.35s). When the visitor throws, they flare (scaling to 1.5 and turning 45deg, then fading out over 0.45s).

### Hexagram Plate (signature)
The results screen's stone block (stone fill, 4px radius, 24px/20px/20px padding, moss text).
- **Single (vibes):** the hexagram fills the right side at clamp(120px, 38vw, 176px) wide, with the name and number captioned bottom-left. One 36px edge-breaking sparkle sits at the top left.
- **Pair (classic):** original then changed, joined by a 24px arrow. On phones the figures stack, each a 120px drawing on the right with its caption to the left, and the arrow points down, centered under the drawings. From 769px they sit side by side in a 120px / 1fr / 120px grid, the arrow centered on the drawing's height, names wrapping under each drawing within its width. Captions reserve three lines (3.3em) so the plate height stays constant across languages. No sparkle.
- **Lines:** all moss, except changing lines, which are gold with a 1.5px bronze edge and appear only on the changed hexagram in classic mode. The original hexagram and the vibes plate are always all moss.

### Readings
- **Vibe:** the vibe line at Headline size above the plate (its "your vibe today" heading prefix is visually hidden), then "real talk" and "the move" as plain labels over Reading text, 28px apart.
- **Classic:** after the plate, a shift notice (Body in ink-soft; "energy shift detected" in bold terra, or "stable energy" in bold ink), then one reading per hexagram: a hairline rule, 28px of space, the gua name in Headline Classic terra, a soft-ink meta line, and the classical judgment.
- **Asked:** the "I asked" Small label over the visitor's question in Body Lead soft ink, unquoted.

### Coins (signature)
Drawn SVG cash coins (100px, clamp(72px, 23vw, 88px) on phones, 2.5rem and 1.25rem gaps), carrying the coin cast shadow. Heads shows 乾隆通寶 read top, bottom, right, left in a Songti serif; tails is plain. While thrown they flip as a flat squash (scaleX to 0.08 and a 6px lift, 0.7s ease-in-out, looping), then land after 2.6s on the reading's real final throw and show a heads or tails label (Body, 700) underneath.

### Toss Bar
A 260 x 8px track with a 4px radius under the coins. Its fill runs a stone-deep to gold (55%) to terra gradient, sweeps while the coins spin, and sits full once they land.

### Sparkle (signature)
A four-point star in gold, drawn with `currentColor`. A screen gets at most three decorative sparkles: two on the landing's stone block plus one on the throw button, or one on the vibes plate. Separately, every ✨ in the copy is replaced inline with the same drawn mark at text size (0.85em, 0.15em side margins), so the brand's emoji voice is kept but drawn in the house style.

### Motion
Interface transitions use the ease-out curve cubic-bezier(0.16, 1, 0.3, 1), with 0.2s for color changes and 0.5s for the sparkle turn. Screens enter on the same curve over 0.8s. Under `prefers-reduced-motion`, the sparkle entrance, flare, and turn, and the state-entry animations, are removed.

## Do's and Don'ts

### Do:
- **Do** keep the header, content, and footer on one left edge inside the 640px column with the shared gutter.
- **Do** keep gold to sparkles, coins, and changing lines, with at most three decorative sparkles per screen.
- **Do** render every ✨ in copy as the inline drawn sparkle, and keep the playful lowercase copy and its emoji voice intact.
- **Do** set the display at 800 weight, lowercase, with tight leading (0.95) and tight tracking (-0.035em).
- **Do** keep the voice lowercase in both languages, with `text-transform: lowercase` under `:lang(zh)` and `html lang` set from the selected language.
- **Do** use the ink pill (999px, paper text) for the landing's throw button only, and stone-deep for filled controls on the toss and results screens.
- **Do** draw hexagram lines as soft rounded moss bars on the sage plate, with gold, bronze-edged changing lines only on the changed hexagram in classic mode.
- **Do** keep toggles and the copy button fixed width, and reserve text height, so switching EN and 中文 never shifts the layout.
- **Do** honor reduced motion by making sparkles static.

### Don't:
- **Don't** use glass, backdrop blur, or glow beyond the one spark halo, and don't use box-shadows for elevation; the coin cast shadow is the only box-shadow.
- **Don't** use gradients outside the coin face and the toss bar.
- **Don't** reintroduce mystic purple, cyan, pink, or starfield imagery, and don't drift into beige spa-zen.
- **Don't** use terracotta as a fill or as text on sage (2.9:1).
- **Don't** put black fills on the toss or results screens.
- **Don't** set any text in gold.
- **Don't** wrap results-screen labels in quotes; the landing's "ask the universe" is the one quoted label.
- **Don't** use emoji or icon-font glyphs as UI icons. Icons are inline SVG in currentColor.
- **Don't** put a sparkle on the wordmark.
- **Don't** use more than one stone block per screen.
