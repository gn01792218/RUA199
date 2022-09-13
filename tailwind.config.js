/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'title':'0px 4px 4px rgba(49,209,231,0.77)'
      }
    },
  },
  plugins: [],
}
