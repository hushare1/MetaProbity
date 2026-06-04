<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# ok. got it. So let's use Static multi-page HTML + CSS + JS, with a strong design system, and embedded video placeholders with polished animation, scroll effects, video, hover states, transitions, and a very eye-catching design using CSS and JavaScript. Yes, let's prepare technical implementation brief for copilot.

Yes — here is a **technical implementation brief for Copilot** for the website you want to build.[^1][^2][^3]

## Build objective

Build a **professional, visually impactful, static multi-page website** using **HTML, CSS, and JavaScript only**. The site must feel premium, modern, and enterprise-grade, with polished motion, scroll effects, hover states, transitions, embedded video placeholders, and strong typography, while remaining fast, responsive, and easy to host as a static site.[^2][^3][^4][^1]

The website tells the story of a DSRM research journey into enterprise AI adoption, featuring:

- Page 1: The Beast and the Gap,[^4]
- Page 2: Research Through DSRM,[^5][^4]
- Page 3: Built Artefacts — GridSense and OsciProbity,[^4]
- Page 4: Frameworks and Artefacts.[^6][^7][^8][^9]


## Stack

Use this exact stack:

- **HTML5** for multi-page structure.[^1]
- **CSS3** for all styling, design system, responsiveness, and animation.[^3]
- **Vanilla JavaScript** for interactions, scroll reveals, theme toggle, navigation behaviour, and lazy video embed replacement.[^2][^3]
- **No framework** such as React, Next.js, or Vue.[^1]
- **No backend** and **no login/authentication** in V1.[^10][^11]
- **No database**.[^12]
- Use **embedded video placeholders** that convert to iframe embeds on click for performance.[^13][^2]


## Site architecture

Create a static multi-page site with this structure:[^1]

```text
enterprise-ai-site/
├── index.html
├── research.html
├── artefacts.html
├── frameworks.html
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── animations.css
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   ├── video-embed.js
│   │   └── theme.js
│   ├── images/
│   │   ├── framework-guardrails.png
│   │   ├── framework-hourglass.png
│   │   ├── framework-enterprise-ai.png
│   │   ├── framework-engineering-disciplines.png
│   │   ├── gridsense-poster.jpg
│   │   ├── osciprobity-poster.jpg
│   │   └── site-og-image.jpg
│   └── icons/
│       └── favicon.svg
└── README.md
```


## Routing and navigation

Use four separate HTML pages:

- `index.html` = Page 1, The Beast and the Gap
- `research.html` = Page 2, Research Through DSRM
- `artefacts.html` = Page 3, Built Artefacts
- `frameworks.html` = Page 4, Frameworks and Artefacts[^4]

All pages must share:

- the same header,
- the same footer,
- the same navigation labels,
- the same design system,
- and consistent page transition behaviour.[^4]

Navigation labels:

- The Gap
- Research
- Artefacts
- Frameworks
- Contact[^4]

Mark the current page clearly in the nav.

## Design system

Create a strong shared design system using CSS variables.[^1]

### Visual character

The site should feel:

- premium,
- dark and cinematic on Page 1,
- editorial and structured on Page 2,
- product-case-study oriented on Page 3,
- and toolkit/library-like on Page 4.[^4]

Avoid:

- generic startup SaaS look,
- neon gradients,
- glowing blobs,
- cartoon AI motifs,
- bubbly cards everywhere,
- and overdecorated layouts.[^4]


### Typography

Use a strong modern font pairing via CDN.
Recommended direction:

- Display/headings: elegant, distinctive sans or serif-sans contrast
- Body: clean, highly readable sans-serif[^4]

Typography goals:

- strong hero heading,
- disciplined body text,
- clear hierarchy,
- enterprise-grade polish.


### Color system

Use a restrained, premium palette:

- dark neutral backgrounds,
- warm or slightly desaturated surfaces,
- one primary accent,
- one muted secondary accent at most.[^4]

Pages 2–4 may become slightly lighter or more structured, but the whole site must feel unified.[^4]

### Spacing and layout

Use a consistent spacing scale and responsive grid system.[^14][^1]
Requirements:

- 375px mobile first,
- smooth scaling to desktop,
- max-width containers,
- generous whitespace,
- clear section rhythm,
- no cramped blocks.[^14]


## Motion and interactions

The site must be visually alive but not excessive.[^15][^3]

### Required motion patterns

Implement:

- fade-up reveal on scroll,
- subtle parallax or depth effect in hero areas,
- hover elevation and transition on cards/buttons,
- animated underline or active state in navigation,
- smooth section transitions,
- image and framework reveal animations,
- gentle motion for timeline/stage elements.[^3][^15]


### Animation principles

- Motion should feel polished and intentional.
- No distracting looping gimmicks.
- Respect `prefers-reduced-motion`.
- Use CSS transitions where possible and JavaScript only where needed.[^3]


### Scroll behaviour

- Smooth scrolling for anchor links where relevant.[^16]
- Use `IntersectionObserver` or modern scroll-driven approaches for reveal animations.[^15][^3]


## Video implementation

Page 3 must include **video placeholders**, not immediately loaded heavy embeds.[^13][^2]

### Required behaviour

- Show a poster image with a custom play button.
- On click, replace the poster block with the actual iframe embed.
- Support responsive aspect ratio.
- Keep layout stable before load.[^2][^13]

Create two reusable video placeholder components:

- GridSense demo video placeholder
- OsciProbity demo video placeholder[^4]

Use placeholder URLs for now, clearly marked for later replacement.

## Shared components

Create reusable shared UI patterns in plain HTML/CSS/JS.

### Required components

- Header with logo/site title, nav, and optional theme toggle
- Footer with compact site summary and contact area
- Hero section
- Section intro block with eyebrow + heading + paragraph
- Two-column comparison panels
- Feature cards
- Pull quote block
- Timeline / stage strip
- Framework display card
- Video embed placeholder card
- CTA block
- Contact / register-interest block[^4]


## Page-specific implementation

### Page 1 — `index.html`

Purpose: dramatic entry page introducing the core problem.[^4]

Must include:

- dark cinematic hero,
- enterprise problem section,
- AI vs enterprise contrast section,
- research question section,
- two-mode section,
- transition-path preview,
- CTA to Page 2.[^4]

Visual emphasis:

- strong hero treatment,
- eye-catching but restrained motion,
- asymmetry where helpful,
- more atmospheric than later pages.[^4]


### Page 2 — `research.html`

Purpose: structured, credible explanation of DSRM and how the research was conducted.[^5][^4]

Must include:

- intro hero,
- why DSRM section,
- research question block,
- DSRM step-by-step section,
- two artefacts / two build modes section,
- findings section,
- frameworks emergence section,
- CTA to Page 3.[^5][^4]

Visual emphasis:

- cleaner layout,
- more grid discipline,
- academic/professional editorial feel.


### Page 3 — `artefacts.html`

Purpose: show GridSense and OsciProbity as real products.[^4]

Must include:

- page intro,
- GridSense section with video placeholder,
- OsciProbity section with video placeholder,
- AI-assisted build-mode comparison,
- technology footprint section,
- CTA to Page 4.[^4]

Visual emphasis:

- product case study layout,
- screenshots/video-first design,
- balanced technical credibility and polish.


### Page 4 — `frameworks.html`

Purpose: present framework outputs and future monetisation path.[^7][^8][^9][^6]

Must include:

- framework intro,
- Enterprise AI Framework section,
- Hourglass Model section,
- Guardrails Framework section,
- AI Engineering Disciplines section,
- future report / artefact pack / register-interest CTA.[^8][^9][^6][^7]

Visual emphasis:

- library/toolkit feel,
- clean framework showcase,
- subtle commercial readiness.


## Content handling

Use the provided final content drafts as the source text for Pages 1 and 2.[^4]
Build the HTML so content is:

- easy to replace,
- semantically structured,
- split into clean sections,
- and not trapped in giant unreadable blocks.[^1]

Use semantic HTML:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`[^17]


## Accessibility requirements

The site must be accessible and professional.[^17]

Implement:

- semantic HTML,
- keyboard accessible nav,
- visible focus states,
- sufficient text contrast,
- alt text on all images,
- labelled buttons,
- reduced-motion support,
- mobile-friendly tap targets.[^14][^17]


## Performance requirements

Because this is a static site, it should feel fast and clean.[^12][^2]

Implement:

- optimised image loading,
- lazy-load below-the-fold images,
- on-demand video embed loading,
- minimal JS,
- no unnecessary third-party libraries,
- stable layout with defined media dimensions.[^13][^2]


## JavaScript responsibilities

### `main.js`

- nav interactions
- active nav states
- mobile menu if used
- shared utilities


### `animations.js`

- scroll reveal logic
- staggered card reveals
- optional subtle hero motion
- reduced-motion fallback


### `video-embed.js`

- click-to-load iframe replacement
- responsive video containers
- poster-to-video transition


### `theme.js`

- optional dark/light theme toggle
- persistent in-memory behaviour only, no localStorage if avoidable[^4]


## Responsive behaviour

The site must look polished on:

- mobile 375px,
- tablet 768px,
- desktop 1280px+.[^14]

Responsive rules:

- stack columns on mobile,
- preserve hero impact without oversized text,
- keep nav usable on small screens,
- maintain consistent whitespace,
- keep framework images readable,
- keep videos responsive and well framed.[^2][^14]


## SEO and metadata

Include:

- descriptive `<title>` on each page,
- meta description,
- Open Graph tags,
- favicon,
- clean heading hierarchy,
- meaningful link text.[^12]


## Quality bar

The finished site must:

- look custom, not templated,[^4]
- feel high-end and deliberate,[^4]
- communicate clearly to enterprise and research audiences,[^4]
- and be ready for later addition of payment links or report enquiry without redesign.[^18][^4]


## Copilot instruction block

You can give Copilot this exact condensed instruction:

> Build a static four-page website using HTML, CSS, and vanilla JavaScript only. No React, no backend, no login, no database. Use a strong shared design system with premium typography, restrained enterprise-grade colour palette, responsive layout, polished scroll-reveal animations, hover states, transitions, and lazy-loaded video placeholders that convert to iframe embeds on click. Pages: index.html (The Beast and the Gap), research.html (Research Through DSRM), artefacts.html (Built Artefacts), frameworks.html (Frameworks and Artefacts). Shared header/footer/nav across all pages. Use semantic HTML, mobile-first responsive CSS, accessible focus states, and clean modular CSS/JS files. The visual style must be eye-catching and professional, not generic AI startup. Avoid neon gradients, glowing blobs, and cliché SaaS cards. Use the provided content drafts for Pages 1 and 2, and structure the code so Page 3 and 4 content can be added cleanly.

## Recommended next step

The most useful next deliverable is a **single master Copilot prompt** that combines:

- this technical brief,
- the website brief,
- and the final content draft for Pages 1 and 2
into one prompt ready to paste into GitHub Copilot.[^4]
<span style="display:none">[^19][^20][^21][^22][^23][^24][^25]</span>

<div align="center">⁂</div>

[^1]: https://www.rahulyadavdev.in/articles/folder-structure-for-static-websites

[^2]: https://pagespeedchecklist.com/on-demand-embedded-videos

[^3]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations

[^4]: Enterprise-AI-Adoption-Framework-From-Transformation-to-Improvement.md

[^5]: https://arxiv.org/abs/2006.02763

[^6]: AI-Guardrail-Framework.jpg

[^7]: Hourglass-Model-3.jpg

[^8]: Overall-Framework-2.jpg

[^9]: AI-Engineering-Discipline-Framework-4.jpg

[^10]: https://www.perrill.com/is-gated-content-still-a-smart-marketing-play-in-2025/

[^11]: https://capsulecrm.com/blog/gated-vs-ungated-content/

[^12]: https://www.bententerprise.com/the-2026-website-stack-what-to-use-and-what-to-avoid-2/

[^13]: https://web.dev/articles/embed-best-practices

[^14]: https://medium.com/@katheller/static-webpage-made-with-css-and-html-dos-and-donts-a404c82cd51

[^15]: https://www.youtube.com/watch?v=T33NN_pPeNI

[^16]: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

[^17]: https://www.youtube.com/watch?v=S05qYRnojcQ

[^18]: https://www.salesforce.com/ap/blog/what-is-gated-content/

[^19]: https://www.reddit.com/r/webdev/comments/1ejkvjb/best_practices_for_mostly_static_sites/

[^20]: https://github.com/orgs/community/discussions/147721

[^21]: https://www.reddit.com/r/webdev/comments/zgt7z7/what_is_best_practice_when_creating_website_with/

[^22]: https://www.reddit.com/r/Frontend/comments/oxrhxt/help_designing_a_multipage_static_website/

[^23]: https://codepen.io/praliedutzel/post/full-width-embedded-videos-with-placeholder-images

[^24]: https://forum.freecodecamp.org/t/current-best-practice-when-building-a-multi-page-website/149100

[^25]: https://www.joshwcomeau.com/animation/scroll-driven-animations/

