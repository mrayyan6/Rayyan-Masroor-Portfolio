# Copies the latest resume from OneDrive into public/ and pushes it to GitHub if it changed.
# Run by a Windows scheduled task ("PortfolioResumeSync"). Safe to run by hand too.
$ErrorActionPreference = "Stop"

$Source = "C:\Users\rayya\OneDrive - FAST National University\RAYYAN MASROOR\stuff\Muhammad_Rayyan Resume.pdf"
$Repo   = "D:\Resume-CV Projects\portfolio"
$Rel    = "public/Muhammad_Rayyan_Resume.pdf"
$Target = Join-Path $Repo "public\Muhammad_Rayyan_Resume.pdf"
$Log    = Join-Path $env:LOCALAPPDATA "portfolio-resume-sync.log"

function Log($m) { Add-Content -Path $Log -Value ("{0}  {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $m) }

try {
    if (-not (Test-Path -LiteralPath $Source)) { Log "source missing, skipped"; exit 0 }

    $new = (Get-FileHash -LiteralPath $Source -Algorithm SHA256).Hash
    $old = if (Test-Path -LiteralPath $Target) { (Get-FileHash -LiteralPath $Target -Algorithm SHA256).Hash } else { "" }
    if ($new -eq $old) { exit 0 }

    Set-Location $Repo
    $branch = (git rev-parse --abbrev-ref HEAD).Trim()
    if ($branch -ne "main") { Log "on branch '$branch', not main, skipped"; exit 0 }

    Copy-Item -LiteralPath $Source -Destination $Target -Force
    git add -- $Rel
    # Commit only the resume file, so any other work in progress is never swept in.
    git commit -m "updated resume" -- $Rel | Out-Null
    git push | Out-Null
    Log "resume updated and pushed ($new)"
}
catch {
    Log "ERROR: $($_.Exception.Message)"
    exit 1
}
