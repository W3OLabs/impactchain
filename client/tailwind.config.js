/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4FEF64',
      },
      fontFamily: {
        NeueMachinalight: ['NeueMachina-light', 'sans-serif'],
        NeueMachinaRegular: ['NeueMachina-regular', 'sans-serif'],
        NeueMachinaUltrabold: ['NeueMachina-ultra-bold', 'sans-serif'],
        PoppinsRegular : ['Poppins-Regular', 'sans-serif'],
      },
    }
  },
  plugins: [],
}