import GithubContributionsPanel from "@/components/GithubContributionsPanel";
import snapshot from "@/data/contributions.json";

const USERNAME = "mrayyan6";
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

// Fetched on the server and cached for 6 hours, so visitors never wait on (or get blocked
// from) the third party API. If the API is down, the committed snapshot is shown instead.
async function loadContributions() {
  try {
    const res = await fetch(API, { next: { revalidate: 21600 }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const json = await res.json();
    if (!json?.contributions?.length) throw new Error("empty");
    return json;
  } catch {
    return snapshot;
  }
}

export default async function GithubContributions() {
  const initial = await loadContributions();
  return <GithubContributionsPanel initial={initial} />;
}
