# MetaProbity Website

Enterprise AI adoption research website for **metaprobity.com**, built as a static frontend.

## What this project is

This repository contains the first two pages of the MetaProbity website:

- `index.html` — *The Beast and the Gap*
- `research.html` — *Research through Design Science*

The site is intentionally framework-free and uses semantic HTML, shared CSS design system files, and lightweight vanilla JavaScript interactions.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (CDN): `Syne` and `Inter`

## File structure

```text
.
├── README.md
├── index.html
├── research.html
└── assets
    ├── css
    │   ├── animations.css
    │   ├── base.css
    │   ├── components.css
    │   ├── pages.css
    │   └── variables.css
    ├── images
    │   ├── favicon.svg
    │   └── site-og-image.jpg
    └── js
        ├── animations.js
        ├── main.js
        └── theme.js
```

## Run locally

No build step is required.

1. Clone the repository.
2. Open `index.html` directly in your browser.
3. Navigate between `index.html` and `research.html` via the site navigation.

## Replacing placeholder images

Several visual placeholders are SVG blocks that include a `data-replace-with` attribute.

To replace them:

1. Find the placeholder element with `data-replace-with="..."`.
2. Copy the path from the attribute value.
3. Replace that placeholder block with an `<img>` tag pointing to the same path.

Example:

```html
<img src="assets/images/gridsense-screenshot.jpg" alt="GridSense screenshot" />
```

## Colour palette reference

- `--color-bg-deep: #08080f`
- `--color-bg-surface: #0f0f1a`
- `--color-bg-elevated: #16162a`
- `--color-accent-cyan: #00d4d4`
- `--color-accent-purple: #7b2fff`
- `--color-text-primary: #e8e8f0`
- `--color-text-muted: #8888aa`
- `--color-border: #2a2a45`
- `--gradient-accent: linear-gradient(90deg, #00d4d4, #7b2fff)`

## Fonts

- Headings/display: **Syne** (400, 700, 800)
- Body/captions/labels: **Inter** (400, 500, 600)

## Adding Pages 3 and 4 (`artefacts.html`, `frameworks.html`)

When extending this site:

1. Create `artefacts.html` and `frameworks.html` at the project root.
2. Link the same shared files:
   - `assets/css/variables.css`
   - `assets/css/base.css`
   - `assets/css/components.css`
   - `assets/css/pages.css`
   - `assets/css/animations.css`
   - `assets/js/theme.js`
   - `assets/js/main.js`
   - `assets/js/animations.js`
3. Reuse the shared header and footer pattern from existing pages.
4. Keep both desktop and mobile navigation consistent.

## Contact

For enquiries: **contact@metaprobity.com**
