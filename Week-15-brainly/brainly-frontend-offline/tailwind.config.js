/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          200: "#f9fbfc",
          400: "#e6e8ea",
          600: "#2d343d",
          800: "#111526"
        },
        purple: {
          200: "#e0e7ff",
          600: "#5046e5"
        }
      }
    },
  },
  plugins: [],
}

