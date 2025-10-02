/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./plasmic/**/*.{js,ts,jsx,tsx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "reef-900": "#0A1817",
        "reef-800": "#163634",
        "reef-700": "#2B6763",
        "reef-600": "#317159",
        "reef-500": "#37817C",
        "reef-300": "#89C2B6",
        "reef-200": "#CFEBE9",
        "reef-100": "#E9F6F5",
        "reef-50": "#EDF7F3",
        "reef-25": "#F9FCFB",
        text: "#363636",
        background: "#FFFFFF",
        primary: "#D5E4DF",
        secondary: "#F7B93B",
        accent: "#37827D",
        "accent-light": "#D8E4E0",
        "shad-background": "var(--background)",
        foreground: "var(--foreground)",
        "shad-primary": {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        "shad-secondary": {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        "shad-accent": {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      textShadow: {
        DEFAULT: "0px 2px 2px var(--tw-shadow-color)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        gooey: "gooey 5s linear infinite",
        morph: "morph 8s ease-in-out infinite",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        gooey: {
          "0%, 100%": {
            borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
            transform: "translate3d(0,0,0) rotateZ(0.01deg)",
          },
          "34%": {
            borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
            transform: "translate3d(0,5px,0) rotateZ(0.01deg)",
          },
          "50%": {
            opacity: ".89",
            transform: "translate3d(0,0,0) rotateZ(0.01deg)",
          },
          "67%": {
            borderRradius: "100% 60% 60% 100% / 100% 100% 60% 60%",
            transform: "translate3d(0,-3px,0) rotateZ(0.01deg)",
          },
        },
        morph: {
          "0%, 100%": {
            borderRadius: "40% 60% 70% 30% / 40% 40% 60% 50%",
          },
          "34%": {
            borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
          },
          "67%": {
            borderRradius: "100% 60% 60% 100% / 100% 100% 60% 60%",
          },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": { transform: "rotate(0deg)" },
          "30%, 60%": { transform: "rotate(-2deg)" },
          "40%, 70%": { transform: "rotate(2deg)" },
          "45%": { transform: "rotate(-4deg)" },
          "55%": { transform: "rotate(4deg)" },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
};
