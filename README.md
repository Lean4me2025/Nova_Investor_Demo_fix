# Nova Investor Demo Build (FIX)

This build fixes:
- Traits not rendering (uses `./traitdata.json` and no-store fetch).
- Passing selected traits to results via `localStorage`.
- Rendering selected traits on results + PDF + email hidden field.

## Deploy
1) New GitHub repo → upload all files.
2) Vercel → New Project → import the repo → Deploy (Framework: Other, Root: ./).

## Test
- Intro → Get Started
- Traits → select some → See Results
- Results → Download PDF → Email form (Formspree) → Bookstore
