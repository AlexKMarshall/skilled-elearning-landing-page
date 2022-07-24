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
    spacing: {
      0: 0,
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      m: "var(--space-m)",
      lg: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)",
      "3xs-2xs": "var(--space-3xs-2xs)",
      "2xs-xs": "var(--space-2xs-xs)",
      "xs-s": "var(--space-xs-s)",
      "s-m": "var(--space-s-m)",
      "m-l": "var(--space-m-l)",
      "l-xl": "var(--space-l-xl)",
      "xl-2xl": "var(--space-xl-2xl)",
      "2xl-3xl": "var(--space-2xl-3xl)",
      "s-l": "var(--space-s-l)",
      "s-xl": "var(--space-s-xl)",
    },
    extend: {},
  },
  plugins: [],
};
