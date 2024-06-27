/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C54E10",
        secemdry: "#041119",
        wh: "#C4C4C4",
        bl: "#0E0A09",
      },
      fontFamily: {
        1: ["Rubik Wet Paint", "Sacramento"],
      },
    },
  },
  plugins: [],
};
