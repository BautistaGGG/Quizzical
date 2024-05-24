/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter": '"Inter", sans-serif'
      },
      colors:{
        "titleColor": '#293264',
        "buttonColor": '#4D5B9E',
        "fondoColor": '#F5F7FB'
      }
    },
  },
  plugins: [],
}