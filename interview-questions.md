# 💼 Technology Interview Questions & Answers

This document contains specialized interview questions and "ideal" answers based on the development of the **AI Nexus** and **Estimate** projects.

---

## 🏆 Part 1: Senior Technologist (10-15 Yrs Exp)
**Focus:** Architecture, Strategy, and Agentic Workflows.

### 1. The Strategy of Agentic Workflows
**Question:** In this project, we moved from natural language instructions to a fully scaffolded TypeScript project in minutes using an Agentic Workflow (`/feature`, `/pipeline`). How does this shift affect the traditional SDLC?
**Answer:** It accelerates the "Inner Loop" of development (coding/testing) by 10x. The bottleneck shifts from *typing code* to *verifying logic*. A senior leader must pivot from being a "builder" to a "reviewer/architect," focusing on "Step 0" (planning) to ensure the AI doesn't hallucinate a suboptimal architecture.

### 2. Context Isolation vs. Shared Wisdom
**Question:** We maintained separate `.agent` folders for each project. How do you decide when to share context vs. when to isolate?
**Answer:** Isolation is best for microservices or standalone apps (like Estimate) to prevent "context leakage" (e.g., the AI trying to use project A's variables in project B). Shared wisdom should be abstracted into a central `company_standards` or `shared-components` library, rather than mixing active development context.

### 3. TypeScript Strictness & Rapid Scaffolding
**Question:** Why is strict typing critical when working with an AI agent?
**Answer:** AI agents are non-deterministic. Strict TypeScript provides "machine-readable guardrails." If the AI generates a type mismatch, the build fails immediately. Without `strict: true`, the AI might introduce subtle runtime bugs that are harder for a human to catch during a rapid agentic session.

### 4. CI/CD Orchestration (GitHub Actions)
**Question:** How would you redesign our GitHub Pages pipeline for a high-availability production environment?
**Answer:** I would implement a "Staging" environment in a separate branch/bucket. I'd add a "Canary" step where 5% of traffic is routed to the new build. I'd also integrate automated Playwright/Cypress tests into the `deploy.yml` that MUST pass before the "Upload Artifact" step occurs.

### 5. Standardizing "The Magic Button"
**Question:** How do you standardize slash commands like `/pipeline` across a large team?
**Answer:** By creating a "Platform Engineering" team that maintains a centralized repository of "Golden Paths" (standardized workflows). Instead of each repo having its own `.agent/workflows`, they would pull from a version-controlled source of truth, ensuring every project follows the same security and deployment protocols.

### 6. Architectural Patterns: Vanilla vs. Frameworks
**Question:** At what point would you transition "Estimate" from Vanilla TS to React/Next.js?
**Answer:** Once we need complex state management (e.g., a multi-step wizard), component reusability across many pages, or Server-Side Rendering (SSR) for SEO/Performance. The migration is simplified if the core business logic (like `estimator.ts`) is kept as pure TypeScript functions, isolated from DOM manipulation.

### 7. Security & Compliance in Automation
**Question:** What are the pros/cons of PATs vs. OAuth in an agentic environment?
**Answer:** OAuth is safer as it provides short-lived, scoped access. PATs are easier to automate but highly dangerous if leaked. For a senior role, the answer must include "Principle of Least Privilege": the agent should only have `write` access to specific repositories, never `admin` access to the full organization.

### 8. Testing Strategy for Logic modules
**Question:** Walk through your strategy for "Defensive Programming" in `estimator.ts`.
**Answer:** I'd implement **Property-Based Testing** to feed thousands of random strings into the idea input to ensure the multiplier logic never returns `NaN` or negative numbers. I'd also use `Zod` or `io-ts` for runtime schema validation to ensure the data shape matches our interfaces exactly.

### 9. Documentation as Code (DaC)
**Question:** How does "Step 0" mandatory documentation solve the "Stale Docs" problem?
**Answer:** It makes documentation a *blocker* for code. If the code is changed through the `/feature` command, the command *must* update the plan and ASCII flow first. This keeps the doc and the code in perfect a-sync sync, rather than documentation being a "chore" done at the end of a sprint.

### 10. The Human-in-the-Loop Problem
**Question:** Identify three areas in cloud infrastructure that should NOT be fully automated.
**Answer:** 
1. **IAM Policy changes**: High risk of privilege escalation.
2. **Database Deletions/Migrations**: Risk of permanent data loss.
3. **Cost Threshold Increases**: A runaway loop could result in a massive cloud bill. Human verification is the final "kill switch" for safety.

---

## 🥈 Part 2: Mid-Level Technologist (5-8 Yrs Exp)
**Focus:** Implementation, Tooling, and Best Practices.

### 1. Type-Safe Imports
**Question:** In the project, we encountered a `TS1484` error. What causes this in strict TypeScript, and how do you fix it?
**Answer:** This happens with `verbatimModuleSyntax: true` when you import a `type` as a `value`. The fix is to use `import type { Foo }` for type-only imports, ensuring the compiler doesn't try to include it in the final JavaScript bundle.

### 2. Vite "Base" Path Configuration
**Question:** Why did we set `base: '/estimate/'` in `vite.config.ts`, and what happens if you forget this for GitHub Pages?
**Answer:** GitHub Pages hosts project sites at a subpath (`/repo-name/`). Without the `base` setting, all asset links (JS/CSS) will look in the root (`/assets/...`), leading to 404 errors. Setting `base` ensures Vite prefixes all URLs correctly.

### 3. Glassmorphism & Performance
**Question:** Glassmorphism heavily uses `backdrop-filter`. What is the performance implication of this, and how do you optimize it?
**Answer:** `backdrop-filter` is expensive because the browser has to "repaint" the background for every pixel of the glass element. Optimization includes using it sparingly, adding `will-change: transform` to the element, and ensuring the layers beneath are not animating unnecessarily.

### 4. Git Workflows: Squash vs. Merge
**Question:** When using an AI agent that makes many small commits during a `/feature` run, would you prefer Squashing or Merging for the final PR?
**Answer:** Squashing is better. It cleans up the "noise" of the agent's incremental steps and leaves a single, clean "Feature: [Name]" commit in the history, making it easier to rollback or track changes.

### 5. ES6+ Template Literals
**Question:** In `main.ts`, we used backticks for building HTML strings. What are the security risks (like XSS) and how do you mitigate them in pure TypeScript?
**Answer:** Template literals don't escape HTML by default. If a user enters `<script>alert(1)</script>`, it could execute. Mitigation: Always sanitize user input before rendering, or use `.textContent` for text instead of mapping directly to `.innerHTML`.

### 6. CSS Variable Strategy
**Question:** We used `:root` variables for our design system. What is the benefit of this over hardcoded HEX values when building for a dark-mode app?
**Answer:** It allows for "Theming via Token." By changing a single variable like `--accent-start`, the entire app updates instantly. It also makes it trivial to implement a Toggle by simply switching a CSS class on the `<body>` that overrides those root variables.

### 7. Form Validation Logic
**Question:** Why did we use `e.preventDefault()` and `novalidate` on the Estimate form?
**Answer:** `preventDefault()` stops the page from refreshing on submit (essential for SPAs). `novalidate` allows us to handle validation entirely in TypeScript (e.g., adding our `input-error` CSS class), giving us full control over the UX instead of relying on inconsistent browser defaults.

### 8. TypeScript Interfaces vs. Classes
**Question:** We used `interface` for `EstimateResult` instead of a `class`. When should you use a class in this specific estimator project?
**Answer:** Use a `class` if you need to co-locate logic with data (e.g., an `.incrementComplexity()` method). For simple data-transfer objects (DTOs) like our results, an `interface` is lighter and easier to serialize/deserialize over an API.

### 9. GitHub Actions Permissions
**Question:** What does `permissions: pages: write` do in the `deploy.yml`?
**Answer:** It grants the GitHub Action the specific right to write to the GitHub Pages deployment server. Without this explicit permission (introduced in GHA's security hardening), the "Deploy to GitHub Pages" step will fail with a forbidden error.

### 10. Mobile-First Media Queries
**Question:** In `style.css`, we used `@media (max-width: 640px)`. Is this mobile-first or desktop-first, and why does it matter?
**Answer:** This is actually **Desktop-First** (targeting smaller screens via `max-width`). A **Mobile-First** approach would define the narrow view first and use `min-width: 641px` for larger screens. Mobile-first is preferred because it's simpler to "add" complexity to a layout than to "hide" or "undo" it.
