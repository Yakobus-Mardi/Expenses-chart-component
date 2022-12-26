/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  theme: {
    screen: {
      md: "375px",
    },
    fontFamily: {
      body: '"DM Sans"',
    },
    extend: {
      colors: {
        // Primary Colors
        softRed: "hsl(10,79%,65%)",
        cyan: "hsl(186,34%,60%)",

        // Neutral colors
        darkBrown: "hsl(25,47%,15%)",
        mediumBrown: "hsl(28,10%,53%)",
        cream: "hsl(27,66%,92%)",
        veryPaleOrange: "hsl(33,100%,98%)",
      },
    },
  },
  plugins: [],
};
