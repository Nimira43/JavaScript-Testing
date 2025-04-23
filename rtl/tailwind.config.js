/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'support': '#ff4500',
        'light': '#ff4500',
        'dark': '#ff4500',
        'grey-dark': '#ff4500',
        'grey-medium': '#ff4500',
        'grey-light': '#ff4500',
        'grey-light-extra': '#ff4500',
      }
    },
  },
  plugins: [],
}

