import type { Config } from "tailwindcss";

export default {
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  },
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
    },
  },
  plugins: [],
} satisfies Config;
