import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeBrand: "#FF914D",   // Brand orange
        creamBg: "#FFF8F2",       // Soft background
        brownText: "#4E342E",     // Warm text
        lightGray: "#EDEDED",     // Borders/cards
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
