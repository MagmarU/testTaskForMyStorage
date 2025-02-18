/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#373E45',
        'text-color': '#fff',
      }
    },
  },
  plugins: [],
}

