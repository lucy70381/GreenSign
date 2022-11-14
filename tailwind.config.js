/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: {
        DEFAULT: "#1C8B6A",
        light: "#35A483",
        dark: "#077854",
      },
      red: "CA0000",
      blue: "#0014C7",
      orange: "FFB800",
      white: "#FFFFFF",
      gray: "#B7B7B7",
      font: "#424242",
      black: "#000000",
      background: "#F0F0F0",
    },
    borderRadius: {
      12: "12px",
      14: "14px",
      16: "16px",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        "zoom-in": "url('/icons/zoom-in.svg')",
        "zoom-out": "url('/icons/zoom-out.svg')",
      },
    },
  },
  safelist: [{ pattern: /bg-./ }],
  plugins: [],
};
