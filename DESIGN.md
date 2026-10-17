---
name: Vibe Check
description: ancient wisdom, modern vibes. A calm, modern-zen I Ching coin reading with one playful move.
colors:
  paper: "#f4f5f1"
  stone: "#a9b8a0"
  stone-deep: "#5f7357"
  ink: "#1e211e"
  ink-lifted: "#323832"
  ink-soft: "#4a514a"
  gold: "#c9a23a"
  line: "rgba(30, 33, 30, 0.14)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 12vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  small:
    fontFamily: "Schibsted Grotesk, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
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
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "60px"
  button-primary-hover:
    backgroundColor: "{colors.ink-lifted}"
  button-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.875rem"
    height: "40px"
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
---

# Design System: Vibe Check

## Overview

**Creative North Star: "The Soapstone and the Spark"**

A calm, modern-zen page where nothing competes with the question. Cool paper ground, near-black ink, one solid block of sage soapstone, and a handful of soft-gold four-point sparkles: the system's single playful move. Everything else is quiet, flat, and typographic. The world deliberately sidesteps the category's mystic purple and starfields, and equally the beige spa-zen opposite.

Density is low and single-column. One grotesk family carries the whole voice, set lowercase and heavy at display sizes, matching the product's playful lowercase copy. Depth comes from solid color and weight, never from shadows, gradients, glass, or glow. The header, content, and footer share one left edge inside a narrow column, so the page reads as one straight stack on a phone and a centered stack on desktop.

**Key Characteristics:**
- Cool paper white ground, ink text, one sage stone block per screen.
- Soft-gold drawn sparkles as the only ornament, and every ✨ in copy rendered as that same drawn mark.
- One grotesk family (Schibsted Grotesk), lowercase, 800 weight for display.
- Quoted labels in place of form chrome; underline-only fields; ink pill buttons.
- Flat surfaces with no shadows, gradients, or glass.
- One shared left edge for header, content, and footer.

## Colors

A restrained cool-neutral palette with one mineral green and one warm gold accent that appears only as drawn sparkles.

### Primary
- **Sage Soapstone** (stone): the one solid block on the landing, which carries the fact strip. Also the text-selection and scrollbar color. Ink on stone passes AA comfortably.
- **Deep Soapstone** (stone-deep): the functional green for progress fill and other state that has to be visible against paper. It also stands in for the legacy `--primary` / `--secondary` bridge tokens.

### Tertiary
- **Soft Gold** (gold): sparkles only. It is decorative and low-contrast against paper (about 2.2:1), so it never carries text or meaning.

### Neutral
- **Cool Paper** (paper): page ground, and the text color on ink buttons.
- **Ink** (ink): all primary text, the throw button fill, the question underline, and the focus outline.
- **Lifted Ink** (ink-lifted): hover fill for ink buttons. It is a small lift, not a color change.
- **Soft Ink** (ink-soft): subtitle, tagline, and footer text.
- **Hairline** (line): 1px borders on the header chips and the compact header.

### Named Rules
**The Gold Is Ornament Rule.** Gold appears only as the drawn four-point sparkle and the coins. It is never text, or a fill, border, or background on UI chrome.

**The Bronze Coin Rule.** The coins are always cast gold/bronze (gold face shading to #8a6420, #7a5a1e rim, #3d2a0b symbol), never a palette color (user-pinned).

**The One Stone Rule.** A screen gets at most one sage stone block. The stone is a slab of material, not a card style to repeat.

## Typography

**Display Font:** Schibsted Grotesk (loaded through next/font as `--font-sans`, weights 400/500/700/800)
**Body Font:** Schibsted Grotesk, falling back to PingFang SC, Hiragino Sans GB, Microsoft YaHei, then system-ui for 中文
**Label/Mono Font:** none distinct

**Character:** A single contemporary grotesk does all the work. The 800-weight display is set tight and lowercase so the question itself becomes the image, and the regular weights stay plain and readable.

### Hierarchy
- **Display** (800, clamp(2.75rem, 12vw, 4.75rem), 6rem at 769px and above, line-height 0.95, -0.035em, balanced wrap): the one question headline per screen.
- **Title** (800, 1.25rem, -0.02em): the lowercase "vibe check" wordmark. The compact header uses the same treatment at 1.125rem, and the throwing state title uses it at 1.75rem.
- **Body Lead** (400, 1.0625rem, 1.5, max 38ch, pretty wrap): the hero subtitle in soft ink, and the question field text.
- **Body** (500, 0.9375rem): the fact strip on the stone block. The desktop tagline uses the same size at 400 in soft ink.
- **Label** (700, 1rem): field labels, wrapped in typographic quotes (“ ”).
- **Small** (400 to 700, 0.875rem): footer text and header chip labels.

### Named Rules
**The Lowercase Voice Rule.** Display, wordmark, labels, and buttons stay lowercase, as the copy is written. Don't apply text-transform and don't use uppercase tracking.

**The Quoted Label Rule.** Form labels are set in bold and wrapped in curly quotes, as though the visitor is saying them. This is a native device of the world, not decoration to strip out.

## Layout

The layout is a single centered column with a 640px max width and a fluid gutter of clamp(16px, 5vw, 40px), shared by the header, main content, and footer so all three align on one left edge. Content is left-aligned. The page is a full-height flex column, and the footer sits at the bottom.

The vertical rhythm is loose and runs in steps of about 14, 28, and 36px. The stone block sits 28px below the header (40px on desktop), the hero is 32px below the block, the question is 36px below the hero, and the throw button is 28px below the question. The stone block's height is clamp(116px, 19vh, 176px) on mobile and a fixed 132px on desktop.

There is one breakpoint, at 769px. Above it, the tagline appears beside the wordmark, the display steps up to 6rem, and the throw button shrinks from full width to its content width with a 280px minimum. The phone layout is primary: the headline, field, and throw button all fit in the first 390x844 viewport.

## Elevation & Depth

The system is flat. There are no box-shadows, gradients, glass, or glow on any landing surface. Depth comes from solid color only: the ink pill and sage block stand on paper through value contrast. The one intentional overlap is the large gold sparkle, which sits 18px above the stone block's top edge so the ornament breaks the slab's outline.

### Named Rules
**The Flat Slab Rule.** Surfaces are solid fills on paper. When something needs emphasis, it gets ink or stone, not a shadow.

## Shapes

The form language has three corner values, each tied to a role. The stone block has barely softened corners (4px), so it reads as a cut slab. Buttons and header chips are full pills (999px). The question field has no box at all: it is a bare 2px ink underline with no radius. The sparkle is a four-point star with concave sides, drawn as a single SVG path in a 24px viewBox.

## Components

### Buttons
Confident and soft-edged: an ink pill with one gold spark.
- **Shape:** full pill (999px).
- **Primary (throw):** ink fill, paper text, 1.25rem at weight 700, -0.01em tracking, minimum 60px tall, 2rem side padding. It is full width on mobile and auto width (280px minimum) on desktop. An 18px gold sparkle follows the label, with a 0.75rem gap.
- **Hover / Focus:** the fill lifts to ink-lifted, and the sparkle turns 90deg and scales to 1.15 over 0.5s on the ease-out curve. Pressed, the button scales to 0.98. Focus uses the global 2px ink outline at 3px offset.
- **Compact primary (new reading):** the same ink pill at 44px tall, 0.9375rem, with no sparkle.
- **Header chip (language, boba):** transparent fill, 1px hairline border, ink text at 0.875rem (700 for the language label), 40px tall with a 44px minimum width. On hover, the fill becomes #fbfbf8 and the border turns ink. The boba chip carries an 18px drawn cup icon whose pearls are cut out in paper.

### Inputs / Fields
- **Style:** an underline-only textarea with a transparent background, 2px ink bottom border, and no radius, at least 88px tall. Text is Body Lead, and the placeholder is a muted ink (#646a64).
- **Label:** a Quoted Label sits directly above the field with a 4px gap.
- **Focus:** the native outline is removed and a second 2px ink rule is drawn under the border (box-shadow 0 2px 0 ink), which thickens the underline to 4px.

### Navigation
- **Style:** a single header row. The lowercase wordmark sits on the left with no sparkle, and the tagline appears after a middle dot on desktop only. The boba and language chips sit on the right with a 0.5rem gap and 18px vertical padding.

### Stone Block (signature)
A solid sage slab (stone fill, 4px radius, 14px/16px padding) that carries the fact strip in its bottom-left corner: Body at weight 500, with items separated by middle dots. Two gold sparkles sit at the top right: a 36px sparkle breaking the top edge and a 16px sparkle inside the block. They twinkle in on load (from scale 0.2 and -60deg rotation, over 0.9s, staggered 0.15s and 0.35s). When the visitor throws, they flare (scaling to 1.5 and turning 45deg, then fading out over 0.45s).

### Sparkle (signature)
A four-point star in gold, drawn with `currentColor`. A screen gets at most three decorative sparkles: two on the stone block and one on the throw button. Separately, every ✨ in the copy is replaced inline with the same drawn mark at text size (0.85em, 0.15em side margins), so the brand's emoji voice is kept but drawn in the house style.

### Motion
Every transition uses the ease-out curve cubic-bezier(0.16, 1, 0.3, 1), with 0.2s for color changes and 0.5s for the sparkle turn. Under `prefers-reduced-motion`, the sparkle entrance, flare, and turn, and the state-entry animations, are all removed.

## Do's and Don'ts

### Do:
- **Do** keep the header, content, and footer on one left edge inside the 640px column with the shared gutter.
- **Do** use gold only for the drawn four-point sparkle, with at most three decorative sparkles per screen, two on the stone block and one on the primary button.
- **Do** render every ✨ in copy as the inline drawn sparkle, and keep the playful lowercase copy and its emoji voice intact.
- **Do** set the display at 800 weight, lowercase, with tight leading (0.95) and tight tracking (-0.035em).
- **Do** wrap field labels in curly quotes and use underline-only fields.
- **Do** put primary actions in an ink pill (999px) with paper text.
- **Do** honor reduced motion by making sparkles static.

### Don't:
- **Don't** use gradients, glass, backdrop blur, or glow, and don't use box-shadows for elevation.
- **Don't** reintroduce mystic purple, cyan, pink, or starfield imagery, and don't drift into beige spa-zen.
- **Don't** use red or terracotta in the interface palette.
- **Don't** set any text in gold.
- **Don't** use emoji or icon-font glyphs as UI icons. Icons are inline SVG in currentColor.
- **Don't** put a sparkle on the wordmark.
- **Don't** use more than one stone block per screen.
