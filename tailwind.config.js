/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary :  "#f254f6",
        secondary : "#fc83cc",
        contact : "#271f22",
      },
      fontFamily: {
        outfit : ['var(--font-outfit)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
