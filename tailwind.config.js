/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 1s ease-in-out infinite alternate",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(75%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};
