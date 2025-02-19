/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",

    "./src/App.tsx",

    "./src/components/TasksTable.tsx",

    "./src/pages/MainPage.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#373E45',
        'text-color': '#fff',
        'border-color': 'rgb(255,255,255, .1)',

        'white-color-opacity-10': 'rgb(255,255,255, .1)',
        'white-color-opacity-30': 'rgb(255,255,255, .3)',
        'white-color-opacity-40': 'rgb(255,255,255, .4)',
        'white-color-opacity-4': 'rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
}

