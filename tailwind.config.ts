import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 3px 7px -1px rgba(34,34,34,0.09)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray:{
          900:"#808080"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
