# Claude Code Skills Setup
## Read this file first, then run each install command in order.
---

## IMPORTANT: How to use this file

Put this file in your project root. Then tell Claude Code:
> "Read SKILLS.md and install everything in it"

Claude Code will run the commands, install all skills, and then be ready to use them.

---

## Prerequisites

Make sure you have these installed before anything else:

```bash
# Check Node.js (required for npm/npx commands)
node --version   # needs v18+

# Check Python (required for UI UX Pro Max search scripts)
python3 --version   # needs 3.x

# Check npm
npm --version
```

---

## SKILL 1 — UI UX Pro Max
**What it does:** Gives Claude a database of 50+ design styles, 161 color palettes, 57 font pairings, and UX guidelines. Works across React, Next.js, Vue, Tailwind, and more.
**GitHub:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

```bash
# Install the CLI globally
npm install -g ui-ux-pro-max-cli

# Install into your project for Claude Code
uipro init --ai claude

# Verify it installed
ls .claude/skills/ui-ux-pro-max/
```

**How to trigger it in Claude Code:**
> "Design a dashboard using glassmorphism style"
> "Give me a color palette for a fintech app"
> "Build a landing page with dark mode and bento grid layout"

---

## SKILL 2 — 21st.dev Magic (UI Components)
**What it does:** Lets Claude generate beautiful, production-ready React/TypeScript UI components using natural language. Type `/ui` or `/21` to invoke it.
**GitHub:** https://github.com/21st-dev/magic-mcp
**Note:** This one requires a free API key from https://21st.dev/magic/console

```bash
# Step 1: Get your free API key at https://21st.dev/magic/console

# Step 2: Install the MCP server
npx -y @21st-dev/magic@latest API_KEY="your-api-key-here"

# Step 3: Add to your project CLAUDE.md (Claude Code will read this automatically)
mkdir -p .claude
cat >> CLAUDE.md << 'EOF'

## MCP Servers
### 21st.dev Magic
- Run: npx @21st-dev/magic API_KEY="your-api-key-here"
- Use for: generating React UI components from natural language
EOF
```

**How to trigger it in Claude Code:**
> "Create a pricing section with 3 tiers and monthly/annual toggle"
> "Build a modern navbar with mobile hamburger menu"
> "/ui hero section with gradient background and CTA button"

---

## SKILL 3 — Framer Motion (Animations)
**What it does:** Teaches Claude to write correct, performant animations using Motion (formerly Framer Motion). Covers variants, gestures, scroll animations, and page transitions.
**GitHub:** https://github.com/Schoepplake/framer-motion-skill

```bash
# Option A — Install via Claude plugin marketplace (inside Claude Code terminal)
# Run this command inside Claude Code:
# /plugin marketplace add Schoepplake/framer-motion-skill
# /plugin install framer-motion@framer-motion-skill

# Option B — Manual install
mkdir -p .claude/skills/framer-motion
npx degit Schoepplake/framer-motion-skill/.claude/skills/framer-motion .claude/skills/framer-motion

# Option C — Install the actual npm package (so Claude can use it in your code)
npm install framer-motion
# Note: modern import is from "motion/react" not "framer-motion"
```

**How to trigger it in Claude Code:**
> "Add a staggered fade-in animation to this list"
> "Create a page transition with slide effect"
> "Add hover and tap animations to these buttons"
> "Make this element animate when it scrolls into view"

---

## SKILL 4 — Website Security Audit (OWASP)
**What it does:** Makes Claude audit your codebase against OWASP Top 10 security risks — SQL injection, XSS, CSRF, broken auth, exposed secrets, and more. Generates a full report with severity scores.
**GitHub:** https://github.com/agamm/claude-code-owasp

```bash
# Install the OWASP security skill
mkdir -p .claude/skills
npx degit agamm/claude-code-owasp/.claude/skills/owasp-security .claude/skills/owasp-security

# Verify
ls .claude/skills/owasp-security/
```

**Bonus — Full security audit with PDF reports:**
**GitHub:** https://github.com/McGo/claude-code-security-audit

```bash
# For a more advanced security audit (generates PDF reports)
git clone https://github.com/McGo/claude-code-security-audit.git
cd claude-code-security-audit
chmod +x install.sh
./install.sh
cd ..
```

**How to trigger it in Claude Code:**
> "Review this code for security issues"
> "Check my authentication implementation for vulnerabilities"
> "Run a full OWASP security audit on this project"
> "Is there any sensitive data being exposed in this API?"

---

## SKILL 5 — SEO Audit
**What it does:** Audits your website for technical SEO — meta tags, Open Graph, JSON-LD schema, sitemap, robots.txt, Core Web Vitals, headings, and more. Gives you a pass/fail report and fixes everything.
**GitHub:** https://github.com/aevans-eng/seo-skill (lightweight, good for portfolios)
**GitHub:** https://github.com/AgriciDaniel/claude-seo (full suite, 25 sub-skills)

```bash
# Option A — Lightweight SEO skill (good for portfolio/personal site)
mkdir -p ~/.claude/skills/seo
curl -o ~/.claude/skills/seo/SKILL.md https://raw.githubusercontent.com/aevans-eng/seo-skill/main/SKILL.md

# Option B — Full SEO suite with 25 sub-skills (for serious SEO work)
git clone https://github.com/AgriciDaniel/claude-seo.git
cp -r claude-seo/skills/* .claude/skills/
rm -rf claude-seo

# For running Lighthouse audits (optional but recommended)
npm install -g lighthouse
```

**How to trigger it in Claude Code:**
> "/seo" — runs a full audit of your site
> "Why doesn't my site appear in Google search?"
> "Add proper meta tags and Open Graph to all my pages"
> "Generate a sitemap.xml for this project"
> "Check my schema markup / structured data"

---

## SKILL 6 — UI Enhancements (Vercel Web Design Guidelines)
**What it does:** Audits your UI code against 100+ rules covering accessibility (WCAG), performance, and UX best practices. Catches things like missing ARIA labels, poor contrast ratios, and bad touch targets.
**GitHub:** https://github.com/vercel-labs/agent-skills (path: skills/web-design-guidelines/)

```bash
# Install Vercel's Web Design Guidelines skill
mkdir -p .claude/skills/web-design-guidelines
npx degit vercel-labs/agent-skills/skills/web-design-guidelines .claude/skills/web-design-guidelines
```

**How to trigger it in Claude Code:**
> "Review my UI for accessibility issues"
> "Check this component against web design best practices"
> "Is my site WCAG compliant?"
> "Audit the UX of this form"

---

## After Installation — Verify Everything

Run this inside Claude Code to confirm all skills loaded:

```bash
# List all installed skills
ls -la .claude/skills/
ls -la ~/.claude/skills/
```

You should see folders like:
```
.claude/skills/
├── ui-ux-pro-max/
├── framer-motion/
├── owasp-security/
├── web-design-guidelines/
└── seo/ (or seo-related folders)
```

---

## How Skills Work (Quick Reference)

| Skill | How to call it | What happens |
|---|---|---|
| UI UX Pro Max | Ask for design help or mention a style | Auto-triggers, uses its CSV database |
| 21st.dev Magic | `/ui [describe component]` | Generates React component via API |
| Framer Motion | Ask for animations | Claude follows correct Motion patterns |
| Security Audit | "audit for security" or `/cybersecurity` | Scans code against OWASP Top 10 |
| SEO Audit | `/seo` or ask about SEO | Audits meta, schema, sitemap etc |
| Web Design Guidelines | Ask about accessibility or UI review | Checks 100+ UX/a11y rules |

---

## Troubleshooting

**Skill not triggering?**
- Make sure the folder is in `.claude/skills/` (project) or `~/.claude/skills/` (global)
- Each skill folder must contain a `SKILL.md` file
- Restart Claude Code after adding new skills

**`uipro` command not found?**
```bash
npm install -g ui-ux-pro-max-cli
# If still not found:
export PATH="$PATH:$(npm root -g)/../bin"
```

**Python not found (needed for UI UX Pro Max search)?**
```bash
# macOS
brew install python3
# Ubuntu/Debian
sudo apt update && sudo apt install python3
# Windows
winget install Python.Python.3.12
```

**`npx degit` failing?**
```bash
npm install -g degit
degit repo/path destination
```
