module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
        "primary-background": "var(--background-primary)",
        "sec-background": "var(--background-sec)",
        "primary-text": "var(--color-text-primary)",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    backgroundColor: ["active"],
  },

  plugins: [require("daisyui")],
};
