/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach:"rgb(255, 203, 164)",
        darkBlue: "#0A2640",
        teal: "#69E6A6",
      }
    },
  },
  plugins: [],
}
