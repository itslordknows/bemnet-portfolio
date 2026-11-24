# Project Handoff & Persistent Context

**Project**: Dr. Bemnet Wondimagegnehu Mersha — Academic & Research Portfolio  
**Target URL**: [https://bemnet-portfolio-website.vercel.app](https://bemnet-portfolio-website.vercel.app)  
**Repository**: [https://github.com/itslordknows/bemnet-portfolio](https://github.com/itslordknows/bemnet-portfolio)  
**Primary Branch**: `main`  
**Latest Confirmed Commit**: `227b634`  
**Last Updated**: November 24, 2026

---

## 1. Executive Summary & Purpose

This repository houses the personal academic portfolio website of **Dr. Bemnet Wondimagegnehu Mersha**, Multisensory Fusion Researcher, Control Engineer and AI Researcher with a PhD and postdoctoral experience from the School of Automation, Beijing Institute of Technology (BIT).

The primary goal is to provide a premier scholarly web presence conveying the brand concept **"Engineering Trustworthy Intelligence"**. The portfolio presents Dr. Bemnet's research in Physics-Informed ML, sensor fault diagnosis, multimodal fusion, and autonomous robotics to peer researchers, academic institutions, conference committees, and industrial collaborators.

---

## 2. Key Decisions & Architecture

### Design Philosophy
- **Aesthetic**: Swiss Editorial Minimalism / Quiet Academic Luxury.
- **Palette**: Oxford Academic Navy (`#1B365D`), Cool Scholarly Slate (`#5A6B7C`), Deep Charcoal Slate (`#2C3E50`), and Pure White (`#FFFFFF`) with cool neutral background tones (`#F9FAFB`).
- **Typography**: Google Fonts `Source Serif 4` for titles/authority and `Inter` for clean technical body copy.

### Centralized Data Architecture
- All academic copy, biographical statements, research descriptions, publications, funded projects, and teaching histories are maintained in a single source of truth:
  [`src/data/portfolioData.ts`](../src/data/portfolioData.ts).
- Components consume this data strictly via typed interfaces (`PORTFOLIO_DATA`).
- Do NOT hardcode academic data in individual component files.

---

## 3. Technical Problems Encountered & Resolutions

### 1. Git Authentication Conflict (403 Forbidden)
- **Problem**: Attempts to push to `https://github.com/itslordknows/bemnet-portfolio.git` failed with:
  `remote: Permission to itslordknows/bemnet-portfolio.git denied to Getayawkal-w. fatal: 403`.
- **Root Cause**: Windows Git Credential Manager held a generic credential `LegacyGeneric:target=git:https://github.com` associated with user `Getayawkal-w`.
- **Resolution**:
  - Stored a dedicated credential in Windows Credential Manager under `git:https://itslordknows@github.com` using the `itslordknows` Personal Access Token (PAT).
  - Set remote origin to `https://itslordknows@github.com/itslordknows/bemnet-portfolio.git`.
  - Configured the PAT with required `Contents: Read and write` and `Workflows: Read and write` scopes.
  - Pushes now authenticate seamlessly as `itslordknows` without disturbing other local Git identities.

### 2. Missing Autoprefixer in Build Environment
- **Problem**: Vercel production build failed during PostCSS compilation because `autoprefixer` was declared in `postcss.config.mjs` but missing from `package.json`.
- **Resolution**: Added `autoprefixer: ^10.7.0` to `devDependencies` (commit `3b714de`).

### 3. Non-Interactive CI ESLint Prompt Failure
- **Problem**: In GitHub Actions and Vercel build pipelines, running `next lint` prompted interactively: *"How would you like to configure ESLint?"*, causing non-interactive CI jobs to exit with code 1.
- **Resolution**:
  - Created `.eslintrc.json` extending `"next/core-web-vitals"`.
  - Added `eslint: ^9.20.0` and `eslint-config-next: ^15.5.29` to `devDependencies`.
  - Linting now runs non-interactively with 0 errors.

### 4. Dependency Vulnerabilities & Overrides
- **Problem**: `npm audit` flagged 4 vulnerabilities (1 critical, 2 high, 1 moderate) in Next.js 15.1.0, sharp, postcss, and postcss-selector-parser.
- **Resolution**:
  - Upgraded Next.js to **`15.5.29`** (the official security backport for the Next 15 release series).
  - Configured npm `overrides` in `package.json` for `postcss: "^8.5.33"` and `postcss-selector-parser: "^6.1.6"`.
  - Re-ran audit: **`found 0 vulnerabilities`** without running `npm audit fix --force` or jumping to Next.js 16.

### 5. Multi-Lockfile Next.js Root Detection
- **Problem**: Next.js detected an additional lockfile in the user directory and produced a build warning.
- **Resolution**: Set `outputFileTracingRoot: __dirname` in `next.config.mjs`.

---

## 4. Production Environment & Deployments

- **CI Workflow**: `.github/workflows/ci.yml` runs on push to `main` (installs via `npm ci`, runs `npm run lint`, and executes `npm run build`).
- **Primary Vercel Deployment**:
  - Project: `bemnet-portfolio-website`
  - URL: [https://bemnet-portfolio-website.vercel.app](https://bemnet-portfolio-website.vercel.app)
  - Status: Active, auto-deploying from `origin/main`.
- **Alternate Vercel Project**:
  - Project: `bemnet-portfolio`
  - URL: [https://bemnet-portfolio.vercel.app](https://bemnet-portfolio.vercel.app)
  - Warning: This project previously pointed to an unrelated repository. Always treat `bemnet-portfolio-website` as the authoritative production endpoint.

---

## 5. Development Workflow Checklist for Future Agents

Before committing any future changes:

1. **Verify Content Placement**: Content changes belong in `src/data/portfolioData.ts`.
2. **Execute Local Quality Suite**:
   ```bash
   npx tsc --noEmit     # Must return 0 errors
   npm run lint         # Must pass cleanly
   npm run build        # Must generate static pages in ~2s
   ```
3. **Commit Cleanly**: Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`).
4. **Push to Origin**:
   ```bash
   git push origin main
   ```
5. **Verify CI & Vercel**: Confirm that GitHub Actions (`Build & Validate`) and Vercel deployments report success.
6. **No Secret Leaks**: Never put PATs, tokens, or personal credentials into repository code, config files, or Git history.
