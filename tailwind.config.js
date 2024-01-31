/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jmadh: ["Just Me Again Down Here", "sans-serif"],
      },
    },
  },
  plugins: [],
}

