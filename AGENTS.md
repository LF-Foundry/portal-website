# Repository Guidelines

## Project Structure & Module Organization

The Git repository wraps the application in `portal-website/`; run project commands from that directory. The site uses the Next.js App Router. Route files live in `portal-website/src/app/`, including `page.tsx` for the landing page and route folders such as `download/`, `docs/`, and `pricing/`. Reusable UI belongs in `src/components/`, static content in `src/data/`, shared helpers in `src/lib/`, and browser-served assets in `public/`. Global styles and Tailwind CSS imports are in `src/app/globals.css`.

## Build, Test, and Development Commands

Install dependencies with `npm install` (or `npm ci` for a clean, lockfile-based install), then use:

- `npm run dev` — start the local Next.js development server at `http://localhost:3000`.
- `npm run lint` — run ESLint with Next.js Core Web Vitals and TypeScript rules.
- `npm run build` — create a production build and catch compilation or type errors.
- `npm run start` — serve the completed production build locally.

## Coding Style & Naming Conventions

Write TypeScript with strict type checking. Follow the existing two-space indentation, semicolons, and double quotes. Name React components and their files in PascalCase (`Navbar.tsx`), functions and variables in camelCase, and route directories in lowercase. Prefer the `@/` alias for imports from `src/`. Keep page files focused on composition; move reusable UI, data, and logic into their matching directories. Use Tailwind utility classes for component styling and reserve `globals.css` for genuinely global rules or shared animations.

## Testing Guidelines

No automated test framework or coverage target is currently configured. Before submitting changes, run `npm run lint` and `npm run build`, then manually check affected routes at desktop and mobile widths. If tests are introduced, colocate them as `*.test.ts` or `*.test.tsx` and add the corresponding npm script to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short descriptions, but several are vague and repeated. Use a concise, specific imperative subject, such as `Fix Windows download link`. Keep each commit scoped to one coherent change. Pull requests should explain what changed and why, list validation performed, link relevant issues, and include before/after screenshots for visual changes. Call out new environment variables, dependencies, or deployment considerations explicitly.

## Agent-Specific Notes

Keep this file current. When a confirmed, enduring repository convention or product decision becomes important for future work, add it here without waiting to be asked. Do not add temporary task notes or assumptions.

Define release download URLs once in portal-website/src/lib/downloads.ts. Use GitHub's /releases/latest/download/<asset-name> format and never hardcode a release tag such as v1.0.0. Keep the uploaded asset filenames unchanged between releases so the automatic links continue to work.

Portal is currently available for both Windows and macOS. Do not describe the macOS release as unavailable or coming soon.

Do not add a "Back to Portal" link to the Download or Help pages.

Before changing Next.js behavior, read the relevant documentation under `portal-website/node_modules/next/dist/docs/`; this repository uses Next.js 16, whose APIs may differ from older examples.
