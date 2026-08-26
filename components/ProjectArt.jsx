"use client";

// Deterministic abstract art per project — generated gradient + halftone
// grain instead of a screenshot, so every bento tile looks distinct without
// needing real project imagery.
const PALETTES = [
  ["#89AACC", "#4E85BF"],
  ["#4E85BF", "#1E293B"],
  ["#CBD5E1", "#4E85BF"],
  ["#89AACC", "#0A0A0A"],
];

export default function ProjectArt({ index = 0 }) {
  const [from, to] = PALETTES[index % PALETTES.length];
  const angle = 45 + index * 35;
  const cx = 20 + ((index * 37) % 60);
  const cy = 20 + ((index * 53) % 60);

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from} 0%, ${to} 100%)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at ${cx}% ${cy}%, rgba(255,255,255,0.35) 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}
