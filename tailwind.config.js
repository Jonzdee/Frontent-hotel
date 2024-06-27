const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundColor: {
        'semi-transparent-black': 'rgba(0, 0, 0, 0.500)'
      },
    },
    colors: {
      dark: "#1d1b1a",
      secondary: "#ab6034",
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}