/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(241, 87, 0)',
        borderClr:'rgb(226 229 236)',
        textHcolor:'#108934',
      },
      fontFamily: {
        gilroy: ['Gilroy'],
      },
    },
  },
  plugins: [],
}