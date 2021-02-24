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
      width: {
        "700px": "700px",
      },
      backgroundImage: (theme) => ({
        main: "url(../assets/images/main-bg.png)",
        banner: "url(../assets/images/bg-banner.png)",
        // Icons
        "icon-user": "url(../assets/icons/user.svg)",
        "icon-globe": "url(../assets/icons/globe.svg)",
        "icon-search": "url(../assets/icons/search.svg)",
      }),
      colors: {
        "black-night": "#2A2A2A",
        "grey-soft": "#CCCCCC",
        primary: "#FFFF01",
        malibu: "#4DCCFA",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        burbank: ["Burbank Big Condensed", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
