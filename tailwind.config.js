import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#121212",
      },
      animation: {
        beat: "beat 0.7s ease-in-out infinite",
      },
      keyframes: {
        beat: {
          "0%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
