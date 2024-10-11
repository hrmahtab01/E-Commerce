/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    maxWidth: {
      Container: "1170px",
    },
    colors: {
      primaryColor: "#000000",
      Secondary: "#FAFAFA",
      SecondarySecond: "#F5F5F5",
      ThirdColor: "#DB4444",
      FourColor: "#00FF66",
      Colorgrey: "#2F2E30",
    },
  },
  plugins: [],
};
