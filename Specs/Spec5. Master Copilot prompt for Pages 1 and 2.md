<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# yes, let's do for page 1 and 2

Yes — below is a **master Copilot prompt for Pages 1 and 2** that combines the technical brief, design direction, and the final content draft into one build instruction set.[^1][^2]

## Copilot prompt

Build a **professional static multi-page website** using **HTML, CSS, and vanilla JavaScript only**. Do **not** use React, Next.js, Vue, Tailwind build tooling, backend code, login/authentication, or a database. The website must feel premium, enterprise-grade, visually impactful, and custom-designed rather than like a generic AI startup template.[^3][^4][^1]

This is a public research website about enterprise AI adoption. It tells the story of a Design Science Research Methodology journey that investigated the mismatch between probabilistic AI and deterministic enterprise structures, using two artefacts and producing reusable enterprise AI frameworks.[^2][^1]

### Build scope for this task

Only build:

- `index.html` for **Page 1 — The Beast and the Gap**
- `research.html` for **Page 2 — Research Through DSRM**
- shared CSS and JS files needed for these two pages[^1][^2]


### File structure

Use this structure:

```text
enterprise-ai-site/
├── index.html
├── research.html
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
│   │   └── theme.js
│   ├── images/
│   │   ├── site-og-image.jpg
│   │   └── favicon.svg
```


### Design direction

The website should use a strong shared design system with:

- premium typography,
- restrained enterprise-grade colour palette,
- strong contrast,
- clean spacing rhythm,
- polished hover states,
- scroll reveal effects,
- subtle motion,
- and a visually eye-catching but professional aesthetic.[^1]

Avoid:

- neon gradients,
- glowing blobs,
- cliché AI startup hero graphics,
- generic 3-column SaaS feature cards,
- cartoonish icons,
- or anything that looks like a template.[^1]


### Tone by page

- `index.html` should feel darker, more cinematic, more metaphor-driven, and emotionally strong.[^1]
- `research.html` should feel cleaner, more editorial, more structured, and more credible/academic.[^2][^1]


### Technical rules

- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.[^5]
- Responsive layout, mobile first, polished from 375px to desktop.[^6]
- Shared sticky header and shared footer across both pages.[^1]
- Navigation labels:
    - The Gap
    - Research
    - Artefacts
    - Frameworks
    - Contact[^1]
- Mark the current page in the nav.
- Include accessible focus states, keyboard-friendly navigation, and `prefers-reduced-motion` support.[^7][^5]
- Use CSS variables for colours, spacing, typography, radius, shadows, and transitions.[^3]
- Use vanilla JS only for:
    - mobile nav behaviour,
    - active nav state if needed,
    - theme toggle if included,
    - scroll reveal animations,
    - subtle hero motion if tasteful.[^8][^7]


### Motion requirements

Add polished but restrained motion:

- fade-up reveal on scroll,
- staggered reveal for cards,
- hover lift and transition on buttons/cards,
- animated underline or active state on nav,
- subtle hero depth motion,
- gentle section transitions.[^7][^8]

Do not overanimate. Motion should feel premium and intentional, not flashy.[^7]

### Shared visual system

Use a dark, premium palette with one restrained accent colour. Page 2 can be slightly calmer and more structured, but both pages must clearly belong to the same site.[^1]

### Shared components to implement

Create reusable visual patterns:

- sticky site header,
- page hero,
- eyebrow label,
- section intro block,
- two-column comparison section,
- feature card,
- pull quote block,
- timeline / stage strip,
- CTA block,
- footer.[^1]


### Accessibility and quality

- Strong colour contrast.
- No text too small on mobile.
- Buttons and links must be clearly interactive.
- Layout should feel high-end and spacious.
- No placeholder lorem ipsum.
- Use the exact content below.[^1]

***

## Page 1 — `index.html`

### Meta

Title: The Beast and the Gap | Enterprise AI Adoption Research
Description: A research journey into how enterprises can govern probabilistic AI without losing its value.[^1]

### Hero section

Eyebrow: Enterprise AI adoption research

Headline:
AI is powerful.
Organisations need control.[^1]

Subheading:
Generative AI behaves probabilistically, but enterprises are built on accountability, repeatability, and traceability. That mismatch is why so many organisations struggle to move from experimentation to safe adoption.[^1]

Support line:
A research journey into how enterprises can govern the beast without killing its value.[^1]

Primary CTA:
Explore the research

Secondary CTA:
See the artefacts

Design notes:

- Full-height hero or near full-height.
- Strong visual contrast.
- Atmospheric but restrained background treatment.
- The page should feel dramatic and memorable from the first screen.[^1]


### Section 1

Eyebrow:
The enterprise problem

Heading:
Why organisations falter on AI[^1]

Body:
Most organisations are not failing with AI because they lack ambition. They are faltering because their governance structures, compliance frameworks, audit expectations, and decision hierarchies were built for deterministic systems. When a consequential decision is challenged, an enterprise must be able to answer who decided what, based on what evidence, and under what policy.[^1]

Generative AI disrupts those assumptions. The same prompt can produce different answers, confidence is often unstated, reasoning can be opaque, and there is no native guarantee that an output will stay inside a compliance boundary or a defined risk threshold.[^1]

Pull quote:
The problem is not that AI is weak. The problem is that it behaves differently from the systems enterprises were designed to trust.[^1]

Design notes:

- Editorial section with strong readable typography.
- Use a pull quote treatment to break rhythm.


### Section 2

Eyebrow:
Two natures in conflict

Heading:
Probabilistic AI meets deterministic organisations[^1]

Left panel title:
AI behaves like this

Left panel bullets:

- Outputs can vary from one run to the next.[^1]
- Confidence is often implicit rather than explicit.[^1]
- Reasoning is difficult to inspect directly.[^1]
- Boundaries must be imposed from outside the model.[^1]

Right panel title:
Enterprises need this

Right panel bullets:

- Repeatability and reliable outcomes.[^1]
- Clear accountability and traceability.[^1]
- Defined risk thresholds and escalation paths.[^1]
- Auditability, explainability, and policy compliance.[^1]

Bridge sentence:
Between these two worlds sits the real enterprise AI challenge: not whether AI is useful, but how it can be made governable.[^1]

Design notes:

- Two-column comparison block.
- Strong contrast in visual styling between both sides.
- Keep it elegant, not infographic-heavy.


### Section 3

Eyebrow:
The research question

Heading:
What happens when the beast enters the enterprise?[^1]

Body:
This research began with a simple but difficult question. How can organisations safely adopt Generative AI when its inherently non-deterministic behaviour is in direct tension with the governed, rule-bound, and auditable structures that enterprises must maintain?[^1]

That question matters most in environments where decisions are consequential, regulated, and expected to stand up to scrutiny. In those settings, the challenge is not merely technical adoption; it is organisational alignment between uncertainty and control.[^1]

Design notes:

- Narrow centered text block.
- Make this feel important and reflective.
- Use whitespace generously.


### Section 4

Eyebrow:
What the research found

Heading:
There is not one path to enterprise AI. There are two.[^1]

Intro:
The research showed that organisations need two distinct ways of working with AI in parallel. Trying to force every AI initiative through one operating model creates confusion, kills useful experiments, and weakens governance where it matters most.[^1]

Card 1 title:
Transformative

Card 1 body:
This is the space for discovery. A small, cross-functional team works quickly, experiments freely, and uses AI as a colleague to explore what becomes newly possible. The aim is not immediate operational certainty, but learning velocity, new capability discovery, and evidence that a promising idea is worth pursuing.[^1]

Card 1 bullets:

- Small dedicated team.[^1]
- Domain expert, architect/design thinker, engineers.[^1]
- AI used as collaborator, not just tool.[^1]
- Fast cycles of hypothesis, prototype, stress-test, and learn.[^1]

Card 2 title:
Improvement

Card 2 body:
This is the space for governed deployment. AI is applied to repeatable tasks, bounded workflows, and measurable operational improvements, supported by hub-and-spoke governance, risk tiers, and human oversight where needed. The aim is not novelty for its own sake, but contained uncertainty, operational value, and enterprise trust.[^1]

Card 2 bullets:

- Repeatable, auditable workflows.[^1]
- Risk-tiered controls and guardrails.[^1]
- Human-in-the-loop where stakes are high.[^1]
- Measured against operational impact and reliability.[^1]

Design notes:

- Two large asymmetric cards.
- Transformative card slightly more fluid in styling.
- Improvement card more structured and grid-like.


### Section 5

Eyebrow:
The missing piece

Heading:
Organisations need a bridge between transformation and operations[^9][^1]

Body:
Transformative ideas cannot remain lab curiosities, and operational environments cannot absorb ungoverned experimentation. The research showed that what enterprises often lack is not imagination or control alone, but a deliberate transition path between the two.[^9][^1]

That path must gradually establish feasibility, governance fit, reliability, regulatory readiness, and operational ownership. It must also preserve the knowledge of the original builders long enough for operations teams to trust, absorb, and maintain what has been created.[^9][^1]

Stage sequence:
Lab → Validated Prototype → Controlled Pilot → Hub-Spoke Deployment → Continuous Improvement[^9][^1]

Closing line:
That is the journey this research set out to investigate.[^1]

CTA:
See how the research was done

Design notes:

- Stage/timeline strip with subtle animation.
- End the page with a strong forward motion into Page 2.

***

## Page 2 — `research.html`

### Meta

Title: Research Through DSRM | Enterprise AI Adoption Research
Description: How Design Science Research Methodology was used to investigate enterprise AI adoption through artefact creation, demonstration, and evaluation.[^2][^1]

### Hero section

Eyebrow:
Method and inquiry

Headline:
Research through design science[^2]

Subheading:
This work used Design Science Research Methodology to investigate the enterprise AI gap through artefact creation, demonstration, and evaluation.[^2][^1]

Support line:
The goal was not only to understand the problem, but to build through it.[^2][^1]

Design notes:

- Cleaner and calmer than Page 1.
- Structured hero with subtle background design.


### Section 1

Eyebrow:
Why this method

Heading:
Why DSRM was the right approach[^2]

Body:
The problem was too practical for theory alone and too consequential for an unstructured prototype exercise. It involved technology, governance, organisational design, risk, and transformation at the same time. Design Science Research Methodology provided a disciplined way to move from problem definition to artefact design, demonstration, evaluation, and communication.[^2][^1]

Supporting sentence:
In other words, DSRM made it possible to investigate the enterprise AI problem by building, testing, and learning from real artefacts rather than stopping at abstract analysis.[^2][^1]

Design notes:

- Text + process overview layout.
- Add a visual 6-step DSRM strip or minimal timeline.


### Section 2

Eyebrow:
The starting point

Heading:
The research question[^1]

Body:
How can organisations safely adopt Generative AI when its inherently non-deterministic behaviour is in direct tension with the governed, rule-bound, and auditable structures that enterprises must maintain?[^1]

Follow-on:
This question framed the entire study. It shaped what needed to be built, what had to be demonstrated, and what would count as a meaningful outcome.[^1]

Design notes:

- Centered quote block.
- Elegant, high-trust styling.


### Section 3

Eyebrow:
The DSRM path

Heading:
From problem to artefact to framework[^2][^1]

Step 1 title:
Problem identification and motivation

Step 1 body:
The research began by defining the core tension between probabilistic AI behaviour and deterministic enterprise governance. This was not treated as a minor implementation issue, but as a structural mismatch at the heart of enterprise AI adoption.[^1]

Step 2 title:
Objectives for a solution

Step 2 body:
The next step was to define what a safe enterprise AI solution would actually need to achieve. That meant making the incompatibility gap explicit, defining measurable acceptance criteria, specifying design requirements, and recognising that any workable solution had to support both transformative experimentation and governed operational improvement.[^2][^1]

Step 3 title:
Design and development

Step 3 body:
Two artefacts were then built to explore the problem from different angles: GridSense and OsciProbity. Together they tested not only what AI could do, but how different styles of AI-assisted development behave under very different organisational expectations.[^1]

Step 4 title:
Demonstration

Step 4 body:
The artefacts were demonstrated in realistic but controlled scenarios rather than live operations. This allowed the research to test plausibility, governance logic, and stakeholder response without overstating production deployment.[^1]

Step 5 title:
Evaluation

Step 5 body:
The work was evaluated as prototype research rather than industrialised rollout. The focus was on whether the required capabilities could be built quickly, meaningfully, and credibly, and whether the resulting patterns were strong enough to inform reusable frameworks.[^2][^1]

Step 6 title:
Communication

Step 6 body:
The final step is what this website contributes to: communicating the problem, artefacts, findings, and frameworks in a form that both researchers and practitioners can use.[^2][^1]

Design notes:

- Use a vertical or stepped timeline.
- Each step should animate into view on scroll.
- Make this section highly readable and structured.


### Section 4

Eyebrow:
Two artefacts

Heading:
Two products were built to explore the problem from both sides[^1]

Intro:
The research did not search for a single generic AI answer. Instead, it deliberately built two contrasting artefacts to surface the different demands of transformation and governance.[^1]

GridSense title:
GridSense — the transformative prototype[^1]

GridSense body:
GridSense explored the open, transformative side of enterprise AI. It was developed rapidly, in an exploratory style, to test how AI could help create a new kind of operator experience rather than simply automate an old one. It represented the space where ideas are discovered, interfaces are reimagined, and AI is used as a creative development partner.[^1]

OsciProbity title:
OsciProbity — the governed prototype[^1]

OsciProbity body:
OsciProbity explored the structured, auditable side of enterprise AI. It was shaped by requirements for governance, traceability, confidence-aware logic, and architectural discipline. Its development emphasised specifications, design review, and AI-assisted implementation within a more controlled engineering process.[^1]

Design notes:

- Two rich content blocks with contrasting visual treatment.
- GridSense more fluid and expressive.
- OsciProbity more rigorous and architectural.


### Section 5

Eyebrow:
What the artefacts revealed

Heading:
The research uncovered three enterprise AI realities[^1]

Reality 1 title:

1. Enterprises need two AI modes

Reality 1 body:
GridSense and OsciProbity showed that transformative discovery and governed improvement are not the same activity. They require different goals, rhythms, controls, and success measures.[^1]

Reality 2 title:
2. A transition path is essential

Reality 2 body:
Without a deliberate bridge, transformative prototypes die in the lab and operations teams inherit systems they do not trust. A credible path must move ideas through stages of validation, pilot control, regulatory review, and operational ownership.[^9][^1]

Reality 3 title:
3. Governance must become operational

Reality 3 body:
Enterprise AI cannot be governed by policy statements alone. It requires concrete controls, engineering disciplines, and design patterns that translate enterprise expectations into working systems.[^10][^11][^12]

Design notes:

- Three cards or stacked reveal blocks.
- Clear hierarchy and strong legibility.


### Section 6

Eyebrow:
The outcome

Heading:
From research journey to reusable frameworks[^11][^12][^10][^9]

Body:
The deeper outcome of the research was not just two prototypes. It was a set of reusable frameworks distilled from the tensions, decisions, and patterns that emerged while designing, building, demonstrating, and evaluating those artefacts.[^2][^1]

Framework 1 title:
Enterprise AI Framework

Framework 1 body:
This framework captures the three connected modes of enterprise AI adoption: AI Lab, Transition Path, and Hub-and-Spoke Operations.[^9][^1]

Framework 2 title:
The Hourglass Model

Framework 2 body:
This model explains how broad societal and regulatory expectations are narrowed into organisational AI policy and then translated into operational controls.[^11]

Framework 3 title:
Enterprise AI Guardrails Framework

Framework 3 body:
This framework defines the layered controls needed to contain probabilistic AI inside deterministic enterprise boundaries.[^10]

Framework 4 title:
AI Engineering Disciplines Framework

Framework 4 body:
This framework describes the wider engineering stack required to build and run enterprise AI reliably beyond traditional MLOps alone.[^12][^1]

Closing paragraph:
These frameworks are presented not as abstract theory, but as knowledge earned through artefact-based research. They are the distillation of what became necessary when enterprise AI was taken seriously enough to build, govern, demonstrate, and evaluate in practice.[^2][^1]

CTA:
See the built artefacts

Design notes:

- 4 framework preview cards.
- This section should visually tee up Page 3 and Page 4.

***

## Final instruction to Copilot

Build both pages fully with production-quality HTML, CSS, and vanilla JS. Make the site visually impressive, responsive, accessible, and polished, with shared reusable styles and restrained motion. The result should look like a bespoke enterprise research website, not a template.[^5][^7][^1]

## Best next step

After this, the next thing to prepare is the same **master Copilot prompt for Pages 3 and 4**, so the full website can be generated consistently in one visual system.[^12][^10][^11][^9][^1]

<div align="center">⁂</div>

[^1]: Enterprise-AI-Adoption-Framework-From-Transformation-to-Improvement.md

[^2]: https://arxiv.org/abs/2006.02763

[^3]: https://www.rahulyadavdev.in/articles/folder-structure-for-static-websites

[^4]: https://www.bententerprise.com/the-2026-website-stack-what-to-use-and-what-to-avoid-2/

[^5]: https://www.youtube.com/watch?v=S05qYRnojcQ

[^6]: https://medium.com/@katheller/static-webpage-made-with-css-and-html-dos-and-donts-a404c82cd51

[^7]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations

[^8]: https://www.youtube.com/watch?v=T33NN_pPeNI

[^9]: Overall-Framework-2.jpg

[^10]: AI-Guardrail-Framework.jpg

[^11]: Hourglass-Model-3.jpg

[^12]: AI-Engineering-Discipline-Framework-4.jpg

