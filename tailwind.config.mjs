/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        vd: "url('/public/videos/headerBgVd.mp4')", // Replace with your image URL
      },
      animation: {
        "loop-bg": "loopBg 10s linear infinite",
      },
      keyframes: {
        loopBg: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "100% 100%",
          },
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Gloock: ["Gloock", "sans-serif"],
      },
      colors: {
        primaryTextColor: "#2A2523", // Define a custom text color
      },
      screens: {
        "3xl": "1650px", // Custom 3xl breakpoint
        "4xl": "2560px", // Custom 4xl breakpoint
      },
    },
  },
  plugins: [],
};
