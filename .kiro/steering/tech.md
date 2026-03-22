# Tech Stack

- Runtime: Node.js (ES modules — `"type": "module"` in package.json)
- Framework: React 18 (JSX, functional components, hooks)
- Build tool: Vite 6 with `@vitejs/plugin-react`
- Styling: Plain CSS with CSS custom properties (no CSS-in-JS, no preprocessor)
- Font: Pretendard (loaded via Google Fonts CDN)
- No routing library — view switching is managed via `useState` in `App.jsx`
- No state management library — local component state only
- No TypeScript — project uses `.jsx` files throughout
- Legacy `app.js` and `style.css` exist at root (vanilla JS/CSS version of the same app, not used by the React build)

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

## Key Conventions
- Use CSS custom properties defined in `:root` of `src/index.css` for all colors, radii, and shadows
- Responsive breakpoint at 860px (single media query in `index.css`)
- Emoji are used as icons throughout — no icon library
