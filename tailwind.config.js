/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        ms: "320px",
        ml: "425px",
        md: "768px",
        lg: "1024px",
        fk: "2560px",
      },
      dropShadow: {
        tx: "0 35px 35px rgba(0, 0, 0, 0.25)",
        fxl: [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
