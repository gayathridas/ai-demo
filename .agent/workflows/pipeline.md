---
description: Generate or configure the GitHub Actions CI/CD deployment pipeline
---

# Pipeline Generation Workflow

When the user requests pipeline generation (e.g., `/pipeline` or `/deploy`), execute the following deployment configuration process:

### 0. 📄 Mandatory Documentation (Run FIRST for Every Feature or Fix)
Before writing any code or running any commands, always create the following two files in `docs/`:

1. **Plan Doc** (`docs/<feature_name>_plan.md`):
   - Describe the goal, what files will be changed, and why.
   - List each specific change per file (HTML/CSS/JS).

2. **ASCII Flow** (`docs/<feature_name>_ascii.md`):
   - Show the before/after layout in ASCII art.
   - Illustrate data flow, component relationships, or UI changes as relevant.

After creating both files, update `.agent/filemap.md` to register them under the `📂 Documentation (/docs/)` section.

Only proceed to Steps 1+ after these documents exist.

### 1. Requirements Gathering
- **Read Context:** Review `.agent/agent.md` to recall the project goal (HTML deployment via GitHub Actions).
- **Read Architecture:** Check `docs/ascii_flow.md` to ensure you understand where the compiled code resides (root directory).

### 2. Pipeline Generation Sequence
- Create the necessary directory: `.github/workflows/` (via `write_to_file`).
- Write the Action definition file (e.g., `deploy.yml`). Since this is a vanilla HTML app currently, generate a **GitHub Pages** deployment workflow spanning checkout, artifacts upload, and deployment phases.
- Ensure the workflow respects branch targets (usually mapping to branch `main`).

### 3. ⚠️ Pre-Push Verification (MANDATORY — Do Not Skip)
Before running `git push`, always remind the user of this one-time manual step:
> **"Before this push will deploy correctly, please go to your GitHub repository > Settings > Pages > Build and deployment > Source, and set it to 'GitHub Actions' instead of 'Deploy from a branch'. This only needs to be done once."**

This is the single most common cause of deployment failure (`Get Pages site failed`). Alert the user BEFORE running the push command, not after.

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
- If deployment fails with `Get Pages site failed`, guide the user to **Settings > Pages > Source = GitHub Actions**.
- Direct the user to the "Actions" tab on GitHub to monitor the deployment progress.

