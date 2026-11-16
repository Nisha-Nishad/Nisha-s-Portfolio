/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        wine: {
          DEFAULT: "var(--wine)",
          deep: "var(--wine-deep)",
        },
        rose: "var(--rose)",
        blush: "var(--blush)",
        cream: "var(--cream)",
        ink: "var(--ink)",
      },
      fontFamily: {
        sans: ["'DM Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Outfit'", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["'Parisienne'", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(74, 14, 28, 0.35)",
        card: "0 18px 45px -28px rgba(74, 14, 28, 0.45)",
      },
      keyframes: {
        "hero-fade-up": {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        techFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
      },
      animation: {
        "fade-up": "hero-fade-up 0.8s ease-out forwards",
        techFloat: "techFloat 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
