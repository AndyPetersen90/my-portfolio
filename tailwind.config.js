/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "project-1": "300px", // Switch to 1 column
        "project-2": "900px", // Switch to 2 columns
        "project-3": "1250px", // Switch to 3 columns
        "project-4": "1750px", // Switch to 3 columns
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        scale: "scale 6s cubic-bezier(0.40, 1, 0.5, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scale: {
          "0%": { transform: "scale(0.94)" },
          "100%": { transform: "scale(1)" },
        },
      },
      colors: {
        dark: {
          DEFAULT: "#1a1a1a",
          lighter: "#2d2d2d",
          darker: "#000000",
        },
      },
    },
  },
  plugins: [],
};
