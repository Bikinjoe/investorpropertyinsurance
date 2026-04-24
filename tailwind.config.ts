import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // White + deep forest green + gold palette
        bg: "#FFFFFF",
        surface: "#F7F8F5",
        "surface-2": "#F0F4EE",
        foreground: "#1A2B1A",
        muted: "#4A5E4A",
        // Primary brand accent (deep forest green)
        flame: "#1B4332",
        // Gold accent (used for hover, highlights, secondary accent)
        flameDark: "#C9952A",
        gold: "#C9952A",
        border: "#D4E0D0",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
