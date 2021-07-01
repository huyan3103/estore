module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        xs: "15rem",
      },
      spacing: {
        88: "22rem",
      },
      keyframes: {
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        opacity: "opacity 1.5s linear",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [],
}
