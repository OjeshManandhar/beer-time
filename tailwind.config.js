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
        alice: '#f3f8fd',
        lemon: '#d39926',
        cerulean: '#2b65bd',
      },
    },
  },
  plugins: [],
};
