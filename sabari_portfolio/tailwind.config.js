/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
      },
      colors: {
        'dark-1': '#212529',
        'Gray-1':'#6c757D',
        'customUnderline': '#4cd038',
        'customUnderline1': '#d1d5db',
      },
      'textDecorationColor': ['hover', 'focus'],
    },
  },
  plugins: [],
}

