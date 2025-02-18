/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
        "light",
        "night"
      // {
      //   sunset: {
      //     // eslint-disable-next-line no-undef
      //     ...require("daisyui/src/theming/themes")["sunset"],
      //     "base-content": "white",
      // },
      // }
  ],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

