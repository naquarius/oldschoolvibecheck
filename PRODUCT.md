# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two groups, equally important:

- **Curious newcomers:** young adults who don't know the I Ching and use it as a fun vibe check on a real question they have. Mostly on their phone.
- **Bilingual and diaspora users:** people with some Chinese cultural familiarity who want the classical text and a relatable modern reading, switching between English and 中文.

The product started as the maker's own tool for learning I Ching casting properly.

## Product Purpose

Vibe Check lets someone type a question, cast a hexagram with the three-coin method, and get an answer they can understand. Each result shows the classical judgment next to a modern "vibe" reading.

The classical text is hard to read. The modern readings exist so the answer makes sense without a translator or a teacher. Success: the person casts, understands what the hexagram says about their question, and wants to come back.

## Positioning

- **Real casting:** the authentic three-coin method, including changing lines and the changed hexagram. It is not a random fortune.
- **Slang translation:** every hexagram has a Gen-Z "the vibe / real talk / the move" reading next to the classical judgment.
- **Truly bilingual:** full English and 中文 content, both written as first-class versions.
- **Free, no account:** a static site with no login, supported only by a voluntary tip link.

## Operating Context

- Flow: type a question (optional) → throw coins (about 3 seconds of animation) → read the result. The user can switch between "vibes" and "classic" modes, copy the result to share, and start a new reading.
- Language and mode preferences persist in the browser.
- Mobile is the main context.

## Capabilities and Constraints

- Static Next.js export (`output: 'export'`). No backend, no accounts. This must stay true.
- Casting logic: `lib/core/coin-logic.ts`, `lib/core/qigua.ts`. Hexagram data: `lib/data/gua-data.ts`. Modern readings: `lib/data/vibes/{en,zh}.ts`. UI strings: `lib/i18n/ui/{en,zh}.ts`.
- Classical accuracy is required: hexagram data, line order, and judgments stay faithful to the source text.
- Mobile-first: the phone layout is the primary layout.
- Terminology: 卦 (gua, hexagram), 爻 (yao, line), changing lines, original hexagram, changed hexagram, "vibes" mode, "classic" mode.

## Brand Commitments

- Name: **Vibe Check** (repo: Old School Vibe Check). Tagline: "ancient wisdom, modern vibes" / 古老智慧，现代氛围.
- Voice: playful, lowercase, lightly emoji, joking, internet slang. This tone is part of the brand and must be kept.
- Support link: Buy Me a Coffee (`buymeacoffee.com/earthedsouls`), shown as a boba button.

## Evidence on Hand

- Full hexagram data and bilingual modern readings in `lib/data/`.
- Paper, sage, and terracotta textures in `public/textures/`.
- There are no testimonials, user counts, press, or reviews. Future work must not invent any.

## Product Principles

1. **Accurate underneath, playful on top.** The casting and the classical text are never simplified; only the explanation is.
2. **Understanding beats mystique.** A reading is only useful if the person gets what it means for their question.
3. **Two languages, equal care.** Neither English nor 中文 is a translation afterthought.
4. **Zero friction.** No account, no paywall, no backend. Open, ask, cast.
