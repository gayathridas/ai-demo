# AI Agent Configuration & Context

## Project Overview
- **Goal:** Build a frontend application and deploy via automated GitHub Actions pipeline.
- **Project 1:** AI Nexus — ✅ Live (`https://github.com/gayathridas/ai-demo.git`)
- **Project 2:** Estimate (TypeScript) — ✅ Live (`https://github.com/gayathridas/estimate.git`)
  *(Located as a sibling folder in `/Documents/Estimate/`)*

## 📝 Mandatory Documentation Rule (Step 0)
For every new feature or fix across any project, the agent MUST:
1. Create `docs/ascii_flow.md` (Architecture/Logic Flow).
2. Create a Plan Doc (File/Line change list).
3. Update `.agent/filemap.md` (Registry).

## File Map Reference
- **[File Map](.agent/filemap.md):** View the file map for a structural overview of the codebase.

## Tech Stack (Confirmed)
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with glassmorphism, CSS variables, Flexbox/Grid
- **Deployment:** GitHub Actions → GitHub Pages (branch: `main`)

## Workflows & Pipelines
- Automated CI/CD pipeline: `.github/workflows/deploy.yml`
- Custom AI workflows: `.agent/workflows/`

## Coding Guidelines
1. Prioritize clean, modern, and responsive UI design.
2. Follow architectural best practices for the chosen framework.
3. Commit often with descriptive messages.

## ⚠️ Known Issues & Lessons Learned
- **GitHub Pages Source Setting:** After creating `deploy.yml` and pushing for the first time, the user MUST manually go to **GitHub > Settings > Pages > Build and deployment > Source** and set it to **"GitHub Actions"** (not "Deploy from a branch"). Failure to do this causes a `Get Pages site failed` error in Actions.
- **Git Identity Warning:** Git may warn about unconfigured user name/email. This does not block commits but should be resolved by running `git config --global user.name` and `git config --global user.email`.
