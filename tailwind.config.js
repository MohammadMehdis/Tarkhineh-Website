/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        estedadBold: ["Estedad-Bold"],
        estedadRegular: ["Estedad-Regular"],
        estedadMedium: ["Estedad-Medium"],
        estedadSemiBold: ["Estedad-SemiBold"],
      },
      colors: {
        black: "#353535",
        red: "#C30000",
        white: {
          100: "#FFFFFF",
          200: "#F9F9F9",
          300: "#EDEDED",
          400: "#FFF2F2",
        },
        green: {
          100: "#417F56",
          200: "#315F41",
        },
        gray: {
          100: "#717171",
          200: "#E5F2E9",
          300: "#CBCBCB",
          400: "#ADADAD",
        },
      },
      boxShadow: {
        custom:
          "0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        custom2:
          " 0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
