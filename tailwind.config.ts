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
          900: "#002431",
          dark: "#003142",
          DEFAULT: "#00455e",
          light: "#005a7a",
          lightest: "#e6f0f3",
        },
        slate: {
          muted: "#5A6B7C",
          light: "#7B8E9F",
          border: "rgba(90, 107, 124, 0.16)",
          subtle: "rgba(90, 107, 124, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Source Sans 3", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Source Serif 4", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
