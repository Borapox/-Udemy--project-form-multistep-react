/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'customShadow' : 'rgba(100, 100, 111, .2) 0px 7px 29px 0px',
        'borderNoneShadow' : 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }
    },
  },
  plugins: [],
}