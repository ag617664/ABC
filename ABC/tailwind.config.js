/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'myColor':'#CFF2E3',
      'myColor1':'white',
      'myColor2':'#11504D',
      'myColor3':'#000000',
      'myColor4':'#1A716B',
      'myColor5':'#062634',
      'myColor6':'#3818C9'

    },
    extend: {
      backgroundImage:{
        'p':"url('./src/images/image1.jpg')"

      }
    },
  },
  plugins: [],
}

