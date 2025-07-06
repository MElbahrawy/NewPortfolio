/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          lightest: "#F4F4F5",
          light: "#9f7aea",
          DEFAULT: "#805ad5",
          dark: "#6b46c1",
          darkest: "#4c2f9d",
        },
        secondary: {
          lightest: "#F4F4F5",
          light: "#ed64a6",
          DEFAULT: "#d53f8c",
          dark: "#b83280",
          darkest: "#912e73",
        },
        dark: {
          DEFAULT: "#1a202c",
          light: "#2d3748",
        },
        light: {
          DEFAULT: "#F4F4F5",
          dark: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
