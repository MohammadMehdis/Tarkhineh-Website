/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        estedadBold: ["Estedad-Regular"],
        estedadRegular: ["Estedad-Bold"],
        estedadMedium: ["Estedad-Medium"],
      },
      colors: {
        black: "#353535",
        white: "#FFFFFF",
        green: {
          100: "#417F56",
          200: "#315F41",
        },
        gray: {
          100: "#717171",
          200: "#E5F2E9",
          300: "#CBCBCB",
        },
      },
    },
  },
  plugins: [],
};
