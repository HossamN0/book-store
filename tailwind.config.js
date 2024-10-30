import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        swipe:{
          "0%":{transform:"translateX(0)"},
          "100%":{transform:"translateX(-100%)"},
        }
      },
      animation:{
        swipe:"swipe 20s ease-in-out infinite",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
