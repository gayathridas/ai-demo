---
description: Implement a new frontend feature or UI component
---

# Feature Implementation Workflow

When the user invokes over chat (e.g., `/feature add a testimonials section`), you must execute the following systematic procedure:

### 0. 📄 Mandatory Documentation (Run FIRST, Before Any Code)
Before writing any code, create the following two files in `docs/`:

1. **Plan Doc** (`docs/<feature_name>_plan.md`):
   - State the goal of the feature.
   - List every specific file change (HTML/CSS/JS), which lines are affected, and why.

2. **ASCII Flow** (`docs/<feature_name>_ascii.md`):
   - Show before/after UI or data flow in ASCII art.
   - Illustrate UI state changes (e.g., where the new component sits in the layout).

After creating both files, update `.agent/filemap.md` to register them under `📂 Documentation (/docs/)`.

Only proceed to Steps 1+ after these two documents exist.

### 1. Context Acquisition
- **Read Guidelines:** Review `.agent/coding_standards.md` to ensure the new code strictly adheres to the glassmorphism, responsive, and mobile-first aesthetics.
- **Review Architecture:** Check `docs/ascii_flow.md` to understand how the current layout flows.
- **Locate Files:** Consult `.agent/filemap.md` to understand the main application structure (typically mapping to `index.html`, `styles.css`, and `script.js`).

### 2. Planning
- Use the `task_boundary` tool (PLANNING Mode).
- Create a markdown plan outlining which specific lines in the HTML, CSS, or JS need modification. 
- Ensure any added UI uses the pre-existing variables in `styles.css` (e.g., `--glass-bg`, `--text-primary`, `--primary-color`).

### 3. Execution
- Use code edit tools (`replace_file_content` / `multi_replace_file_content`) to implement the changes.
- DO NOT use shell scripts or bash loops to edit code; rely on precision tools.
- Ensure semantic HTML, minimal DOM depth, and error-handled JavaScript logic.

### 4. Verification
- Report the final changes concisely to the user.
- If necessary, summarize the modification in `.agent/filemap.md` (e.g., if a new file like `carousel.js` was created).
