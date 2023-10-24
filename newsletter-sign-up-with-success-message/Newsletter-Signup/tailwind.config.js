/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      darkSlateGrey: "hsl(234, 29%, 20%)",
      charcoalGrey: "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      redOne: "hsl(340.49, 60.59%, 39.8%)",
      redTwo: "hsl(358.54, 77.36%, 41.57%)",
      redThree: "hsl(17.02, 93.69%, 43.53%)",
    },
    extend: {
      fontSize: {
        title: "3rem",
        normal: "1.2rem",
        small: "0.9rem",
      },
      boxShadow: {
        small:
          "0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24)",
        medium:
          "0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)",
        large:
          "0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.5)",
      },
    },
  },
  plugins: [],
};
