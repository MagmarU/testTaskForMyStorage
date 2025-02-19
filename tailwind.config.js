/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",

    "./src/App.tsx",

    "./src/components/TasksTable.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#373E45',
        'text-color': '#fff',
        'border-color': 'rgb(255,255,255, .1)',
        'user-icon-background-color': 'rgba(255, 255, 255, 0.04)',

      }
    },
  },
  plugins: [],
}

