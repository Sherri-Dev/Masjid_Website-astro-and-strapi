/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        prColor: "#FF9822",
        scColor: "#5D2B00",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
