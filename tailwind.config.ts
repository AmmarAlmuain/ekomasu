import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wall: "#F7FAFC",
        primary: "#1C1C1C",
        secondary: "#8B96A5",
        third: "#0D6EFD",
        fourth: "#E5F1FF",
        ocard: "#F38332",
        bcard: "#55BDC3",
        fpink: '#FFE5BF'
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
