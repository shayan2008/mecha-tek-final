# Updating Mecha Tek from this ZIP

If the redesign is already on GitHub, simply run `git pull` in your existing `mecha-tek-final` checkout.

Otherwise:

1. Unzip the download.
2. Clone `https://github.com/shayan2008/mecha-tek-final.git` with GitHub Desktop, or use your existing local clone.
3. Copy the ZIP’s `project`, `README.md`, `PUSH-INSTRUCTIONS.md` and `netlify.toml` over that clone, replacing matching files. Do not replace the clone’s `.git` folder. Do not delete `project/public`.
4. Delete the old `project/src/components` folder. Those components are replaced by the new `App.tsx` and `content.ts`; none are imported anymore.
5. In a terminal inside the clone:

```bash
cd project
npm ci
npx tsc --noEmit -p tsconfig.app.json
npm run lint
npm run build
cd ..
git add project/src project/index.html project/public/portfolio project/public/resume-2026.html README.md PUSH-INSTRUCTIONS.md netlify.toml
git commit -m "Redesign portfolio and update September 2026 profile"
git push origin main
```

Netlify: base directory `project`, build command `npm run build`, publish directory `dist`. Check the deployment result in Netlify, then open https://mecha-tek.com.

All original public assets remain untouched. The old résumé PDFs are archived in place; the visible résumé link now opens `resume-2026.html`.
