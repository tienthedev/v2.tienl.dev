import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme');
  
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272727',
        secondary: '#FFD4D4',
        tertiary: {
          dark: '#272727',
          light: '#FFD4D4',
        },
      },
      fontFamily: {
        chivo_mono: ['var(--font-chivo-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}
export default config
