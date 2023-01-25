/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { inter: "Inter, Avenir, Helvetica, Arial, sans-serif" },
    extend: {
      dropShadow: {
        vite: "0 0 2em #646cffaa",
        react: "0 0 2em #61dafbaa",
      },
    },
  },
  plugins: [],
};
