/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  darkmode: "media",
  theme: {
    extend: {
      screens: {
        "mobile": "340px",
        "desktop": "1000px",
      },
      height: {
        "hero": "calc(760px-92px)"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}
