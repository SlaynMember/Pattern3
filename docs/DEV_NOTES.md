# Developer Notes & Gotchas

## ⚠️ Why SSR Didn't Work Initially

- Vercel/Netlify could not detect this as a Next.js app because:
  - Routing was under `src/`
  - App structure didn’t include a root-level `pages/` or `app/` folder
  - `react-router-dom` was used instead of file-based routing

---

## 🔄 Lessons Learned

- `react-router-dom` is not compatible with SSR — must use `next/link` and `next/router`
- Google Fonts (like Inter) can fail builds on Vercel unless a fallback is added
- Netlify will fail with "Redirect rules" unless `_redirects` or `netlify.toml` is present
- Folder structure matters for platform detection

---

## 🧠 Best Practices Moving Forward

- Always start with root-level `/pages` and `/components` when using Next.js
- Use `fallback` + `display: swap` for Google Fonts in production
- Use `usePathname()` or `useRouter()` to handle active route logic in headers/navs
