module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          "100": "#ffbaba",
          "200": "#ff7b7b",
          "300": "#ff5252",
          "400": "#ff0000",
          "500": "#d70000",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      },
      fontFamily: {
        serif: [
          "Merriweather",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ],
        sans: [
          "Roboto",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ]
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
