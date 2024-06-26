const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        SaddleBrown: '#8B4513',
        'black-with-lighting': '#000000',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
