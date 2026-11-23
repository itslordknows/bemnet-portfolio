# Changelog

All notable changes to the Dr. Bemnet Wondimagegnehu Mersha Academic Portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

- Documentation synchronization across repository (`README.md`, `AGENTS.md`, `PROJECT_STATUS.md`, `CHANGELOG.md`, `docs/PROJECT_HANDOFF.md`).

---

## [0.1.0] - 2026-11-23

### Fixed
- **Resolved Dependency Security Vulnerabilities (`02daa4a`)**:
  - Upgraded Next.js from `15.1.0` to security-patched `15.5.29`, mitigating critical React Flight protocol RCE, cache poisoning, and DoS vulnerabilities without upgrading to Next.js 16.
  - Added package overrides in `package.json` for `postcss` (`^8.5.33`) and `postcss-selector-parser` (`^6.1.6`), resolving high/moderate vulnerabilities.
  - `npm audit` now reports **0 vulnerabilities**.
- **Configured ESLint for Non-Interactive CI (`02daa4a`)**:
  - Created `.eslintrc.json` extending `next/core-web-vitals` and installed `eslint` / `eslint-config-next`.
  - Prevented interactive CLI prompt failures in GitHub Actions and Vercel build environments.
- **Configured Next.js Output Tracing (`02daa4a`)**:
  - Added `outputFileTracingRoot` in `next.config.mjs` to eliminate multi-lockfile root warnings.
- **Added Missing Autoprefixer Dependency (`3b714de`)**:
  - Added `autoprefixer: ^10.7.0` to `devDependencies` to resolve PostCSS build failures during Vercel deployment.
- **Resolved Git Multi-Account Authentication Conflict**:
  - Diagnosed Windows Credential Manager collision with generic `git:https://github.com` pointing to `Getayawkal-w`.
  - Created credential mapping for `git:https://itslordknows@github.com` to enable clean pushes to `origin/main`.

### Verified
- **GitHub Actions CI**: `Build & Validate` workflow succeeded on commit `02daa4a`.
- **Vercel Production Deployment**: Successfully deployed to [https://bemnet-portfolio-website.vercel.app](https://bemnet-portfolio-website.vercel.app).

---

## [0.0.2] - 2026-11-04

### Changed
- **Academic Redesign (`a6c66a7`)**:
  - Redesigned portfolio layout inspired by minimalist academic styling (benjaminschiffer.com).
  - Implemented top navigation tabs: `About Me`, `Project`, `Research`, `Courses Taught`, and `Contact Me`.
  - Upgraded component hierarchy across `Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `Research.tsx`, `CoursesTaught.tsx`, and `Contact.tsx`.
  - Centralized academic datasets in `src/data/portfolioData.ts`.

---

## [0.0.1] - 2026-10-10

### Added
- **Initial Portfolio Foundation (`95e9b92`)**:
  - Initialized Next.js 15 App Router project with React 19, TypeScript, and Tailwind CSS.
  - Established Swiss Editorial Minimalism visual identity with Oxford Academic Navy (`#1B365D`) and Scholarly Slate (`#5A6B7C`).
  - Added circular portrait hero section and initial academic content.
  - Configured GitHub Actions CI workflow in `.github/workflows/ci.yml`.
