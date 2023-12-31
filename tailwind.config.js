module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_0a": "#0000000a",
          "900_0c": "#0000000c",
          "900_cc": "#000000cc",
        },
        gray: {
          50: "#fafafc",
          100: "#f2f2f2",
          200: "#ececec",
          300: "#e5e5e5",
          500: "#9b9a9a",
          600: "#8e8383",
          700: "#555353",
          800: "#4c4b4b",
          "900_99": "#102e2d99",
          "400_7f": "#b3afaf7f",
          "900_28": "#14132a28",
          "50_54": "#fff8fa54",
          "700_01": "#585858",
          "500_01": "#909090",
          "600_01": "#696f79",
        },
        blue: {
          300: "#61b9ff",
          400: "#359eff",
          500: "#18a0fb",
          600: "#2b78e4",
          A200: "#4285f4",
        },
        blue_gray: {
          100: "#d3d2e3",
          400: "#8d8ba6",
          600: "#5d5988",
          900: "#1d4645",
          "900_02": "#353535",
          "900_01": "#2b2737",
          "400_01": "#8591a5",
          "100_01": "#cccccc",
          "100_02": "#d9d9d9",
          "100_03": "#d7d7d7",
          "900_7f": "#3333337f",
        },
        pink: { 300: "#ff5789" },
        red: { 500: "#eb4335", A700: "#ff0000", "100_54": "#ffd0de54" },
        deep_orange: { 100: "#e8c5b0" },
        indigo: {
          50: "#e3e9f0",
          A700_7f: "#4a3aff7f",
          A700: "#4a3aff",
          A200: "#5a57ff",
        },
        amber: { 500: "#fbbc05" },
        white: { A700: "#ffffff" },
        deep_purple: { "200_28": "#afaef728" },
        green: { 600: "#34a853", A200: "#7aff9f" },
        teal: { 50: "#dbedf5" },
        orange: { 50: "#fef1e2", "50_01": "#fff2e6" },
      },
      boxShadow: {
        bs4: "0px 15px  40px 5px #ececec",
        bs: "0px 4px  4px 0px #0000000c",
        bs3: "0px 4px  4px 0px #0000003f",
        bs1: "0px 24px  48px 0px #0000000a",
        bs2: "0px 24px  65px 0px #14132a28",
      },
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
        outfit: "Outfit",
        inter: "Inter",
        roboto: "Roboto",
        dmsans: "DM Sans",
        commissioner: "Commissioner",
        comfortaa: "Comfortaa",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#5a57ff,#afaef728)",
        gradient1: "linear-gradient(180deg ,#ff5789,#ffd0de54)",
        gradient2: "linear-gradient(180deg ,#7aff9f,#fff8fa54)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
