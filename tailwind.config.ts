/** @type {import('tailwindcss').Config} */

// import defaultTheme from 'tailwindcss/defaultTheme'
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
