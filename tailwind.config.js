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
        lotion: '#fafafa',
        'cyan-blue': '#3e75c3',
        'alice-blue': '#f3f8fd',
        'french-blue': '#0167c3',
        'lemon-curry': '#d39926',
        'raisin-black': '#222222',
        'sonic-silver': '#777777',
        'cerulean-blue': '#2b65bd',
      },
    },
  },
  plugins: [],
};
