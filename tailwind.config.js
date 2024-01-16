/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A6EC1',
        darkMain: '#182F43',
        darkPrimary: '#1E3A8A',
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        }
      },
      backgroundImage: {
        'hero': "url('../src/assets/hero-pattern.jpg')",
        'shini': "url('../src/assets/ShiniBg.png')",
        'diski': "url('../src/assets/DiskiBg.png')",
        'stock': "url('../src/assets/StockBg.png')",
        'contact': "url('../src/assets/ContactBg.png')",
        'map': "url('../src/assets/OtherBg.png')",
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
        'forms': ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

