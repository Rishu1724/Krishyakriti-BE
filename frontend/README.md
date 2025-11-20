# Learn Frontend (Vite + React + Tailwind)

Minimal frontend demo that implements a `/learn` page using your color palette.

Quick start (PowerShell):

```powershell
cd frontend
npm install
npm run dev
```

Notes:
- Tailwind config includes custom colors: `primary` (#009179), `accent` (#006A58), `stonetone` (#E7E1C6), `textprimary` (#3C3B35).
- The back button uses `accent` color; primary actions use `primary`.
- I kept components minimal (Button, Card) to demonstrate usage and accessibility-friendly focus states.

Accessibility:
- Check contrast for text over `stonetone` background; adjust font-weight or background if any issues in your environment.

Next steps (I can do for you):
- Add real content or connect `/learn` items to backend endpoints.
- Add icons, tests, or additional components.
