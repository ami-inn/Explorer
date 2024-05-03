/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        secondary:'#67459D',
        primaryText:'#13151A',
        secondaryText:'#48515B',
        secondaryTextVarient1:"#5D5F62",
        primaryHover:'#0000000A'

        
      },
    },
  },
  plugins: [],
}