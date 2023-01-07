/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#0F0D13',
        'purple-900': '#2A2141',
        'neutral-300': '#E1E1E6',
        'neutral-200': '#D9D9D9',
        'neutral-100': '#C4C4CC'
      },
      keyframes: {
        close: {
          '0%': { height: '100vh' },
          '100%': { height: '40vh' },
        },
        open: {
          '0%': { height: '40vh' },
          '100%': { height: '100vh' },
        },
        expandImage: {
          '0%': { width: '5rem' },
          '100%': { width: '100%' },
        },
        minimizeImage: {
          '0%': { width: '100%' },
          '100%': { width: '5rem' },
        },
      },
      animation: {
        close: 'close 1s linear 1',
        open: 'open 1s linear 1',
        expandImage: 'expandImage 1s linear 1',
        minimizeImage: 'minimizeImage 1s linear 1'
      },
    }
  },
  plugins: [],
}
