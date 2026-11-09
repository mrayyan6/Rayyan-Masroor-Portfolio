# Portfolio running notes

## Current state
- Next.js 14 portfolio. Sections in app/page.js: Hero, Projects, Toolbox, Stats, GithubContributions, then Contact.

## Recent changes
- components/GithubContributions.jsx: GitHub-style contribution panel for `mrayyan6` (green GitHub dark palette, month labels on top, Mon/Wed/Fri on the left, hover tooltips, Less/More legend, full-width cells). Data from public API jogruber.de (client fetch). Placed after Stats, before Contact.

## Open questions
- Logged-out and API count is 375; owner logged-in view shows 520. Gap is private contributions: needs "Private contributions" enabled in GitHub Contribution settings (user action). Whole panel now links to the GitHub profile in a new tab.
- Depends on a third-party API staying up; fallback text links to the GitHub profile if it fails.

## Latest (Toolbox + contributions polish)
- Toolbox.jsx rewritten from the tall pinned/scroll-parallax card list to a compact 3 column grouped chip grid (Web & Backend, Data & ML, AI & Automation). Fits about one screen. Tool notes kept as hover titles. GSAP no longer used there (still used in Contact).
- Contributions panel: tooltip moved outside the scroll container (was clipped on top row); profile link is now a visible GitHub pill button. Count now shows 521 (private contributions enabled on GitHub).

## Contributions reliability (2026-11-09)
- Panel showed "not available" because the browser fetched the slow (about 11s) third party API and failed. Now `components/GithubContributions.jsx` is a server component: fetches on the server with 6h revalidate, falls back to committed `data/contributions.json` snapshot if the API is down. Client panel moved to `GithubContributionsPanel.jsx` (still fetches client side only if no initial data). Refresh the snapshot occasionally by re-downloading the API URL into data/contributions.json.

## Resume auto sync
- Source of truth: `C:\Users\rayya\OneDrive - FAST National University\RAYYAN MASROOR\stuff\Muhammad_Rayyan Resume.pdf`. Site serves `public/Muhammad_Rayyan_Resume.pdf`.
- `scripts/sync-resume.ps1` copies it over if the file hash changed, commits only that file ("updated resume") and pushes to main. Skips if not on main.
- Windows scheduled task `PortfolioResumeSync` runs it weekly on Monday at 12:00 (changed from daily 2026-11-09; catches up if the PC was off). Launched via `conhost --headless` so no console window flashes. Log: `%LOCALAPPDATA%portfolio-resume-sync.log`.
- Run by hand: `powershell -File scripts/sync-resume.ps1`. Remove: `Unregister-ScheduledTask PortfolioResumeSync`.
- First sync done 2026-11-08 (pushed 0f0b12a).
