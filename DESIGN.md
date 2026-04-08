# Design Brief — Webora Digital Solutions

## Purpose & Tone
Premium showcase website for a digital agency. Tone: luxury, refined, editorial/magazine aesthetic. Target: executives, business owners, and creative professionals seeking high-end digital solutions.

## Differentiation
Aurora gradient mesh backgrounds with floating orbs. Gold glassmorphism cards replacing the original neon aesthetic. Serif typography for premium editorial feel. Bento grid layouts with asymmetric card arrangements and smooth scroll-triggered reveals.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary (Gold) | `0.72 0.18 73` | CTAs, highlights, brand accent |
| Secondary (Navy) | `0.08 0.01 280` | Primary background |
| Accent (Aurora Purple) | `0.65 0.22 308` | Gradient overlays, hover states |
| Tertiary (Cyan) | `0.58 0.18 198` | Aurora gradients, secondary accents |
| Muted | `0.35 0.02 280` | Borders, subtle dividers |
| Text (Light) | `0.92 0.02 280` | Primary text, high contrast |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Fraunces (Serif) | Headings, hero title, section titles |
| Body | Lora (Serif) | Body text, description, UI labels |
| Mono | Geist Mono | Code blocks, technical content |

## Elevation & Depth

**Surface Hierarchy:**
- L0: Dark navy backgrounds (`0.08`) — primary page background
- L1: Slightly elevated navy (`0.12`) — card backgrounds, section panels
- L2: Medium elevation (`0.15`) — modals, popovers
- L3: Gold glassmorphism (`0.72 0.18 73 / 0.12`) — premium interactive elements

**Glassmorphism:**
- Dark glass: `bg-[oklch(0.12 0.01 280 / 0.5)] backdrop-blur-[20px]`
- Gold glass: `bg-[oklch(0.72 0.18 73 / 0.12)] backdrop-blur-[20px]`

## Structural Zones

| Zone | Background | Treatment | Border |
|------|-----------|----------|--------|
| Header/Nav | L0 Navy | Sticky, gradient underline on scroll | Gold border-b, 1px |
| Hero | L0 Navy + Aurora gradient overlay | Mesh background, floating orbs | None |
| Sections | Alternating L0 + L1 Navy | Subtle aurora gradient accents | Minimal |
| Cards | L1 Navy or gold glass | Bento grid, asymmetric layout | 1px gold / muted |
| Footer | L1 Navy | Elevated treatment, links in gold | Gold border-t |

## Spacing & Rhythm

- **Large sections**: 100px (vertical rhythm)
- **Card gaps**: 24px (grid)
- **Internal padding**: 36-44px (premium breathing room)
- **Micro-spacing**: 8px, 12px (interactive elements)

## Component Patterns

**Buttons:**
- Primary: Gold background, navy text, hover lift + glow shadow
- Secondary: Gold border, gold text, navy background
- Hover state: All buttons scale 1.04, box-shadow expands

**Cards:**
- Bento grid (3-4 column on desktop, stack on mobile)
- Gold glass or dark glass treatment
- 1px border with 0.3 opacity gold or muted
- Rounded corners: 12-16px
- Hover: translateY(-4px), border brightens

**Text:**
- Gold gradient text for premium labels (`.text-gradient-gold`)
- High-contrast light text on dark backgrounds
- Serif headings for editorial feel

## Motion

**Entrance animations:**
- Fade-up: opacity 0→1, translateY 20px→0, 0.6s ease-out
- Float: Continuous Y-axis drift, 4s ease-in-out infinite
- Aurora-glow: Opacity + scale pulse, 3s ease-in-out infinite

**Interaction:**
- Hover: Smooth transitions 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Scale: 1.04 on buttons, 1.02 on cards
- Lift: translateY(-4px) to (-6px) on hover

**Scroll-triggered reveals:**
- Elements fade up on scroll into view
- Staggered animation for card lists (80ms between items)

## Constraints

- Preserve all original contact information exactly (emails, phone, WhatsApp, LinkedIn)
- Maintain hero section layout with badge, title, subtitle, CTAs, stats
- Services, pricing, team, process sections intact
- No animations affecting accessibility or performance
- Mobile-first responsive design (sm, md, lg breakpoints)

## Signature Detail

**Aurora mesh background:** Radial gradients in purple (308°) and cyan (198°) creating a subtle depth effect. Animated floating orbs with `blur(80px)` create a soft, premium depth. The combination of dark navy base with aurora overlays establishes a distinctive luxury tech aesthetic distinct from the original neon green.

## Accessibility

- Text contrast: AA+ on all foreground-background combinations
- Focus states: Gold ring with 2px border
- Motion: Respects `prefers-reduced-motion`
- Semantic HTML with ARIA labels on interactive elements
