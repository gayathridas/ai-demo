# AI Agent Coding Standards & Guidelines

This document outlines the coding conventions and best practices the AI Agent must follow during the Software Development Life Cycle (SDLC) for this project.

## 1. General Principles
- **Clean Code:** Write code that is easy to read, understand, and maintain. Use descriptive variable and function names.
- **DRY (Don't Repeat Yourself):** Avoid code duplication. Extract reused logic into reusable functions or components.
- **Small & Focused:** Keep functions, components, and files focused on a single responsibility.
- **Premium Aesthetics:** For frontend tasks, implement designs that wow the user with rich aesthetics, dynamic animations, modern typography, and glassmorphism.

## 2. HTML Standards
- **Semantic HTML:** Always use proper HTML5 semantic tags (e.g., `<header>`, `<main>`, `<article>`, `<footer>`) instead of generic `<div>` wrappers.
- **Accessibility (a11y):** Implement basic accessibility attributes (e.g., `alt` tags on images, `aria-labels` for dynamic components).
- **Structure:** Keep the DOM shallow where possible to ensure maximum layout performance.

## 3. CSS Standards
- **Variables:** Use CSS Custom Properties (Variables) defined in `:root` to handle theme colors, fonts, and spacing. This guarantees consistency and easy dark-mode support.
- **Responsive Design:** Default to a mobile-first approach. Use media queries (`@media`) to handle tablet and desktop layouts gracefully.
- **Modern Features:** Favor Flexbox and CSS Grid for layout structuring. Utilize `clamp()`, `min()`, `max()` for responsive typography and spacing.
- **Naming Conventions:** Use lowercase, hyphenated class names (kebab-case). Refrain from overly deeply nested CSS selectors.

## 4. JavaScript Guidelines
- **Modern Syntax:** Always use ES6+ features (`const`/`let`, arrow functions, destructuring, template literals). Do not use `var`.
- **Event Handling:** Separate Javascript logic from the HTML templates. Add event listeners in `.js` files using `document.addEventListener`.
- **Error Handling:** Use `try...catch` blocks for asynchronous operations to handle errors gracefully without breaking the app flow.
- **DOM Queries:** Cache DOM queries (`document.querySelector`) in variables if accessed multiple times to optimize performance.

## 5. Deployment & Automation
- **Commit Messages:** Ensure commit messages explicitly state *what* changed and *why*.
- **CI/CD Hygiene:** Ensure all local tests and builds succeed before configuring workflows for production deployments.
- **Pre-Deployment Checklist (MUST follow every time):**
  1. Confirm `.github/workflows/deploy.yml` exists and targets branch `main`.
  2. Remind the user to verify **GitHub > Settings > Pages > Source = "GitHub Actions"** before the first push. This is a manual one-time step that cannot be done via code.
  3. After pushing, verify the "Actions" tab shows a green checkmark. If it fails with `Get Pages site failed`, the Pages Source setting has not been changed.
- **Known Pitfalls:**
  - `Get Pages site failed`: GitHub Pages Source is still set to "Deploy from a branch". Fix: **Settings > Pages > Source > GitHub Actions**.
  - `info: please complete authentication in your browser...`: Git needs browser OAuth. Fix: Let the user run the push manually once; subsequent pushes will be cached.

*Note: These standards form the baseline for the agent context and will evolve as specific frameworks (e.g., React, TypeScript) are adopted.*
