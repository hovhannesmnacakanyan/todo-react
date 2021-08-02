const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xs': '149px',
      xs: '370px',
      ...defaultTheme.screens,
      '3xl': '1600px',
      '4xl': '1920px',
    },

    container: {
      center: true,
    },
    extend: {
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
      },
    },
  },
  variants: {
    extend: { opacity: ['active'], backgroundColor: ['disabled'] },
  },
  plugins: [],
};
