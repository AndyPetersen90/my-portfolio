/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scale: "scale 4s cubic-bezier(0.40, 1, 0.5, 1) forwards",
        fade: "fade-in 1.5s ease-in-out forwards",
      },
      keyframes: {
        scale: {
          "100%": { transform: "scale(1)" },
        },
        "fade-in": {
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
};
