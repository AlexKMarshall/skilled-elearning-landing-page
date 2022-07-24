const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: { regular: 400, "semi-bold": 600, bold: 700 },
    fontSize: {
      xs: "var(--step--2)",
      s: "var(--step--1)",
      base: "var(--step-0)",
      lg: "var(--step-1)",
      xl: ["var(--step-2)", "1.25"],
      "2xl": ["var(--step-3)", "1.25"],
      "3xl": ["var(--step-4)", "1.25"],
      "4xl": ["var(--step-5)", "1.25"],
    },
    extend: {},
  },
  plugins: [],
};
