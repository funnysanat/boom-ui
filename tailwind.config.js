/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: ["border", "rounded", "rounded-sm", "rounded-full", "rounded-md"],
  theme: {
    extend: {
      colors: {
        primary: "#1E0342",
      },
    },
  },
  plugins: [],
};
