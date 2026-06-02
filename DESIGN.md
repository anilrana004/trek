# Design Brief: Global Trek

## Direction
Premium Himalayan trekking platform: editorial luxury meets adventure. Forest green primary, pure white backgrounds, amber strategic accents for CTAs and map trails. Photography-driven layout with distinct card signature (4px green top border).

## Tone
Trusted, confident, editorial; adventurous yet safe; community-driven; photography takes priority, UI wraps around imagery.

## Differentiation
**Hero:** Foxico-style floating card stack with parallax depth, staggered entrance animation, Ken Burns mountain imagery. **Mobile:** Airbnb-style horizontal swipe cards, bottom navigation bar. **Maps:** Illustrated SVG trails in amber (#F4A623) with pulsing waypoint dots. **Booking:** IndiHikes-style add-on boxes with green borders, amber selection highlight. **Reels:** YouTube video strip below hero.

## Color Palette

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| primary | 0.45 0.18 155 | #1A7A4C | Forest green, primary buttons |
| secondary | 0.95 0.005 155 | varies | Dark forest for header/footer |
| accent | 0.58 0.22 70 | #F4A623 | Amber for CTAs, map trails |
| background | 0.99 0.002 0 | #FFFFFF | Pure white, clean |
| card | 1.0 0.0 0 | #FFFFFF | Card backgrounds |
| foreground | 0.15 0.01 155 | #1A1A1A | Deep text |
| muted | 0.94 0.008 155 | #E8F5EE | Light green accents |

## Typography
- **Display:** Playfair Display (700/900) — hero headlines, editorial voice; hero text 96px, h2 5xl
- **Body:** DM Sans (400/500/600) — paragraphs, labels, forms; base 1rem
- **Accent:** Montserrat (600/700) — strong headings, labels, badges
- **Mono:** JetBrains Mono — prices, stats

## Elevation & Depth
**Cards:** 4px green top border + `heroCard` shadow (0 12px 48px rgba(26,122,76,0.15)). **Hover:** scale 1.02 + shadow elevation 250ms ease. **Layered imagery:** parallax-float animation (8px subtle Y-drift). **Maps:** amber trail lines with green pulsing waypoints.

## Structural Zones

| Zone | BG | Border | Notes |
|------|----|---------|---------|
| Header | #145C38 | bottom 1px | White text, nav links |
| Hero | Video/image + gradient overlay | none | Full viewport, floating cards |
| Content | #FFFFFF | none | White cards with 4px green top, 16px gaps |
| Sidebar (booking) | #FFFFFF | 1px #E8F5EE | Sticky desktop, bottom-sheet mobile |
| Footer | #1A7A4C | top 1px | White text, 8-column links |

## Spacing & Rhythm
- **Desktop:** 20rem sections (section-py-desktop), 16px card gaps, 12px UI micro-spacing
- **Mobile:** 12rem sections, 12px card gaps, generous breathing room

## Component Patterns
- **Buttons:** Primary (green bg + white text), CTA (amber bg + white text), Secondary (outlined green)
- **Cards:** White bg, 4px #1A7A4C top border, `heroCard` shadow, 12px radius
- **Badges:** Green bg, white text, 4px radius, uppercase, minimal padding
- **Inputs:** Green border on focus, DM Sans 16px, padding 12px
- **Add-on boxes:** 2px #E8F5EE border, white bg; selected state: amber border + rgba(244,166,35,0.08) bg

## Motion & Animation
- **Entrance:** `floatInLeft` / `floatInRight` (0.6s cubic-bezier), card-stagger (0.6s, 40px stagger)
- **Hover:** scale 1.02 + shadow, 250ms ease
- **Loop:** `parallaxFloat` (4s, 8px Y), `waypointPulse` (2s on map dots), Ken Burns hero (5s)
- **Reels:** `reelShimmer` (2s background-position slide)

## Constraints
- Light mode only; white background everywhere; no dark theme
- Green shadows exclusively (never black); minimal depth hierarchy
- Photography always prioritized; UI wraps around imagery
- AA+ contrast: 4.5:1 minimum on all text
- No flat design; every section has intentional elevation or depth

## Signature Details
1. **4px green top border** on all white cards — instant brand recognition
2. **Amber (#F4A623) accent** for booking CTAs, map trails, urgency signals
3. **Floating card stack** hero with parallax depth and staggered entrance
4. **Mobile bottom nav** with 5 icons; sticky booking sheet with animated button
5. **SVG map** with amber trails and pulsing green waypoint dots

## Accessibility
- ARIA labels on all interactive elements; alt text on images
- Keyboard navigation; skip-to-content link
- Focus visible (green 2px outline, 2px offset)
- No color-only communication; green + amber icons/labels paired with text

## Performance
- Lazy-load images, YouTube embeds, Leaflet map
- WebP format with JPEG fallback
- CSS animations use `transform` and `opacity` only
- Preconnect to Google Fonts, YouTube, Razorpay
