# Portfolio — Project Notes

Personal portfolio site. Next.js 14 (App Router), Tailwind CSS, no external UI libraries.
Owner: Muhammad Rayyan Masroor.

## Installed Claude Code skills (from SKILLS.md)

Skills live in `.claude/skills/` and load when Claude Code starts.

- **ui-ux-pro-max** (+ bundled: brand, design, design-system, ui-styling, slides, banner-design)
  — design styles, color palettes, font pairings, UX guidance. Trigger by asking for design help
  or naming a style (e.g. "glassmorphism", "bento grid").
- **framer-motion** — correct, performant Motion patterns (variants, gestures, scroll, page
  transitions). The `framer-motion` npm package is installed in this project.
  Modern import: `import { motion } from "framer-motion"`.

## MCP Servers

### 21st.dev Magic (UI component generation) — NEEDS API KEY
Configured in `.mcp.json` as the `magic` server. Before it works:
1. Get a free API key at https://21st.dev/magic/console
2. In `.mcp.json`, replace `REPLACE_WITH_YOUR_21ST_DEV_MAGIC_KEY` with your key.
3. Restart Claude Code and approve the `magic` MCP server when prompted.

Then invoke with `/ui` or `/21`, e.g. "/ui pricing section with 3 tiers and a monthly/annual toggle".
Do not commit a real API key — keep the key local.
