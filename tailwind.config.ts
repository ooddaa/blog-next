import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
export default config
