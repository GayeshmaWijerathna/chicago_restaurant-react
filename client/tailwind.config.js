/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans :['inter','sans-serif']
      },
      colors:{
        primary:'#05551a',
        secondary:'#E43A15'
      }
    },

  },
  plugins: [],
}
