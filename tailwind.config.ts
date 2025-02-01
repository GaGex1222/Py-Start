/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        fontFamily: {
            poppinsRegular: ['Poppins_400Regular', 'sans-serif'], // Regular weight
            poppinsBold: ['Poppins_700Bold', 'sans-serif'], // Bold weight
            poppinsLight: ['Poppins_300Light', 'sans-serif'], // Light weight
        },
        colors: {
            primary: "#306998",
            secondary: "#FFD43B",
            tertiary: "#282C34",
            success: "#2ECC71",
            error: "#E74C3C",
            info: "#4B8BBE"
        }
      },
    },
    plugins: [],
  }