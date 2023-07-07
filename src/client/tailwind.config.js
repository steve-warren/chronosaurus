import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./index.html",
        "./**/*.{vue,js,ts,jsx,tsx}",
      ],
  theme: {
      extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
    },
  },
  plugins: [],
}

