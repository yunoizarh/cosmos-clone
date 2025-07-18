/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', "sans-serif"],
      },
      backgroundImage: {
        cosmosBg: "url('src/assets/images/cosmos-bg.jpg')",
        scaleBg: "url('src/assets/images/second-bg.png')",
        glowingOrgBg: "url('src/assets/images/glowing-orb-complete.svg')",
      },
      rotate: {
        15: "15deg",
        20: "20deg",
        30: "30deg",
        40: "40deg",
        50: "50deg",
        70: "70deg",
        270: "270deg",
        300: "300deg",
      },
    },
  },

  plugins: [],
};
