# Copilot Agents Instructions for DISE-O-WEB

## 1) Big picture
- This is a static frontend learning repository. Files are grouped by weekly exercises under `Semana02/{ACTIVIDAD02,CLASS02,TAREA02}`.
- Each `index00X.html` is a self-contained page with inline CSS and small JS, no Node/npm/build toolchain detected.
- Main interactive logic is in-page scripts, e.g. `Semana02/TAREA02/index0001.html` has `buscar()` to filter `.card` entries from the search box.

## 2) What to edit
- Keep changes local to the HTML file root of the task you’re targeting.
- Preferred pattern: avoid adding external dependencies; use existing CSS classes (`header`, `.hero`, `.card`, `.categoria`, etc.).
- For feature updates, mirror the existing structure: headings, sections, card grids, and footer.

## 3) Naming and structure conventions
- URLs are project-relative; target link updates in `href` and `target="_blank"` on `.card` anchors.
- Sections use `id` values for nav jump links (`#organizacion`, `#diseno`, `#programacion`, `#ia`, `#conclusiones`).
- Search uses `id="buscador"` + `oninput="buscar()"`; JS loop checks `.name` and `.desc` text content.
- Hidden cards are toggled with `.oculto` (`display: none`). Follow this for filter logic.

## 4) Testing/debugging workflow
- No build/test scripts. Confirm changes by opening the relevant `index...html` directly in browser.
- For quick validation use browser DevTools console and HTML inspector.
- If adding JS, verify there is no existing global naming conflict (e.g., `buscar`).

## 5) External dependencies and integration points
- No backend APIs. Pages link to third-party boards (e.g. `github.com`, `figma.com`, `chat.openai.com`).
- No package manager in repo; do not assume `npm install`/`npm run`.

## 6) Agent behavior expectations
- Avoid generic suggestions; implement with concrete changes in file structure and markup.
- If modifying one task page, do not touch others unless explicitly required by user request.
- Document in PR comments: file path, changeset, and manual validation step (open in browser + test search input + nav links).

## 7) What not to do
- Do not add frameworks/compilers (no React/Vite/webpack/etc.).
- Do not reorganize into a non-existent monorepo layout; preserve current `Semana02` folder layout.
