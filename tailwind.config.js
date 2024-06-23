/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        'tomato': 'hsl(4, 100%, 67%)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        
        'hover-tomato': '15px 15px 15px -3px rgba(255, 99, 71, 0.5)', // Custom shadow for the left side on hover with tomato color
       
        
        
      }
    },
  },
  plugins: [],
}
