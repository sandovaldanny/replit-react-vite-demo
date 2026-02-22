# Repository Guidelines

## Project Structure & Module Organization
This is a small Vite + React application.

- `src/`: application source code.
- `src/components/`: reusable UI components (for example, `GreetingForm.jsx`).
- `src/App.jsx`: top-level app composition.
- `src/index.jsx`: React entry point.
- `src/App.css`: global and component-level styling.
- `public/`: static assets such as `favicon.svg`.
- Root config files: `vite.config.js`, `tsconfig.json`, `package.json`.

Keep components focused and place related UI logic near the component that uses it.

## Build, Test, and Development Commands
Install dependencies first:

```bash
npm install
```

Key commands:

- `npm run dev`: starts local development server (Vite, default port `5173`).
- `npm run build`: creates a production build in `dist/`.
- `npm run preview`: serves the production build locally for verification.

## Coding Style & Naming Conventions
- Use modern React with function components and hooks.
- Use 2-space indentation and semicolon-free style to match current files.
- Component files: `PascalCase` (example: `GreetingForm.jsx`).
- Variables/functions: `camelCase`.
- CSS class names: lowercase kebab-case (example: `greeting-card`, `btn-primary`).
- Prefer clear Spanish UI strings when editing existing UI copy, unless a feature requires otherwise.

## Testing Guidelines
There is currently no automated test framework configured in this repository.

Until tests are added:
- Validate changes with `npm run build`.
- Manually verify key flows in `npm run dev` (form validation, button states, and rendered messages).

If you introduce tests later, colocate them under `src/` using `*.test.jsx` naming.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries (English or Spanish), for example:
- `Improve greeting form buttons and add clear action`
- `Add last name field and full-name greeting validation`

Guidelines:
- Keep commit messages concise and action-oriented.
- Scope each commit to one logical change.
- PRs should include: purpose, files changed, manual test steps, and screenshots for UI changes.
- Link related issues when available and note any follow-up work explicitly.
