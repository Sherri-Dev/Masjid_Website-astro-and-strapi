/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "0.5rem",
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
