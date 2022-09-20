/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '3xs':'280px',
        '2xs':'320px',
        'xs':'414px',
      'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px'
    },
    extend: {
      colors: {
        primary: '#46BDFD',
      },
      dropShadow: {
        'title':'0px 4px 4px rgba(49,209,231,0.77)'
      }
    },
  },
  plugins: [],
}
