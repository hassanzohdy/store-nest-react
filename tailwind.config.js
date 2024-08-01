/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "3xl": "1800px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "mainColor": "#253D4E",
        "rateColor": "#B6B6B6",
        "starColor": "#fcc43c",
        "priceNowColor": "#3BB77E",
        "priceOldColor": "#adadad",
      },
      screens: {
        'small-to-medium': { 'min': '486px', 'max': '767px' },
      },
      spacing: {
        "1/11": "9.0909090909%"
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.9rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
