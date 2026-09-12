# Mecha Tek

Shayan Doroudiani’s portfolio at [mecha-tek.com](https://mecha-tek.com).

React, TypeScript and Vite. Hosted on Netlify; application root: `project/`.

## Run locally

```bash
cd project
npm ci
npm run dev
```

## Validate and build

```bash
npx tsc --noEmit -p tsconfig.app.json
npm run lint
npm run build
```

## Edit content

- `project/src/content.ts`: projects, experience, awards, profile links and gallery.
- `project/src/App.tsx`: page structure and biography.
- `project/src/index.css`: typography, layout, responsive styles and colours.
- `project/public/resume-2026.html`: current printable résumé; use the page’s Print / Save as PDF button.

The original `project/public` files are preserved byte-for-byte. Old résumé PDFs remain available at their existing URLs, but the site links to the updated résumé. New assets are additive.

## Publish a downloaded copy

1. Clone `https://github.com/shayan2008/mecha-tek-final.git`, or open your existing checkout.
2. Copy the updated project files from the ZIP into it. Keep its `.git` folder. Follow `PUSH-INSTRUCTIONS.md` to remove replaced source components.
3. Run the validation commands above.
4. Review `git diff` and push. Netlify’s connected main branch should build automatically.

The other repository, `shayan2008/mecha-tek`, is an older separate implementation.
