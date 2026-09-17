import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07050f",
        dusk: "#120c22",
        flame: "#ff6a2b",
        orchid: "#c084fc",
        glass: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(192, 132, 252, 0.28)",
        flame: "0 12px 40px rgba(255, 106, 43, 0.35)",
      },
      borderRadius: {
        hero: "2.25rem",
        board: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
