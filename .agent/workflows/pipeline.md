---
description: Generate or configure the GitHub Actions CI/CD deployment pipeline
---

# Pipeline Generation Workflow

When the user requests pipeline generation (e.g., `/pipeline` or `/deploy`), execute the following deployment configuration process:

### 1. Requirements Gathering
- **Read Context:** Review `.agent/agent.md` to recall the project goal (HTML deployment via GitHub Actions).
- **Read Architecture:** Check `docs/ascii_flow.md` to ensure you understand where the compiled code resides (root directory).

### 2. Pipeline Generation Sequence
- Create the necessary directory: `.github/workflows/` (via `write_to_file`).
- Write the Action definition file (e.g., `deploy.yml`). Since this is a vanilla HTML app currently, generate a **GitHub Pages** deployment workflow spanning checkout, artifacts upload, and deployment phases.
- Ensure the workflow respects branch targets (usually mapping to branch `main`).

### 4. Automated Deployment (Active Development)
- Once the initial link is established:
  - Run `git add .` to stage all changes.
  - Run `git commit -m "[Brief summary of changes]"` based on the current task.
  - Run `git push origin main` to trigger the GitHub Actions pipeline.

// turbo
### 5. Finalize & Push
- If the project is already initialized and the user says "deploy" or "/pipeline", execute the add, commit, and push commands sequentially using `run_command`.

### 6. User Instructions
- If the push fails due to authentication, ask the user to run the push manually once.
- Direct the user to the "Actions" tab on GitHub to monitor the deployment progress.

