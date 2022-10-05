/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Lightblack: {
          primary: "#242323",
          hover: "#333",
        },
        lightGray: "#F4F6F5",
        lightYellow: "#EBD96B",
        darkYellow: "#E5C643",
      },
    },
  },
  plugins: [],
};
