/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridAutoColumns: {
        card: "(auto-fill, minmax(300px, 1fr)",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridAutoRows: {
        card: "(auto-fill, minmax(100px, 300px)",
      },
      gridTemplateRows: {
        card: "repeat(auto-fill, minmax(100px, 300px))",
      },
      fontSize: {
        8: "8px",
        12: "12px",
      },
      lineHeight: {
        chiquita: "10px",
      },
      colors: {
        fondo: "#E0E0E5",
        salmon: "#FB9E75",
        violeta: "#9747FF",
        verde: "#276234BF",
        gris: "rgba(14, 14, 14, 0.10)",
        negro:"rgba(7, 13, 10, 0.90)",
        limon:"#BCCEC0",
        navbar:"rgba(7, 7, 7, 0.10)",
        login: "#91AF9B",
        grisHome: "rgba(229, 229, 229, 0.19)",
        verdenegro: "#081C1E",
        commentGradient1: "rgba(0, 0, 0, 0.80) 8.72%" ,
        commentGradient2: "rgba(0, 0, 0, 0.80) 94.57%",
        dutchWhite: "#E8DAB2",
        platinum: "#EAEAEA",
        light: "#FFFCF9",
        dark: "#494850",
        naranja: "#DD6E42",
        payneGray: "#4F6D7A",
        columbiaBlue: "#C0D6DF",
        babyPowder: "#FFFCF9",
      },
      // backgroundImage: {
      //   'hero': "url('/assets/Untitled3.jpg')",
      // }
    },
  },
  plugins: [],
};
