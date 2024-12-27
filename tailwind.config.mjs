/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Gloock: ["Gloock", "sans-serif"],
      },
      colors: {
        primaryTextColor: "#2A2523", // Define a custom text color
      },
    },
  },
  plugins: [],
};
