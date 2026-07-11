import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Every token resolves through a CSS variable (space-separated RGB
        // channels) so the whole palette flips between the dark default and the
        // `:root.light` override — while keeping the `/opacity` modifiers used
        // all over the site working via <alpha-value>. Channel values live in
        // src/styles/global.css.
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        // Restrained gold/amber accent for CTAs, links, highlights
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          bright: "rgb(var(--accent-bright) / <alpha-value>)",
          dim: "rgb(var(--accent-dim) / <alpha-value>)",
        },
        // Cool teal used sparingly for "data / intel" cues
        intel: {
          DEFAULT: "rgb(var(--intel) / <alpha-value>)",
          dim: "rgb(var(--intel-dim) / <alpha-value>)",
        },
        // Near-black background with slightly lifted panels
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
          card: "rgb(var(--bg-card) / <alpha-value>)",
        },
        // Thin hairline border. Kept as a fully-baked rgba var (not the channel
        // pattern) so bare `border-line` stays at its low alpha instead of going
        // solid; the few places that need a stronger divider use an arbitrary
        // value built on --line-rgb. See global.css.
        line: "var(--line)",
        // Form-input surface: black wash in dark, white in light.
        field: "rgb(var(--field) / <alpha-value>)",
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
