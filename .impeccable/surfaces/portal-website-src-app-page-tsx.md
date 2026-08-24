---
version: 1
slug: "portal-website-src-app-page-tsx"
primary_target: "portal-website/src/app/page.tsx"
related_targets: ["portal-website/src/app/download/page.tsx","portal-website/src/app/help/page.tsx","portal-website/src/app/help/windows-install/page.tsx","portal-website/src/app/help/macos-install/page.tsx"]
---

# Portal website redesign

## Scope and mode

- Primary target: `portal-website/src/app/page.tsx` in Persuade mode.
- Related targets: Download in Persuade/Operate mode; Help and both installation guides in Read mode.
- Canonical information architecture: `/`, `/download`, `/help`, `/help/windows-install`, and `/help/macos-install`. Redirect legacy `/docs` routes to Help and remove `/pricing`.

## Audience, job, action, and proof

- People who already use several AI services arrive with browser-tab clutter and need to understand Portal within seconds.
- The primary action is downloading Portal for Windows or macOS. Help remains immediately available without competing with the download decision.
- Proof comes from the real Portal showcase video, the current Portal logo, truthful product capabilities, and the existing Windows/macOS installation screenshots. Do not invent testimonials, metrics, customer logos, press claims, security claims, or detailed fake chats.

## Chosen direction

- Direction: **The Window Choreographer**. The website behaves like a spatial desktop workspace: official AI windows move along disciplined paths into a compact Portal surface.
- Approved composition: `.impeccable/mocks/portal-home-panorama.png`.
- Memorable moment: the product film owns the first viewport while ChatGPT, Claude, and Gemini windows visibly converge into Portal; a compact lower-left copy dock keeps both platform downloads within reach.
- Preserve the real Portal mark. Replace the incumbent generic glow-and-card world.

## Responsive and interaction contract

- Desktop: an uncropped 2.39:1 product-film stage dominates the viewport. The copy dock floats over a quiet region and never obscures product action. One orchestrated convergence animation carries the motion language.
- Mobile: remove spatial overlap, stack the copy and platform actions, preserve the video aspect ratio, and convert window convergence into a short ordered sequence.
- Video states: poster/initial frame, loading, ready, playing, paused, loop, unsupported/error, and reduced-motion. Native controls remain keyboard reachable; no understanding depends on the soundtrack.
- The showcase is data-driven so one video can later become another video or a mixed video/image gallery without restructuring the page.

## Sampled visual record

- Approved comp size: 1536 x 1024.
- Page ground: `#040508`; navigation surface: `#111114`; stage ground: `#010109`; proof surface: `#08080d`.
- Active violet: `#9b81f3`; dim violet field: `#3b2e51`; foregrounds use off-white and cool gray sampled from the same comp family.
- Type character: a bold, broad grotesk for the thesis and compact grotesk for navigation, labels, and body copy. Use the Archivo variable family throughout, with scale and weight carrying the distinction.

## Implementation inventory

| Ingredient | Commitment | Medium |
| --- | --- | --- |
| Global navigation | Compact, translucent black window bar; Portal mark left; Product, Help, and platform download access | Semantic HTML/CSS and existing logo asset |
| First viewport | Film is the largest region; copy dock overlaps only negative space; no conventional centered hero | Semantic HTML/CSS |
| Showcase film | Real 20.17-second Portal video, uncropped; metadata preloading, a real product poster, reduced-motion behavior, and resilient fallback | Optimized 1920-wide MP4 plus semantic `video` |
| Convergence paths | Three service windows move toward a compact Portal widget in one coordinated sequence | Authored HTML/CSS/SVG; reduced-motion fallback |
| Platform actions | Windows primary and macOS secondary, equal semantic importance and clear focus/press states | Semantic links and authored SVG icons |
| Feature proof | Three product-specific behaviors paced as alternating quiet and dense passages | Semantic HTML/CSS with small authored diagrams |
| Download surface | Two operating-system choices, latest-release links, and installation-guide links | Reusable platform rows |
| Help index | Available installation guides plus honest future troubleshooting state | Reusable guide cards |
| Install guides | Persistent step rhythm, large screenshots, clear download action, native reading width | Semantic ordered lists and existing screenshots |
| Footer/contact | Quiet final action and `useprtl@gmail.com`; no inflated link directory | Semantic HTML/CSS |

## Component grammar

- Corners follow desktop windows: 18-24px for primary panes, 12-16px for controls, small circular status marks.
- Borders are single cool hairlines; elevation comes from tonal separation and one restrained violet active halo, not shadows on every surface.
- Primary buttons are solid violet with off-white type; secondary actions are dark panes with a violet focus line.
- Avoid bento grids, generic gradient blobs, rainbow neon, fake browser chrome, laptop mockups, dense dashboards, and large collections of equal cards.

## Constraints and open asset decisions

- Centralize release URLs in `portal-website/src/lib/downloads.ts` and keep latest-release asset URLs.
- Do not add a Back to Portal link on Download or Help surfaces.
- The supplied 35.6 MB `.mov` was converted to a 2.57 MB H.264/AAC MP4, and the poster was extracted from a verified frame showing Portal's six-service view.
- The media configuration defines typed sources and an optional gallery so a future video replacement or mixed video/image showcase does not require restructuring the page.
