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
        // "light",
        // "night"
      {
        night: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["night"],
          "accent": "#002370",
        }
      },
      {
        light: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["light"],
          "accent": "#DBEAFE",
      }
      }
  ],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

