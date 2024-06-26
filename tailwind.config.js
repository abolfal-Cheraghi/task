/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "1rem",
        },
      },

      screens: {
        "3xl": "1800px",
      },
      colors: {
        "sky-blue": "#5EC2EE",
        pink: "#EA3898",
        accent: "#070B13",
        "dark-blue": "#2d3a49",
      },

      fontFamily: {
        bold: "/fonts/plus_jakarta_sans_bold.woff2 , sans",
        light: "/fonts/plus_jakarta_sans_light.woff2 , sans",
        medium: "/fonts/plus_jakarta_sans_medium.woff2 , sans",
        semibold: "/fonts/plus_jakarta_sans_semi_bold.woff2 , sans",
      },

      animation: {
        "bounce-slow": "bounce  6s ease-in infinite",
      },

      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
