/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: "#4f45e5",
          200: "#e0e7ff"
        }
      }
    },
  },
  plugins: [],
}

