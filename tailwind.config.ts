import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
      screens: {
        'xs': { max: '475px' },
        '3xl': '2560px',
        ...defaultTheme.screens
      },
      colors: {
        'primary': '#0F0D0E',
        'secondary': '#F9F4DA',
        'celtic': '#0BA95B',
        'lakerHome': '#FCBA28',
        'lakerAway': '#7B5EA7'
      },
      boxShadow: {
        'intense': 'rgba(15, 13, 14, 1) 0px 0px 16px',
        'intense-dark': 'rgba(249, 244, 218, 1) 0px 0px 16px',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;
