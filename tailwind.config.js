/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
      colors: {
        'bg-color': '#091420',
        'bg-drak-color': '#0c1a28',
        'primary-color': '#4fe98c',
      },
      width: {
        'custom-image-width': '200px',
      }
    },
  },
  plugins: [],
}

