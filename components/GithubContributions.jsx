"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const EASE = [0.25, 0.1, 0.25, 1];
const USERNAME = "mrayyan6";
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

const LEVEL_COLORS = [
  "hsl(var(--surface))",
  "#27405a",
  "#3a6694",
  "#4e85bf",
  "#89aacc",
];

export default function GithubContributions() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

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

  const days = data?.contributions ?? [];
  const total = data?.total?.lastYear ?? 0;
  // Pad the first week so each day lands on the correct weekday row (Sunday first).
  const offset = days.length ? new Date(`${days[0].date}T00:00:00`).getDay() : 0;

  return (
    <section className="bg-bg pb-16 md:pb-24">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Activity"
          title="GitHub"
          italic="contributions"
          subtext={data ? `${total} contributions in the last year` : undefined}
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 rounded-2xl border border-stroke bg-surface p-5 sm:p-6"
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
              <div className="overflow-x-auto pb-2">
                <div
                  className="grid w-max grid-flow-col grid-rows-7 gap-[3px]"
                  role="img"
                  aria-label={`${total} GitHub contributions in the last year`}
                >
                  {!data &&
                    Array.from({ length: 53 * 7 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-[11px] w-[11px] animate-pulse rounded-[2px] bg-stroke"
                      />
                    ))}
                  {data &&
                    Array.from({ length: offset }).map((_, i) => (
                      <span key={`pad-${i}`} className="h-[11px] w-[11px]" />
                    ))}
                  {days.map((d) => (
                    <span
                      key={d.date}
                      title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                      className="h-[11px] w-[11px] rounded-[2px] border border-stroke"
                      style={{ backgroundColor: LEVEL_COLORS[d.level] }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-muted">
                <span>Less</span>
                {LEVEL_COLORS.map((c, i) => (
                  <span
                    key={i}
                    className="h-[11px] w-[11px] rounded-[2px] border border-stroke"
                    style={{ backgroundColor: c }}
                    aria-hidden="true"
                  />
                ))}
                <span>More</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
