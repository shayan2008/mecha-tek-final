# Publish with PowerShell

1. Extract the ZIP fully.
2. Open its `mecha-tek-final` folder. It contains `PUBLISH.ps1`, `update-manifest.json` and the `project` folder.
3. Right-click inside the folder and choose **Open in Terminal** (PowerShell).
4. Run:

```powershell
.\PUBLISH.ps1
```

If your computer does not permit PowerShell scripts, open `PUBLISH.ps1` in Notepad and paste its contents directly into the PowerShell window while in that same extracted folder. You do not need to change your computer’s execution policy.

The script creates a separate sibling clone, checks whether GitHub has newer changes to the affected files, installs dependencies, runs TypeScript/lint/build checks, commits and pushes. It stops on an error. It preserves your existing checkout, commit history and all public assets.

If GitHub changed an affected file since this edition was prepared, the script stops before copying. Merge the redesign with the newer version rather than forcing an overwrite.

If Git needs your name and email, use your own GitHub identity, then finish the commit/push in the prepared checkout printed in the error. Never force push.

Once Netlify reports a successful deployment, open https://mecha-tek.com and press Ctrl+Shift+R.

## Preview before publishing

From the extracted root:

```powershell
cd project
npm.cmd ci
npm.cmd run dev
```

Open the Local URL printed by Vite. Press Ctrl+C to stop.

## What to check visually

- Desktop and phone layout, especially navigation and the project index.
- Drag or arrow-key rotation, wireframe, reset, and the global motion pause.
- Project dialogs and Escape-to-close, awards images, gallery scrolling.
- Pacing shape controls and the live optimizer/source/report links.
- Résumé and email draft behavior.

The session’s browser URL policy blocked visual QA. The production build, type checking, linting, initial React rendering and asset-preservation checks passed.
