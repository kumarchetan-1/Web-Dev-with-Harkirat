/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#012b5b",
          500: "#173f6a",
          300: "#7f95ac"
        },
        green:{
          400: "#40e0cf"
        },
        grey: {
          400: '#9eadc0'
        }
      },
      appearance: {
        none: 'none'
      },
      screens: {
        md: "768px",
        lg: "1024px"
      }
    },
  },
  plugins: [],
}

