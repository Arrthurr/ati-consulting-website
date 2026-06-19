---
name: Kinship & Culture
colors:
  surface: '#fff8f5'
  surface-dim: '#f3d4bf'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#ffeadc'
  surface-container-high: '#ffe3d0'
  surface-container-highest: '#fbddc7'
  on-surface: '#28180b'
  on-surface-variant: '#43474f'
  inverse-surface: '#3f2d1e'
  inverse-on-surface: '#ffede3'
  outline: '#747780'
  outline-variant: '#c3c6d0'
  surface-tint: '#405f8e'
  primary: '#001836'
  on-primary: '#ffffff'
  primary-container: '#042d59'
  on-primary-container: '#7796c8'
  inverse-primary: '#a9c8fd'
  secondary: '#895100'
  on-secondary: '#ffffff'
  secondary-container: '#fea945'
  on-secondary-container: '#6e4000'
  tertiary: '#001a31'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d2f4d'
  on-tertiary-container: '#7a97ba'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a9c8fd'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#274774'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#ffb86c'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#683d00'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#acc9ee'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#2b4968'
  background: '#fff8f5'
  on-background: '#28180b'
  surface-variant: '#fbddc7'
typography:
  display:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style

The design system for ATI Consulting, LLC is built on the foundation of **Partnership**. Unlike traditional corporate consultancy aesthetics that lean toward rigid grids and cold efficiency, this system embraces a "Human-First" approach to organizational culture. It is professional, authoritative, and deeply stable, yet it feels warm and accessible.

The visual style is a blend of **Modern Minimalism** and **Tactile Organicism**. We avoid the "stacked box" look by utilizing asymmetrical layouts, sweeping organic curves inspired by the brand logo, and a warm, layered color palette. The goal is to evoke the feeling of a high-end, thoughtful conversation in a comfortable, sunlit office.

**Key Brand Pillars:**
- **Wisdom:** Reflected through deep navy tones and stable serif typography.
- **Vitality:** Expressed through the vibrant amber accent and fluid motion.
- **Approachability:** Achieved through soft, warm background tiers and generous white (or "cream") space.

## Colors

The palette is anchored in a deep, trustworthy Navy (#042D59) and energized by a warm Amber (#FDA844). The background strategy moves away from stark white to a tiered system of warm neutrals, creating a "parchment" effect that reduces eye strain and feels more organic.

- **Primary (Navy):** Used for primary branding, headlines, and high-emphasis buttons.
- **Secondary (Amber):** Reserved for interactive accents, notifications, and call-to-action highlights.
- **Text Hierarchy:**
    - **Primary Text (#042D59):** Best for maximum legibility on light backgrounds.
    - **Secondary Text (#3D5A7A):** A softer blue for subheaders and body text to reduce visual weight.
    - **Tertiary Text (#7A6352):** A warm, earthy brown for metadata, captions, and subtle labels.
- **Background Tiers:** The UI uses #FDF8F3 as the base, with #F5ECE0 for cards to create depth without the need for heavy shadows.

## Typography

This design system utilizes a sophisticated pair of typefaces to balance tradition with modernity.

**Libre Caslon Text** is used for headlines to provide a literary, established, and authoritative voice. It signals deep experience and intellectual rigor.

**Work Sans** serves as the functional workhorse for body copy and UI elements. Its clean, professional, and slightly friendly terminals ensure that information remains accessible and easy to digest.

**Usage Notes:**
- Maintain generous line heights (1.6x) for body text to support the "organic flow" and readability.
- Use `label-sm` with slight letter-spacing for category tags or small caps subtitles to add a touch of editorial polish.

## Layout & Spacing

The layout philosophy rejects rigid, boxy constraints in favor of a **Fluid, Breathable Grid**. 

- **The Flow:** Content should follow an "S-curve" flow where possible, mirroring the swoosh in the brand logo. This means alternating alignment of text and imagery to create a rhythmic, natural progression down the page.
- **Section Breaks:** Instead of hard lines, use subtle shifts in background tiers (e.g., transitioning from the Page color to the Card color) to define sections.
- **Desktop:** A 12-column grid with wide gutters (24px) and significant outer margins (at least 64px) to ensure content feels centered and calm.
- **Mobile:** A single-column layout with 20px side margins. High-level headers should scale down to ensure they don't break awkwardly.

## Elevation & Depth

To maintain a "partnership" tone that feels grounded, this design system avoids floating elements or harsh shadows. 

**Tonal Layering:** Depth is achieved primarily through the three background tiers. A card (#F5ECE0) sitting on the page background (#FDF8F3) provides enough contrast to signify hierarchy without needing a shadow.

**Soft Inclusion:** Where shadows are absolutely necessary (such as on an active primary button), use a very soft, diffused "Ambient Shadow" with a slight tint of the Primary Navy: `box-shadow: 0 10px 30px -10px rgba(4, 45, 89, 0.15);`. This feels more like a gentle lift than a heavy drop.

## Shapes

The shape language is **Soft and Approachable**. We use a "Rounded" standard (0.5rem base) to avoid the aggression of sharp corners, while maintaining more structure than a fully "Pill" design.

The logo's "swoosh" should be used as a decorative graphic element — often as a large, low-opacity background watermark or a divider — to break up horizontal lines and reinforce the organic flow.

## Components

### Buttons
- **Primary:** Solid Primary Navy (#042D59) with white Work Sans text. 0.5rem corner radius.
- **Secondary:** Outlined in Primary Navy with a transparent background.
- **Accent/CTA:** Solid Amber (#FDA844) with Primary Navy text. Used only for the "final" conversion action (e.g., "Book a Consultation").

### Cards
Cards should not have borders. Use the #F5ECE0 background color to distinguish the card from the page. For "Featured" cards, use a 1px border in #E8DDD0.

### Input Fields
Inputs should use the #E8DDD0 background color with a 2px bottom border in Primary Navy when focused. This creates a "workspace" feel that is less boxed-in than traditional inputs.

### Lists & Navigation
Navigation should be minimalist, using Work Sans in the Primary Navy color. Avoid heavy hover states; use a simple transition to the Amber color or a subtle 2px underline to indicate the active state.

### Cultural Callouts
A custom component for this system: the "Insight Quote." A large-scale Libre Caslon italicized quote, framed by an organic "swoosh" graphic, used to highlight organizational wisdom or client testimonials.