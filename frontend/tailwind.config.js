/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/table.js",
    "./node_modules/@nextui-org/theme/dist/components/spinner.js",
    "./node_modules/@nextui-org/theme/dist/components/pagination.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#FFFFFF",
        button1: "#1d3557",
        warning: "#FFC107",
        danger: "#DC3545",
        success: "#28A745",
        neutral: "#6C757D",
      },
    },
  },
  plugins: [nextui()],
};
