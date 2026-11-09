"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const EASE = [0.25, 0.1, 0.25, 1];
const USERNAME = "mrayyan6";
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

// GitHub dark theme contribution colors.
const LEVEL_COLORS = ["#151b23", "#033a16", "#196c2e", "#2ea043", "#56d364"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_LABELS = { 1: "Mon", 3: "Wed", 5: "Fri" };

const CELL = 10;
const GAP = 3;

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export default function GithubContributionsPanel({ initial }) {
  const [data, setData] = useState(initial ?? null);
  const [failed, setFailed] = useState(false);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    if (initial) return;
    const controller = new AbortController();
    fetch(API, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad response"))))
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, [initial]);

  const total = data?.total?.lastYear ?? 0;
  const Panel = failed ? motion.div : motion.a;

  const { cells, monthLabels, weeks } = useMemo(() => {
    const days = data?.contributions ?? [];
    if (!days.length) return { cells: [], monthLabels: [], weeks: 53 };
    const offset = parseDate(days[0].date).getDay();
    const cells = days.map((d, i) => ({
      ...d,
      col: Math.floor((offset + i) / 7) + 1,
      row: ((offset + i) % 7) + 1,
    }));
    const weeks = cells[cells.length - 1].col;

    // One label per month, placed on the first week column that contains that month's 1st-ish day.
    const labels = [];
    let lastMonth = -1;
    for (const c of cells) {
      if (c.row !== 1) continue;
      const month = parseDate(c.date).getMonth();
      if (month !== lastMonth) {
        labels.push({ col: c.col, text: MONTHS[month] });
        lastMonth = month;
      }
    }
    // Drop a cramped first label (partial month at the left edge), like GitHub does.
    if (labels.length > 1 && labels[1].col - labels[0].col < 3) labels.shift();
    return { cells, monthLabels: labels, weeks };
  }, [data]);

  function showTip(e, d) {
    const wrap = e.currentTarget.closest("[data-graph]");
    const box = e.currentTarget.getBoundingClientRect();
    const wbox = wrap.getBoundingClientRect();
    const date = parseDate(d.date);
    const label = `${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${
      MONTHS_LONG[date.getMonth()]
    } ${ordinal(date.getDate())}.`;
    setTip({
      label,
      x: box.left - wbox.left + box.width / 2,
      y: box.top - wbox.top,
    });
  }

  return (
    <section className="bg-bg pb-16 md:pb-24">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Activity"
          title="GitHub"
          italic="contributions"
          action={
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-4 py-2 text-sm text-text-primary transition-colors hover:border-muted"
            >
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              <span>
                github.com/<span className="font-medium">{USERNAME}</span>
              </span>
              <span
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          }
        />

        <Panel
          {...(failed
            ? {}
            : {
                href: `https://github.com/${USERNAME}`,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Open ${USERNAME} on GitHub`,
              })}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className={`mt-10 block rounded-md border border-[#30363d] bg-[#0d1117] p-4 transition-colors sm:p-5 ${
            failed ? "" : "cursor-pointer hover:border-[#484f58]"
          }`}
        >
          {failed ? (
            <p className="text-sm text-muted">
              Could not load contributions right now. See them on{" "}
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline"
              >
                GitHub
              </a>
              .
            </p>
          ) : (
            <>
              <h3 className="mb-3 text-base font-normal text-[#f0f6fc]">
                {data ? `${total.toLocaleString()} contributions in the last year` : "Loading contributions..."}
              </h3>

              <div className="relative pt-9" data-graph>
                <div className="overflow-x-auto pb-2">
                <div
                  className="grid w-full min-w-[720px] text-[12px] leading-none text-[#9198a1]"
                  style={{
                    gridTemplateColumns: `30px repeat(${weeks}, minmax(${CELL}px, 1fr))`,
                    gridTemplateRows: `15px repeat(7, auto)`,
                    gap: `${GAP}px`,
                  }}
                  role="img"
                  aria-label={`${total} GitHub contributions in the last year`}
                  onMouseLeave={() => setTip(null)}
                >
                  {monthLabels.map((m) => (
                    <span
                      key={m.col}
                      className="whitespace-nowrap"
                      style={{ gridColumn: m.col + 1, gridRow: 1 }}
                    >
                      {m.text}
                    </span>
                  ))}

                  {Object.entries(DAY_LABELS).map(([row, text]) => (
                    <span
                      key={text}
                      className="flex items-center self-center"
                      style={{ gridColumn: 1, gridRow: Number(row) + 2 }}
                    >
                      {text}
                    </span>
                  ))}

                  {!data &&
                    Array.from({ length: 53 * 7 }).map((_, i) => (
                      <span
                        key={i}
                        className="aspect-square animate-pulse rounded-[2px]"
                        style={{
                          gridColumn: Math.floor(i / 7) + 2,
                          gridRow: (i % 7) + 2,
                          backgroundColor: LEVEL_COLORS[0],
                        }}
                      />
                    ))}

                  {cells.map((d) => (
                    <span
                      key={d.date}
                      onMouseEnter={(e) => showTip(e, d)}
                      className="aspect-square rounded-[2px]"
                      style={{
                        gridColumn: d.col + 1,
                        gridRow: d.row + 1,
                        backgroundColor: LEVEL_COLORS[d.level],
                        outline: "1px solid rgba(240, 246, 252, 0.06)",
                        outlineOffset: "-1px",
                      }}
                    />
                  ))}
                </div>
                </div>

                {tip && (
                  <div
                    className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-[#3d444d] px-2 py-1 text-xs text-[#f0f6fc] shadow-lg"
                    style={{ left: tip.x, top: tip.y - 6 }}
                  >
                    {tip.label}
                  </div>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9198a1]">
                <a
                  href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4493f8] hover:underline"
                >
                  Learn how we count contributions
                </a>
                <div className="flex items-center gap-1">
                  <span className="mr-1">Less</span>
                  {LEVEL_COLORS.map((c, i) => (
                    <span
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        width: CELL,
                        height: CELL,
                        backgroundColor: c,
                        outline: "1px solid rgba(240, 246, 252, 0.06)",
                        outlineOffset: "-1px",
                      }}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1">More</span>
                </div>
              </div>
            </>
          )}
        </Panel>
      </div>
    </section>
  );
}
