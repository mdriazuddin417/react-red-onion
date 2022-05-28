module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F91944",

          secondary: "#F000B8",

          accent: "#38bdf8",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#16a34a",

          warning: "#fbbf24",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
