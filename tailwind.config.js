module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#40E0D0',
        'navy-dark': '#1A2A4A',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      transitionDuration: {
        '6000': '6000ms',
      },
      animation: {
        'fadeIn': 'fadeIn 1s forwards',
      },
    },
  },
  plugins: [],
}
