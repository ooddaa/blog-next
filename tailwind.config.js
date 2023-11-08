/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "mobile-horizonal": "680px" 
    },
    extend: {
      colors: {
        "baby-powder": '#FBFAF6',
        "bg-primary-grey": "#E4EAF1", 
        "pale-spring-bud": "#D0D6B3",
        "orchid-pink": '#FABCCC', 
      }
    },
  },
  plugins: [],
}
