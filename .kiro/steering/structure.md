# Project Structure

```
src/
  main.jsx          # React entry point (renders <App />)
  App.jsx           # Root component — owns view state, renders pages
  index.css         # Global styles and CSS custom properties
  components/       # Reusable UI components
    BriefingSlider.jsx   # Auto-rotating briefing card (props: briefings[])
    Calendar.jsx         # Monthly calendar with event dots
    ChatBar.jsx          # AI chat input bar (props: placeholder, onSend)
    Checklist.jsx        # Toggleable to-do list (local state)
    UpcomingList.jsx     # Upcoming schedule items (hardcoded data)
  pages/            # Full-page views
    LandingPage.jsx      # Welcome screen with briefing + chat
    DashboardPage.jsx    # Profile header + 3 summary nav cards
    SchedulePage.jsx     # Calendar + upcoming + checklist
    AcademicPage.jsx     # Grades, exams, assignments
    AdminPage.jsx        # Activities, contests, communications
index.html          # Vite HTML entry
vite.config.js      # Vite config (React plugin only)
app.js              # Legacy vanilla JS (not used by React build)
style.css           # Legacy vanilla CSS (not used by React build)
```

## Architecture Patterns
- Flat component hierarchy: `App` → pages → components (no deep nesting)
- Navigation via `onNavigate` / `onBack` callback props — no router
- Pages are self-contained: each page imports only the components it needs
- Data is hardcoded inline or in module-level constants — no API layer or data fetching
- Components use `export default function` syntax (no class components)
- All state is managed with `useState` / `useEffect` hooks at the component level
