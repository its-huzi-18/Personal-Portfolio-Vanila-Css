import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        customBg: "linear-gradient(rgba(0, 0, 0,.1), #0ef)",
        "custom-radial": "radial-gradient(circle, #18344c, #0b1621, #070f16)",
      },
      animation: {
        showText: "showText 0.5s 1s linear forwards",
        "slide-up": "slide-up 0.3s ease-in-out forwards",
        showBar: "showBar 1s cubic-bezier(1, 0, 0, 1) forwards",
      },
      keyframes: {
        showText: {
          "0%": {
            transform: "scaleX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: "1",
          },
        },
        skillBar: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
            height: "100%",
            backgroundColor: "#0ef",
            position: "absolute",
            borderRadius: "10px",
            width: "100%",
          },
        },
      },
      boxShadow: {
        custom: "0 0 10px #0ef",
      },
      iconShadow: {
        iconsShadow: "0 0 20px #0ef",
      },
      colors: {
        customColor: "#FFFFFF",
        mainBg: "#000000F4",
        secondBg: "#323946",
        hoverColor: "#0ef",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
