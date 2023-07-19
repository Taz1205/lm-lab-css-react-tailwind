/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightyellow: "#FFFFE0",
        teal: {
          light: "#40E0D0",
          DEFAULT: "#008080",
          dark: "#004C4C",
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
};
