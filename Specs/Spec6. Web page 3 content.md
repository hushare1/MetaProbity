# Page 3 — Built Artefacts: GridProbity & OsciProbity


---

## Section 1 — Page Intro

### Section Label
`WHAT WE BUILT`

### Page Headline (H1)
**Two Artefacts. Two Approaches. One Proof.**

### Body Copy
These are not concept papers. GridProbity and OsciProbity are working software protypes — two real power-system intelligence tools built by a single IT professional, using AI capability, under deliberately different methodologies. One was built fast, in flow, shaped by vibe and iteration. The other was built slowly, under discipline, with every behaviour defined in a spec before a line of code was written. Both work. What they demonstrate, above all, is what one person with the right AI tools and domain knowledge can now build alone.

---

## Callout Block — Solo AI-Augmented Build

### [DESIGN NOTE: Full-width highlight strip between page intro and artefact sections]

> **One engineer. Two enterprise-grade tools. AI as the force multiplier.**
>
> GridProbity and OsciProbity 2.0 were designed, architected, specified, and built entirely by a single person, in personal time, while also working a full-time 40-hour week — augmented by AI coding tools. No development team. No dedicated QA. No separate architects or UI designers. AI handled what previously required scale: volume of code, breadth of implementation, and consistency of pattern. The domain knowledge, methodology choices, architecture, design and engineering judgment remained human.

*This callout block is a key proof point — it should be visually prominent on the page. Suggested treatment: dark or tinted full-width band, large pull-quote typography, restrained.*

---


---

## Section 2 — GridProbity

### Section Label
`ARTEFACT 01 — TRANSFORMATIVE BUILD`

### Product Headline
**GridProbity**
*Unified Real-Time Power Grid Monitoring & Predictive Analytics Platform*

### Positioning Statement
GridProbity is a full-stack power grid monitoring platform built by using a transformative, vibe-driven development pattern — where the AI agents and the domain expert move together in flow, letting the architecture emerge from rapid iteration rather than upfront design. The result is a enterprise-grade platform that one person built with the speed and confidence that previously required a team.

### What It Does
GridProbity integrates real-time PMU (Phasor Measurement Unit) data streaming, Extended Kalman Filter (EKF) state estimation, network topology analysis, and power flow calculations into a unified monitoring environment for grid operators and analysts. It presents live grid state, voltage stability indicators, and alert conditions across a multi-view HTML dashboard — with a dedicated operator view, an enhanced analytics dashboard, and a PE (protection engineering) validation interface.

### Key UI Features
- **Live dashboard with real-time WebSocket updates** — grid state refreshed at 30 Hz PMU data rate, with animated KPI indicators and alert management
- **Operator control panel** — purpose-built `operator.html` view with a control-room layout and action-oriented interface for grid operators
- **PE Validation interface** — dedicated `validation.html` for protection engineering scenario testing and replay
- **Interactive network visualisation** — topology-aware grid map with node/branch state overlays
- **Multi-view HTML architecture** — five distinct experience surfaces (`index.html`, `dashboard_enhanced.html`, `operator.html`, `validation.html`, `dashboard.html`) served via Nginx
- **Responsive mobile design** — static hosting with mobile-first CSS

### [VIDEO EMBED — SLOT RESERVED]
*A recorded walkthrough of GridProbity will be embedded here. Placeholder: full-width 16:9 video box with caption.*

### Development Methodology
GridProbity was developed using a **transformative, vibe-driven coding pattern**. The architecture was not specified upfront — it emerged through fluid collaboration between domain knowledge and AI multi-capabilities. Features were built in the order that felt most natural; the stack was chosen for immediacy (Vanilla JS, no framework overhead); and the UI was refined visually before being defined structurally. The AI agent functioned as a high-autonomy co-pilot, generating large sections of feature code shaped by domain knowledge. Architecture artefacts were authored after the fact to capture what was built.

### Technology Footprint

**Backend**
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Web Framework | FastAPI + Uvicorn (ASGI) | REST API + WebSocket server |
| Numerical Core | NumPy, SciPy | Array operations, signal math |
| Grid Modelling | pandapower | Power system load flow, network topology |
| Streaming Ingestion | Apache Kafka (confluent-kafka) | Real-time PMU data stream |
| Visualisation | Matplotlib | Server-side plotting and analytics |
| Notebooks | Jupyter | Exploratory analysis, scenario prototyping |
| Data Validation | Pydantic | API schema validation |
| Language | Python 3.8+ | Runtime |

**Frontend**
| Layer | Technology | Notes |
|-------|-----------|-------|
| UI | Vanilla JavaScript ES6+ / HTML5 / CSS3 | No framework — lightweight, direct DOM |
| Real-time | WebSocket API (native browser) | Live data feed from backend |
| Build | Static files — no bundler | Served via Python HTTP server or Nginx |

**Infrastructure**
| Layer | Technology |
|-------|-----------|
| Containerisation | Docker Compose |
| Production proxy | Nginx |
| Cloud deployment | Fly.io, Render |
| Dev environment | VS Code Dev Containers |

---

## Section 3 — OsciProbity 2.0 wtih openLLM

### Section Label
`ARTEFACT 02 — SPEC-DRIVEN BUILD`

### Product Headline
**OsciProbity 2.0 with openLLM**
*Power-System Oscillation Probability Engine*

### Positioning Statement
OsciProbity 2.0 is a precision oscillation detection and probability-scoring engine built by a single researcher under a strict spec-driven, architecture-first methodology. Every module, every algorithm parameter, every API contract, and every database schema was fully specified across 27 numbered specs, versioned documents before a single line of implementation code was written. The AI agents generated code from these specs — producing output that is verifiable, traceable, and structurally sound.

### What It Does
OsciProbity 2.0 ingests real-time PMU data at 200 Hz sample rate and runs two parallel detection engines: **OPIEM** (inter-machine electromechanical oscillations, 0.05–4.0 Hz band) and **OPICI** (inverter/converter interaction oscillations, 4.0–40.0 Hz band). Both engines execute an **ensemble of six modal identification algorithms** — Prony, ERA, ESPRIT, SSI, HTLS, and Matrix Pencil — and synthesise their outputs into a single confidence-scored probability result per detection window. An embedded **Ollama-powered local LLM**, running in air-tight design on 8-core CPU, then generates natural-language intelligence — interpreting oscillation events, describing detected modes, and narrating artefact significance — so that DSP (Digital Signal Processing) outputs are legible to both engineers and non-specialist operators. Results are persisted to PostgreSQL Timeseris DB with full provenance tracing and exposed via a fully-specified OpenAPI REST interface and WebSocket subscription layer.

### Key UI Features
- **Dual-band oscillation dashboard** — simultaneous OPIEM and OPICI probability readouts, mode frequency and damping displays, real-time confidence indicators
- **LLM-generated event intelligence panel** — Ollama-powered natural language summaries of oscillation events, modes, and artefacts; bridging DSP output and operator understanding. Running with air-tight design on 8-core CPU. 
- **Algorithm ensemble transparency panel** — per-algorithm mode contributions visible alongside the synthesised result, not hidden in a black box
- **Hover/tooltip spec-driven interactions** — every data point has a precisely defined tooltip showing confidence, algorithm source, damping ratio, and mode frequency
- **Provenance trail UI** — every result is traceable: algorithm version, config hash, library versions captured at runtime
- **React 19 + Zustand state architecture** — type-safe, contract-driven frontend with MSW-mocked API testing
- **WebSocket backpressure management** — spec-defined subscription protocol with drop/warn thresholds
- **RBAC-aware interface** — role-based access controls; UI adapts to user role. Enabled for Active Directory integration. 

### [VIDEO EMBED — SLOT RESERVED]
*A recorded walkthrough of OsciProbity 2.0 will be embedded here. Placeholder: full-width 16:9 video box with caption.*

### Spec Inventory — The Build Foundation
OsciProbity 2.0 was built from **27 numbered specification documents** covering every layer of the system. 

### Development Methodology
OsciProbity 2.0 was developed using a **requirements, architecture, design, and spec-driven methodology** — four phases completed before any implementation:

1. **Requirements** — Domain requirements elicited from grid engineering first principles, translated into numbered functional requirements
2. **Architecture** — System topology, component decomposition, and module boundaries defined and frozen
3. **Design** — API contracts, data schemas, algorithm recipes, and UI wireframes fully designed and reviewed across 27 documents
4. **Spec** — Each design artefact hardened into a normative spec with a formal amendment protocol governing all future changes

Only after all four phases were complete did code generation begin. The AI agent was given specs as context — generating implementation that was verifiable against the spec rather than requiring developer intuition to evaluate.

### Technology Footprint

**Backend — Python 3.11+**
| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Web Framework | FastAPI | 0.111.0 | REST API + ASGI server |
| ASGI Server | Uvicorn | 0.29.0 | Production server |
| ORM | SQLAlchemy | 2.0.30 | Async database access |
| Migrations | Alembic | 1.13.1 | Schema version control |
| DB Driver | asyncpg | 0.29.0 | Async PostgreSQL |
| Data Validation | Pydantic | 2.7.1 | Schema enforcement |
| Config | PyYAML | 6.0.1 | Spec-governed YAML config |
| Serialisation | PyArrow | 16.0.0 | Parquet artefact storage |

**DSP & Scientific Engine**
| Library | Version | Role |
|---------|---------|------|
| NumPy | 1.26.4 | Array operations, FFT |
| SciPy | 1.11.4 | Signal processing, optimisation |
| pandas | 2.2.2 | Windowed data management |
| scikit-learn | 1.4.2 | DBSCAN clustering for mode ID |
| statsmodels | 0.14.2 | Granger causality, statistics |
| EMD-signal | ≥1.6.4 | Empirical Mode Decomposition (HHT) |
| vmdpy | 0.2 | Variational Mode Decomposition |
| ssqueezepy | 0.6.5 | Synchrosqueezing transform, ridge detection |
| PyDMD | 0.4.1 | Dynamic Mode Decomposition, ERA, Matrix Pencil |
| joblib | 1.4.2 | Parallel algorithm execution |

**Open LLM Integration**
| Layer | Technology | Role |
|-------|-----------|------|
| LLM Runtime | Ollama (local) | Hosts and serves the open-weight model on-device |
| LLM Role | Oscillation event intelligence | Generates natural language descriptions of detected events, modes, and artefacts |
| Integration Point | Post-DSP layer | Receives structured DSP output; produces operator-readable narrative |
| Deployment | Local / on-premise | No cloud API dependency — runs fully offline |

**Frontend**
| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| UI Framework | React | 19.2.6 | Component-based, spec-mapped |
| Routing | React Router DOM | 7.15.0 | Contract-defined routes |
| State | Zustand | 5.0.13 | Lightweight, typed store |
| Build | Vite | 7.3.3 | Fast HMR dev + production build |
| Language | TypeScript | 5.4.5 | Type safety across all contracts |
| Testing | Vitest | 3.2.3 | Unit + integration tests |
| DOM Testing | Happy-DOM | 20.9.0 | Headless DOM for Vitest |
| API Mocking | MSW | 2.3.1 | Contract-faithful API mocking |

---

## Section 4 — Expert Validation

### Section Label
`DOMAIN EXPERT VALIDATION`

### Section Heading
**Tested by Power System Professionals**

### Body Copy
Both GridProbity and OsciProbity 2.0 have been demonstrated to power system domain experts. The response was positive: the tools were recognised as technically credible, practically relevant, and meaningfully differentiated from existing vendor offerings. What made the reception particularly significant is the context: both tools were built entirely by one person with domain knowledge, augmented by AI. Expert feedback confirmed that the depth of implementation — the dual-band OPIEM/OPICI architecture, the ensemble algorithm design, the LLM-generated event narrative — is indistinguishable from team-scale engineering effort.

### [TESTIMONIAL / QUOTE SLOT — RESERVED]
*One or two attributed quotes from domain expert reviewers can be inserted here once confirmed. Box/callout format recommended.*

### Validation Context
- Demonstrated to grid engineering professionals familiar with PMU-based monitoring systems
- Received positive assessment on technical depth and approach validity
- OsciProbity's features were identified as similar or better as compare to other similar system. 
- GridProbity's real-time state estimation and multi-view operator interface reviewed positively for operational fit
- LLM-generated event intelligence (Ollama integration) noted as a practical and novel addition for operator accessibility

---

## Section 5 — Build Methodology Contrast

### Section Heading
**Two Methodologies, Compared Directly**

### Intro Paragraph
One domain expert. The same AI tools. What changes when you build with discipline versus flow? The table below captures the most significant differences observed across both builds — not as a verdict on which is better, but as an honest account of what each approach costs and what it produces.

### Contrast Table

| Dimension | GridProbity (Transformative) | OsciProbity 2.0 (Spec-Driven) |
|-----------|------------------------------|-------------------------------|
| **Build initiation** | Started from a working concept; evolved in motion | Started from requirements elicitation; nothing coded until specs were complete |
| **Architecture** | Emerged through iteration; captured post-build | Defined upfront; frozen before implementation |
| **Role of AI agent** | High-autonomy co-pilot; generating features from intent | Controlled code generator; working from spec context, not conversation |
| **Role of specs** | Post-hoc documentation | Pre-requisite for code generation |
| **LLM integration** | None | Ollama (local) — post-DSP event intelligence |
| **Frontend approach** | Vanilla HTML/JS — chosen for speed and directness | React 19 + TypeScript — chosen for component contract traceability |
| **Algorithm handling** | Embedded in working simulation scripts | 27 numbered spec documents govern every algorithm parameter |
| **Testing approach** | Validation scripts (`validation_comprehensive.py`, `validation_final.py`) | pytest + Vitest + MSW + golden fixture spec |
| **Dependency governance** | `requirements.txt` (current versions) | Pinned + hashed `requirements.txt` (normative spec) |
| **Config governance** | `.env`-driven feature flags | Spec-versioned YAML; every parameter has a spec reference |
| **Provenance** | Not tracked | Algorithm version, config hash, library versions captured per result |
| **Time to first working UI** | Fast — days | Slower — weeks of specs before first UI |
| **Confidence in correctness** | Validated by running the system | Verifiable against spec before running |
| **Where AI added most value** | Feature generation, UI layout, rapid prototyping | Spec-compliant implementation; reducing logic and AI hallucination |

### Editorial Paragraph
What both builds share is more interesting than what separates them: both are enterprise-grade, both use the same AI tooling, and both were built by a single person with deep power-system domain knowledge — no team, no sprint planning, no architecture review board. The difference is where the intelligence lives. In GridProbity, intelligence lives in the domain expert's judgement — catching drift, shaping emergent structure, knowing when it feels right. In OsciProbity 2.0, intelligence was front-loaded into the specs — so that code generation became closer to compilation than creation. Neither is universally superior. The question any team must answer is: what kind of risk can you tolerate, at which stage and transition path from transformative product to operationalisation. 

---

## Section 6 — Technology Footprint (Combined View)

### Section Heading
**Full Technology Footprint**

### Intro
Combined technology stack across both artefacts — organised by category.

| Category | Technology | GridProbity | OsciProbity 2.0 |
|----------|-----------|:-----------:|:---------------:|
| **AI Coding Tools** | AI coding agent (LLM-based) | ✓ | ✓ |
| **AI Coding Tools** | AI in-editor assistant | ✓ | ✓ |
| **Open LLM** | Ollama (local, on-premise) | — | ✓ |
| **Backend Language** | Python 3.8+ | ✓ | — |
| **Backend Language** | Python 3.11+ | — | ✓ |
| **Web Framework** | FastAPI + Uvicorn | ✓ | ✓ |
| **Data Validation** | Pydantic | ✓ | ✓ |
| **Numerical Core** | NumPy / SciPy | ✓ | ✓ |
| **Grid Modelling** | pandapower | ✓ | — |
| **Streaming** | Apache Kafka | ✓ | — |
| **State Estimation** | Extended Kalman Filter | ✓ | — |
| **DSP: EMD/HHT** | EMD-signal | — | ✓ |
| **DSP: VMD** | vmdpy | — | ✓ |
| **DSP: Synchrosqueezing** | ssqueezepy | — | ✓ |
| **DSP: Modal ID ensemble** | PyDMD (DMD, ERA, Matrix Pencil) | — | ✓ |
| **ML / Clustering** | scikit-learn (DBSCAN) | — | ✓ |
| **Statistics** | statsmodels (Granger causality) | — | ✓ |
| **Parallel Execution** | joblib | — | ✓ |
| **Database ORM** | SQLAlchemy 2.0 + asyncpg | — | ✓ |
| **DB Migrations** | Alembic | — | ✓ |
| **Serialisation** | PyArrow / Parquet | — | ✓ |
| **Frontend** | Vanilla JS / HTML5 / CSS3 | ✓ | — |
| **Frontend** | React 19 + TypeScript | — | ✓ |
| **Frontend: State** | Zustand 5 | — | ✓ |
| **Frontend: Build** | Vite 7 | — | ✓ |
| **Frontend: Testing** | Vitest + MSW | — | ✓ |
| **Backend: Testing** | pytest + pytest-cov | ✓ | ✓ |
| **Containerisation** | Docker / Docker Compose | ✓ | — |
| **Proxy** | Nginx | ✓ | — |
| **Cloud: PaaS** | Fly.io / Render | ✓ | — |
| **Dev Environment** | VS Code Dev Containers | ✓ | ✓ |
| **Config** | Spec-versioned YAML | — | ✓ |
| **Config** | .env feature flags | ✓ | — |
| **Notebooks** | Jupyter | ✓ | — |
| **Visualisation** | Matplotlib | ✓ | — |

---

## Section 7 — Forward CTA

### Heading
**The Frameworks Behind the Builds**

### Body Copy
Both artefacts are expressions of a broader research programme into how AI-augmented engineering teams should structure their work. The frameworks that shaped these methodologies — including the vibe coding pattern used in GridProbity and the spec-authority matrix used in OsciProbity 2.0 — are discussed in the next section.

### CTA Button Text
`Explore the Frameworks →`

---

## Page Layout Map (for design reference)

```
┌─────────────────────────────────────────────────────────┐
│  SECTION 1: Page Intro — headline + 2-sentence framing  │
├─────────────────────────────────────────────────────────┤
│  CALLOUT STRIP — "One engineer. Two tools. AI as the    │
│  force multiplier." — full-width tinted band            │
├──────────────────────────┬──────────────────────────────┤
│  SECTION 2: GridProbity  │  SECTION 3: OsciProbity 2.0  │
│  — Label                 │  — Label                     │
│  — Headline              │  — Headline                  │
│  — Positioning stmt      │  — Positioning stmt          │
│  — What it does          │  — What it does              │
│  — UI features (bullets) │  — UI features (bullets)     │
│  ┌─────────────────────┐ │  ┌──────────────────────────┐│
│  │  VIDEO EMBED SLOT   │ │  │  VIDEO EMBED SLOT        ││
│  └─────────────────────┘ │  └──────────────────────────┘│
│  — Methodology           │  — Spec inventory (table)    │
│  — Tech footprint tables │  — Methodology (4 phases)    │
│                          │  — Tech footprint tables     │
│                          │  — Open LLM table            │
├──────────────────────────┴──────────────────────────────┤
│  SECTION 4: Expert Validation                           │
│  — Heading + body copy                                  │
│  ┌──────────────────────────────────────────────────┐   │
│  │  TESTIMONIAL / QUOTE SLOT (reserved)             │   │
│  └──────────────────────────────────────────────────┘   │
│  — Validation context bullet points                     │
├─────────────────────────────────────────────────────────┤
│  SECTION 5: Methodology Contrast Table (full width)     │
│  — Intro paragraph                                      │
│  — 14-row comparison table                             │
│  — Editorial paragraph                                  │
├─────────────────────────────────────────────────────────┤
│  SECTION 6: Full Technology Footprint Table (full width)│
├─────────────────────────────────────────────────────────┤
│  SECTION 7: Forward CTA                                 │
│  — Heading + body copy + button                         │
└─────────────────────────────────────────────────────────┘
```

---

## Open Items Log

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Open LLM — specific Ollama model name | **To confirm** | Which model weight is loaded? (e.g., Llama 3, Mistral, Qwen) |
| 2 | AI coding tool names | **Generic for now** | Can be named specifically when ready |
| 3 | Demo video — GridProbity | **Slot reserved** | Embed when recorded and hosted |
| 4 | Demo video — OsciProbity 2.0 | **Slot reserved** | Embed when recorded and hosted |
| 5 | Testimonial / expert quote | **Slot reserved** | Add attributed quote(s) when confirmed |
| 6 | GridProbity — NetworkX active? | **To confirm** | Listed in README but not in requirements.txt |

