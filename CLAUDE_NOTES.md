# Portfolio running notes

## Current state
- Next.js 14 portfolio. Sections in app/page.js: Hero, Projects, Toolbox, Stats, GithubContributions, then Contact.

## Recent changes
- Added components/GithubContributions.jsx: contribution graph for GitHub user `mrayyan6`, placed after Stats and before Contact. Client-side fetch from the public API https://github-contributions-api.jogruber.de (no token needed), drawn with Tailwind and the site's blue accent. Has loading skeleton and error fallback.

## Open questions
- Not yet checked in a browser (build/visual check pending).
- Depends on a third-party API staying up; fallback text links to the GitHub profile if it fails.
