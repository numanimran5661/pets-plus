/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#149477",
        secondary: "#252527",
      },
      fontSize: {
        "5vw": "5vw",
        "4vw": "4vw",
        "3vw": "3vw",
        "2vw": "2vw",
        "1vw": "1vw",
      },
    },
  },
  plugins: [],
};
