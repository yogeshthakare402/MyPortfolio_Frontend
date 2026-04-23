# Portfolio (Next.js App Router)

This project was migrated from CRA to Next.js with App Router and TypeScript.

## Stack

- Next.js (App Router)
- React Server Components by default
- TypeScript
- Framer Motion (small, optional animated wrappers)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Rendering Strategy

- **SSG + ISR**: home, projects list, and project detail pages (`revalidate = 3600`)
- **Client-only**: contact form and small nav interactions
- **Server Components**: everything else

## Structure

- `src/app`: routes, layout, metadata, API handlers
- `src/features`: feature-based modules
- `src/components/ui`: reusable primitives
- `src/lib`: utilities
