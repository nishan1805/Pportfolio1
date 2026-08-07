import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E17",
        "ink-soft": "#0F1420",
        "ink-line": "#1D2433",
        ivory: "#F3F5F8",
        muted: "#98A1B5",
        mint: "#2DD4EE",
        amber: "#F5B759",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 0%, rgba(45,212,238,0.10), transparent 45%), radial-gradient(circle at 85% 15%, rgba(245,183,89,0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
