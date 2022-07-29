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
      "4xl": "var(--space-4xl)",
      "3xs-2xs": "var(--space-3xs-2xs)",
      "2xs-xs": "var(--space-2xs-xs)",
      "xs-s": "var(--space-xs-s)",
      "s-m": "var(--space-s-m)",
      "m-l": "var(--space-m-l)",
      "l-xl": "var(--space-l-xl)",
      "xl-2xl": "var(--space-xl-2xl)",
      "2xl-3xl": "var(--space-2xl-3xl)",
      "2xs-m": "var(--space-2xs-m)",
      "s-l": "var(--space-s-l)",
      "s-xl": "var(--space-s-xl)",
      "l-3xl": "var(--space-l-3xl)",
    },
    colors: {
      white: "hsl(0deg 0% 100%)",
      grey: {
        100: "hsl(234deg 100% 97%)",
        300: "hsl(232deg 10% 56%)",
        400: "hsl(234deg 25% 52%)",
        800: "hsl(233deg 54% 16%)",
      },
      pink: {
        200: "hsl(341deg 100% 83%)",
        400: "hsl(341deg 92% 62%)",
        500: "hsl(322deg 87% 55%)",
      },
      blue: {
        500: "hsl(237deg 100% 64%)",
      },
      orange: {
        400: "hsl(13deg 100% 64%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
