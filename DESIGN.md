---
name: Portal
description: A polished, luminous command surface for quick access to AI services.
colors:
  command-black: "#07030d"
  portal-violet: "oklch(62.7% 0.265 303.9)"
  portal-violet-hover: "oklch(71.4% 0.203 305.504)"
  portal-violet-deep: "oklch(55.8% 0.288 302.321)"
  aurora-magenta: "oklch(66.7% 0.295 322.15)"
  ambient-violet: "oklch(60.6% 0.25 292.717)"
  soft-lilac: "oklch(94.6% 0.033 307.174)"
  neutral-white: "#ffffff"
  neutral-black: "#000000"
typography:
  display:
    fontFamily: "var(--font-geist-sans), Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-geist-sans), Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.111
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-geist-sans), Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.333
  body:
    fontFamily: "var(--font-geist-sans), Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "var(--font-geist-sans), Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.2em"
rounded:
  control: "0.5rem"
  button: "0.75rem"
  card: "1rem"
  pill: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.portal-violet}"
    textColor: "{colors.neutral-white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.portal-violet-hover}"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.button}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.soft-lilac}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "rgb(255 255 255 / 0.04)"
    textColor: "{colors.soft-lilac}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  card-hover:
    backgroundColor: "rgb(168 85 247 / 0.10)"
    textColor: "{colors.soft-lilac}"
    rounded: "{rounded.card}"
  status-chip:
    backgroundColor: "rgb(255 255 255 / 0.06)"
    textColor: "rgb(255 255 255 / 0.50)"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  step-marker:
    backgroundColor: "{colors.portal-violet}"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.pill}"
    size: "2.5rem"
---

# Design System: Portal

## Overview

**Creative North Star: "The Violet Command Deck"**

Portal is a modern, polished control surface that keeps several AI services close without inheriting the density of an enterprise dashboard. A near-black field creates focus while violet light marks the few places where attention and action matter.

The interface is softly layered and luminous: translucent panels, fine purple borders, restrained ambient glow, and gentle hover lift create depth without becoming flashy. The result should feel precise and contemporary, never like a gaming/RGB interface or a generic chatbot clone.

**Key Characteristics:**

- Near-black surfaces with a focused violet and magenta light vocabulary.
- Spacious, centered compositions with clear hierarchy and limited simultaneous choices.
- Translucent cards with fine borders rather than opaque dashboard panels.
- Restrained motion that communicates responsiveness without spectacle.

## Colors

The palette is a dark command surface illuminated by a narrow violet spectrum, with white and lilac carrying the content hierarchy.

### Primary

- **Portal Violet** (`oklch(62.7% 0.265 303.9)`): The main action color for primary buttons, numbered steps, interactive text, and controlled glow.
- **Portal Violet Hover** (`oklch(71.4% 0.203 305.504)`): The brighter response color for primary-button hover states and stronger interactive emphasis.
- **Portal Violet Deep** (`oklch(55.8% 0.288 302.321)`): A saturated ambient source used in large, blurred background light.

### Secondary

- **Aurora Magenta** (`oklch(66.7% 0.295 322.15)`): A supporting atmospheric color reserved for broad, low-opacity background glow.
- **Ambient Violet** (`oklch(60.6% 0.25 292.717)`): A quieter atmospheric bridge used sparingly in the background light field.

### Neutral

- **Command Black** (`#07030d`): The dominant page background and visual anchor.
- **Soft Lilac** (`oklch(94.6% 0.033 307.174)`): The near-white purple used for card titles and violet-tinted foreground emphasis.
- **Neutral White** (`#ffffff`): Primary text and high-contrast actions, reduced with opacity for secondary copy and borders.
- **Neutral Black** (`#000000`): Text placed on white controls.

### Named Rules

**The Narrow Spectrum Rule.** Violet and magenta are the only chromatic voices; do not expand the interface into a rainbow or RGB palette.

**The Light, Not Paint Rule.** Accent colors should appear as focused actions, borders, or diffused light rather than large opaque color blocks.

## Typography

**Display Font:** Geist (with Arial and sans-serif fallbacks)

**Body Font:** Geist (with Arial and sans-serif fallbacks)

**Character:** Precise and contemporary. One clean sans-serif family carries the full interface, using size, weight, opacity, and restrained tracking to establish hierarchy.

### Hierarchy

- **Display** (bold, 3rem mobile / 4.5rem desktop, tight line height): Landing-page hero statements only.
- **Headline** (bold, 2.25rem mobile / 3.75rem desktop, tight tracking): Page titles and major section headings.
- **Title** (semibold, 1.25rem-1.5rem): Cards, guide steps, and compact content-group headings.
- **Body** (regular, 1rem-1.125rem, relaxed line height): Descriptions and instructional content, generally constrained to readable widths.
- **Label** (semibold, 0.75rem-0.875rem): Navigation, actions, status chips, and uppercase section eyebrows; eyebrows use wide tracking.

### Named Rules

**The One Typeface Rule.** Keep Geist as the visible interface voice; hierarchy comes from disciplined scale and weight, not decorative font switching.

## Layout

Pages use centered, single-column compositions with generous breathing room and responsive grids only where comparison or scanning benefits. Landing content uses a wide container up to 72rem, Help content uses up to 64rem, and download choices narrow to 48rem. Horizontal gutters remain 1.5rem on small screens.

The main rhythm is generous: major sections use 6rem vertical padding, content groups commonly separate by 2.5rem-3.5rem, and cards use 1.5rem-2rem internal padding. Grids begin as one column, become two columns at 40rem where appropriate, and use three columns at 48rem for feature scanning. Navigation links hide below 48rem while the brand and download action remain available.

**The Breathing-Room Rule.** Favor a few clearly separated groups over dense collections of controls; Portal is a focused command surface, not a dashboard.

## Elevation & Depth

The system is softly layered and luminous. Depth comes first from tonal transparency and fine borders, then from restrained shadows and very large blurred violet or magenta light fields. Cards remain almost flat at rest; interactive cards rise by 0.25rem on hover and gain a slightly brighter border and tint. Primary actions may use a colored ambient shadow, while instructional cards use a low black shadow for separation.

### Shadow Vocabulary

- **Primary Action Glow** (`0 20px 25px -5px rgb(168 85 247 / 0.30), 0 8px 10px -6px rgb(168 85 247 / 0.30)`): A broad violet-tinted shadow used only under primary violet controls.
- **Step Marker Glow** (`0 10px 15px -3px rgb(168 85 247 / 0.25), 0 4px 6px -4px rgb(168 85 247 / 0.25)`): A tighter violet-tinted shadow that keeps numbered markers legible against glass surfaces.
- **Instructional Lift** (`0 25px 50px -12px rgb(0 0 0 / 0.20)`): A large, low-opacity black shadow used on guide-step containers.
- **Logo Aura** (`0 0 35px rgb(168 85 247 / 0.80)`): A concentrated violet drop shadow around the floating Portal mark.

### Named Rules

**The Layer Before Shadow Rule.** Establish depth with transparency and borders before adding a shadow; shadows support hierarchy rather than decorating every surface.

## Shapes

The form language is gently rounded and consistent. Compact controls use 0.5rem corners, principal buttons and framed imagery use 0.75rem corners, and cards use 1rem corners. Status indicators and numbered step markers are fully pill-shaped or circular. Fine translucent borders define surface edges without making the interface feel boxed in.

## Components

### Buttons

- **Shape:** Gently rounded principal controls (0.75rem), with compact navigation actions using 0.5rem.
- **Primary:** Portal Violet with white text, semibold labeling, generous horizontal padding, and a restrained violet glow.
- **Hover / Focus:** Hover brightens to Portal Violet Hover; focus remains clearly visible and should use the violet family without introducing another accent.
- **Secondary:** Transparent with a low-opacity purple border and Soft Lilac text; hover adds a faint violet wash.

### Chips

- **Style:** Fully rounded, translucent white surface with a fine white border and small muted label.
- **State:** Used for compact availability or status information, not as a decorative badge collection.

### Cards / Containers

- **Corner Style:** Gently rounded cards (1rem).
- **Background:** Translucent white over Command Black, allowing ambient light to remain visible.
- **Shadow Strategy:** Flat or nearly flat by default; instructional steps may use low black lift.
- **Border:** Fine, low-opacity violet stroke that strengthens on interactive hover.
- **Internal Padding:** 1.5rem for compact cards and up to 2rem for primary download or guide surfaces.

### Navigation

- **Style:** A fixed, translucent Command Black bar with backdrop blur and a fine violet divider. Brand and download action anchor opposite sides; intermediate links are quiet white and brighten on hover.
- **Responsive behavior:** Hide intermediate links below 48rem while preserving the brand and primary download action.

### Guide Steps

- **Style:** A translucent card pairs a circular Portal Violet number marker with a semibold Soft Lilac title. Body content aligns beneath the title on wider screens and retains comfortable reading rhythm.

## Do's and Don'ts

### Do:

- **Do** preserve generous spacing, strong hierarchy, and a limited number of simultaneous actions.
- **Do** use translucent surfaces, fine violet borders, and restrained glow to create softly layered depth.
- **Do** keep motion smooth and purposeful, such as gentle lift, slow ambient drift, and the floating logo.
- **Do** maintain clear contrast with white or lilac foregrounds over Command Black.

### Don't:

- **Don't** turn Portal into a cluttered enterprise dashboard with dense panels, metrics, and competing controls.
- **Don't** use rainbow gradients, neon RGB accents, or gaming-interface decoration.
- **Don't** imitate generic chatbot layouts, chat bubbles, or message-composer-first compositions as the brand language.
- **Don't** cover large regions with opaque purple when a focused action, fine border, or diffused glow can carry the accent.
