/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101B2A",
        "ink-soft": "#17263A",
        "ink-line": "#26384F",
        paper: "#F7F1E4",
        "paper-dim": "#EDE4D0",
        marigold: "#F2A93B",
        rose: "#E8604C",
        mist: "#EAF0F5",
        sage: "#6FA98B",
        periwinkle: "#7C93C7",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        postcard: "0 18px 40px -14px rgba(16, 27, 42, 0.45)",
      },
    },
  },
  plugins: [],
};
