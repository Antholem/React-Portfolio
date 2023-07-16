/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Quicksand", "sans-serif"],
        titleFont: ["Open Sans", "sans-serif"],
      },
      colors: {
        bodyColor: "#0c1217",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#1DA1F2",
        card: "#121921"
      },
      boxShadow: {
        shadowOne: "0px 4px 10px rgba(0, 0, 0, 0.25), 0px 4px 15px rgba(0, 0, 0, 0.15)",
        neon: "2px 2px 2px #1DA1F2, -2px -2px 20px #1DA1F2",
      },
    },
  },
  plugins: [],
}

