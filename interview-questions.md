# 💼 Senior Technologist Interview Questions (10-15 Yrs Exp)
## Focus: Agentic Workflows, Automated Scaffolding, and CI/CD

The following questions are designed to evaluate a senior engineer's ability to think architecturally and strategically about the development workflow implemented for the "Estimate" project.

---

### 1. The Strategy of Agentic Workflows
> **Question:** In this project, we moved from natural language instructions to a fully scaffolded TypeScript project in minutes using an Agentic Workflow (`/feature`, `/pipeline`). How does this shift affect the traditional SDLC (Software Development Life Cycle), and what are the new risks or "bottlenecks" that emerge when a machine handles the boilerplate?

### 2. Context Isolation vs. Shared Wisdom
> **Question:** We maintained separate `.agent` context folders for the "AI Nexus" and "Estimate" projects within the same workspace. From a senior architectural perspective, how do you decide when to share context across services vs. when to enforce strict isolation? What are the implications for long-term project maintenance?

### 3. TypeScript Strictness & Rapid Scaffolding
> **Question:** Scaling a "Vite + TypeScript" project quickly requires more than just running a scaffold; it requires enforcing strict typing (as seen in our `coding_standards.md`). Why is strict typing critical when working with an AI agent, and how would you implement a "gating mechanism" to ensure the agent doesn't introduce `any` types or loose logic as the project grows?

### 4. CI/CD Orchestration (GitHub Actions)
> **Question:** Our pipeline uses a single-branch (`main`) deployment strategy to GitHub Pages. How would you redesign this CI/CD pipeline for a high-availability production environment that requires Blue-Green deployments or Canary releases, and how would you integrate automated testing into the "Robot Helper" workflow?

### 5. Standardizing "The Magic Button"
> **Question:** The `/pipeline` command handles the "paperwork" of Git. As a lead, how do you standardize these developer-experience (DevEx) tools across a team of 50+ engineers to ensure consistency without stifling individual creativity or causing "shadow IT" workflows?

### 6. Architectural Patterns: Vanilla vs. Frameworks
> **Question:** We chose a Vanilla TypeScript approach for "Estimate" to keep it lightweight. At what point in the system's growth (e.g., state complexity, number of routes, team size) would you transition this to a framework like React or Next.js, and how would you architect that migration to preserve the existing business logic in `estimator.ts`?

### 7. Security & Compliance in Automation
> **Question:** Automated pushes were stopped by browser-based OAuth authentication. From a security standpoint, what are the pros and cons of using Personal Access Tokens (PATs) vs. OAuth in an agentic environment, and how would you manage secrets (API keys for future estimation logic) in a public GitHub repository?

### 8. Testing Strategy for Logic-Heavy Modules
> **Question:** The `estimator.ts` contains the core business value. For a person with 15 years of experience, walk through your strategy for "Defensive Programming" in this module. How would you use unit tests and property-based testing to ensure the USD estimates remain accurate as complexity multipliers evolve?

### 9. Documentation as Code (DaC)
> **Question:** We enforced a "Step 0" mandatory documentation rule (Plan + ASCII Flow). Senior leadership often struggles with documentation debt. How does the "Documentation first, Code later" workflow we used here solve the "Stale Docs" problem, and how would you measure its ROI?

### 10. The Human-in-the-Loop Problem
> **Question:** Even with a "Robot Helper," a human had to set the GitHub Pages source to "GitHub Actions" manually. Identify three other common areas in cloud infrastructure that cannot (or should not) be fully automated by an agent, and explain why human verification remains a critical security and operational boundary.
