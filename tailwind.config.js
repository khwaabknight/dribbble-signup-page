/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          1: '#ea4b8a',
          2: '#f8b8d0',
        },
        'soil' : {
          1 : '#f2d184',
          2: '#866214',
        },
        'error': '#fc5651',
        'link': '#695bac',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

