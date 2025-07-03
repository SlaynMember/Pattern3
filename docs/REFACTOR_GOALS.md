# Pattern3 Refactor Goals – CSR to SSR Migration

## Project Context

This repo originally started as a client-side rendered (CSR) React project using Bolt (Stackblitz) with no server-side rendering (SSR), no pages directory, and a generic frontend structure.

As the project matured toward SEO visibility and production deployment (via Vercel and Netlify), a full migration was required.

---

## ✅ Main Goals of Refactor

- Migrate routing from `react-router-dom` to Next.js-native routing using:
  - `<Link href="">` from `next/link`
  - `useRouter()` from `next/router` or `next/navigation`
- Replace custom `Routes` + `BrowserRouter` setup with file-based routing
- Move project structure from `/src/` to root-level `/pages`, `/components`, `/lib` (for Vercel/Netlify detection)
- Remove unused Vite/React-only boilerplate (`main.tsx`, `vite-env.d.ts`, etc.)
- Regenerate a clean `package-lock.json` to resolve build version conflicts
- Add deploy config files: `_redirects`, `netlify.toml`, `.vercel/project.json`
