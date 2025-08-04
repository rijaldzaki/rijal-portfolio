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
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistmono: ['var(--font-geist-mono)', 'monospace'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        marcellus: ['var(--font-marcellus)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
