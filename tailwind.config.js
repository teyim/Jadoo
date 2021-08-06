// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        pink: colors.pink,
      },
    },
    fontFamily: {
      boing: ["GD Boing", "cursive"],
      comfortaa: ["Comfortaa", "cursive"],
      rubik: ["Rubik", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
