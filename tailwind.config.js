module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#111A2E",
        border: "#1F2A44",
        primary: "#F8FAFC",
        body: "#CBD5E1",
        secondary: "#94A3B8",
        accent: "#3B82F6",
        "accent-hover": "#60A5FA",
        chip: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "68rem",
      },
      letterSpacing: {
        eyebrow: "0.1em",
      },
      boxShadow: {
        card: "0 12px 34px -12px rgba(0, 0, 0, 0.6)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
