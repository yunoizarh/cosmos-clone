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
      },
    },
  },

  plugins: [],
};
