import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "#f3ede5",
        sbk: "#28253a",
        text: "#8b8988",
        navtext: "#18334a",
        iconColor: "#88aed0",
        title1:"#f7b509",
      },
    },
  },
  plugins: [],
};
export default config;
