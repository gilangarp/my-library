/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#1976D2",
          dark: "#1565C0",
          light: "#39A1F4",
        },
        secondary: {
          main: "#9C27B0",
          dark: "#8D239F",
          light: "#AA2BC0",
        },
        error: {
          main: "#C62A2A",
          dark: "#CA2B2B",
          light: "#D74242",
        },
        warning: {
          main: "#EF6C00",
          dark: "#DB6300",
          light: "#FF7605",
        },
        info: {
          main: "#2196F3",
          dark: "#0D8DF2",
          light: "#39A1F4",
        },
        success: {
          main: "#2E7D32",
          dark: "#29702D",
          light: "#348E39",
        },
      },
    },
  },
  plugins: [],
};
