/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        rotateAndScale: {
          "0%": { transform: "rotate(0) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1.5)" },
        },
        wave: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "100%": {
            transform: "scale(1.2)",
            opacity: "0",
          },
        },
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "rotate-and-scale": "rotateAndScale 500ms ease-in-out forwards",
        "wave-one": "wave 2s ease-in-out infinite",
        "wave-two": "wave 2s 0.5s ease-in-out infinite",
        "wave-three": "wave 2s 1s ease-in-out infinite",
        "wave-four": "wave 2s 1.5s ease-in-out infinite",
        "fade-in": "opacity 5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
