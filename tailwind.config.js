/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        lato: ['Lato', 'sans-serif'],
        rufina: ['Rufina', 'serif'],
      },
      colors: {
        test: "#CC9A32", 
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
};
