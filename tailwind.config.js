/** @type {import('tailwindcss').Config} */
import banner from  "./public/banner_img/banner.json"

const baseURL = "https://wedding.dongtran.dev/";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        theme: "#d3c1b1",
        footer: "#212529",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      backgroundImage: {
        "main-banner": `url('${baseURL}/banner_img/DSC_7764.webp')`,
        "main-banner-mobile": `url('${baseURL}/banner_img/DSC_7764_mobile.webp')`,
        "break-banner": `url('${baseURL}/banner_img/DSC_7916.webp')`,
        "break-banner-mobile": `url('${baseURL}/banner_img/DSC_7916_mobile.webp')`,
      },
      spacing: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        20: "20rem",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        13: "13px",
      },
    },
    fontFamily: {
      corinthia: ["Corinthia", "cursive"],
      playpen_sans: ["Playpen Sans", "cursive"],
      montserrat: ["Montserrat", "sans-serif"]
    },
  },
  plugins: [],
};