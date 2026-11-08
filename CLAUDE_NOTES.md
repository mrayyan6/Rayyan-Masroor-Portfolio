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
