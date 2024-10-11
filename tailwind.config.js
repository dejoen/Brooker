/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "priceUpBackground":'url(../src/assets/sliderdesign.svg)',
        'priceDownBackground':"url(../src/assets/pricedownicon.svg)"
      }
    },
  },
  plugins: [],
}