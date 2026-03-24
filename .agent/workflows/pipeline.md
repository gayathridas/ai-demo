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

// turbo
### 3. Git Initialization (If needed)
- If the repository hasn't been initialized, run `git init`, `git add .`, and `git commit -m "Initialize project"` using the `run_command` tool. 

### 4. User Instructions
- Provide exact instructions to the user regarding GitHub Repository Settings (e.g., navigating to **Settings > Pages > Source = GitHub Actions**).
- Explain how to push the initial commit to their remote GitHub via CLI commands.
