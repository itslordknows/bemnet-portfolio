# Dr. Bemnet Wondimagegnehu Mersha — Academic & Research Portfolio

[![CI / Build Validation](https://github.com/itslordknows/bemnet-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/itslordknows/bemnet-portfolio/actions/workflows/ci.yml)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://bemnet-portfolio-website.vercel.app)
[![Security Audit](https://img.shields.io/badge/Vulnerabilities-0-brightgreen.svg)](https://github.com/itslordknows/bemnet-portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.29-black?logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg)](LICENSE)

Personal academic and research portfolio website for **Dr. Bemnet Wondimagegnehu Mersha**, Postdoctoral Researcher in Control Science & Artificial Intelligence at the School of Automation, Beijing Institute of Technology (BIT).

- **Central Brand Concept**: *"Engineering Trustworthy Intelligence"*
- **Primary Production URL**: [https://bemnet-portfolio-website.vercel.app](https://bemnet-portfolio-website.vercel.app)
- **Alternate Production URL**: [https://bemnet-portfolio.vercel.app](https://bemnet-portfolio.vercel.app) *(Note: Review project mapping before production use)*

---

## 🎨 Design Philosophy & Visual Identity

The portfolio embodies a **Swiss Editorial Minimalism / Quiet Academic Luxury** aesthetic inspired by minimalist scholar portfolios:

- **Canvas Background**: Crisp Pure White (`#FFFFFF`) with cool neutral background fills (`#F9FAFB`).
- **Primary Authority & Headings**: Oxford Academic Navy (`#1B365D`) — Bold display typography using `Source Serif 4`.
- **Subtitles & Metadata**: Cool Scholarly Slate (`#5A6B7C`) — Refined academic commentary and metadata.
- **Body Text**: Deep Charcoal Slate (`#2C3E50`) — Highly legible technical sans-serif using `Inter`.
- **Narrative Voice**: 100% first-person scholarly narrative highlighting control theory, trustworthy AI, and autonomous aerospace/robotics systems.

---

## 🛠 Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `^15.5.29` | Statically pre-rendered React framework (patched Next 15 security line) |
| **UI Library** | React | `^19.0.0` | Component foundation |
| **Language** | TypeScript | `^5.7.2` | End-to-end static typing |
| **Styling** | Tailwind CSS | `^3.4.16` | Utility-first responsive styling |
| **CSS Processing** | PostCSS / Autoprefixer | `8.5.33` / `10.7.0` | Vendor prefixing and modern CSS pipeline (with secure overrides) |
| **Icons** | Lucide React | `^0.469.0` | Clean scholarly iconography |
| **Linting** | ESLint / next-eslint | `^9.20.0` / `^15.5.29` | Automated code quality & CI verification |

---

## 📁 Project Architecture & Key Files

```text
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI workflow (linting + production build)
├── public/                        # Static assets, PDFs, and favicons
├── pic/                           # Academic portrait and photography assets
├── src/
│   ├── app/
│   │   ├── globals.css            # Global Tailwind directives & typography layers
│   │   ├── layout.tsx             # Root layout, Google Fonts (Source Serif 4, Inter), SEO metadata
│   │   └── page.tsx               # Primary page assembling portfolio sections
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation with smooth scroll & mobile menu
│   │   ├── Hero.tsx               # Portrait, academic titles, credo, social links
│   │   ├── Research.tsx           # Primary research pillars & core thrusts
│   │   ├── Projects.tsx           # Featured engineering & theoretical projects
│   │   ├── CoursesTaught.tsx      # Teaching history, lectures, academic service
│   │   ├── Contact.tsx            # Contact information, institutional email & copy utilities
│   │   └── Footer.tsx             # Academic copyright & institutional affiliation
│   └── data/
│       └── portfolioData.ts       # Central source of truth for all content
├── docs/
│   └── PROJECT_HANDOFF.md         # Comprehensive handoff context for future sessions
├── AGENTS.md                      # Permanent guidelines for AI coding agents
├── PROJECT_STATUS.md              # Living document of development milestones & status
├── CHANGELOG.md                   # Verifiable Git milestone log
├── next.config.mjs                # Next.js configuration (outputFileTracingRoot)
└── package.json                   # Dependencies, overrides & scripts
```

All textual content, bio statements, papers, project descriptions, and course records are maintained in [src/data/portfolioData.ts](file:///c:/Users/PC/Desktop/Project/Bemnet%20portfolio/src/data/portfolioData.ts).

---

## 🚀 Local Development & Validation

### 1. Prerequisites
- Node.js 20.x or later
- npm 10.x or later

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Validation Checks
Before committing changes, execute the full validation suite:

```bash
# TypeScript compilation check (no emit)
npx tsc --noEmit

# Non-interactive ESLint audit
npm run lint

# Production build & static generation
npm run build
```

---

## 🌿 Git Workflow & CI/CD

- **Repository**: [https://github.com/itslordknows/bemnet-portfolio](https://github.com/itslordknows/bemnet-portfolio)
- **Branch Strategy**:
  - `main`: Protected production branch. All pushes trigger automatic CI and Vercel deployments.
  - `feature/<name>`: Feature branches for incremental development.
- **Continuous Integration**:
  - [.github/workflows/ci.yml](file:///c:/Users/PC/Desktop/Project/Bemnet%20portfolio/.github/workflows/ci.yml) validates dependencies (`npm ci`), runs ESLint (`npm run lint`), and verifies full Next.js static production builds (`npm run build`).

---

## 🔒 Security & Dependency Maintenance

- **Vulnerability Status**: Zero known vulnerabilities (`npm audit` reports 0 vulnerabilities).
- **Framework Stability**: The project is intentionally pinned to Next.js **`15.5.29`**, which backports critical fixes (e.g., React Flight protocol, DoS, and cache poisoning mitigations) without forcing an upgrade to Next.js 16.
- **Dependency Overrides**:
  ```json
  "overrides": {
    "postcss": "^8.5.33",
    "postcss-selector-parser": "^6.1.6"
  }
  ```
  These enforce patched transitive dependencies across nested Next.js packages.
- **Strict Rule**: Never run `npm audit fix --force`.

---

## 🌐 Deployment Configuration

- **Platform**: [Vercel](https://vercel.com/)
- **Trigger**: Automatic deployments triggered on push to `origin/main`.
- **Active Deployments**:
  - **`bemnet-portfolio-website`** (Primary): Connected to `itslordknows/bemnet-portfolio`.
  - **`bemnet-portfolio`** (Secondary): Secondary project linked to repository.

---

## 📋 Current Status & Remaining Priorities

### Current Status: 🟢 Fully Operational
- GitHub authentication permanently configured.
- Automated CI pipeline passing cleanly.
- Vercel production deployment healthy and live with edge prerendering.
- Dependencies hardened with 0 audit advisories.

### Remaining Work:
1. **Homepage Presentation Review**: Conduct final aesthetic check with Dr. Bemnet.
2. **Publications & Research Verification**: Audit bibliography entries against recent IEEE/conference publications.
3. **Responsive Audit**: Fine-tune mobile and tablet viewport margins for narrow screens.
4. **Vercel Project Consolidation**: Review and clean up the duplicate `bemnet-portfolio` Vercel project to maintain a single production target.
