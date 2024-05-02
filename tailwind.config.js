/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: "Lato, sans-serif",
      colors: {
        highlight: "#C0A86E",
        "highlight-dark": "#A18D5A",
      },
    },
  },
  plugins: [],
}
