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

export default function GithubContributions() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(API, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad response"))))
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

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
              className="text-sm text-muted transition-colors hover:text-text-primary"
            >
              @{USERNAME}
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

              <div className="relative overflow-x-auto pb-2" data-graph>
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
