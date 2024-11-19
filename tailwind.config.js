/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: "#edf2f4",
        customred: "#ef233c",
        deepred: "#d90429",
        gray: "#8d99ae",
        deepgray: "#2b2d42",
        
      }
    },
   
  },
  plugins: [],
}