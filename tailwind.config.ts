import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F2440",
          DEFAULT: "#1B365D",
          light: "#254B82",
        },
        slate: {
          muted: "#5A6B7C",
          light: "#7B8E9F",
          border: "rgba(90, 107, 124, 0.16)",
          subtle: "rgba(90, 107, 124, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Source Serif 4", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
