/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ubuntu: {
          DEFAULT: '#77216F',
          dark: '#5E2750',
          light: '#B162A7',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)'},
          '100%': {opacity: '1', transform: 'scale(1)'} 
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards'
      },
    },
  },
  plugins: [],
}