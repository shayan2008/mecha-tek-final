# Mecha Tek · Shayan Doroudiani

Personal engineering portfolio at [mecha-tek.com](https://mecha-tek.com). React, TypeScript, Vite, Three.js. Netlify builds from `project/`.

## This edition

- Bricolage Grotesque and IBM Plex Mono, bundled locally.
- Interactive 3D rotational study: drag or arrow keys to rotate; wireframe and reset controls.
- Custom swimming-lane and path-planning illustrations.
- Interactive, explicitly illustrative pacing curves and restored [200 m freestyle optimizer](https://calculus-optimiziation-200mfree.streamlit.app/).
- Project notes, filtered project index, awards records, photo filmstrip and printable résumé.
- Global animation pause and reduced-motion support. The 3D scene uses a separate bundle, caps its resolution and pauses updates when off screen. WebGL-unavailable browsers receive a vector fallback.

All original public files are preserved. The geometric studies are illustrations, not renders of completed personal projects or competition telemetry.

## Local preview

```powershell
cd project
npm.cmd ci
npm.cmd run dev
```

## Checks

```powershell
npx.cmd tsc --noEmit -p tsconfig.app.json
npm.cmd run lint
npm.cmd run build
```

## Publish the ZIP

Open PowerShell in the extracted root and run the contents of `PUBLISH.ps1`, or execute that file if local policy allows. See `PUSH-INSTRUCTIONS.md`.

The script creates a fresh sibling checkout, verifies the changed files still match the revision this update was built from, copies only the explicit update files, validates, commits and pushes. It never copies over or deletes existing `project/public` files.

## Edit

| File | Purpose |
| --- | --- |
| `project/src/content.ts` | Projects, awards, experience and image references |
| `project/src/App.tsx` | Page layout, personal copy and UI interactions |
| `project/src/index.css` | Type, responsive composition and animation |
| `project/src/components/MotionStudy.tsx` | Interactive 3D gimbal illustration |
| `project/src/components/ProjectVisuals.tsx` | Pool lanes, rescue path and pacing diagrams |
| `project/public/resume-2026.html` | Printable résumé |

Validation: production build, TypeScript, ESLint, source/asset checks and React server render. Browser preview was blocked by the session’s URL policy; visual and browser interaction QA remain unverified.
