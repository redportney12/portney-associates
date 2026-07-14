import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (see content/site.ts DESIGN_SYSTEM for documentation)
        navy: {
          DEFAULT: "#081D33", // Deep Navy — primary brand color
          midnight: "#061522", // Midnight Navy
        },
        slate: { brand: "#2B3540" },
        charcoal: "#1D2329",
        ivory: "#F7F6F2", // Warm White — primary content background
        fog: "#E7E8E8", // Soft Gray
        gold: {
          DEFAULT: "#C9A46A", // Muted Gold — accent
          dark: "#A98349", // Dark Gold
        },
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.75rem, 3vw, 2.4rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.35rem, 2vw, 1.6rem)", { lineHeight: "1.25" }],
        h4: ["1.15rem", { lineHeight: "1.35" }],
        eyebrow: ["0.8rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        container: "1200px",
        measure: "68ch",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
