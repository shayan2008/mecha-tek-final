# Run from the extracted ZIP. This publishes the redesign to mecha-tek-final/main.
$ErrorActionPreference = 'Stop'
$sourceRoot = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
$manifest = Get-Content -Raw (Join-Path $sourceRoot 'update-manifest.json') | ConvertFrom-Json
Get-Command git -ErrorAction Stop | Out-Null
Get-Command npm.cmd -ErrorAction Stop | Out-Null
Get-Command npx.cmd -ErrorAction Stop | Out-Null
$publishRoot = Join-Path (Split-Path $sourceRoot -Parent) ('mecha-tek-publish-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
git clone --branch main --single-branch https://github.com/shayan2008/mecha-tek-final.git $publishRoot
if ($LASTEXITCODE -ne 0) { throw 'GitHub clone failed. Sign in with GitHub and try again.' }
Push-Location $publishRoot
try {
    # Check all paths before changing any files, preserving newer upstream edits.
    $trackedPaths = @(git ls-tree -r --name-only HEAD)
    if ($LASTEXITCODE -ne 0) { throw 'Could not inspect repository.' }
    foreach ($entry in $manifest.files) {
        if ($trackedPaths -contains $entry.path) {
            $currentBlob = git rev-parse ('HEAD:' + $entry.path)
            if ($LASTEXITCODE -ne 0) { throw ('Could not inspect ' + $entry.path) }
        } else { $currentBlob = $null }
        if ($currentBlob -ne $entry.baseBlob) {
            throw ('GitHub has newer changes in ' + $entry.path + '. No update files were copied. Ask for the redesign to be merged with those changes.')
        }
        if (-not (Test-Path -LiteralPath (Join-Path $sourceRoot $entry.path) -PathType Leaf)) {
            throw ('The extracted ZIP is missing ' + $entry.path)
        }
    }
    foreach ($entry in $manifest.files) {
        $destinationFile = Join-Path $publishRoot $entry.path
        New-Item -ItemType Directory -Force -Path (Split-Path $destinationFile -Parent) | Out-Null
        Copy-Item -LiteralPath (Join-Path $sourceRoot $entry.path) -Destination $destinationFile -Force
    }
    Set-Location (Join-Path $publishRoot 'project')
    npm.cmd ci
    if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed. Nothing was pushed.' }
    npx.cmd tsc --noEmit -p tsconfig.app.json
    if ($LASTEXITCODE -ne 0) { throw 'TypeScript check failed. Nothing was pushed.' }
    npm.cmd run lint
    if ($LASTEXITCODE -ne 0) { throw 'Lint check failed. Nothing was pushed.' }
    npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw 'Build failed. Nothing was pushed.' }
    Set-Location $publishRoot
    foreach ($entry in $manifest.files) {
        git add -- $entry.path
        if ($LASTEXITCODE -ne 0) { throw ('Could not stage ' + $entry.path) }
    }
    git diff --cached --stat
    git commit -m 'Add interactive portfolio design and restore live freestyle optimizer'
    if ($LASTEXITCODE -ne 0) { throw ('Commit failed. Check your Git name and email. Your prepared checkout is at ' + $publishRoot) }
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw ('Push failed. Your commit is safe in ' + $publishRoot + '. Resolve the GitHub sign-in or upstream conflict; do not force push.') }
    Write-Host 'Pushed successfully. Check the Netlify deployment, then refresh https://mecha-tek.com.'
} finally {
    Pop-Location
}
