import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Off-white text + muted gray
        ink: "#e6edf3",
        muted: "#8b98a9",
        // Restrained gold/amber accent for CTAs, links, highlights
        accent: {
          DEFAULT: "#e0b64d",
          bright: "#f2c14e",
          dim: "#a8842f",
        },
        // Cool teal used sparingly for "data / intel" cues
        intel: {
          DEFAULT: "#4fd1c5",
          dim: "#2f8f87",
        },
        // Near-black background with slightly lifted panels
        bg: {
          primary: "#0a0e14",
          secondary: "#0f1520",
          card: "#111725",
        },
        // Thin hairline border
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Source Sans 3'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "'SF Mono'",
          "Menlo",
          "Consolas",
          "'Liberation Mono'",
          "monospace",
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-glow": "pulseGlow 7s ease-in-out infinite",
        "marquee-l": "marqueeL 60s linear infinite",
        "marquee-r": "marqueeR 60s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.14" },
          "50%": { transform: "scale(1.12)", opacity: "0.26" },
        },
        marqueeL: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeR: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
} satisfies Config;
