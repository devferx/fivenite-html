require("dotenv").config();

const isProd = process.env.ENV === "production";

let purge = {};

if (isProd) {
  purge = {
    enabled: true,
    content: ["./src/**/*.html"],
  };
}

module.exports = {
  purge,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-night": "#2A2A2A",
        "grey-soft": "#CCCCCC",
        primary: "#FFFF01",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
