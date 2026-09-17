# Muhammad Salman Ahmad — Portfolio

Personal portfolio for a Full-Stack & AI Engineer. Single-page site built with React 19, Vite, TypeScript, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # type-checks, then outputs to dist/
npm run preview   # serves the production build
```

## Editing content

All copy lives in `src/data/`:

- `profile.ts` — name, tagline, links, hero stats, nav items
- `experience.ts` — work history and education
- `projects.ts` — project cards (filterable by category)
- `skills.ts` — skill groups; each badge can carry a simpleicons.org slug and a docs link

Replace `public/me.jpg` and `public/Muhammad_Salman_Ahmad_Resume.pdf` to update the photo and resume.

## Deploy

The build is static. Deploy `dist/` to Vercel, Netlify, GitHub Pages or any static host. No rewrites are needed because the site has a single route.
