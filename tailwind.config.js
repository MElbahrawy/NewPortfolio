/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          light: "#F87171",
          DEFAULT: "#EF4444",
          dark: "#DC2626",
        },
        secondary: {
          light: "#C4B5FD",
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
