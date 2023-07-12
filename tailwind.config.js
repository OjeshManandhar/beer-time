/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'alice-blue': '#f3f8fd',
        'lemon-curry': '#d39926',
        'cerulean-blue': '#2b65bd',
        'raisin-black': '#222222',
      },
    },
  },
  plugins: [],
};
