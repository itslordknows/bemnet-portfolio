# Permanent Agent Guidelines: Dr. Bemnet Wondimagegnehu Mersha Portfolio

This document contains permanent architectural rules, design standards, and operational guidelines for AI coding agents and developers working on this repository.

---

## 1. Project Identity & Purpose

- **Subject**: Dr. Bemnet Wondimagegnehu Mersha, Postdoctoral Researcher in Control Science & Artificial Intelligence at Beijing Institute of Technology (BIT), School of Automation.
- **Core Credo**: *"Engineering Trustworthy Intelligence"*
- **Research Domains**: Physics-Informed Machine Learning, Hybrid Modeling, Sensor Fault Detection, Isolation & Accommodation (FDIA), Multimodal Sensor Fusion, and Autonomous Multi-Agent Robotics.
- **Primary Goal**: Present an authoritative, clean, and elegant academic portfolio showcasing research achievements, publications, funded projects, and teaching background.

---

## 2. Visual Identity & Design System

The visual design is strictly governed by **Swiss Editorial Minimalism / Quiet Academic Luxury**:

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Canvas Background** | Pure White & Soft Neutral | `#FFFFFF` / `#F9FAFB` |
| **Primary Headings** | Oxford Academic Navy | `#1B365D` |
| **Secondary Accents** | Cool Scholarly Slate | `#5A6B7C` |
| **Body Copy** | Deep Charcoal Slate | `#2C3E50` |
| **Heading Font** | Source Serif 4 | Display Serif |
| **Body Font** | Inter | High-legibility technical Sans-Serif |

### Design Guardrails:
- **Do NOT redesign the website** or alter the visual language without explicit instruction.
- Maintain high contrast, generous whitespace, and restrained typography.
- Avoid flashy animations, neon gradients, or consumer-tech aesthetics.

---

## 3. Development & Architecture Rules

1. **Centralized Data Model**:
   - All academic content (bio, publications, research pillars, teaching experience, awards) **MUST remain centralized in [`src/data/portfolioData.ts`](src/data/portfolioData.ts)**.
   - Do NOT hardcode academic copy inside JSX components.
2. **Content Preservation**:
   - Never remove, fabricate, or modify Dr. Bemnet's academic credentials, publications, affiliations, or biographical facts unless specifically instructed with verified sources.
3. **Dependency Discipline**:
   - Keep dependencies minimal. Do not add component libraries, CSS-in-JS runtimes, or heavy animation frameworks.
   - **Never run `npm audit fix --force`**.
   - Keep framework updates within Next.js 15.x patch series unless a full framework migration is requested.
4. **Code Quality & Validation**:
   - Every change must pass:
     1. `npx tsc --noEmit` (zero TypeScript errors)
     2. `npm run lint` (ESLint non-interactive pass)
     3. `npm run build` (Next.js production build succeeds with static generation)

---

## 4. Git, Authentication & Deployment Rules

1. **Repository & Branch**:
   - GitHub Remote: `https://github.com/itslordknows/bemnet-portfolio.git`
   - Production branch is **`main`**. Feature branches follow `feature/<feature-name>`.
2. **Git Authentication**:
   - The authorized GitHub account for this repository is **`itslordknows`**.
   - Windows Credential Manager is configured with the target `git:https://itslordknows@github.com`.
   - The remote URL is set to `https://itslordknows@github.com/itslordknows/bemnet-portfolio.git`.
   - **Never print, commit, or expose Personal Access Tokens (PATs) or secrets in repository files.**
3. **Git Hygiene**:
   - **Never force-push (`--force`) to `main`**.
   - Never rebase or alter remote historical commits.
4. **Vercel Deployment Verification**:
   - Pushes to `main` trigger automated builds on GitHub Actions and Vercel.
   - Production URL: [https://bemnet-portfolio-website.vercel.app](https://bemnet-portfolio-website.vercel.app).
   - Always verify CI checks and Vercel deployment status after pushing.
