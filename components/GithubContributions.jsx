import GithubContributionsPanel from "@/components/GithubContributionsPanel";
import snapshot from "@/data/contributions.json";

const USERNAME = "mrayyan6";
const REVALIDATE = 3600; // seconds
const GITHUB_URL = `https://github.com/users/${USERNAME}/contributions`;
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

// Primary source: GitHub's own public contributions graph, so the numbers match the profile exactly.
async function fromGithub() {
  const res = await fetch(GITHUB_URL, { next: { revalidate: REVALIDATE }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`github ${res.status}`);
  const html = await res.text();

  const cells = {};
  for (const m of html.matchAll(/data-date="([\d-]+)" id="(contribution-day-component-[\d-]+)" data-level="(\d)"/g)) {
    cells[m[2]] = { date: m[1], level: Number(m[3]) };
  }
  const contributions = [];
  for (const m of html.matchAll(/for="(contribution-day-component-[\d-]+)"[^>]*>\s*([^<]*)</g)) {
    const cell = cells[m[1]];
    if (!cell) continue;
    const n = m[2].match(/^(\d+) contribution/);
    contributions.push({ ...cell, count: n ? Number(n[1]) : 0 });
  }
  contributions.sort((a, b) => a.date.localeCompare(b.date));
  if (contributions.length < 300) throw new Error("github parse failed");
  const lastYear = contributions.reduce((sum, d) => sum + d.count, 0);
  return { total: { lastYear }, contributions };
}

// Fallback: third party API (can lag GitHub by a few hours).
async function fromApi() {
  const res = await fetch(API_URL, { next: { revalidate: REVALIDATE }, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`api ${res.status}`);
  const json = await res.json();
  if (!json?.contributions?.length) throw new Error("api empty");
  return json;
}

async function loadContributions() {
  for (const source of [fromGithub, fromApi]) {
    try {
      return await source();
    } catch {
      // try the next source
    }
  }
  return snapshot; // last resort: committed snapshot
}

export default async function GithubContributions() {
  const initial = await loadContributions();
  return <GithubContributionsPanel initial={initial} />;
}
