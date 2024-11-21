/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e5797f',
        secondary: '#fce44d',
        surface: '#dbe1ea',
        danger: '#d24b4d',
      },
      boxShadow: {
        base: '4px 4px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
